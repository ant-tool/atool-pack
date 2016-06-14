import { createReadStream } from 'fs';
import zlib from 'zlib';
import tar from 'tar';
 
export default (filename, dir) => new Promise((resolve, reject) => {
  const stream = createReadStream(filename)
  const gunzip = zlib.createGunzip()
  gunzip.on('error', err => reject(err));
  const extracter = tar.Extract({
    path: dir,
    strip: 1,
  });
  extracter.on("error", err => reject(err));
  extracter.on("end", () => resolve());
  stream.pipe(gunzip).pipe(extracter);
});
