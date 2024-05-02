// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


try {
  let res = sum(null);
  console.log(res);
} catch (error) {
  if (error instanceof TypeError) {
    console.error(error.name)
  } else {
    console.error('error')
  }
}


// 2.
// tests
function sayName(name) {
  if (typeof name !== 'string') {
    // when referncing the error objects error.name is === to error type,
    // error.message === manual message we gave our typeerror
    throw new TypeError("Invalid name! Must be a string!")
  } else {
    console.log(name)
  }
}
try {
  sayName("Alex");
  sayName(1);
} catch (error) {
  if (error instanceof TypeError) {
    console.error(error.message)
  } else {
    console.error('error')
  }

}

// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try{
greet()
}catch (e){
 console.error('hello world')
}
