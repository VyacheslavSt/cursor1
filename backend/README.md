# Bonya backend (MySQL subscriptions)

GitHub Pages hosts only static files, so saving emails to MySQL requires a separate backend API.

## Database table

The table is created automatically on startup, but the canonical schema is in `schema.sql`:

- table: `subscriptions`
- column: `email` (unique)

## Run locally (Docker)

From repo root:

```bash
docker compose up
```

API will be available at:

- `http://localhost:8080/health`
- `http://localhost:8080/api/subscribe`

## Connect the website to your API

In `index.html` you can set the API base URL (for production):

```html
<script>
  window.BONYA_API_BASE = "https://YOUR-API-DOMAIN";
</script>
```

If you don't set it, the website uses `http://localhost:8080` by default.


