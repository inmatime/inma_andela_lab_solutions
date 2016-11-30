module.exports={ 
getPrimes: function(num){
  var prime=[];
         var k=2;
         var primenum=[];
  
 
        /* Generate all numbers between 1 to n,
           Initially assigned zero value */
       for(var i = 2; i <= num; i++){
            prime[i] = 0;
        }
 
        while(k <= Math.sqrt(num)){ 
          for(var j = 2; num >= k*j; j++){
             /*Marked multiple of number as 1 Those numbers which marked 1 are not a prime number
              */
              prime[k*j] = 1;
           }
          k++; 
      }
 
       //collate prime numbers 
       for(var n = 2; n <= num; n++) { 
          if(prime[n] === 0) {
            primenum.push(n);
            
          }
       }
  return primenum;    
}
}
