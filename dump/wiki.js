import fs from 'node:fs';

import program from 'commander';

if (!fs.existsSync('./data')) {
  fs.mkdirSync('./data');
}

program
  .version('1.0.0')
  .command('ids', 'Get list of all chemical pages ids')
  .command('rev', 'Get revision information for all pages')
  .command('update', 'Download new pages')
  .command('parse', 'Extract SMILES from downloaded pages')
  .parse(process.argv);

if (program.runningCommand) {
  program.runningCommand.on('close', process.exit.bind(process));
}
