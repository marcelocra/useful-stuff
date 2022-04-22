/**
 * Simplify tmux usage with predefined config.
 *
 * The config is downloaded from GitHub and placed in the appropriate location.
 */
import { join } from "./deps.ts";

// TODO(marcelocra): update path to use short alias.
const TMUX_CONFIG_URL =
  "https://raw.githubusercontent.com/marcelocra/.dotfiles/master/unix/.tmux.conf";

export default async function installTmuxSettings() {
  let tmuxConfigResponse;

  // Try to fetch the config file. Bail out if it fails.
  try {
    tmuxConfigResponse = await fetch(TMUX_CONFIG_URL);
  } catch (err) {
    console.log(`Failed to fetch tmux config from ${TMUX_CONFIG_URL}`);
    console.log(err);
    return;
  }

  const tmuxConfig = await tmuxConfigResponse.text();
  const homeFolderPath = Deno.env.get("HOME");

  // Try to get the user HOME path, which is where tmux config is. Bail out if
  // the user doesn't have a HOME path defined.
  if (homeFolderPath === null || homeFolderPath === undefined) {
    console.log(
      "Your home path is not defined.. that's strange, please verify.",
    );
    return;
  }

  // Tries to save the downloaded config file. Bail out if it fails.
  const tmuxConfigPath = join(homeFolderPath, ".tmux.conf");
  try {
    await Deno.writeTextFile(tmuxConfigPath, tmuxConfig);
  } catch (err) {
    console.log(`Failed to write tmux config to ${tmuxConfigPath}`);
    console.log(err);
    return;
  }
}
