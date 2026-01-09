# Deployment Guide

## Pushing to GitHub

Your changes are already committed. To push to GitHub, you need to authenticate first.

### Option 1: Using Personal Access Token (Recommended)

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with `repo` permissions
3. Run:
```bash
git push origin master
```
When prompted for username, enter your GitHub username
When prompted for password, paste your personal access token

### Option 2: Using SSH (Alternative)

1. Generate SSH key if you don't have one:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

2. Add SSH key to GitHub:
```bash
cat ~/.ssh/id_ed25519.pub
```
Copy the output and add it to GitHub → Settings → SSH and GPG keys

3. Change remote URL:
```bash
git remote set-url origin git@github.com:NOVASWAY/GreatnBlessed.git
```

4. Push:
```bash
git push origin master
```

## Deploying to Netlify

### Method 1: Connect via GitHub (Recommended)

1. **Go to Netlify**: Visit [netlify.com](https://www.netlify.com) and sign in
2. **Add New Site**: Click "Add new site" → "Import an existing project"
3. **Connect to GitHub**: 
   - Choose "GitHub" as your Git provider
   - Authorize Netlify to access your repositories
   - Select `NOVASWAY/GreatnBlessed` repository
4. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - Netlify will auto-detect Next.js and use the `netlify.toml` file
5. **Deploy**: Click "Deploy site"
6. **Install Next.js Plugin** (if needed):
   - Go to Site settings → Plugins
   - Add `@netlify/plugin-nextjs` if not automatically installed

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**:
```bash
netlify login
```

3. **Initialize and Deploy**:
```bash
netlify init
netlify deploy --prod
```

### Environment Variables (if needed)

If you have any environment variables:
1. Go to Netlify Dashboard → Site settings → Environment variables
2. Add any required variables (e.g., API keys, etc.)

### Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

## Build Settings Summary

- **Framework**: Next.js
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18 (configured in netlify.toml)

## Post-Deployment

After deployment:
1. Your site will be live at `https://your-site-name.netlify.app`
2. Every push to the `master` branch will trigger automatic deployments
3. You can view deployment logs in the Netlify dashboard

## Troubleshooting

If build fails:
- Check Node version (should be 18+)
- Ensure all dependencies are in `package.json`
- Check build logs in Netlify dashboard
- Verify `netlify.toml` configuration

