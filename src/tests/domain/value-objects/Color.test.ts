import assert from 'assert';
import {Color} from '../../../domain/value-objects/Color.js';

describe('Color', () => {
  it('throws if not a valid hex color', () => {
    assert.throws(() => new Color('not-an-hex'))
    assert.throws(() => new Color('not-a-hex'), 'DOMAIN_EXCEPTION_INVALID_COLOR');
    assert.throws(() => new Color('#12345'), 'DOMAIN_EXCEPTION_INVALID_COLOR')
    assert.throws(() => new Color('123456'), 'DOMAIN_EXCEPTION_INVALID_COLOR')
    assert.throws(() => new Color('#GGGGGG'), 'DOMAIN_EXCEPTION_INVALID_COLOR')
    assert.equal(new Color('#123456').getValue(), '#123456')
  });
});