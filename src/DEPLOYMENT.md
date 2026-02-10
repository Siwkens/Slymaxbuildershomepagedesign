# 🚀 DEPLOYMENT CHECKLIST - SLYMAX BUILDERS

## Pre-Deployment

### ✅ Kod i Funkcjonalności
- [ ] Wszystkie komponenty działają poprawnie
- [ ] Brak błędów w konsoli przeglądarki
- [ ] Testy responsywności (mobile, tablet, desktop)
- [ ] Wszystkie linki działają
- [ ] Formularze są walidowane
- [ ] Obrazki się ładują poprawnie

### ✅ Performance
- [ ] Lighthouse Score > 90
- [ ] Obrazki zoptymalizowane (WebP, lazy loading)
- [ ] Bundle size < 500KB (gzipped)
- [ ] Time to Interactive < 3s
- [ ] First Contentful Paint < 1.5s

### ✅ SEO
- [ ] Meta tags w `<head>` (title, description)
- [ ] Open Graph tags dla social media
- [ ] Favicon dodany
- [ ] robots.txt skonfigurowany
- [ ] sitemap.xml wygenerowany
- [ ] Alt tags dla wszystkich obrazków
- [ ] Semantic HTML (h1, h2, nav, section, etc.)

### ✅ Accessibility
- [ ] Keyboard navigation działa
- [ ] Focus states widoczne
- [ ] ARIA labels gdzie potrzebne
- [ ] Contrast ratio > 4.5:1
- [ ] Screen reader friendly
- [ ] Reduced motion support

### ✅ Bezpieczeństwo
- [ ] HTTPS włączony
- [ ] Security headers skonfigurowane
- [ ] Environment variables zabezpieczone
- [ ] Brak wrażliwych danych w kodzie
- [ ] CORS odpowiednio skonfigurowany

---

## Deployment Steps

### Krok 1: Przygotowanie

```bash
# 1. Zaktualizuj zależności
npm update

# 2. Uruchom linter
npm run lint

# 3. Test build lokalnie
npm run build
npm run preview

# 4. Sprawdź czy wszystko działa
# Otwórz http://localhost:4173
```

### Krok 2: Build Produkcyjny

```bash
# Clean build
rm -rf dist/
npm run build

# Sprawdź rozmiar bundle
npm run build -- --mode production
```

### Krok 3: Deploy

#### **Opcja A: Netlify**

1. Zaloguj się do [netlify.com](https://netlify.com)
2. "New site from Git"
3. Wybierz repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

Lub CLI:
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

#### **Opcja B: Vercel**

```bash
npm install -g vercel
vercel login
vercel --prod
```

#### **Opcja C: Własny Hosting (cPanel/FTP)**

```bash
# 1. Build
npm run build

# 2. Upload przez FTP:
# - Połącz się z serwerem FTP
# - Przejdź do public_html/ lub www/
# - Upload całej zawartości folderu dist/

# 3. Konfiguracja .htaccess (dla Apache):
```

Utwórz plik `.htaccess` w katalogu głównym:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Redirect to HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # SPA routing
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
```

#### **Opcja D: VPS (Ubuntu/Nginx)**

```bash
# 1. Połącz się z VPS
ssh user@your-server-ip

# 2. Zainstaluj Nginx
sudo apt update
sudo apt install nginx

# 3. Upload buildu
scp -r dist/* user@your-server-ip:/var/www/slymax/

# 4. Konfiguracja Nginx
sudo nano /etc/nginx/sites-available/slymax
```

Nginx config:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name slymax.pl www.slymax.pl;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name slymax.pl www.slymax.pl;
    
    # SSL certificates (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/slymax.pl/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/slymax.pl/privkey.pem;
    
    root /var/www/slymax;
    index index.html;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1000;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
    
    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
# 5. Aktywuj konfigurację
sudo ln -s /etc/nginx/sites-available/slymax /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# 6. SSL z Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d slymax.pl -d www.slymax.pl
```

---

## Post-Deployment

### ✅ Weryfikacja

- [ ] Strona ładuje się na produkcji
- [ ] Wszystkie sekcje działają
- [ ] Formularze wysyłają dane
- [ ] HTTPS działa (zielona kłódka)
- [ ] Responsywność na urządzeniach mobilnych
- [ ] Prędkość ładowania < 3s

### ✅ Testing

```bash
# Lighthouse audit
npm install -g lighthouse
lighthouse https://slymax.pl --view

# Sprawdź wszystkie urządzenia
# - iPhone (Safari)
# - Android (Chrome)
# - Desktop (Chrome, Firefox, Safari, Edge)
```

### ✅ Monitoring

#### Google Analytics
```html
<!-- Dodaj do index.html przed </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Google Search Console
1. Zarejestruj się: [search.google.com/search-console](https://search.google.com/search-console)
2. Dodaj domenę
3. Zweryfikuj przez DNS lub plik HTML
4. Submit sitemap.xml

### ✅ Maintenance

- [ ] Backup bazy danych (jeśli używasz)
- [ ] Backup plików statycznych
- [ ] Monitoring uptime (UptimeRobot.com)
- [ ] Aktualizacje dependencies co miesiąc
- [ ] Security patches

---

## 🔥 Quick Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check

# Lint
npm run lint

# Update all packages
npm update

# Analyze bundle size
npm run build -- --analyze
```

---

## 🆘 Troubleshooting

### Problem: Strona nie ładuje się po deploy
**Rozwiązanie:**
- Sprawdź czy index.html jest w katalogu głównym
- Sprawdź ścieżki do assetów (relative vs absolute)
- Sprawdź konfigurację serwera (.htaccess lub nginx.conf)

### Problem: 404 przy odświeżeniu strony
**Rozwiązanie:**
- To problem SPA routingu
- Dodaj rewrite rules (patrz wyżej)

### Problem: Obrazki nie ładują się
**Rozwiązanie:**
- Sprawdź ścieżki importów
- Upewnij się że folder assets/ został uploadowany
- Sprawdź CORS headers

### Problem: Wolne ładowanie
**Rozwiązanie:**
```bash
# Optymalizuj obrazki
npm install -g sharp-cli
sharp -i input.jpg -o output.webp

# Enable compression
# Dodaj gzip w nginx.conf lub .htaccess
```

---

## 📞 Support

Jeśli potrzebujesz pomocy:
1. Sprawdź logi serwera
2. Użyj Chrome DevTools (Console, Network tab)
3. Lighthouse audit dla performance
4. Kontakt: dev@slymax.pl

---

**Status:** Ready for Production 🚀  
**Ostatnia aktualizacja:** 2025
