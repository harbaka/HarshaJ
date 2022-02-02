//ex
// #1
    //What does the following code return?
    //new Set([1,1,2,2,3,4])
    //3,4


// #2
   //What does the following code return?
   //[...new Set("referee")].join("")
   //['ref']


// #3
  // What does the Map m look like after running the following code?
   
  let m = new Map();
  m.set([1,2,3], true);
  m.set([1,2,3], false);
  //{[1,2,3]: true,[1,2,3]: false}

// hasDuplicate
//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
  const hasDuplicate=(arr)=>
  {    
      
      //const arrSet=new Set(arr);
    return  [...new Set(arr)].length===arr.length ? false:true

  }

// vowelCount
//Write a function called vowelCount which accepts a string and returns a map where the keys are vovles and the values are the count of the vowels in the string.
function vowelCount(word){
   const simple=word.toLowerCase()
   const vowel=['a','e','i','o','u'];
   const wordAr=[...simple];
   const results=new Map();
   for(let i=0;i<vowel.length;i++)
   {  let  count=0;
       for(let j=0;j<wordAr.length;j++)
       {
           if(vowel[i]===wordAr[j])
           {
               count++;
           }
           
       }
       if(count!==0)
           {
               
               results.set(vowel[i],count);
           }

   }
   return results;
};