# Publish the store on GitHub Pages

## 1. Create the repo
- Go to https://github.com/new
- Name it yourself, e.g. `online-store`
- Public, add a README (or leave empty — you will push these files)
- Create repository

## 2. Push these files
On your MacBook, in Terminal:
```bash
cd /path/to/online-store
git init
git add .
git commit -m "Dummy online store"
git branch -M main
git remote add origin https://github.com/<your-username>/online-store.git
git push -u origin main
```

Or upload on GitHub.com: repo > Add file > Upload files, drag in all files.

## 3. Turn on GitHub Pages
- Repo > Settings > Pages
- Build and deployment > Source: **GitHub Actions**
- The workflow in `.github/workflows/pages.yml` deploys on every push to main.

## 4. Open your store
`https://<your-username>.github.io/online-store/`

## 5. Add a real product
Edit `data/products.json`, add an object like:
```json
{ "id": "NEW-09", "name": "New Product", "price": 9.99, "category": "Accessories", "stock": 5, "image": "assets/img/new.jpg", "description": "Dummy product." }
```
Commit and push — the site updates automatically.

## 6. Real payments (later)
This dummy store takes no payments. To sell for real, add Stripe Checkout, PayPal, or Shopify Buy Button to `checkout.html` — do not collect card numbers in this form.
