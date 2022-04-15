# Assignment3.2

## Need of Call(),Bind(),Appl()

Call, Bind and Apply methods are used to  set the `this` keyword independent of how the function is called.

## ****Bind( )****

The bind method creates a new function and sets the `this` keyword to the specified object.

For example:
Let’s suppose we have two person objects and greetings function .

We can use the `bind` method on the `greeting`function to bind the `this` keyword to `john` and `jane`objects.As below 

```jsx
const john = {
  name: 'John',
  age: 24,
};
const jane = {
  name: 'Jane',
  age: 22,
};
function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}
const greetingJohn = greeting.bind(john);
// Hi, I am John and I am 24 years old
greetingJohn();
const greetingJane = greeting.bind(jane);
// Hi, I am Jane and I am 22 years old
greetingJane();
```

## Call()

The call method sets the `this` inside the function and immediately executes that function.

The difference between `call()` and `bind()` is that the `call()` sets the `this` keyword and executes the function immediately and it does not create a new copy of the function, while the `bind()` creates a copy of that function and sets the `this` keyword.

Example.

```jsx
function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}
const john = {
  name: 'John',
  age: 24,
};
const jane = {
  name: 'Jane',
  age: 22,
};
// Hi, I am John and I am 24 years old
greeting.call(john);
// Hi, I am Jane and I am 22 years old
greeting.call(jane);
```

Above example is similar to the `bind()` example except that `call()`does not create a new function. We are directly setting the `this`keyword using `call()`.

## Apply()

The `apply()`method is similar to `call().`The difference is that the `apply()`method accepts an array of arguments instead of comma separated values.

For Example.

```jsx
function greet(greeting) {
  console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}
const john = {
  name: 'John',
  age: 24,
};
const jane = {
  name: 'Jane',
  age: 22,
};
// Hi, I am John and I am 24 years old
greet.apply(john, ['Hi']);
// Hi, I am Jane and I am 22 years old
greet.apply(jane, ['Hola']);
```

The bind method creates a copy of the function and sets the `this` keyword, while the call and apply methods sets the `this` keyword and calls the function immediately.