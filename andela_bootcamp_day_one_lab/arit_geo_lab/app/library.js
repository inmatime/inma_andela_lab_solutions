module.exports={
	
aritGeo: function(arr){
    	var arthCount=0;
        var geoCount=0;
           if(arr.length == 0){
                 return 0; 
            }
        for (var i=0;i<arr.length-2;i++){
          
            if(arr[i+1]-arr[i]===arr[i+2]-arr[i+1]){
                 arthCount++;
            }
            else if(arr[i+1]/arr[i] ===arr[i+2]/arr[i+1]){
                 geoCount++;
            }
           
            else return -1;
        }
         if(arthCount===arr.length-2)
             return "Arithmetic";
         else if(geoCount===arr.length-2)
             return "Geometric";
} ,  
findMinMax:function (arr){ 
     var minMax = []; 
     var maxValue = arr[0]; 
     var minValue = arr[0];
      for(var i=1;i < arr.length;i++){  
        if(arr[i] > maxValue){  
          maxValue = arr[i];  
        }
        else if(arr[i] < minValue){  
          minValue = arr[i];  
        }  
       }
       if(minValue==maxValue){
        minMax.push(minValue);
       }
       else{
          minMax.push(minValue);
      minMax.push(maxValue);
  }
      
      return minMax;
},

fizzBuzz: function(num) {
  if (num % 15 === 0){
    return 'FizzBuzz';
  } else if(num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0 ) {
    return 'Buzz';
  } else {
    return num;
  }
}


}