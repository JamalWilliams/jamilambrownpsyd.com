#!/bin/bash
# Sync specific site content from main Vault to project for CI deployment

VAULT_SOURCE="/Users/jamalwilliams/Vault/Websites/jamilambrownpsyd.com"
VAULT_DEST="./Vault/Websites/jamilambrownpsyd.com"
MEDIA_DEST="./src/assets/vault-media"

echo "🔄 Syncing Vault content..."

# Create destinations
mkdir -p "$VAULT_DEST"
mkdir -p "$MEDIA_DEST"

# Sync Text Content
rsync -av --exclude '.*' --exclude 'media/' "$VAULT_SOURCE/" "$VAULT_DEST/"

# Sync Media Content (directly to assets for build reliability)
rsync -av --exclude '.*' --exclude 'raw/' "$VAULT_SOURCE/media/" "$MEDIA_DEST/"

echo "✅ Sync complete."
