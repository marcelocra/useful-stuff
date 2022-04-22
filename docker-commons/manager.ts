import { Args, parse } from "https://deno.land/std@0.136.0/flags/mod.ts";

const COMMON_ARGS = "--allow-env --allow-net --allow-run --allow-write";
const parsedArgs = parse(Deno.args);

function getCommand(args: Args) {
  let command;

  if (args.run && args.compile) {
    console.log("Please, provide either '--run' or '--compile'");
    Deno.exit(1);
  }

  if (args.run) {
    command = `deno run ${COMMON_ARGS} ./src/mod.ts`;
  } else if (args.compile) {
    command = `deno compile ${COMMON_ARGS} -o bin/docker-commons ./src/mod.ts`;
  }

  if (!command) {
    console.log(`docker-commons manager

Available commands:

--compile\t compiles the program in a single binary file and saves it to ./bin

--run    \t runs the program, to check if everything is working correctly.
          \t Supported systems: Debian/Ubuntu and Docker images that are based
          \t on them.
`);
    Deno.exit(1);
  }

  return command.split(" ");
}

const cmd = getCommand(parsedArgs);
const run = Deno.run({ cmd });

const status = await run.status();

console.log(status.success ? "Succeeded!" : "Failed");
