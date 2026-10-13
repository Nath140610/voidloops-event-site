const readline = require("node:readline/promises");
const bcrypt = require("bcryptjs");

(async () => {
  const terminal = readline.createInterface({ input: process.stdin, output: process.stdout });
  const password = await terminal.question("Nouveau mot de passe staff (16 caractères minimum) : ");
  terminal.close();
  if (password.length < 16) {
    console.error("Le mot de passe doit contenir au moins 16 caractères.");
    process.exitCode = 1;
    return;
  }
  console.log("Copie cette valeur dans Render → Environment → STAFF_PASSWORD_HASH :");
  console.log(await bcrypt.hash(password, 12));
})();
