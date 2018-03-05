describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(tootsiepop, 'lick').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts the array', function(){
    expect( bubbleSort([10, 8]) ).toEqual( [8, 10] );
    expect( bubbleSort([100, 82, 5]) ).toEqual( [5, 82, 100] );
    expect( bubbleSort([10, 4, 8, 3, 7, 9]) ).toEqual( [3, 4, 7, 8, 9, 10] );
  });

  it('calls the swap function', function(){
   let array = [10, 8];
   bubbleSort(array)
   expect( swap.calls.count ).toEqual(1);
  });
});
