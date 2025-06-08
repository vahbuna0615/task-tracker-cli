const process = require('process')
const fs = require('fs')
const path = require('path')
const spinners = JSON.parse(fs.readFileSync(path.resolve(__dirname, './spinners.json')).toString())
const colors = require('colors')

function createSpinner(message, spinnerName) {
  const { interval, frames } = spinners[spinnerName]
  let i = 0;
  const spinner = setInterval(() => {
    process.stdout.write(colors.magenta('\r' + frames[i = ++i % frames.length]) + colors.yellow(' ' + message));
  }, interval);

  return {
    stop: (finalMessage = 'Done!') => {
      clearInterval(spinner);
      process.stdout.write(colors.cyan(`\r✔ ${finalMessage}\n`));
    }
  };
}


module.exports = { 
  createSpinner
}