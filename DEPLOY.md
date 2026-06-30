# Deploying this site so anyone can visit it

You don't need Docker, Kubernetes, or a server for this — Next.js sites like this one deploy
for free on **Vercel** (the company that makes Next.js) in about 5 minutes. You only need
`git`, which you already know.

## Step 1 — Push the project to GitHub

If this folder isn't a git repo yet:

```bash
cd "portfolio code"
git init
git add .
git commit -m "Initial portfolio"
```

Create a new **empty** repository on [github.com/new](https://github.com/new) (don't add a
README/license there — keep it empty), then connect and push:

```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

## Step 2 — Import it on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/log in with your **GitHub account**.
2. Click **Add New → Project**.
3. Select the repo you just pushed.
4. Vercel auto-detects Next.js — leave all settings as default (no environment variables
   are needed for this project).
5. Click **Deploy**.

That's it. In under a minute you'll get a live URL like
`https://your-repo-name.vercel.app` that anyone in the world can open.

## Step 3 — Updating the site later

Every time you `git push` to the `main` branch, Vercel automatically rebuilds and
redeploys — no extra steps:

```bash
git add .
git commit -m "Update project details"
git push
```

## Step 4 (optional) — Use your own domain

If you buy a domain (Namecheap, GoDaddy, etc.), go to your project on Vercel →
**Settings → Domains** → add your domain, then add the DNS records Vercel shows you at
your domain registrar. Vercel handles HTTPS automatically.

## Before your first deploy, don't forget

- Drop your real `resume.pdf` into `public/`
- Update `lib/constants.ts` with your real GitHub URL and email
- Update the placeholder text in `components/Contact.tsx` to match

## Alternative: Netlify

If you'd rather not use Vercel, [netlify.com](https://netlify.com) works the same way —
sign in with GitHub, "Add new site → Import an existing project", pick the repo, and it
auto-detects the Next.js build settings.
