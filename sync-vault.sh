#!/bin/bash
# Sync specific site content from main Vault to project for CI deployment

VAULT_SOURCE="/Users/jamalwilliams/Vault/Websites/jamilambrownpsyd.com"
VAULT_DEST="./Vault/Websites/jamilambrownpsyd.com"

echo "🔄 Syncing Vault content from $VAULT_SOURCE to $VAULT_DEST..."

# Create destination
mkdir -p "$VAULT_DEST"

# Sync (excluding hidden files)
rsync -av --exclude '.*' "$VAULT_SOURCE/" "$VAULT_DEST/"

echo "✅ Sync complete."
