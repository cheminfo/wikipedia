import { expect, test } from 'vitest';

import { isInterestingMF } from '../is_interesting_mf.js';

test('isInterestingMF', async () => {
  expect(isInterestingMF('NO2')).toBe(false);
  expect(isInterestingMF('CN')).toBe(false);
  expect(isInterestingMF('C10H30O2N')).toBe(true);
  expect(isInterestingMF('C10H12O2NB')).toBe(false);
  expect(isInterestingMF('C10H20O2NCl')).toBe(true);
  expect(isInterestingMF('C5H20Cl')).toBe(false);
});
