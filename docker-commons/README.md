# `docker-commons`

All common setup that I do for my Docker images. Also work for new Debian/Ubuntu
based machines.

## How to use

You need a way to download this file in the container, for example with wget,
curl, python, etc. I'll put examples with these 3 tools here.

If you can't do that, simply download the raw file and place it in the folder
where you are building your image.

```dockerfile
ARG DOCKER_COMMON_VERSION=v0.2.0
RUN wget -O docker-commons-${DOCKER_COMMON_VERSION} \
  https://github.com/marcelocra/useful-stuff/releases/download/v${DOCKER_COMMON_VERSION}/docker-commons
# You might need add execution permission.
RUN chmod +x ./docker-commons-${DOCKER_COMMON_VERSION}
RUN ./docker-commons-${DOCKER_COMMON_VERSION}
```

Need to do more stuff? Just add to the script!

## Next features

Quick:

- [x] Add `fnm install 16.14.2` and `npm install --global yarn` to
      `install_fnm.ts` and then install **Yarn**
- [x] Change the command prompt to be more legible (showing at least date,
      current directory and breaking a line)
- [ ] Think about a solution for the user not having `wget` nor `curl` in the
      target machine. That would prevent them from downloading the
      `docker-commons` file. One idea is to use `python3` and `urllib.request`
      as [shown in this SO answer](https://stackoverflow.com/a/22776/1814970)

A bit more complicated:

- [ ] Allow command line customization to select what should and what shouldn't
      be installed

Need investigation:

- [ ] Install Neovim
