# 🟢 **Planned Palate — Final DNS & Launch Verification Checklist**
**Repository:** `TGOINES86/plannedpalate.com`  
**Hosting:** GitHub Pages  
**Live Domain:** [https://www.plannedpalate.com](https://www.plannedpalate.com)

---

## ✅ 1. DNS Configuration (GoDaddy)

| Type | Name | Data / Target | TTL | Notes |
|------|------|----------------|-----|-------|
| A | @ | 185.199.108.153 | 1 hour | GitHub Pages server |
| A | @ | 185.199.109.153 | 1 hour | GitHub Pages server |
| A | @ | 185.199.110.153 | 1 hour | GitHub Pages server |
| A | @ | 185.199.111.153 | 1 hour | GitHub Pages server |
| CNAME | www | tgoines86.github.io | 1 hour | Points subdomain to GitHub Pages |
| NS | @ | ns13.domaincontrol.com | Default | GoDaddy nameserver |
| NS | @ | ns14.domaincontrol.com | Default | GoDaddy nameserver |
| SOA | @ | Primary nameserver: ns13.domaincontrol.com | 1 hour | Leave as-is |

✅ *DNS check in GitHub Pages → “Successful”*  
✅ *TLS certificate provisioned and HTTPS enforced*

---

## ✅ 2. GitHub Pages Settings

**Repository → Settings → Pages**

| Setting | Value |
|----------|--------|
| Source | Deploy from a branch |
| Branch | `develop` |
| Folder | `/docs` |
| Custom Domain | `www.plannedpalate.com` |
| Enforce HTTPS | ✅ Enabled |

**CNAME file inside `/docs`:**
```
www.plannedpalate.com
```

---

## ✅ 3. Verification Tests

| Test | Expected Result |
|------|-----------------|
| Visit `https://www.plannedpalate.com` | ✅ Site loads securely |
| Visit `plannedpalate.com` (non-www) | ✅ Redirects to `www.plannedpalate.com` |
| Check SSL Lock | ✅ Green lock icon appears |
| Run [WhyNoPadlock.com](https://www.whynopadlock.com) | ✅ No mixed content errors |
| Inspect Console | ✅ No 404s for images, CSS, or JS |
| Favicon | Optional — can be added later |

---

## 🧾 4. Optional Add-Ons (Future)

### **A. Google Workspace Setup**
When ready to activate Gmail for your domain, add these to GoDaddy:

| Type | Name | Value | TTL |
|------|------|--------|-----|
| MX | @ | `ASPMX.L.GOOGLE.COM` (priority 1) | 1 hour |
| MX | @ | `ALT1.ASPMX.L.GOOGLE.COM` (priority 5) | 1 hour |
| MX | @ | `ALT2.ASPMX.L.GOOGLE.COM` (priority 5) | 1 hour |
| MX | @ | `ALT3.ASPMX.L.GOOGLE.COM` (priority 10) | 1 hour |
| MX | @ | `ALT4.ASPMX.L.GOOGLE.COM` (priority 10) | 1 hour |
| TXT | @ | `v=spf1 include:_spf.google.com ~all` | 1 hour |
| TXT | google-site-verification | *Google verification code* | 1 hour |

📨 **Email examples**:  
- hello@plannedpalate.com  
- support@plannedpalate.com  

---

### **B. Image & Asset Loading**
If images don’t appear:
1. Verify the correct folder path (`/docs/images/...`)
2. Use relative paths:  
   ```html
   <img src="./images/hero.jpg" alt="Kitchen countertop and meal plan" />
   ```
3. Or host static images on GitHub CDN:
   ```
   https://raw.githubusercontent.com/TGOINES86/plannedpalate.com/develop/docs/images/hero.jpg
   ```

---

## 🧩 5. Backup Notes

- Previous domain `theplantryapp.com` has been disconnected (safe to ignore).  
- All Mailgun / old MX & TXT records removed.  
- DNS propagation complete and verified globally.  
- Certificate auto-renews via GitHub (no manual intervention).  

---

## 📦 6. Version Control

**Branching Strategy:**  
- `develop` → active site build  
- `main` → optional production freeze (future)  
- `docs/` → web root for GitHub Pages  

**When updating the site:**  
1. Make changes in `develop`  
2. Push to GitHub  
3. GitHub Pages auto-redeploys from `/docs`

---

## 🪄 7. Optional Quality-of-Life Files

Recommended additions inside `/docs`:
- `/robots.txt` →  
  ```
  User-agent: *
  Allow: /
  Sitemap: https://www.plannedpalate.com/sitemap.xml
  ```
- `/sitemap.xml` → generated automatically via SEO tools  
- `/favicon.ico` → small site icon for browsers  
- `/README.md` → high-level project summary  

---

### ✅ Final Result
🌐 **Live Site:** [https://www.plannedpalate.com](https://www.plannedpalate.com)  
🔒 **SSL:** Active  
📦 **Hosting:** GitHub Pages (static /docs build)  
🧭 **Status:** Ready for launch

