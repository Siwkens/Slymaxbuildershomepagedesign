# SLYMAX BUILDERS - Premium Website

Ultra-premium strona główna dla firmy remontowej "SLYMAX BUILDERS" w estetyce 2025+, opartą na ciepłym minimalizmie z paletą kolorów obejmującą złoto (#D6B46C), ciemny węgiel (#0A0F14) i ciepłą biel (#F5F5F0).

## 🎨 Design System

- **Paleta kolorów:**
  - Gold: #D6B46C (akcent premium)
  - Charcoal: #0A0F14 (tło główne)
  - Warm White: #F5F5F0 (tekst)

- **Typografia:**
  - Font: Inter
  - Podejście: Light font weights, tracking rozstrzelony
  - Hierarchia: Fluid typography responsive

- **Animacje:**
  - Motion React (Framer Motion)
  - Scroll-triggered animations
  - Parallax effects
  - Mikrointerakcje

## 🚀 Funkcjonalności

### Sekcje treściowe:
- ✅ Hero z fullscreen video/image
- ✅ Services Grid z hover effects
- ✅ **Portfolio** - interaktywna galeria z filtrami i modal view
- ✅ **Material Showcase** - 3D prezentacja materiałów premium
- ✅ **Process Timeline** - scroll-animated proces pracy
- ✅ **Team** - prezentacja zespołu z certyfikatami
- ✅ Before/After slider
- ✅ Testimonials z animacjami
- ✅ **FAQ** - akordeon z pytaniami
- ✅ Footer z kompletnymi informacjami

### Interaktywne moduły:
- ✅ **Price Estimator** - wieloetapowy konfigurator wyceny
- ✅ **Virtual Tour** - 360° tour z hotspotami
- ✅ Responsywna nawigacja z mobile menu
- ✅ Scroll progress indicator
- ✅ Back to top button
- ✅ Section navigation dots

### Komponenty utility:
- AnimatedCounter - liczniki z animacjami
- ScrollAnimations - parallax, fade, scale, reveal
- InteractiveElements - magnetic buttons, hover effects, tilt cards
- UIComponents - tooltips, badges, notifications, progress bars

## 📦 Struktura Projektu

```
/
├── App.tsx                          # Main application
├── components/
│   ├── Navbar.tsx                   # Nawigacja z mobile menu
│   ├── Hero.tsx                     # Hero section
│   ├── Services.tsx                 # Siatka usług
│   ├── Portfolio.tsx                # 🆕 Galeria projektów
│   ├── MaterialShowcase.tsx         # 🆕 3D showcase materiałów
│   ├── ProcessTimeline.tsx          # 🆕 Timeline procesu
│   ├── Team.tsx                     # 🆕 Zespół i certyfikaty
│   ├── BeforeAfter.tsx              # Slider przed/po
│   ├── Testimonials.tsx             # Opinie klientów
│   ├── PriceEstimator.tsx           # 🆕 Konfigurator wyceny
│   ├── VirtualTour.tsx              # 🆕 Virtual tour 360°
│   ├── FAQ.tsx                      # 🆕 FAQ z akordeonem
│   ├── Footer.tsx                   # Stopka
│   ├── ScrollUtilities.tsx          # 🆕 Scroll progress, back to top
│   ├── AnimatedCounter.tsx          # 🆕 Liczniki animowane
│   ├── ScrollAnimations.tsx         # 🆕 Zaawansowane animacje scroll
│   ├── InteractiveElements.tsx      # 🆕 Elementy interaktywne
│   └── UIComponents.tsx             # 🆕 Komponenty UI
└── styles/
    └── globals.css                  # Style globalne + custom utilities

```

## 🛠️ Technologie

- **React** - Framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

## 📱 Responsywność

Strona jest w pełni responsywna:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Optymalizacje

- Lazy loading dla obrazków
- Optimized scroll animations
- Reduced motion support dla accessibility
- Custom scrollbar styling
- Focus visible states dla keyboard navigation
- Print styles

## 🚀 Build Produkcyjny

### Opcja 1: Statyczny Export HTML

Ten projekt można wyeksportować jako statyczną stronę HTML/CSS/JS:

```bash
# Build produkcyjny
npm run build

# Folder dist/ będzie zawierał:
# - index.html
# - assets/ (CSS, JS, images)
```

### Opcja 2: Hosting Statyczny

**Netlify / Vercel (Recommended):**
1. Podłącz repo GitHub
2. Auto-deploy przy push
3. Bezpłatny SSL
4. CDN globalny

**GitHub Pages:**
```bash
npm run build
# Upload contentu z dist/ do gh-pages branch
```

**Własny Hosting / VPS:**
```bash
# 1. Build
npm run build

# 2. Upload dist/ przez FTP/SFTP do public_html/

# 3. Konfiguracja Apache (.htaccess):
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# 4. Lub Nginx (nginx.conf):
location / {
  try_files $uri $uri/ /index.html;
}
```

### Opcja 3: Docker Container

```dockerfile
# Dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔧 Konfiguracja dla Produkcji

### Environment Variables (opcjonalne)

Jeśli będziesz integrować z backend/API:

```env
VITE_API_URL=https://api.slymax.pl
VITE_GOOGLE_MAPS_KEY=your_key_here
VITE_ANALYTICS_ID=your_analytics_id
```

### Performance Optimization

```javascript
// vite.config.ts
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'motion': ['motion/react'],
          'vendor': ['react', 'react-dom']
        }
      }
    }
  }
}
```

## 📊 Analytics (Opcjonalne)

Dodaj Google Analytics w `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security Headers (Rekomendowane)

Dla własnego hostingu, dodaj security headers:

```apache
# .htaccess
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"
```

## 🎨 Customizacja

### Zmiana kolorów:
Edytuj `/styles/globals.css`:
```css
@theme {
  --color-gold: #TWOJ_KOLOR;
  --color-charcoal: #TWOJ_KOLOR;
  --color-warm-white: #TWOJ_KOLOR;
}
```

### Zmiana treści:
Każdy komponent ma swoje dane zdefiniowane wewnątrz (arrays of objects).
Możesz je łatwo zastąpić własnymi danymi.

## 📞 Kontakt & Support

**SLYMAX BUILDERS**
- Website: [w trakcie wdrożenia]
- Email: kontakt@slymax.pl
- Tel: +48 XXX XXX XXX

## 📄 Licencja

Proprietary - All rights reserved © 2025 SLYMAX BUILDERS

---

**Wersja:** 2.0.0  
**Data:** 2025  
**Status:** Production Ready ✅
