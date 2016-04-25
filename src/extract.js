import targz from 'tar.gz';

export default (filename, dir) => {
  return targz(null, {
    strip: 1,
  }).extract(filename, dir);
};
