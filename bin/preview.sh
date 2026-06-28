#!/usr/bin/env bash
# Run the Vite dev server for the Eitan Hiller portfolio.
set -euo pipefail

# Resolve repo root regardless of where the script is called from.
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

# Install dependencies on first run.
if [ ! -d node_modules ]; then
  echo "→ Installing dependencies…"
  npm install
fi

echo "→ Starting dev server (http://localhost:5173)…"
exec npm run dev -- "$@"
