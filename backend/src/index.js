const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

function env(name, fallback) {
  const v = process.env[name];
  return v == null || v === "" ? fallback : v;
}

function parseCorsOrigins() {
  const raw = env("CORS_ORIGINS", "");
  if (!raw.trim()) return null; // allow all (dev)
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function isValidEmail(email) {
  // Minimal sanity check (not full RFC).
  if (typeof email !== "string") return false;
  const e = email.trim();
  if (e.length < 3 || e.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

async function main() {
  const PORT = Number(env("PORT", "8080"));

  const pool = mysql.createPool({
    host: env("MYSQL_HOST", "127.0.0.1"),
    port: Number(env("MYSQL_PORT", "3306")),
    user: env("MYSQL_USER", "bonya"),
    password: env("MYSQL_PASSWORD", "bonya"),
    database: env("MYSQL_DATABASE", "bonya"),
    waitForConnections: true,
    connectionLimit: 10,
  });

  // Ensure table exists (id + email).
  await pool.query(
    "CREATE TABLE IF NOT EXISTS subscriptions (" +
      "id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT," +
      "email VARCHAR(254) NOT NULL," +
      "created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP," +
      "PRIMARY KEY (id)," +
      "UNIQUE KEY uq_subscriptions_email (email)" +
      ")"
  );

  const app = express();

  const allowed = parseCorsOrigins();
  app.use(
    cors({
      origin: function (origin, cb) {
        // Allow non-browser clients / same-origin
        if (!origin) return cb(null, true);
        if (!allowed) return cb(null, true);
        return cb(null, allowed.includes(origin));
      },
    })
  );
  app.use(express.json({ limit: "32kb" }));

  app.get("/health", async (_req, res) => {
    try {
      await pool.query("SELECT 1");
      res.json({ ok: true });
    } catch (e) {
      res.status(500).json({ ok: false });
    }
  });

  app.post("/api/subscribe", async (req, res) => {
    try {
      const email = String((req.body && req.body.email) || "")
        .trim()
        .toLowerCase();

      if (!isValidEmail(email)) {
        return res.status(400).json({ ok: false, error: "invalid_email" });
      }

      await pool.query("INSERT INTO subscriptions (email) VALUES (?) ON DUPLICATE KEY UPDATE email=email", [email]);
      return res.json({ ok: true });
    } catch (e) {
      return res.status(500).json({ ok: false, error: "server_error" });
    }
  });

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Bonya backend listening on :${PORT}`);
  });
}

main().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);
  process.exit(1);
});


