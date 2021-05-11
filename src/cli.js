import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export function cli() {
  const t = new Date();

  const args = yargs(hideBin(process.argv))
    .example("$0 'some usage example here'")
    .option("option", {
      alias: "o",
      type: "string",
      default: "off",
      description: "Turn on the option",
    })
    .demandCommand(1).argv;

  // do something with args
}
