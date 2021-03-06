import { findIndex, find, createArray, removeIndex } from './array';
let { expect } = chai;

describe('array utils tests', () => {
  describe('findIndex tests', () => {
    it('returns -1 when there is no match in the array', () => {
      const array = [0, 1, 2];
      const index = findIndex(array, () => false);

      expect(index).equals(-1);
    });

    it('should return the correct index when the predicate satisfies the condition', () => {
      const array = [0, 1, 2];
      const index = findIndex(array, (elem: number) => elem === 1);

      expect(index).equals(1);
    });

    it('should return the first index when repeated elements satisfy the predicate', () => {
      const array = [0, 1, 2, 2];
      const index = findIndex(array, (elem: number) => elem === 2);

      expect(index).equals(2);
    });
  });

  describe('find tests', () => {
    it('returns -1 when there is no match in the array', () => {
      const array = [0, 1, 2];
      const item = find(array, () => false);

      expect(item).equals(undefined);
    });

    it('should return the correct item when the predicate satisfies the condition', () => {
      const array = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
      const item = find(array, (elem: { id: number }) => elem.id === 1);

      expect(item).equals(array[1]);
    });

    it('should return the first index when repeated elements satisfy the predicate', () => {
      const array = [8, 9, 10, 11];
      const item = find(array, (elem: number) => elem === 10);

      expect(item).equals(10);
    });
  });

  describe('createArray tests', () => {
    it('creates an array while invoking the callback', () => {
      let result = createArray(4, (index: number) => String.fromCharCode('a'.charCodeAt(0) + index));

      expect(result).to.deep.equal(['a', 'b', 'c', 'd']);
    });
  });

  describe('removeIndex tests', () => {
    it('should return a new array instead of mutating the existing array', () => {
      const array = [0, 1, 2];
      const result = removeIndex(array, 0);
      expect(result).to.not.equal(array);
    });

    it('should remove the first element of the array', () => {
      const array = [0, 1, 2];
      const result = removeIndex(array, 0);
      expect(result).to.deep.equal([1, 2]);
    });

    it('should remove the last element of the array', () => {
      const array = [0, 1, 2];
      const result = removeIndex(array, 2);
      expect(result).to.deep.equal([0, 1]);
    });

    it('should remove the element in the middle of the array', () => {
      const array = [0, 1, 2];
      const result = removeIndex(array, 1);
      expect(result).to.deep.equal([0, 2]);
    });
  });
});