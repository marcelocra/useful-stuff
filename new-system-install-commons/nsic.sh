#!/usr/bin/env bash

set -e

DEPENDENCIES_DIR="./dependencies"

# ------------------------------------------------------------------------------
# Install commonly needed packages.
# ------------------------------------------------------------------------------
apt-get update
apt-get install -y \
  curl \
  less \
  git \
  vim \
  tmux \
  unzip

# ------------------------------------------------------------------------------
# Add my tmux config, for better tmux defaults.
# ------------------------------------------------------------------------------
curl -O ~/.tmux.config \
  https://raw.githubusercontent.com/marcelocra/.dotfiles/master/unix/.tmux.conf

# ------------------------------------------------------------------------------
# Install Fast Node Manager (FNM), latest Node.js and Yarn.
# ------------------------------------------------------------------------------
curl -fsSL https://fnm.vercel.app/install | bash

# We are using bash, so help fnm know that (sometimes it fails to identify
# automatically).
sed 's/env/env --shell bash/g' ~/.bashrc
source ~/.bashrc

# Install latest Node.js LTS.
fnm install 16.14.2

# Install Yarn.
npm install --global yarn

# ------------------------------------------------------------------------------
# Update command prompt to look reasonable.
# ------------------------------------------------------------------------------
echo "PS1=\"$(printf '=%.0s' $(seq 1 ${COLUMNS}))
[$(TZ='America/Sao_Paulo' date '+%F %T %Z')] [\w]
# \"" >> /root/.bashrc