#!/bin/bash

# Compatibility wrapper for the canonical public-data renderer.
# The HTML CV and AI endpoints are generated from _data/*.yml; do not parse
# rendered Markdown back into structured data.

# Set the base directory to the repository root
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Check if the canonical renderer exists
PYTHON_SCRIPT="$BASE_DIR/scripts/render_public_ai.py"
if [ ! -f "$PYTHON_SCRIPT" ]; then
  echo "Error: Python script not found at $PYTHON_SCRIPT"
  exit 1
fi

echo "Rendering CV JSON and public AI endpoints from canonical data..."
cd "$BASE_DIR" || exit 1
exec python3 "$PYTHON_SCRIPT"
