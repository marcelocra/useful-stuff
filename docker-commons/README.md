# `docker-commons`

All common setup that I do for my Docker images.

## How to use

Add the following lines to you Dockerfile:

```docker
# TODO(marcelocra): use a shorter version of the URL.
# TODO(marcelocra): update url to deno files in my system.
RUN wget -O docker-commons https://github.com/marcelocra/useful-stuff/releases/download/v0.0.1-alpha/docker-commons
RUN ./docker-commons
```

## Need to do more stuff? It is simple!

1. Add your new code to `src`
1. Run `./manager_compile.sh` (only once)
1. Run `bin/manager --run` from within a Docker container, to test your changes
1. Once you are happy with them, run `bin/manager --compile`. It will create a
   `docker-commons` in the `bin` directory.
1. Rebuild your Docker image, considering the instructions from the
   [How to use](#how-to-use) section about:

   `$ docker build --tag my-image ./path/to/your/Dockerfile`

   If you are buiding locally and won't use my `docker-commons`, you need to
   change the `wget` line above. You can use the path to your local
   `docker-commons` or host it somewhere and change the link.

1. You might need to use the `--no-cache=true` flag in the build command. See my
   comment in `mod.ts` if you are having problems.

   `$ docker build --no-cache=true --tag my-image .`
