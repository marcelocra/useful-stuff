# `docker-commons`

All common setup that I do for my Docker images. Also work for new Debian/Ubuntu
based machines.

## How to use

You need a way to download this file in the container, for example with wget,
curl, python, etc.

If you can't do that, simply download the raw file and place it in the folder
where you are building your image.

```dockerfile
RUN wget -O nsic.sh \
  https://raw.githubusercontent.com/marcelocra/useful-stuff/main/nsic/nsic.sh
# You might need add execution permission.
RUN chmod +x ./nsic.sh
RUN ./nsic.sh
```

Need to do more stuff? Just add to the script!

## Next features

Quick:

- [ ] Split each installation in a separate script (or perhaps use flags for
      that?), so that we can benefit from Docker caching
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
