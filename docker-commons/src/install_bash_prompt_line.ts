/**
 * Creates a very simple, yet useful, prompt line, that is waaaayy better than
 * the default one.
 *
 * It prints a line to saparate commands, followed by the date (in a fixed time
 * zone), followed by the path.
 *
 * And add line breaks, to make things easier to see.
 */
import { join } from "./deps.ts";
import { USER_HOME_DIR_PATH } from "./constants.ts";

// TODO(marcelocra): Allow the timezone to be overriden from the command line.
// TODO(marcelocra): Change the prompt sign ('#' or '$') based on current env.
const SIMPLE_BASH_PROMPT = `PS1="$(printf '=%.0s' $(seq 1 $COLUMNS))
[$(TZ='America/Sao_Paulo' date '+%F %T %Z')] [\\w] 
# "`;

export default async function installBashPromptLine() {
  await Deno.writeTextFile(
    join(USER_HOME_DIR_PATH, ".bashrc"),
    SIMPLE_BASH_PROMPT,
    {
      append: true,
    },
  );
}
