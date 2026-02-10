#!/usr/bin/env node

/**
 * Pre-Deployment Checklist Script
 * Checks if all necessary configurations are in place before deployment
 */

const fs = require('fs');
const path = require('path');

const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';

let hasErrors = false;
let hasWarnings = false;

console.log(`\n${CYAN}🔍 SLYMAX BUILDERS - Pre-Deployment Checklist${RESET}\n`);
console.log('='.repeat(50));

// Helper functions
function success(msg) {
  console.log(`${GREEN}✓${RESET} ${msg}`);
}

function error(msg) {
  console.log(`${RED}✗${RESET} ${msg}`);
  hasErrors = true;
}

function warning(msg) {
  console.log(`${YELLOW}⚠${RESET} ${msg}`);
  hasWarnings = true;
}

function info(msg) {
  console.log(`${CYAN}ℹ${RESET} ${msg}`);
}

// Check 1: .env file exists
console.log('\n📋 Environment Configuration:');
if (fs.existsSync('.env')) {
  success('.env file exists');
  
  // Check if it contains actual values
  const envContent = fs.readFileSync('.env', 'utf8');
  
  if (envContent.includes('your-project-id') || envContent.includes('your-anon-key-here')) {
    warning('.env still contains placeholder values - update before deploying!');
  } else {
    success('.env appears to be configured');
  }
  
  // Check for required variables
  const requiredVars = ['VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY'];
  const hasRequired = requiredVars.some(v => envContent.includes(v));
  
  if (hasRequired) {
    success('Supabase environment variables found');
  } else {
    info('No Supabase configuration (optional if not using backend)');
  }
} else {
  warning('.env file not found - contact form may not work');
  info('Run: cp .env.example .env');
}

// Check 2: index.html has real GA ID
console.log('\n📊 Analytics Configuration:');
const indexHtml = fs.readFileSync('index.html', 'utf8');

if (indexHtml.includes('G-XXXXXXXXXX')) {
  warning('Google Analytics still has placeholder ID (G-XXXXXXXXXX)');
  info('Update in index.html with your real GA4 Measurement ID');
} else if (indexHtml.includes('gtag/js?id=G-')) {
  success('Google Analytics appears configured');
} else {
  info('Google Analytics not configured (optional)');
}

// Check 3: Contact info updated
console.log('\n📞 Contact Information:');
const footerContent = fs.readFileSync('components/Footer.tsx', 'utf8');

if (footerContent.includes('kontakt@slymax.pl')) {
  warning('Using default email (kontakt@slymax.pl)');
  info('Update contact info in components/Footer.tsx if needed');
} else {
  success('Email appears to be customized');
}

if (footerContent.includes('+48 123 456 789')) {
  warning('Using placeholder phone number (+48 123 456 789)');
  info('Update phone number in components/Footer.tsx');
} else {
  success('Phone number appears to be customized');
}

// Check 4: Sitemap domain
console.log('\n🗺️  SEO Configuration:');
if (fs.existsSync('public/sitemap.xml')) {
  const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf8');
  
  if (sitemapContent.includes('slymax.pl')) {
    warning('Sitemap uses default domain (slymax.pl)');
    info('Update domain in public/sitemap.xml');
  } else {
    success('Sitemap appears to be customized');
  }
  
  success('sitemap.xml exists');
} else {
  error('sitemap.xml not found!');
}

if (fs.existsSync('public/robots.txt')) {
  success('robots.txt exists');
  
  const robotsContent = fs.readFileSync('public/robots.txt', 'utf8');
  if (robotsContent.includes('slymax.pl')) {
    warning('robots.txt uses default domain (slymax.pl)');
    info('Update domain in public/robots.txt');
  }
} else {
  error('robots.txt not found!');
}

// Check 5: Social media links
console.log('\n🌐 Social Media:');
if (footerContent.includes('instagram.com/slymaxbuilders')) {
  warning('Using default Instagram handle');
  info('Update social media links in components/Footer.tsx');
} else {
  success('Social media links appear customized');
}

// Check 6: Build configuration
console.log('\n🔧 Build Configuration:');
const deployConfigs = [
  { file: 'netlify.toml', name: 'Netlify' },
  { file: 'vercel.json', name: 'Vercel' },
  { file: '.htaccess', name: 'Apache/cPanel' }
];

deployConfigs.forEach(config => {
  if (fs.existsSync(config.file)) {
    success(`${config.name} config exists (${config.file})`);
  } else {
    info(`${config.name} config not found (${config.file}) - ok if not using this platform`);
  }
});

// Check 7: Dependencies
console.log('\n📦 Dependencies:');
if (fs.existsSync('node_modules')) {
  success('node_modules exists');
} else {
  error('node_modules not found - run: npm install');
}

if (fs.existsSync('package-lock.json')) {
  success('package-lock.json exists');
}

// Check 8: Required files
console.log('\n📄 Required Files:');
const requiredFiles = [
  'package.json',
  'vite.config.ts',
  'tsconfig.json',
  'index.html',
  'src/main.tsx',
  'App.tsx'
];

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    success(`${file} exists`);
  } else {
    error(`${file} not found!`);
  }
});

// Check 9: Favicon
console.log('\n🎨 Assets:');
const faviconFiles = ['favicon.svg', 'public/favicon.svg'];
const hasFavicon = faviconFiles.some(f => fs.existsSync(f));

if (hasFavicon) {
  success('Favicon found');
} else {
  warning('Favicon not found - add favicon.svg for better branding');
}

// Final Summary
console.log('\n' + '='.repeat(50));
console.log('\n📊 Summary:');

if (hasErrors) {
  console.log(`\n${RED}❌ Errors found! Please fix before deploying.${RESET}`);
  process.exit(1);
} else if (hasWarnings) {
  console.log(`\n${YELLOW}⚠️  Warnings detected. Review and update as needed.${RESET}`);
  console.log(`${GREEN}✓ No critical errors - safe to deploy with caution.${RESET}`);
} else {
  console.log(`\n${GREEN}✅ All checks passed! Ready for deployment.${RESET}`);
}

console.log('\n📚 Next steps:');
console.log('  1. Review warnings above');
console.log('  2. Update placeholder values');
console.log('  3. Run: npm run build');
console.log('  4. Deploy using: npm run deploy (or manual)');
console.log('  5. Test production site');
console.log('  6. Run Lighthouse audit');
console.log('');

process.exit(hasErrors ? 1 : 0);
