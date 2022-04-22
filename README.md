# A bunch of **_usefull-stuff_**

This repo is a gathering of standalone helpers, scripts and ideas that I'm
using across projects.

Each folder has a separate `README.md` file documenting things, but here's a
summary:

## `pet-linux`

An alpine-based Docker env. If you are not familiar with alpine,
it is a linux distro that has around 5mb size but is very functional.

## `docker-commons`

A centralized location to put common stuff that I want in most of my Docker
images, e.g. `git`.

Usually I just copy/paste things around, but there's always something that gets
lost and I have to waste time finding it.

This should help avoid that problem.

Note: I used the `docker-commons` binary to manage common stuff for this top
level `Dockerfile` and it worked great.