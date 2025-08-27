// src/domain/value-objects/Color.test.ts
import {describe, expect, it} from 'vitest';
import {Color} from '../../../domain/value-objects/Color.js';

describe('Color', () => {
  it('throws if not a valid hex color', () => {
    expect(() => new Color('not-a-hex')).toThrow('DOMAIN_EXCEPTION_INVALID_COLOR');
    expect(() => new Color('#12345')).toThrow('DOMAIN_EXCEPTION_INVALID_COLOR')
    expect(() => new Color('123456')).toThrow('DOMAIN_EXCEPTION_INVALID_COLOR')
    expect(() => new Color('#GGGGGG')).toThrow('DOMAIN_EXCEPTION_INVALID_COLOR')
    expect(() => new Color('#123456')).not.toThrow()
  });
});