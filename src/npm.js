import shelljs from 'shelljs';

const array = ['tnpm', 'cnpm', 'npm'];
let npm = 'npm';

for (let i = 0; i < array.length; i++) {
  const item = array[i];
  if (shelljs.which(item)) {
    npm = item;
    break;
  }
}

if (process.platform === "win32") {
  npm+='.cmd';
}

export default npm;
