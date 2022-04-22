/**
 * Does everything related to the installation process of system packages, like
 * updating the local registry (e.g. apt-get update).
 */

// Isolates alls commands, so you can tweak to your system.
const updateSystemRepositories = ["apt-get", "update"];
const installPackage = ["apt-get", "install", "-y"];

// Deno.run expects an object with the 'cmd' key for each command.
// IMPORTANT: These commands will be run in this order.
const commands = [
  { cmd: updateSystemRepositories },
  { cmd: [...installPackage, "curl"] },
  { cmd: [...installPackage, "less"] },
  { cmd: [...installPackage, "git"] },
  { cmd: [...installPackage, "vim"] },
  { cmd: [...installPackage, "tmux"] },
  { cmd: [...installPackage, "unzip"] },
];

export default async function installSystemPackages() {
  // Actually run the install commands.
  for (const command of commands) {
    try {
      // Create subprocess.
      const p = Deno.run(command);

      // Wait for the command to complete and print details if it failed.
      const status = await p.status();

      if (!status.success) {
        console.log(
          `Command: ${
            command.cmd.join(" ")
          } | Failed with code: ${status.code}`,
        );
      }
    } catch (_err) {
      // When the command cannot be run at all (e.g. when its binary doesn't
      // exist).
      console.log(`Failed to run command: ${command.cmd.join(" ")}`);
    }
  }
}
