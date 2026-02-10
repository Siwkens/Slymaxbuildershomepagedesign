# 🗄️ Supabase Backend Setup - Complete Guide

## 📋 Przegląd

Ten przewodnik krok po kroku pomoże Ci skonfigurować backend Supabase dla strony SLYMAX BUILDERS.

---

## 🚀 Krok 1: Stwórz Projekt Supabase

1. **Wejdź na [supabase.com](https://supabase.com)**
2. Zarejestruj się / Zaloguj
3. Kliknij **"New Project"**
4. Wypełnij dane:
   - **Name:** `slymax-builders`
   - **Database Password:** (silne hasło - zapisz je!)
   - **Region:** `Central EU (Frankfurt)` (najbliżej Polski)
   - **Pricing Plan:** Free tier (wystarczy na start)
5. Kliknij **"Create new project"**
6. Poczekaj 2-3 minuty na setup

---

## 🗃️ Krok 2: Stwórz Tabele Bazy Danych

### Tabela 1: `contact_requests` (Formularze Kontaktowe)

Przejdź do **SQL Editor** w Supabase Dashboard i uruchom:

```sql
-- Create contact_requests table
CREATE TABLE IF NOT EXISTS public.contact_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT NOT NULL,
  budget TEXT,
  timeline TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_contact_requests_created_at ON public.contact_requests(created_at DESC);
CREATE INDEX idx_contact_requests_status ON public.contact_requests(status);
CREATE INDEX idx_contact_requests_email ON public.contact_requests(email);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to INSERT (submit forms)
CREATE POLICY "Allow public insert contact requests"
  ON public.contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Admin can read all (you'll need to authenticate as admin)
CREATE POLICY "Admin can read all contact requests"
  ON public.contact_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Admin can update status
CREATE POLICY "Admin can update contact requests"
  ON public.contact_requests
  FOR UPDATE
  TO authenticated
  USING (true);

-- Add trigger to update updated_at automatically
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contact_requests_updated_at
  BEFORE UPDATE ON public.contact_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

### Tabela 2: `price_estimates` (Kalkulacje Wyceny)

```sql
-- Create price_estimates table
CREATE TABLE IF NOT EXISTS public.price_estimates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  area NUMERIC NOT NULL,
  room_type TEXT NOT NULL,
  renovation_level TEXT NOT NULL,
  estimated_price NUMERIC NOT NULL,
  estimated_time TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index
CREATE INDEX idx_price_estimates_created_at ON public.price_estimates(created_at DESC);

-- Enable RLS
ALTER TABLE public.price_estimates ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to INSERT
CREATE POLICY "Allow public insert price estimates"
  ON public.price_estimates
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Admin can read all
CREATE POLICY "Admin can read all price estimates"
  ON public.price_estimates
  FOR SELECT
  TO authenticated
  USING (true);
```

### Tabela 3: `newsletter_subscribers` (Opcjonalne - Newsletter)

```sql
-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true
);

-- Create index
CREATE INDEX idx_newsletter_email ON public.newsletter_subscribers(email);

-- Enable RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to INSERT
CREATE POLICY "Allow public insert newsletter subscribers"
  ON public.newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

---

## 🔑 Krok 3: Pobierz API Keys

1. W Supabase Dashboard przejdź do **Settings → API**
2. Skopiuj:
   - **Project URL** (np. `https://abcdefgh.supabase.co`)
   - **anon public** key (zaczyna się od `eyJ...`)

---

## 🔧 Krok 4: Konfiguracja Environment Variables

1. **Stwórz plik `.env` w głównym katalogu projektu:**

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

2. **Zamień wartości:**
   - `your-project-id` → Twoje Project URL
   - `your-anon-key-here` → Twój anon public key

3. **Sprawdź `.gitignore`** - upewnij się, że `.env` jest w nim dodany!

---

## 📦 Krok 5: Zainstaluj Supabase Client

```bash
npm install @supabase/supabase-js
```

