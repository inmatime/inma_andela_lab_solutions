
var findMissing = function (arr1, arr2) {
  // to get the sum of the array
	var totalnum = function(array){
		   var sum = 0;
		   for(var i = 0; i < array.length; i++){
		            sum += array[i];
		   }
		   return sum;
	};
	var total_arr1 = totalnum(arr1);
	var total_arr2 = totalnum(arr2);
	// conpare both arrays and get the difference if any
	if (total_arr1 === total_arr2) {
		return 0;
	}
	else {
	  // ensures a positive number is returned
		return Math.abs(total_arr1 - total_arr2);
	}
};