# Strategy Charlie — Landing Page

Single-page marketing site for [strategycharlie.com](https://strategycharlie.com).  
Built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no build tools, no dependencies.

---

## Files

```
index.html    — the complete page
style.css     — all styles
script.js     — scroll animations, mobile menu, form enhancement
favicon.svg   — SC monogram favicon
README.md     — this file
```

---

## Deploying to GitHub Pages

### First-time setup

1. **Create a GitHub repository** (if you haven't already):
   - Go to [github.com](https://github.com) → New repository
   - Name it `strategycharlie` (or anything you like)
   - Leave it public; do not initialise with a README

2. **Push the files from your terminal:**
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/strategycharlie.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (left sidebar)
   - Under "Source", select **Deploy from a branch**
   - Branch: `main`, Folder: `/ (root)`
   - Click **Save**

4. Your site will be live at:
   `https://YOUR_USERNAME.github.io/strategycharlie/`
   (GitHub takes ~60 seconds to deploy on the first push.)

### Updating the site

Edit the files, then:
```bash
git add .
git commit -m "Your change description"
git push
```
GitHub Pages will redeploy automatically within a minute or two.

---

## Adding Eddie's Real Photo

1. Add the photo file to the project — recommended path: `images/eddie.jpg`
   (create an `images/` folder if it doesn't exist)

2. Open `index.html` and find this comment:
   ```html
   <!-- PHOTO SWAP: Replace this placeholder with Eddie's real photo. -->
   ```

3. Delete the `<div class="photo-placeholder">` block immediately below it.

4. Replace it with:
   ```html
   <img src="images/eddie.jpg"
        alt="Eddie, Strategy Charlie"
        class="eddie-img"
        loading="lazy"
        width="340"
        height="453">
   ```
   Adjust `width` and `height` to match your actual image dimensions (used for layout stability while the image loads — the CSS will handle the visual sizing).

5. Commit and push.

---

## Setting Up the Contact Form (Formspree)

The contact form is pre-wired for [Formspree](https://formspree.io) — a free service that handles form submissions for static sites.

1. Create a free account at [formspree.io](https://formspree.io)
2. Click **+ New Form**, give it a name, and set your notification email
3. Copy the **Form ID** — it looks like `xkndjpkv`
4. Open `index.html` and find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Replace `YOUR_FORM_ID` with your actual form ID:
   ```html
   action="https://formspree.io/f/xkndjpkv"
   ```
6. Commit and push. The form will now deliver submissions to your email.

**Testing:** Formspree's free tier supports 50 submissions/month. Submit a test message after setup to confirm delivery.

---

## Pointing a Custom Domain (strategycharlie.com)

### Step 1 — Add the domain in GitHub Pages settings
1. Go to your repository → **Settings** → **Pages**
2. Under "Custom domain", enter `strategycharlie.com` and click **Save**
3. GitHub will create a `CNAME` file in your repository automatically

### Step 2 — Update your DNS records
Log into your domain registrar (wherever you bought strategycharlie.com) and add these DNS records:

**For an apex domain (`strategycharlie.com`)** — add four A records:
```
Type  Name    Value
A     @       185.199.108.153
A     @       185.199.109.153
A     @       185.199.110.153
A     @       185.199.111.153
```

**Also add a CNAME for `www`:**
```
Type   Name   Value
CNAME  www    YOUR_USERNAME.github.io.
```

### Step 3 — Enable HTTPS
- Wait ~30 minutes for DNS to propagate
- Return to **Settings** → **Pages** and tick **Enforce HTTPS** (once the certificate is issued, usually within an hour)

After that, `https://strategycharlie.com` will serve the site.

---

## Notes

- **No build step required.** Edit `index.html`, `style.css`, or `script.js` directly and push.
- **Fonts** are loaded from Google Fonts (Syne + Inter). The site degrades gracefully to system fonts if the network request fails.
- **Email address** in the footer is set to `hello@strategycharlie.com` — update it in `index.html` if you use a different address. Search for `mailto:` to find the line.
- **The form's AJAX enhancement** in `script.js` only activates once `YOUR_FORM_ID` has been replaced. Until then, the form falls back to a standard page redirect via Formspree's default thank-you page — it still works, just less polished.