---

## ✅ Krok 6: Test Connection

Dodaj to do `ContactForm.tsx` lub `PriceEstimator.tsx`:

```typescript
import { submitContactForm, isSupabaseConfigured } from '../lib/supabase';

// Check if configured
console.log('Supabase configured:', isSupabaseConfigured());

// Test submit (in your form handler)
const result = await submitContactForm({
  name: 'Test User',
  email: 'test@example.com',
  phone: '+48123456789',
  project_type: 'Remont mieszkania',
  message: 'Test message'
});

console.log('Submit result:', result);
```

---

## 📧 Krok 7: Email Notifications (Opcjonalne)

### Opcja A: Supabase Database Webhooks → Zapier/Make

1. **W Supabase Dashboard:**
   - Database → Webhooks → Create webhook
   - **Events:** INSERT on `contact_requests`
   - **Webhook URL:** Twój webhook URL (z Zapier/Make/n8n)

2. **Stwórz automatyzację w Zapier/Make:**
   - Trigger: Webhook
   - Action: Send Email (Gmail/Outlook)
   - Template: "Nowe zapytanie od {name}, email: {email}"

### Opcja B: Supabase Edge Functions

```sql
-- Database Trigger Function (przykład)
CREATE OR REPLACE FUNCTION notify_new_contact()
RETURNS TRIGGER AS $$
BEGIN
  -- Tu możesz wywołać HTTP request do zewnętrznego API
  -- lub użyć Supabase Edge Function
  PERFORM pg_notify('new_contact', row_to_json(NEW)::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_new_contact
  AFTER INSERT ON public.contact_requests
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact();
```

### Opcja C: Email Service (Resend/SendGrid)

Dodaj do `.env`:

```bash
VITE_RESEND_API_KEY=re_xxxxx
VITE_NOTIFICATION_EMAIL=kontakt@slymax.pl
```

Stwórz `/src/lib/email.ts`:

```typescript
export async function sendContactNotification(data: any) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'notifications@slymax.pl',
      to: import.meta.env.VITE_NOTIFICATION_EMAIL,
      subject: `Nowe zapytanie od ${data.name}`,
      html: `
        <h2>Nowe zapytanie kontaktowe</h2>
        <p><strong>Imię i nazwisko:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Typ projektu:</strong> ${data.project_type}</p>
        <p><strong>Wiadomość:</strong><br>${data.message}</p>
      `,
    }),
  });
  
  return response.json();
}
```

---

## 🔒 Krok 8: Security Best Practices

### 1. Row Level Security (RLS)
✅ Już skonfigurowane w SQL powyżej

### 2. Rate Limiting
Dodaj do Supabase lub użyj Cloudflare:

```typescript
// Simple client-side rate limiting
const RATE_LIMIT_KEY = 'contact_form_last_submit';
const RATE_LIMIT_MS = 60000; // 1 minute

function checkRateLimit(): boolean {
  const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY);
  if (lastSubmit) {
    const timeSince = Date.now() - parseInt(lastSubmit);
    if (timeSince < RATE_LIMIT_MS) {
      return false; // Too soon
    }
  }
  return true;
}

function setRateLimit() {
  localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
}
```

### 3. Input Validation
✅ Już dodane w `ContactForm.tsx` (email regex, phone validation)

### 4. CORS Configuration
W Supabase Dashboard → Authentication → URL Configuration:
- **Site URL:** `https://twoja-domena.pl`
- **Redirect URLs:** `https://twoja-domena.pl/*`

---

## 📊 Krok 9: Admin Panel (View Data)

### Opcja 1: Supabase Dashboard
- Table Editor → `contact_requests`
- Możesz przeglądać, filtrować, edytować dane

### Opcja 2: Custom Admin Panel
Stwórz prostą stronę admin w projekcie:

