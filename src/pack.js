import osTmpdir from 'os-tmpdir';
import { join } from 'path';
import { ls, mkdir } from 'shelljs';
import npm from './npm';
import run from './run';

const pack = (pkg) => {
  const dir = join(osTmpdir(), `v${Math.random()}`);
  mkdir('-p', dir);
  return new Promise((resolve, reject) => {
    run(npm, ['pack', pkg], {
      cwd: dir,
      stdio: 'ignore',
    }, err => {
      if (err) {
        reject(err);
        return;
      }
      const files = ls(dir);
      if (files && files[0]) {
        resolve(join(dir, files[0]));
      } else {
        reject('can not find the package file');
      }
    });
  });
};

export default pack;
