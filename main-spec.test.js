import {expect, test} from '@jest/globals';
import { knightMoves, testOne } from './main.js';

test("Should return 1", () => {
    expect(knightMoves([0,0], [1,2])).toEqual([[0, 0], [1, 2]])
});