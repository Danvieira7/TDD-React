import { max_number } from './index';
import { Item } from 'react-bootstrap/lib/Breadcrumb';

describe('max_number', () => {
    describe('givem an empty array', () => {
        it('returns 0', () => {
            expect(max_number([])).toEqual(0);
        });
    })
    describe('givem an array of number', () => {
        it('return the max number', () => {
            expect(max_number([1, 2, 3])).toEqual(3);
        });
    })
});