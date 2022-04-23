# `docker-commons`

All common setup that I do for my Docker images. Also work for new Debian/Ubuntu
based machines.

## How to use

Add the following lines to you Dockerfile:

```docker
# TODO(marcelocra): use a shorter version of the URL.
# TODO(marcelocra): update url to deno files in my system.
RUN wget -O docker-commons https://github.com/marcelocra/useful-stuff/releases/download/v0.0.1/docker-commons
RUN ./docker-commons
```

## Need to do more stuff? It is simple!

This project has two main parts:

- The `docker-commons`: the main application that is going to run in your Docker
  (or Linux) machine and setup everything for you
- The `dev-manager`: a helper application for development. This works as a bash
  script that I didn't want to write it in bash. You can download it from this
  repo release page. You can also generate it locally, and it would be a one
  time thing. I didn't want to create this is bash, as it is NOT fun to maintain
  a large bash script (yes, I've been there).

To develop:

1. [Optional, you can download the `dev_manager` binary from the release page]
   Run `./dev_manager_compile.sh`. If you do this, it is a one time thing, until
   you make changes to the `dev_manager.ts` file.
1. Work on you changes in the code, in `src`
1. Run `bin/dev_manager --run` from within a Docker container or Linux machine,
   to test your changes
1. Once you are happy with them, run `bin/dev_manager --compile`. It will create
   a `docker-commons` binary in the `bin` directory.
1. Now you can use that binary in the build phase of you Docker image or when
   first setting up a new Debian/Ubuntu machine.

   Consider the instructions in the [How to use](#how-to-use) section.

   `$ docker build --tag my-image ./path/to/your/Dockerfile`

   Note: If you are buiding locally and won't use my `docker-commons`, you need
   to change the `wget` line above. Either use the path to your locally created
   `docker-commons` or host it somewhere and change the link.

1. You might need to use the `--no-cache=true` flag in the build command. See my
   comment in `src/mod.ts` if you are having problems.

   `$ docker build --no-cache=true --tag my-image .`

## Next features

Quick:

- [ ] Add `fnm install 16.14.2` and `npm install --global yarn` to
      `install_fnm.ts` and then install **Yarn**
- [ ] Change the command prompt to be more legible (showing at least date,
      current directory and breaking a line)
- [ ] Refactor the `install_system_packages.ts` to use one single command,
      instead of several
- [ ] Think about a solution for the user not having `wget` nor `curl` in the
      target machine. That would prevent them from downloading the
      `docker-commons` file. One idea is to use `python3` and `urllib.request`
      as [shown in this SO answer](https://stackoverflow.com/a/22776/1814970)

A bit more complicated:

- [ ] Make the `install_fnm.ts` more generic, to allow installing other tools
      that use the same method (like Deno, Linuxbrew, etc)
- [ ] Allow command line customization to select what should and what shouldn't
      be installed

Need investigation:

- [ ] Install Neovim
