# Learning Engine Website

A responsive static website built with HTML, CSS and vanilla JavaScript. No WordPress, build step, or paid hosting is required for the starter version.

## Files
- `index.html` — homepage content and SEO metadata
- `styles.css` — responsive layout and styling
- `script.js` — mobile menu, category filters and story search
- `favicon.svg` — browser tab icon

## Preview locally
Open `index.html` in a browser.

## Publish with GitHub Pages
1. Create a GitHub account at https://github.com/signup.
2. Create a **public** repository named `learning-engine-website`.
3. Upload all four files (`index.html`, `styles.css`, `script.js`, `favicon.svg`) and this README to the repository root.
4. Open repository **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/(root)`, and save.
6. Wait for the published URL shown on the Pages settings page.

## Connect a GoDaddy domain
1. In repository **Settings → Pages**, enter your exact domain under **Custom domain** and save it. Do this before changing DNS.
2. In GoDaddy, open your domain's DNS records.
3. For the root domain (example: `example.com`), configure the four GitHub Pages A records documented at https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site:
   - `@` → `185.199.108.153`
   - `@` → `185.199.109.153`
   - `@` → `185.199.110.153`
   - `@` → `185.199.111.153`
4. For `www`, add a CNAME record pointing to `YOUR-GITHUB-USERNAME.github.io` (replace with your actual username).
5. Do not delete email-related MX/TXT records. Remove conflicting old website records only if you know they point to the previous website.
6. Once DNS has propagated, return to **Settings → Pages** and enable **Enforce HTTPS** when available.

DNS changes can take time to propagate. The domain provider and repository settings must match for HTTPS to work.

## Before launch
- Replace example story links with direct video or article links.
- Add your final logo and approved images.
- Confirm your exact domain and set it in the repository Pages settings.
- Add a privacy policy/contact page if you add analytics, forms or user data collection.

The starter stories are sample homepage content and should be reviewed/updated before launch.
