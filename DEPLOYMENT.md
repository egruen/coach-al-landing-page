# Deployment Checklist

## Pre-Deployment

- [ ] Supabase project created
- [ ] Waitlist table created (see README.md for SQL)
- [ ] Environment variables configured in Vercel:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `SUPABASE_SERVICE_ROLE_KEY`
  - `NEXT_PUBLIC_SITE_URL` (optional)
- [ ] Test build passes: `npm run build`
- [ ] Test locally with real Supabase credentials

## Deploy to Vercel

### Method 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login
vercel login

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

### Method 2: GitHub Integration

1. Push code to GitHub repository
2. Go to https://vercel.com/new
3. Import your repository
4. Configure environment variables
5. Deploy

## Post-Deployment

- [ ] Visit the deployed URL
- [ ] Test waitlist form submission
- [ ] Verify email appears in Supabase table
- [ ] Check all pages load: `/`, `/privacy`, `/imprint`
- [ ] Test on mobile device
- [ ] Verify dark mode works
- [ ] Check Vercel Analytics is tracking (may take 24h to show data)
- [ ] Test social sharing (Open Graph preview)
- [ ] Verify robots.txt and sitemap.xml are accessible

## Custom Domain Setup (Optional)

1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` environment variable
5. Redeploy

## Monitoring

- **Vercel Dashboard:** Check deployment status, function logs, analytics
- **Supabase Dashboard:** Monitor waitlist entries, database performance
- **Uptime Monitor:** Consider setting up UptimeRobot or similar

## Rollback

If something goes wrong:

```bash
# List deployments
vercel ls

# Promote a previous deployment
vercel promote <deployment-url>
```

Or use Vercel Dashboard → Deployments → "Promote to Production"
