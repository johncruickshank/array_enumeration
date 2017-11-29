var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = arr1;
		arr2.forEach(function(item) {
			newArray.push(item);
		});
		return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(item => item ** 2);
	},

	sum: function (arr) {
    var total = 0;
    arr.forEach(function(item) {
      total += item;
    });
    return total;
	},

	findDuplicates: function (arr) {
		var newArray = [];
		arr.sort();
		for (var i = 0; i < (arr.length - 1); i++) {
			if (arr[i] === arr[i + 1]) {
				newArray.push(arr[i]);
			}
		}
		for (var i = 0; i < (newArray.length - 1); i++) {
			if (newArray[i] === newArray[i + 1]) {
				newArray.splice(i, 1);
			}
		}
		return newArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(item => item !== valueToRemove);
	},

	findIndexesOf: function (arr, itemToFind) {
		var results = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === itemToFind) {
				results.push(i);
			};
		};
		return results;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var result = 0;
		var newArray = arr.filter(item => (item % 2 == 0));
		var newerArray = this.square(newArray);
		return this.sum(newerArray);
	}
}

// myArray.forEach(function(item, index) {
// console.log(item, index);
// })

module.exports = arrayTasks
