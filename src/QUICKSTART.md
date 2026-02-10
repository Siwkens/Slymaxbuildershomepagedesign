# 🚀 Quick Start Guide - SLYMAX BUILDERS

Szybki start dla developerów i klientów.

---

## ⚡ Dla Developerów

### Setup (5 minut)

```bash
# 1. Clone repo (jeśli używasz Git)
git clone [YOUR_REPO_URL]
cd slymax-builders

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Otwórz w przeglądarce
# http://localhost:5173
```

### Dostępne Komendy

```bash
# Development
npm run dev          # Start dev server (hot reload)

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Check code quality
npm run type-check   # TypeScript validation
```

---

## 📁 Szybka Nawigacja

### Główne Pliki do Edycji

| Plik | Opis | Co edytować |
|------|------|-------------|
| `/App.tsx` | Main app | Kolejność sekcji |
| `/components/Hero.tsx` | Hero section | Tytuł, tekst główny |
| `/components/Portfolio.tsx` | Galeria projektów | Projekty, zdjęcia |
| `/components/Team.tsx` | Zespół | Członkowie, statystyki |
| `/components/PriceEstimator.tsx` | Wycena | Opcje, ceny |
| `/components/FAQ.tsx` | FAQ | Pytania, odpowiedzi |
| `/components/Footer.tsx` | Stopka | Kontakt, linki |
| `/styles/globals.css` | Style globalne | Kolory, fonty |

### Zmiana Kolorów (2 minuty)

Edytuj `/styles/globals.css`:

```css
@theme {
  --color-gold: #D6B46C;        /* Twój złoty kolor */
  --color-charcoal: #0A0F14;    /* Twój ciemny kolor */
  --color-warm-white: #F5F5F0;  /* Twój jasny kolor */
}
```

### Zmiana Treści Projektu Portfolio

Edytuj `/components/Portfolio.tsx`, znajdź `projects` array:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'TWÓJ TYTUŁ PROJEKTU',
    category: 'residential', // lub 'commercial'
    location: 'TWOJA LOKALIZACJA',
    year: '2025',
    image: 'luxury home interior', // opis dla obrazka
    description: 'TWÓJ OPIS PROJEKTU',
    details: {
      area: '250 m²',
      duration: '6 miesięcy',
      budget: 'Premium'
    }
  },
  // ... więcej projektów
];
```

### Zmiana Członków Zespołu

Edytuj `/components/Team.tsx`:

```typescript
const teamMembers: TeamMember[] = [
  {
    name: 'IMIĘ NAZWISKO',
    role: 'ROLA',
    image: 'professional portrait', // opis dla obrazka
    specialty: 'SPECJALIZACJA'
  },
  // ... więcej członków
];
```

### Zmiana FAQ

Edytuj `/components/FAQ.tsx`:

```typescript
const faqs: FAQItem[] = [
  {
    question: 'TWOJE PYTANIE?',
    answer: 'TWOJA ODPOWIEDŹ'
  },
  // ... więcej pytań
];
```

---

## 🎨 Customizacja Zaawansowana

### Dodanie Nowej Sekcji

1. Stwórz nowy komponent w `/components/`:
```tsx
// /components/NewSection.tsx
export function NewSection() {
  return (
    <section id="new-section" className="py-32 px-6 bg-charcoal">
      <h2>New Section</h2>
    </section>
  );
}
```

2. Dodaj do `/App.tsx`:
```tsx
import { NewSection } from './components/NewSection';

// W return():
<NewSection />
```

3. Dodaj do nawigacji w `/components/Navbar.tsx`:
```tsx
{ label: 'New Section', href: '#new-section' }
```

### Zmiana Animacji

Wszystkie animacje są w komponentach. Przykład w `/components/Portfolio.tsx`:

```tsx
// Zmień duration (czas trwania)
transition={{ duration: 0.8 }}  // Było 0.8, możesz zmienić

// Zmień delay (opóźnienie)
transition={{ delay: 0.2 }}     // Było 0.2, możesz zmienić

// Wyłącz animację
// Usuń lub zakomentuj motion.div i użyj zwykłego div
```

---

## 🚀 Deployment (10 minut)

### Opcja 1: Netlify (Najszybsza)

1. Zarejestruj się na [netlify.com](https://netlify.com)
2. Kliknij "Add new site" → "Import existing project"
3. Połącz z Git lub drag & drop folder `dist/`
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

### Opcja 2: Własny Hosting

```bash
# 1. Build
npm run build

# 2. Upload folder dist/ przez FTP do:
# public_html/ lub www/

# 3. Gotowe!
```

Szczegółowe instrukcje → Zobacz `DEPLOYMENT.md`

---

## 🆘 Najczęstsze Problemy

### Problem: `npm install` nie działa
**Rozwiązanie:**
```bash
# Usuń i reinstaluj
rm -rf node_modules package-lock.json
npm install
```

### Problem: Strona nie ładuje się po deploy
**Rozwiązanie:**
- Sprawdź czy `index.html` jest w głównym katalogu
- Sprawdź ścieżki do assetów (relative vs absolute)
- Dodaj `.htaccess` lub `nginx.conf` (zobacz DEPLOYMENT.md)

### Problem: Obrazki nie ładują się
**Rozwiązanie:**
- Upewnij się że używasz `ImageWithFallback` component
- Sprawdź query string w `unsplash_tool`
- Sprawdź connection do internetu (obrazy z Unsplash)

### Problem: Wolne ładowanie
**Rozwiązanie:**
```bash
# Optymalizuj build
npm run build -- --mode production

# Check bundle size
npm run build -- --analyze
```

---

## 📚 Dokumentacja

- **README.md** - Pełny przewodnik projektu
- **FEATURES.md** - Lista wszystkich funkcjonalności
- **DEPLOYMENT.md** - Szczegółowe instrukcje deploy
- **CHANGELOG.md** - Historia zmian

---

## 💡 Tips & Tricks

### Najlepsze Praktyki

1. **Zawsze testuj po zmianach:**
   ```bash
   npm run dev  # Sprawdź lokalnie
   ```

2. **Build przed deploy:**
   ```bash
   npm run build
   npm run preview  # Test production build
   ```

3. **Sprawdź responsive:**
   - Chrome DevTools → Device Toolbar (Cmd+Shift+M)
   - Test na iPhone, iPad, Desktop

4. **Performance check:**
   - Lighthouse w Chrome DevTools
   - Target: Score > 90

### Shortcuts

```bash
# Clean start
rm -rf node_modules dist && npm install && npm run dev

# Quick build & preview
npm run build && npm run preview

# Check all
npm run lint && npm run type-check && npm run build
```

---

## 📞 Potrzebujesz Pomocy?

### Kontakt
- 📧 Email: dev@slymax.pl
- 📖 Docs: README.md
- 🐛 Issues: [GitHub]

### Resources
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vite Docs](https://vitejs.dev)

---

## ✅ Checklist Przed Go-Live

- [ ] Zmieniono wszystkie placeholder texts
- [ ] Dodano prawdziwe dane projektów
- [ ] Zaktualizowano kontakt (email, telefon)
- [ ] Sprawdzono responsive na mobile
- [ ] Przetestowano wszystkie linki
- [ ] Sprawdzono formularze
- [ ] Lighthouse score > 90
- [ ] Dodano Google Analytics
- [ ] Skonfigurowano SSL
- [ ] Backup plików

---

**Ready to go! 🚀**

Powodzenia z projektem SLYMAX BUILDERS!
