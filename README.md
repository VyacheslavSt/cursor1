# Bonya — GitHub Pages

This repo contains a small static website about our dog Bonya.

## Publish on GitHub Pages

1. Open the repo on GitHub.
2. Go to **Settings → Pages**.
3. In **Build and deployment**, choose:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Save.

After a minute, your site should be available here:

- `https://vyacheslavst.github.io/cursor1/`

## Email subscription (Postgres)

GitHub Pages is static, so saving emails requires a separate backend API.

- Backend code: `backend/`
- Local run (requires Docker): `docker compose up`
- API endpoints:
  - `http://localhost:8080/health`
  - `http://localhost:8080/api/subscribe`


