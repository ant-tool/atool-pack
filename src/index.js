import { resolve, dirname } from 'path';
import { mkdir } from 'shelljs';
import rimraf from 'rimraf';
import pack from './pack';
import extract from './extract';

const cwd = process.cwd();

export default (name, dir) => {
  let defaultName;
  if (name.indexOf('@') === 0) {
    defaultName = name.split('/')[1].split('@')[0];
  } else {
    defaultName = name.split('@')[0];
  }

  // like copy
  let realDir;
  if (dir.charAt(dir.length - 1) === '/') {
    realDir = resolve(cwd, dir, defaultName);
  } else {
    realDir = resolve(cwd, dir);
  }

  let temp;

  return pack(name)
    .then(filename => {
      temp = dirname(filename);
      return filename;
    })
    .then(filename => {
      mkdir('-p', realDir);
      return extract(filename, realDir);
    })
    .then(() => {
      rimraf.sync(temp);
    }).catch(err => {
      if (temp) {
        rimraf.sync(temp);
      }
      throw err;
    });
};
