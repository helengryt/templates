var arr = [];
var minimum = function(arr){
for (var i = 0; i < arr.length; i++){
	var min = arr[i][0];
	for (var j = 0; j < arr[i].length; j++){
  		if (arr[i][j] < min){
    	min = arr[i][j];
    	} 
	} console.log(min)
}
} 

minimum([
   [1, 2, 3, 4, 5],       // minimum value of row is 1
   [5, 6, 7, 8, 9],       // minimum value of row is 5
   [20, 21, 34, 56, 100]  // minimum value of row is 20
 ]);


/*var arr = [];
function minimum(arr){
	for (var i = 0; i < arr.length; i++){
		let c = arr[i].reduce((prev, item) => {
			if (prev > item){
				return item
			} else {
				return prev
			} 
		}, arr[i][0]) 
		console.log(c);
	}
} 

minimum([
   [1, 2, 3, 4, 5],       // minimum value of row is 1
   [5, 6, 7, 8, 9],       // minimum value of row is 5
   [20, 21, 34, 56, 100]  // minimum value of row is 20
]);*/
