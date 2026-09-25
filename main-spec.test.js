import {expect, test} from '@jest/globals';
import { testOne } from './main.js';

test("Should return 1", () => {
    expect(testOne()).toBe(1)
});