```typescript
// /src/pages/Admin.tsx
import { useEffect, useState } from 'react';
import { getContactRequests, updateContactRequestStatus } from '../lib/supabase';

export function AdminPanel() {
  const [requests, setRequests] = useState([]);
  
  useEffect(() => {
    loadRequests();
  }, []);
  
  async function loadRequests() {
    const { data } = await getContactRequests();
    setRequests(data || []);
  }
  
  async function updateStatus(id: string, status: string) {
    await updateContactRequestStatus(id, status);
    loadRequests();
  }
  
  return (
    <div className="p-8">
      <h1>Zapytania Kontaktowe</h1>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Imię</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Projekt</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(req => (
            <tr key={req.id}>
              <td>{new Date(req.created_at).toLocaleDateString()}</td>
              <td>{req.name}</td>
              <td>{req.email}</td>
              <td>{req.phone}</td>
              <td>{req.project_type}</td>
              <td>
                <select 
                  value={req.status} 
                  onChange={(e) => updateStatus(req.id, e.target.value)}
                >
                  <option value="new">Nowe</option>
                  <option value="contacted">Skontaktowano</option>
                  <option value="closed">Zamknięte</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

---

## 🧪 Krok 10: Testing

### Test 1: Sprawdź połączenie

```bash
# W konsoli przeglądarki (po deploy lub npm run dev)
# Otwórz DevTools (F12) → Console
```

Wypełnij formularz kontaktowy i sprawdź:
1. Console logs (czy są błędy?)
2. Supabase Dashboard → Table Editor → `contact_requests` (czy pojawił się nowy rekord?)
3. Network tab → czy request do Supabase się powiódł?

### Test 2: Sprawdź email notifications

1. Wypełnij formularz
2. Sprawdź czy email przyszedł (jeśli skonfigurowałeś webhooks)

---

## 🎯 Deployment Considerations

### Environment Variables w Netlify/Vercel

**Netlify:**
1. Site settings → Environment variables
2. Dodaj: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`

**Vercel:**
1. Project Settings → Environment Variables
2. Dodaj te same zmienne

### Security Headers

Już skonfigurowane w `netlify.toml`, `vercel.json`, `.htaccess`

---

## 📈 Monitoring & Analytics

### Supabase Dashboard
- Database → Logs (SQL queries)
- Database → API (request stats)

### Google Analytics Events

Dodaj tracking dla form submissions:

```typescript
// W ContactForm.tsx po successful submit
if (window.gtag) {
  window.gtag('event', 'form_submission', {
    event_category: 'Contact',
    event_label: 'Contact Form',
    value: 1
  });
}
```

---

## 🆘 Troubleshooting

### Problem: "Failed to fetch"
- ✅ Sprawdź czy `.env` jest poprawny
- ✅ Sprawdź czy Supabase project działa
- ✅ Sprawdź CORS settings w Supabase

### Problem: "Insert permission denied"
- ✅ Sprawdź RLS policies (czy policy dla `anon` istnieje)
- ✅ Sprawdź czy tabela istnieje

### Problem: Email notifications nie działają
- ✅ Sprawdź webhook URL
- ✅ Sprawdź logs w Supabase (Database → Webhooks → Logs)
- ✅ Sprawdź czy webhook service (Zapier/Make) jest aktywny

---

## 🎉 Ready!

Po wykonaniu wszystkich kroków powinieneś mieć:

- ✅ Działającą bazę danych Supabase
- ✅ 3 tabele (contact_requests, price_estimates, newsletter_subscribers)
- ✅ Bezpieczne RLS policies
- ✅ Working contact form z backendem
- ✅ Email notifications (opcjonalne)
- ✅ Admin panel do przeglądania zapytań

---

## 📚 Dodatkowe Zasoby

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase RLS Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase Webhooks](https://supabase.com/docs/guides/database/webhooks)
- [Zapier Webhooks](https://zapier.com/apps/webhook/integrations)

---

**Status:** 📋 Ready to implement  
**Czas setup:** ~15-30 minut  
**Koszt:** $0 (Free tier wystarczy na start)
