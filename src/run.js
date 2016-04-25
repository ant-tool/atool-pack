import c from 'child_process';
const spawn = c.spawn;

export default (cmd, args, options, cb) => {
  let hasError;
  const child = spawn(cmd, args, options);
  child.on('close', (code) => {
    if (code === 0) {
      cb(null, code);
    } else {
      if (!hasError) {
        cb(`${cmd} ${args.join(' ')}`);
      }
    }
  });
  child.on('error', err => {
    hasError = true;
    cb(`${cmd} ${args.join(' ')}\n\n${err.stack}`);
  });
};
