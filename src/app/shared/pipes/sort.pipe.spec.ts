import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });
  it('Should be the same order', () => {
    const pipe = new SortPipe();
    const arr = [
      { a: 1, b: 1 },
      { a: 2, b: 2 },
    ];
    const expectedResult = [
      { a: 1, b: 1 },
      { a: 2, b: 2 },
    ];
    const result = pipe.transform(arr, 'b');
    expect(result).toEqual(expectedResult);
  });
  it('Should be the reverse order', () => {
    const pipe = new SortPipe();
    const arr = [
      { a: 2, b: 2 },
      { a: 1, b: 1 },
    ];
    const expectedResult = [
      { a: 1, b: 1 },
      { a: 2, b: 2 },
    ];
    const result = pipe.transform(arr, 'b');
    expect(result).toEqual(expectedResult);
  });
  it('Should be the same', () => {
    const pipe = new SortPipe();
    const arr = [
      { a: 2, b: 2 },
      { a: 2, b: 2 },
    ];
    const expectedResult = [
      { a: 2, b: 2 },
      { a: 2, b: 2 },
    ];
    const result = pipe.transform(arr, 'b');
    expect(result).toEqual(expectedResult);
  });
});
