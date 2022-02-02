//Object Enhancements Exercise
       //Same keys and values
function createInstructor1(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

       //Same keys and values ES2015

const createInstructor=(firstName,lastName)=>
{return {
    firstName,
    lastName
};}


   //Computed Property Names ES2015
var favoriteNumber1 = 42;
var instructor1 = {
  firstName: "Colt"
}
instructor1[favoriteNumber1] = "That is my favorite!";

//
/*let favoriteNumber =42;
const instructor={
    firstName:'colt',
    [favoriteNumber]:'That is my favorite!'
}*/


//Object Methods

var instructor1 = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
};

//Object Methods ES2015


const instructor={
    firstName:'Colt',
    sayHi(){return 'Hi'},
    sayBye(){return this.firstName + 'Says bye'}
};


//createAnimal function

function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
      
    }
  };