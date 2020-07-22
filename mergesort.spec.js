describe("Split Array function", function () {
  it("is able to split an array into two halves", function () {
    // your code here

    expect(split([2, 5, 6, 4, 9, 8])).toEqual([
      [2, 5, 6],
      [4, 9, 8],
    ]);
  });

  it("is able to split an array into two halves (odd)", function () {
    expect(split([2, 5, 6, 4, 9, 8, 9])).toEqual([
      [2, 5, 6],
      [4, 9, 8, 9],
    ]);
  });
});

describe("Merge function", function () {
  it("EVEN is able to merge two sorted arrays into one sorted array", function () {
    // test the merging algorithm
    const resultArr = merge([2, 5, 6], [4, 9, 8]);

    //2,

    expect(resultArr.length).toEqual(6);

    expect(merge([2, 5, 6], [4, 9, 8])).toEqual([2, 4, 5, 6, 8, 9]);
  });

  it("ODD is able to merge two sorted arrays into one sorted array", function () {
    // test the merging algorithm
    const resultArr = merge([2, 5, 6], [4, 9, 8, 9]);

    expect(resultArr.length).toEqual(7);

    expect(merge([2, 5, 6], [4, 9, 8, 9])).toEqual([2, 4, 5, 6, 8, 9, 9]);
  });
});
