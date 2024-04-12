#!/bin/bash
SCRIPT_DIR=$(dirname "$0")

echo "[MIGRATE SCRIPT] Merging secret_seed.sql with seed.sql..."
cat $SCRIPT_DIR/secret_seed.sql $SCRIPT_DIR/public_seed.sql > $SCRIPT_DIR/seed.sql
bun supabase db reset

echo "[MIGRATE SCRIPT] Removing contents of seed.sql..."
echo "" > $SCRIPT_DIR/seed.sql