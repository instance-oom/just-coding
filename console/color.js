let black = (str) => {
  console.log(`\x1b[0;30m${str}\n\x1b[0m`);
}

let red = (str) => {
  console.log(`\x1b[0;31m${str}\n\x1b[0m`);
}

let green = (str) => {
  console.log(`\x1b[0;33m${str}\n\x1b[0m`);
}

let blue = (str) => {
  console.log(`\x1b[0;34m${str}\n\x1b[0m`);
}

let magenta = (str) => {
  console.log(`\x1b[0;35m${str}\n\x1b[0m`);
}

let cyan = (str) => {
  console.log(`\x1b[0;36m${str}\n\x1b[0m`);
}

let white = (str) => {
  console.log(`\x1b[0;37m${str}\n\x1b[0m`);
}

black(`I'm black ${new Date()}`);
red(`I'm red ${new Date()}`);
green(`I'm green ${new Date()}`);
blue(`I'm blue ${new Date()}`);
magenta(`I'm magenta ${new Date()}`);
cyan(`I'm cyan ${new Date()}`);
white(`I'm white ${new Date()}`);