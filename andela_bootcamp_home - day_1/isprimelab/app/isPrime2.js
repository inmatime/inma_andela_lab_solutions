PrimeChecker (num){
 var primeNumbers=[];
 // loop to iterate the through 1 to n
  for (var i = 0; i <= num; i++)  	   
      { 		 		  
         var count=0; 
         
         // loop to check for prime numbers
         for(j =i; j>=1; j--)
         {
	    if(i%j===0)
	    {
		count = count + 1;
	    }
	 }
	 if (count ==2)
	 {
	    //Appended the Prime number to the array
	    primeNumbers.push(i);
	 }	
      }	
      return primeNumbers;
}

isPrime(100);

