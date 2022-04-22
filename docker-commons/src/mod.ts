/* Isolates all common Docker setup in one file.

These are the usual setup that I do when playing with some docker containers.
And instead of copy/pasting them everywhere, I wrote this script.

It should replace something like this in your Dockerfile:

--
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y less
RUN apt-get install -y vim
RUN apt-get install -y tmux
RUN apt-get install -y unzip
RUN curl -o /root/.tmux.conf -fsSL https://raw.githubusercontent.com/marcelocra/.dotfiles/master/unix/.tmux.conf
RUN curl -fsSL https://fnm.vercel.app/install | bash
RUN fnm install 16.14.2
RUN npm install --global yarn
--

with something like this:

--
RUN wget -O docker-commons https://github.com/marcelocra/useful-stuff/blob/main/docker-commons/bin/docker-commons
RUN ./docker-commons
--

The best part is that if I need to change something in my setup, I change in
here and all my Dockerfiles are automatically updated the next time I build
them.

IMPORTANT: It seems like this respects Docker cache. When I tested it, changing
  then resulting binary would trigger a new run, which is what we would like.

  I'm not entirely sure this is actually the case, particularly because it seems
  to conflict with documentation that I found (below).

  When I figure out more, I'll update this comment.

  https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache
*/

import installSystemPackages from "./install_system_packages.ts";
import installTmuxSettings from "./install_tmux_settings.ts";
import installFNM from "./install_fnm.ts";

// Right now, it needs to run in this order, as FNM needs some system packages
// for it to install. It would be interesting to think of a way not to have that
// problem.
await installSystemPackages();
await installTmuxSettings();
await installFNM();
