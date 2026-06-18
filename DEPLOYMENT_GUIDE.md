# Deployment Guide - Magic India Hi-Tech Projects

## Issues Found & Fixed

1. ✅ Missing `index.html` entry point - **CREATED**
2. ✅ Missing `.htaccess` routing configuration - **CREATED**  
3. ⚠️ Project uses SSR (Server-Side Rendering) - requires special hosting

## Your Hosting Options

### Option 1: Traditional Shared Hosting (Apache) - ❌ NOT RECOMMENDED
**Problem**: Your project uses Node.js SSR which shared hosting typically doesn't support.  
**What to do**: Upgrade to a hosting provider that supports Node.js, or rebuild as static site.

### Option 2: Cloudflare Workers - ✅ RECOMMENDED (Default)
Your `vite.config.ts` is already configured for this!

**Steps**:
1. Sign up at https://workers.cloudflare.com
2. Install Wrangler: `npm install -g wrangler`
3. Deploy: `wrangler deploy --name your-app-name dist/server`
4. Update your domain DNS to point to Cloudflare

### Option 3: Vercel - ✅ RECOMMENDED
**Steps**:
1. Push code to GitHub
2. Connect at https://vercel.com/new
3. Select your GitHub repo
4. Vercel auto-detects and deploys Vite + TanStack projects

### Option 4: Render.com / Railway / Heroku - ✅ GOOD
Any platform supporting Node.js will work.

**Steps**:
1. Set build command: `npm run build`
2. Set start command: `npm start` (if you have a start script)
3. Connect your Git repo and deploy

### Option 5: Self-hosted Node.js Server
**On your own server**:
```bash
npm install
npm run build
npm install -g pm2
pm2 start "npm start" --name "magic-india-site"
```

## If Stuck With Traditional Hosting

You have 2 choices:

### A) Convert to Static Site Export
Remove SSR and build as static HTML:
```bash
npm run build
# Upload dist/client/* to your hosting
```

### B) Use Netlify (Serverless) - FREE ✅
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist/client
```

## Deployment Checklist

- [ ] Choose hosting provider
- [ ] Rebuild project: `npm run build`
- [ ] Upload `dist/` folder to server
- [ ] Upload `.htaccess` files (if Apache)
- [ ] Test: https://yourdomain.com
- [ ] Check browser console for errors
- [ ] Test all routes (/, /about, /gallery, /projects, /contact)

## Common 403 Forbidden Fixes

1. **Permissions**: SSH into server and run:
   ```bash
   chmod -R 755 dist/
   chmod -R 644 dist/**/*.{js,css,html}
   ```

2. **Wrong upload folder**: Ensure files are in web root, not in a subfolder

3. **Server not configured for SSR**: Contact hosting provider or switch platforms

4. **Missing Node.js**: If using traditional hosting, this won't work. Switch to Node-capable hosting.

## Recommended Quick Fix
### Hostinger (Node.js)

If you have Hostinger and can publish Node.js apps, follow these steps.

1. Open hPanel → Hosting → Node.js Apps → Create Application.
   - Select Node.js version 18+.
   - Set the application root to your project folder (where `package.json` is).
   - For the start command, use: `npm start` (we added a `start` script that runs `server.node.js`).

2. Deploy / upload your repo to the server (via Git or SFTP). If using SFTP, upload all files including `dist/`.

3. SSH into the app container (Hostinger provides a terminal) or use the "Terminal" in hPanel and run:

```bash
cd /path/to/your/app
npm install --production --no-audit --no-fund
npm run build    # only if you didn't upload `dist/`
npm start
```

4. Ensure the app is running and mapped to your domain in hPanel. Hostinger will provide a public URL — the app must read `process.env.PORT`, which the provided `server.node.js` already does.

Notes:
- If you prefer Hostinger's app manager to run the process, set the start command in the app settings to `npm start`.
- If assets still 404, confirm `dist/client/assets` exists on the server and that `server.node.js` is in the project root.


1. **Best**: Use **Vercel** (1-click deploy from GitHub)
2. **Second best**: Use **Netlify** (also 1-click, free tier available)
3. **Self-hosted**: Use **Cloudflare Workers** or **Railway.app**

---

**Contact your hosting provider** if you need help enabling Node.js or checking server logs for specific errors.
