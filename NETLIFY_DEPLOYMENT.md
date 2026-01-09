# Netlify Deployment Troubleshooting

## Issue: Changes Not Showing on Website

If your changes aren't appearing on Netlify, try these steps:

### 1. Check Netlify Build Status
- Go to your Netlify dashboard
- Click on your site
- Check the "Deploys" tab to see if there are any failed builds
- Look for error messages in the build logs

### 2. Trigger a Manual Rebuild
- In Netlify dashboard → Deploys tab
- Click "Trigger deploy" → "Deploy site"
- This will rebuild your site with the latest code from GitHub

### 3. Clear Browser Cache
- Hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
- Or clear browser cache completely
- Try in incognito/private mode

### 4. Verify GitHub Connection
- Netlify → Site settings → Build & deploy
- Ensure it's connected to: `NOVASWAY/GreatnBlessed`
- Branch: `master`
- Build command: `npm run build`
- Publish directory: `.next`

### 5. Check Build Settings
Your `netlify.toml` should have:
```toml
[build]
  command = "npm run build"
  publish = ".next"
```

### 6. Force a New Deploy
If changes still don't appear:
1. Make a small change (add a space or comment)
2. Commit and push to GitHub
3. Netlify will automatically rebuild

### 7. Check Next.js Plugin
- Ensure `@netlify/plugin-nextjs` is installed
- Netlify should auto-detect Next.js, but you can add it manually in:
  - Site settings → Plugins → Add plugin

### Common Issues:
- **Build failing**: Check Node version (should be 18+)
- **Old content showing**: Clear Netlify cache in Site settings → Build & deploy → Clear cache
- **Not auto-deploying**: Check webhook in GitHub repository settings

