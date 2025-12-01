# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

This is a `ReferenceError`, and that error occurs because of a _scope bug_. The variable `currentStatus` is being referenced outside of the `block-scope` where it was originally defined. Since let variables are `block-scoped`, anything declared inside an` if or else` block cannot be referenced outside that block.

To fix this, we just need to declare `currentStatus` in the outer function scope before the if statement, so it can be reassigned inside the conditional blocks and still be accessible when we log it.
ex:

```javascript
const react = (isReuben) => {
  let currentStatus = "Time to panic.";
  if (isReuben) {
    currentStatus = "Everything is just fine";
  }

  console.log(currentStatus);
};
```

This removes the need for an else and ensures currentStatus is available outside the block-scope of the if statement.

### Question 2

It will log "Michael Jordan" because when we “copied” `bestPlayer` into `theGoat`, we didn’t actually copy the object’s values. Instead, we copied the **reference** — the memory address that points to the same object.

In JavaScript, objects are passed by reference, not by value. This means variables don’t store the object itself; they store a reference to the object’s location in memory. So when we do:

```javascript
const theGoat = bestPlayer;
```

both variables now point to the exact same object.

Then, when we run:

```javascript
bestPlayer.name = "Michael Jordan";
```

we’re not changing a separate copy — we’re mutating the single shared object in memory. Because `theGoat` references that same object, its .name property appears updated too.

So the behavior you’re seeing happens because objects in `JavaScript` are not automatically duplicated — assigning them to another variable only passes along the reference, which is why both variables reflect the same mutation.

### Question 3

It will print:
Paul is the hardest working person in the room.
Laisha is the hardest working person in the room.

This happens because of the order in which the functions are called and because each `theHustler` variable exists in a different scope.

Even though both variables have the same name, they don’t interfere with each other because `JavaScript` allows variables with identical names as long as they are in different scopes. The one outside the function is in global (or outer) scope, and the one inside shoutOut() is in function scope.

This isn’t best practice, because using the same variable name in multiple scopes can lead to confusion, bugs, or accidental shadowing. In this case, `theHustler` inside the function shadows the outer `theHustler`, but both still work because `JavaScrip`t resolves each variable based on where it’s declared.

### Question 4

_Rest parameters_ are basically a placeholder for when we don’t know how many arguments a function will receive.

Example:

```javascript
function example(...arr) {}
example(arr1, arr2);
example(arr1, arr2, arr3, ...arr8);
```

This means the example function will work no matter how many arguments are passed in, because the rest parameter groups all remaining arguments into a single array.

The only limitation is that a function can have only one rest parameter, and it must be the last parameter. So something like:

```javascript
function example (...arr,...arr2){

}
```

will throw a syntax error, because `JavaScript` doesn’t allow multiple rest parameters.

### Question 5

According to MDN:
“The scope is the current context of execution in which values and expressions are visible or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.”

You can think of scope like folders in a filing cabinet.
If you open the A cabinet, you can use all the files inside A, but you can’t use files from the B cabinet while you're still inside A. You’d have to close A and open B—but even then, you can’t suddenly use A’s files unless you go back to that cabinet.

That’s basically how scope works in `JavaScript`.

```javascript
const x = "can be use anywhere"; //a global variable(part of global scope)

function example() {
  const y = "can only be used here"; //a example of function scope
  console.log(x); //on separate console logs to print on different lines in terminal
  console.log(y);
}

function example2() {
  const z = "only be used in example two";
  console.log(x); //accessing a global variable
  console.log(y); //will cause scope error because y is not defined with in this function or globally
  console.log(z); //with in function scope
}
```

In this analogy:

The _global scope_ is the entire cabinet.

Each function (example and example2) is its own folder inside the cabinet.

Both folders can see the global cabinet’s files (x), because parent scopes are always visible.

But the folders cannot see each other’s files, which is why example2 cannot access y.

This is why x works everywhere, but y and z only work inside the functions where they are defined.

### Question 6

Modules are like a business where each employee has a specific job.
Think of a bakery: you have bakers, cashiers, and cleaners. They might interact with each other and occasionally borrow tools, but each role has its main responsibility. For example, the baker’s main job is to bake—not to clean—but they might still use the cleaner’s rag to wipe down their station before starting a new batch.

```javascript
//exporting with in the cleaners file
module.exports = cleaner;
//import with in the bakers file to have access to the cleaning rag
const example = require("./cleaner.js");
```

In this example, the cleaner file exports its tools, and then the baker file imports them. This allows the baker to reuse something that doesn’t belong to their own role—just like using the cleaner’s rag—without needing to rewrite or recreate it.

That’s the idea behind modules:
each file has its own job, but they can share tools when needed by exporting and importing.

### Question 7

fruits will output:
'apple', 'banana', 'cherry', 'date'

fruitMinusOne will output:
'apple', 'banana', 'cherry'

This happens because the function `removeLastPurely `copies the array’s values instead of copying the array’s reference. Since it creates a new array rather than modifying the original, the original fruits array stays unchanged.

We want to avoid mutating the original array because that can cause unexpected bugs later. For example, if we use the fruits array later in a recipe, the result could be wrong if items were removed earlier. Or, if a function keeps removing items every time it runs, the array could eventually become empty, breaking other parts of the program.

_Pure functions_ prevent those problems by returning new data instead of modifying the original—keeping our data safe and predictable.

### Question 8

I would personally use an object-within-an-object structure so I can store each item by name (as a key) and quickly access all of its information—like quantity (how many we want) and price. Later on, we could easily add more features, such as a boolean that marks whether the item is a Prime item or not.

```javascript
//declaration of shopping cart
const shoppingCart = () => {
  const items = {
    //decloration of the item object
    DVD: { quantity: 2, price: 10.99 }, //the key of object or aka objects name in which information such as amount and price of object and maybe later on want to add a isPrime boolean value
    candy: { quantity: 5, price: 2.99 },
  };
};
```

This structure makes it simple to:

Look up items by name

Update quantity or price

Add new properties later (e.g., isPrime: true)

Expand the cart without changing how everything works

Using nested objects keeps the cart organized, scalable, and easy to maintain.
