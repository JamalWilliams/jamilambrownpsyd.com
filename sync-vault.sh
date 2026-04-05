#!/bin/bash
# Sync specific site content from main Vault to project for CI deployment ONLY.
# Local development uses absolute paths in .env for "Zero-Sync".

VAULT_SOURCE="/Users/jamalwilliams/Vault/Websites/jamilambrownpsyd.com"
VAULT_DEST="./Vault/Websites/jamilambrownpsyd.com"

echo "🔄 Syncing Vault content for CI deployment..."

# Create destination
mkdir -p "$VAULT_DEST"

# Sync Text & Media (bundling everything for the CI build)
rsync -av --exclude '.*' --exclude 'raw/' "$VAULT_SOURCE/" "$VAULT_DEST/"

echo "✅ Sync complete."
