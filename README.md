# Coach Al Landing Page

Pre-launch landing page for Coach Al with waitlist functionality.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **Analytics:** Vercel Analytics (cookie-free)
- **Hosting:** Vercel

## Features

- ✅ Responsive single-page landing with Hero, Problem, How It Works, Differentiators, FAQ, and CTA sections
- ✅ Email-only waitlist form with privacy consent checkbox
- ✅ Legal pages: /imprint and /privacy
- ✅ SEO: Title, meta description, Open Graph, Twitter Cards
- ✅ Vercel Analytics (GDPR-compliant, no cookies)
- ✅ Mobile-first responsive design
- ✅ Dark mode support

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the database to initialize

#### Create the Waitlist Table

Run this SQL in the Supabase SQL Editor:

```sql
-- Create waitlist table
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from API (service role)
CREATE POLICY "Allow service role insert" ON waitlist
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Create policy to allow service role to read (for duplicate check)
CREATE POLICY "Allow service role select" ON waitlist
  FOR SELECT
  TO service_role
  USING (true);
```

#### Get Your Credentials
1. Go to Project Settings → API
2. Copy your **Project URL** (e.g., `https://xxxxx.supabase.co`)
3. Copy your **service_role key** (under "Project API keys" → "service_role")

⚠️ **Important:** Use the `service_role` key, NOT the `anon` key. The service role key bypasses RLS and should only be used server-side.

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
6. Click "Deploy"

### Environment Variables in Vercel

Make sure to add these in Vercel Dashboard → Project Settings → Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL` → Your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` → Your Supabase service role key

## Testing the Waitlist

1. Fill out the email form on the homepage
2. Check the consent checkbox
3. Click "Get Early Access" or "Join Waitlist"
4. Verify the confirmation message: "You're in. We'll contact you when early access opens."
5. Check your Supabase dashboard → Table Editor → waitlist to see the entry

## Project Structure

```
landing-page/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # Waitlist API endpoint
│   ├── imprint/
│   │   └── page.tsx              # Legal imprint page
│   ├── privacy/
│   │   └── page.tsx              # Privacy policy page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with SEO
│   └── page.tsx                  # Landing page
├── components/
│   ├── Footer.tsx                # Footer with legal links
│   ├── Header.tsx                # Navigation header
│   └── WaitlistForm.tsx          # Waitlist form component
├── .env.example                  # Environment template
├── .env.local                    # Your local environment (gitignored)
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json                   # Vercel deployment config
```

## SEO Configuration

The site includes:
- Title and meta description
- Open Graph tags for social sharing
- Twitter Card tags
- Robots.txt directives
- Mobile viewport optimization

All SEO metadata is configured in `app/layout.tsx`.

## Analytics

Vercel Analytics is enabled via `@vercel/analytics/react` and automatically tracks:
- Page views
- User sessions
- Web Vitals (performance metrics)

No cookies are used, making it GDPR-compliant without a consent banner.

## Customization

### Update Copy
Edit the content in `app/page.tsx` to match your specific messaging.

### Change Colors/Styles
The project uses Tailwind CSS. Modify:
- `tailwind.config.ts` for theme customization
- `app/globals.css` for global styles
- Component classes for specific styling

### Add More Sections
Add new sections in `app/page.tsx` following the existing pattern.

## Troubleshooting

### "Missing Supabase environment variables" Error
- Verify `.env.local` exists with correct variables
- Restart the dev server after adding env vars

### Waitlist Submissions Failing
- Check Supabase table exists and RLS policies are correct
- Verify you're using the `service_role` key, not `anon` key
- Check browser console for error details
- Check Vercel function logs if deployed

### Duplicate Email Error Not Showing
- This is expected behavior - the API returns a 409 but the UI shows a generic error
- To expose duplicate errors to users, modify the error handling in `WaitlistForm.tsx`

## Production Checklist

Before launching:
- [ ] Add environment variables to Vercel
- [ ] Test waitlist form submission
- [ ] Verify legal pages load correctly
- [ ] Test on mobile devices
- [ ] Check dark mode appearance
- [ ] Verify Vercel Analytics is tracking
- [ ] Set up custom domain (optional)
- [ ] Update Open Graph image (optional)
- [ ] Test all links in footer

## License

Proprietary - Coach Al / greenux

## Support

For issues or questions, contact: eduard.gruen@greenux.de
