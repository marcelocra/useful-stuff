#!/usr/bin/env bash
deno compile \
  --allow-run \
  -o bin/dev-manager \
  ./dev_manager.ts