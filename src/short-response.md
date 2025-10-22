# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1
this is a scope error,the variable currentStatus is being called out side the if else statement (aka its being called in  global scope rather then with in thestatement).To fix this error we simply create the currentStatus function before the if else statement and get rid of else.
ex:
```javascript
const react = (isReuben) => {
    let currentStatus = 'Time to panic.'
    if (isReuben) {
        currentStatus = 'Everything is just fine';
    }
  
  console.log(currentStatus);
}


### Question 2
It will log "Michael Jordan" because when we 'copy' bestPlayer into theGoat it didn't copy the objects values rather it copy the refrence number/space of the object.
```javascript
bestPlayer.name = "Michael Jordan";
```
This means that when we changed bestPlayer theGoat will change along with it because it is refering to that object originally.

### Question 3
It will print out 
Paul is the hardest working person in the room.
Laisha is the hardest working person in the room.
because the order in which the fuctions were called and the scope of the variable.
tho its not best pratice since it can throw errors and side effects variable names can be the same name in different scope for example the one at the out side (const theHustler) is a global scope while the one in shout out is inside function scope.


### Question 4
Rest parameters are basically a place holder for when we don't know how many arguments we will receive.
ex:
```javascript
function example (...arr){

}
example(arr1,arr2);
example(arr1,arr2,arr3,...arr8);
```
This means the example fuction will work regardless of the amount of parameters given.Only limitation would be one rest parameters per fuction so
```javascript
function example (...arr,...arr2){

}
```
will cause an syntax error.

### Question 5
According to MDN "The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa"

You can think of scope like folders in a filing cabinets,for example if you access the A cabinet all the files inside that cabinet you can use but cant use any in the be section because you are in A but you can close a to go into B but won't be able to use any a label folders.
```javascript
const x ="can be use anywhere"//a global variable(part of global scope)

function example(){
    const y ="can only be used here";//a example of function scope
    console.log(x);//on seprate console logs to print on different lines in terminal
    console.log(y);
}

function example2(){
    const z ="only be used in example two";
    console.log(x);//accessing a global variable
    console.log(y);//will cause scope error because y is not defined with in this function or globally
    console.log(z);//with in fuction scope
}
```
The code above can be seen as the cabinet a and with in a seprate folders that stores information each folder knows that it exist such is why example and example 2 can use variable x but can not know what is inside one another which is why example2 can not use examples y variable.

### Question 6
Modules are like a buissnes in which it hire employees for certain task.For example a bakery,there are bakers,casheirs,cleaners and such in which they interact and sometimes use eachothers tools but their main task is the same throughout.ex: baker is to bake the goods not clean but may use a cleaners rag to wipe down their work station to start the next batch of goods.
```javascript
//exporting with in the clearers file
module.exports = cleaner;
//import with in the bakers file to have access to the cleaning rag
const example = require('./cleaner.js');
```
the example above is showing how we are exporting the cleaners tools and then the next line with in the bakers file at the top(usally first few line of code) will import the clearners tools so that the baker can have access to the cleaning rag.
### Question 7
fruits out put will be 'apple', 'banana', 'cherry', 'date'
fruitMinusOne will be 'apple', 'banana', 'cherry'
This is because the function removeLastPurely copies the array values rather then the arrays refence it will not change the original array (in this case fruits array).

we would want to avoid mutating the original array because if we call upon the fruit array later on lets say for a recipe the out come will come out wrong because its missing an ingredient (throw an error sometimes) or call upon fruitsMinusOne again and again instade of just one fruit it will eventually delete all leaving the original fruit array empty.

### Question 8
I would personally use object with in an object so I can save the item by name (key) to quickly acess an then get all the information of said item like quantity (how many we want) and price of the item and later on add more fetures such as if the item is part of the prime feture or not in a boolean.
```javascript
//declaration of shopping cart
const shoppingCart =()=>{
    const items ={//decloration of the item object
        DVD:{quantity:2,price:10.99},//the key of object or aka objects name in which information such as amount and price of object and maybe later on want to add a isPrime boolean value
        candy:{quantity:5,price:2.99}
    };
}

```