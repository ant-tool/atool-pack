import pack from '../src';
import { join } from 'path';
import rimraf from 'rimraf';
import { mkdir } from 'shelljs';
import { assert } from 'chai';
import { readFileSync } from 'fs';

describe('atool-pack', function() {
  this.timeout(0);

  const dir = join(__dirname, 'test');
  before(() => {
    mkdir('-p', dir);
  });

  after(() => {
    rimraf.sync(dir);
  });

  it('pack success' , function(done) {

    this.timeout(0);
    pack('rcf', dir).then(() => {
      const content = readFileSync(join(dir, 'lib/index.js'));
      if (content) {
        done();
      } else {
        done('err')
      }
    }).catch(err => console.log(err));
  });

  it('pack error' , function(done) {
    pack('rcf1', dir).catch(err => {
      if (err) {
        done();
      }
    });
  });

});