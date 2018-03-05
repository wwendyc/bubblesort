describe('Bubble Sort', function(){
  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'comparisons').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts the array', function(){
    expect( bubbleSort([10, 8]) ).toEqual( [8, 10] );
    expect(swap.calls.count()).toEqual(1);
  });

  it('sorts the array', function () {
    expect( bubbleSort([100, 82, 5]) ).toEqual( [5, 82, 100] );
    expect(swap.calls.count()).toEqual(3);
  });

  it('sorts the array', function () {
    expect( bubbleSort([10, 4, 8, 3, 7, 9]) ).toEqual( [3, 4, 7, 8, 9, 10] );
    expect(swap.calls.count()).toEqual(8);
  })

  it('calls the comparison function', function(){
    let array = [10, 8];
    bubbleSort(array)
    expect(comparisons.calls.count()).toEqual(1);
   });

   it('', function () {
    let array2 = [100, 82, 5];
    bubbleSort(array2)
    expect(comparisons.calls.count()).toEqual(3);
   })

   it('', function () {
    let array3 = [10, 4, 8, 3, 7, 9];
    bubbleSort(array3)
    expect(comparisons.calls.count()).toEqual(15);
   })
});
