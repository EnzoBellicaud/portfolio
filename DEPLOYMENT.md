# Portfolio Website - GitHub Pages Deployment Guide

This guide will help you deploy your Vue.js portfolio to GitHub Pages.

## Prerequisites

1. Make sure your repository is pushed to GitHub
2. Ensure your repository is named `portfolio` (or update the `publicPath` in `vue.config.js` accordingly)

## Deployment Methods

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

The repository is already configured with GitHub Actions for automatic deployment.

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose the `gh-pages` branch
   - Click Save

3. **The workflow will automatically:**
   - Build your Vue.js application
   - Deploy it to the `gh-pages` branch
   - Your site will be available at: `https://yourusername.github.io/portfolio/`

### Method 2: Manual Deployment with npm script

1. **Deploy using the npm script:**
   ```bash
   npm run deploy
   ```

2. **Enable GitHub Pages (if not already done):**
   - Go to your repository settings
   - Navigate to Pages section
   - Select `gh-pages` branch as source

### Method 3: Manual Deployment with script

1. **Run the deployment script:**
   ```bash
   ./deploy.sh
   ```

2. **Push to GitHub Pages:**
   ```bash
   git push -f git@github.com:yourusername/portfolio.git main:gh-pages
   ```

## Important Configuration Details

- **Public Path:** The site is configured to work at `/portfolio/` path
- **Build Output:** Files are built to the `dist` directory
- **GitHub Actions:** Automatic deployment is configured in `.github/workflows/deploy.yml`

## Updating Your Site

Once set up, you can update your site by:

1. Making changes to your code
2. Committing and pushing to the `main` branch
3. GitHub Actions will automatically rebuild and deploy

## Troubleshooting

### If your site doesn't load properly:
1. Check that the `publicPath` in `vue.config.js` matches your repository name
2. Ensure GitHub Pages is enabled and pointing to the `gh-pages` branch
3. Check the Actions tab for any build errors

### If images or assets don't load:
- Make sure all asset paths are relative
- Check that the `publicPath` configuration is correct

## Custom Domain (Optional)

If you have a custom domain:
1. Add your domain to the `cname` field in `.github/workflows/deploy.yml`
2. Create a CNAME file in the `public` directory with your domain

Your site will be available at: `https://yourusername.github.io/portfolio/`
