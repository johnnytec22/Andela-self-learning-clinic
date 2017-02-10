'use strict'

var myApp = require('../app/library.js');




describe('Min-Max Numbers in a List: ', function () {

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

    it('should return [1,4] for [1, 2, 3 , 4]', function () {
      expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
    });

    it('should return [4, 6] for [6, 4]', function () {
      expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
    });

    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
    });

    it('should return [0, 20] for [8, 0, 2, 20, 17]', function () {
      expect(myApp.findMinMax([8, 0, 2, 20, 17])).toEqual([0, 20]);
    });

    it('should return [-1, 1] for [0, 0.5, 1, 0.2, 0.7, -1]', function () {
      expect(myApp.findMinMax([0, 0.5, 1, 0.2, 0.7, -1])).toEqual([-1, 1]);
    });

    it('should return [3, 35] for [3, 8, 11, 6, 35, 4]', function () {
      expect(myApp.findMinMax([3, 8, 11, 6, 35, 4])).toEqual([3, 35]);
    });
    it('should return [-10, 1] for [1, -6, -3, -9, -10]', function () {
      expect(myApp.findMinMax([1, -6, -3, -9, -10])).toEqual([-10, 1]);
    });
    it('should return [0, 1] for [0.9, 1, 0.5, 0.3, 0]', function () {
      expect(myApp.findMinMax([0.9, 1, 0.5, 0.3, 0])).toEqual([0, 1]);

    });

    

  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

    it('should return [4] for [4, 4, 4, 4]', function () {
      expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
    });





  });
});
