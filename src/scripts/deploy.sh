#!/bin/bash

# 🚀 SLYMAX BUILDERS - Deployment Script
# Automated deployment script for quick production deployment

set -e  # Exit on error

echo "🏗️  SLYMAX BUILDERS - Deployment Script"
echo "========================================"
echo ""

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Check if .env exists
if [ ! -f .env ]; then
    print_warning ".env file not found!"
    echo "Creating .env from .env.example..."
    cp .env.example .env
    print_warning "Please update .env with your actual credentials before deploying!"
    exit 1
fi

# Check Node version
echo "Checking Node.js version..."
NODE_VERSION=$(node -v)
print_success "Node.js version: $NODE_VERSION"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install
print_success "Dependencies installed"

# Run linter (if configured)
echo ""
echo "🔍 Running code checks..."
# npm run lint || print_warning "Linting failed (continuing anyway)"

# Build the project
echo ""
echo "🔨 Building project..."
npm run build
print_success "Build completed successfully"

# Check build size
if [ -d "dist" ]; then
    BUILD_SIZE=$(du -sh dist | cut -f1)
    print_success "Build size: $BUILD_SIZE"
else
    print_error "Build failed - dist directory not found!"
    exit 1
fi

echo ""
echo "📊 Deployment Options:"
echo "1. Deploy to Netlify"
echo "2. Deploy to Vercel"
echo "3. Deploy to FTP/cPanel"
echo "4. Just build (already done)"
echo ""

read -p "Choose option (1-4): " option

case $option in
    1)
        echo ""
        echo "🚀 Deploying to Netlify..."
        
        # Check if Netlify CLI is installed
        if ! command -v netlify &> /dev/null; then
            print_warning "Netlify CLI not installed. Installing..."
            npm install -g netlify-cli
        fi
        
        netlify deploy --prod
        print_success "Deployed to Netlify!"
        ;;
    2)
        echo ""
        echo "🚀 Deploying to Vercel..."
        
        # Check if Vercel CLI is installed
        if ! command -v vercel &> /dev/null; then
            print_warning "Vercel CLI not installed. Installing..."
            npm install -g vercel
        fi
        
        vercel --prod
        print_success "Deployed to Vercel!"
        ;;
    3)
        echo ""
        echo "📤 FTP Deployment"
        print_warning "Please upload the 'dist' folder contents to your server manually."
        print_warning "Don't forget to upload .htaccess file for Apache!"
        echo ""
        echo "Typical steps:"
        echo "1. Connect to your server via FTP/SFTP"
        echo "2. Navigate to public_html/ (or your web root)"
        echo "3. Upload all files from dist/"
        echo "4. Upload .htaccess file"
        echo "5. Set proper file permissions (755 for directories, 644 for files)"
        ;;
    4)
        print_success "Build completed. Files are in the 'dist' directory."
        ;;
    *)
        print_error "Invalid option!"
        exit 1
        ;;
esac

echo ""
echo "✅ Deployment process completed!"
echo ""
echo "📝 Post-deployment checklist:"
echo "  □ Test the website in production"
echo "  □ Check Google Analytics (if configured)"
echo "  □ Test contact form"
echo "  □ Verify SSL certificate"
echo "  □ Run Lighthouse audit"
echo "  □ Submit sitemap to Google Search Console"
echo ""
print_success "All done! 🎉"
