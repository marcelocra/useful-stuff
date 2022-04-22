/**
 * Helps developing the `docker-common` binary.
 *
 * This was created to replace some bash scripts that I used to use. It is an
 * experiment.
 */

import { Args, parse } from "https://deno.land/std@0.136.0/flags/mod.ts";

const HELP_STRING = `docker-commons dev-manager

Available commands:

--compile\t compiles the program in a single binary file and saves it to ./bin

--run    \t runs the program, to check if everything is working correctly.
         \t Supported systems: Debian/Ubuntu and Docker images that are based
         \t on them.
`;
// Permissions.
const PERMS = "--allow-env --allow-net --allow-run --allow-write";
const parsedArgs = parse(Deno.args);

/**
 * Processes the input args provided by the user and returns the command that is
 * expected by the underlying runtime.
 */
function getCommand(args: Args): string {
  if (args.run && args.compile) {
    console.log("Please, provide either '--run' or '--compile'");
    Deno.exit(1);
  }

  if (args.run) {
    return `deno run ${PERMS} ./src/mod.ts`;
  }

  if (args.compile) {
    return `deno compile ${PERMS} -o bin/docker-commons ./src/mod.ts`;
  }

  console.log(HELP_STRING);
  Deno.exit(1);
}

// Example: "deno run --allow-run ./src/mod.ts", which then is split in the
// spaces, to give Deno.run what it expects.
const run = Deno.run({ cmd: getCommand(parsedArgs).split(" ") });

const status = await run.status();

console.log(status.success ? "Succeeded!" : "Failed");
