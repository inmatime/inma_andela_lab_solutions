module.exports={
	
 
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
