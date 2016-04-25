import pack from '../src';
import { join } from 'path';
import rimraf from 'rimraf';
import { mkdir } from 'shelljs';
import { assert } from 'chai';

describe('atool-pack', () => {

  const dir = join(__dirname, 'test');
  before(() => {
    mkdir('-p', dir);
  });

  after(() => {
    rimraf.sync(dir);
  });

  it('pack success' , function(done) {
    pack('rcf', dir).then(() => {
      done();
    });
  });

  it('pack error' , function(done) {
    pack('rcf1', dir).catch(err => {
      if (err) {
        done();
      }
    });
  });

  it('pack file' , function(done) {
    pack('rcf', dir).then(() => {
      const pkg = require(join(dir, 'package.json'));
      assert(pkg.name === 'rcf')
      done();
    });
  });

});