//Refactor it to use the rest operator & an arrow function:
const filterOutOdds=(...nums)=>nums.filter((val)=>val%2===0);

//findMin
const findMin=(...numbers)=> Math.min(...numbers);


//mergeObjects
const mergeObjects=(ObjectOne,objectTwo)=>
{
    return {...ObjectOne,...objectTwo}
}



//doubleAndReturnArgs
const doubleAndReturnArgs= (arr,...num)=>{
    let double= num.map((val)=>{
        return val*2
    });
    return[...arr,...double]
}


/** remove a random element in the items array
and return a new array without that item. */

const removeRandom=(items)=> {
    
    let i=Math.floor(Math.random()*items.length-1);
    return [...items.slice(0,i),...items.slice(i+1)]
 
}

/** Return a new array with every item in array1 and array2. */

const extend=(array1, array2) => [...array1,...array2];



/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal=(obj,key,val) =>
{return {...obj,[key]:val}} 

//or
const addKeyVal2=(obj,key,val) =>
{
    const objn={...obj};
     objn[key]=val;
     return objn
} 





/** Return a new object with a key removed. */

const removeKey=(obj, key)=> {
    const newObj={...obj};
    delete newObj[key];
    return newObj;

}


/** Combine two objects and return a new object. */

const combine=(obj1, obj2)=> {
    return{...obj1,...obj2}
}



/** Return a new object with a modified key and value. */

const update=(obj, key, val) =>({...obj,[key]:val}) ;
    
    