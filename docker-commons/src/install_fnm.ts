/**
 * Runs the Mac/Linux install script.
 *
 * fnm is the Fast Node Manager, which is a `nvm` like program written in Rust
 * that makes it easy to manage Node.js versions (it really does!).
 *
 * After installing it, just run:
 *
 * $ fnm install 16.14.2
 *
 * and you'll have that version of Node installed. Try it with:
 *
 * $ node
 */
import { join } from "./deps.ts";
import { USER_HOME_DIR_PATH } from "./constants.ts";

// const INSTALL_SCRIPT_URL = "https://deno.land/install.sh";
const INSTALL_SCRIPT_URL = "https://fnm.vercel.app/install";

export default async function installFNM() {
  const fnmInstallScriptPath = join(
    USER_HOME_DIR_PATH,
    "fnm_install.sh",
  );

  const fnmInstallScriptResponse = await fetch(INSTALL_SCRIPT_URL);

  await Deno.writeTextFile(
    fnmInstallScriptPath,
    await fnmInstallScriptResponse.text(),
  );

  const p = Deno.run({ cmd: ["bash", fnmInstallScriptPath] });

  await p.status();
}
