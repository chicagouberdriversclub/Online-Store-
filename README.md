# Chicago Driver Store — Dummy Online Store

A dummy online store that runs entirely on GitHub Pages. No backend, no real products, no real payments.

## Structure

```
online-store/
├── index.html                  # Shop homepage, product grid + search/filter
├── cart.html                   # Cart page
├── checkout.html               # Dummy checkout form (no real payment)
├── assets/
│   ├── css/styles.css          # All styling
│   ├── js/app.js               # Loads products, cart (localStorage), dummy checkout
│   └── img/                    # Product images go here (currently placeholder images)
├── data/
│   └── products.json           # Dummy product catalog — edit this to add products
├── docs/
│   └── setup.md                # How to publish this on GitHub Pages
├── .github/workflows/pages.yml # Deploys the site to GitHub Pages on push to main
├── .gitignore
└── README.md
```

## Dummy products (8)

| ID | Product | Price | Category | Stock |
|---|---|---|---|---|
| DASHCAM-01 | Dash Cam Pro 1080p | $59.99 | Safety | 12 |
| MOUNT-02 | Phone Mount — Dashboard | $19.99 | Accessories | 25 |
| SEAT-03 | Leather Seat Covers (Set of 2) | $49.99 | Interior | 8 |
| LED-04 | Ambient LED Interior Light Kit | $29.99 | Interior | 15 |
| CHARGER-05 | 4-Port Fast Car Charger | $24.99 | Accessories | 30 |
| KIT-06 | Driver Safety Kit | $39.99 | Safety | 10 |
| MAT-07 | All-Weather Floor Mats | $44.99 | Interior | 6 |
| SIGN-08 | Uber / Lyft Light Sign | $14.99 | Accessories | 20 |

To add a product, add one object to `data/products.json` with id, name, price, category, stock, image, description.

## How it works

- Products load from `data/products.json`.
- Cart is saved in the browser (localStorage).
- Checkout is dummy — it shows a fake order number and clears the cart. No payment is taken.
- To take real payments later, connect Stripe / PayPal / Shopify checkout to `checkout.html`.

## Publish on GitHub (GitHub Pages)

1. Create a new repo on GitHub (e.g. `online-store`) — name it yourself at https://github.com/new
2. Upload / push all files in this folder to the repo, main branch.
3. Repo Settings > Pages > Source: GitHub Actions (the included workflow deploys it).
4. Your store will be live at: `https://<your-username>.github.io/online-store/`

Full steps are in `docs/setup.md`.
