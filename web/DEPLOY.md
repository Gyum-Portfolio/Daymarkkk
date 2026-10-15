# Publish Daymark as a public web app

## Recommended: Netlify with GitHub
1. Upload this project to a new GitHub repository (do not upload node_modules or secrets).
2. In Netlify choose Add new project > Import an existing project > GitHub and select the repository.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy. Netlify provides a public HTTPS URL that can be shared and converted into a QR code.

## Check locally before deploying
Run `npm install`, then `npm run build`. If it fails, resolve errors before deployment. Run `npm run dev` for local testing.

## Important limitations
- This is a guest-mode MVP. Journal entries are stored in each browser's localStorage, not a cloud database; they will not sync between devices.
- Do not use the current version for sensitive real-world diary data on shared demo devices. Reset the demo between visitors.
- Speech recognition depends on browser support and permission. Emoji suggestions are rule-based, not an external AI model.
- The manifest alone does not make this a fully offline-capable PWA.
- Public deployment does not add accounts, authentication, or privacy controls automatically.
