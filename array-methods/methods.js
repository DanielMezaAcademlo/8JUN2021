const users = [
  {
    name: "Erik",
    age: 29,
    email: "erik@academlo.com",
    social: [
      { name: "facebook", url: "facebook/erik" },
      { name: "twitter", url: "twitter/erik" },
      { name: "youtube", url: "youtube/erik" }
    ],
    gender: "Male"
  },
  {
    name: "Georg",
    age: 33,
    email: "georg@academlo.com",
    social: [{ name: "facebook", url: "facebook/georg" }],
    gender: "Male"
  },
  {
    name: "Andrea",
    age: 42,
    email: "andrea@hotmail.com",
    social: [
      { name: "facebook", url: "facebook/andrea" },
      { name: "twitter", url: "twitter/andrea" }
    ],
    gender: "Female"
  },
  {
    name: "Oscar",
    age: 31,
    email: "oscar@academlo.com",
    social: [
      { name: "facebook", url: "facebook/oscar" },
      { name: "github", url: "github/erik" }
    ],
    gender: "Male"
  },
  {
    name: "Daniela",
    age: 22,
    email: "andrea@uaq.mx",
    social: [
      { name: "facebook", url: "facebook/andrea" },
      { name: "twitter", url: "twitter/andrea" }
    ],
    gender: "Female"
  }
];

let numbers = [1, 2, 43, 56, 2, 9];

//FOREACH 1

// users.forEach((user, index, array) => {
//   //   console.log(
//   //     `El correo que está en la posición ${index} de nuestro array es ${element.email}`
//   //   );
//   console.log(array);
//   console.log(index);
//   console.log(user);
//   console.log(array[index]);
// });

//FOREACH 2
// const searchEmail = (user, index, array) => {
//   console.log(user);
// };

// users.forEach(searchEmail);

//FOREACH 3

// let mainArray2 = numbers.forEach(number => {
//   console.log(number * 2);
// });

// console.log(numbers);
// console.log(mainArray2);
//MAP
// let mainArray = numbers.map((number, index, array) => {
//   return number * 2;
// });

// console.log(numbers);
// console.log(mainArray);

// FILTER

// let filterArray = users.filter(user => {
//   return user.age >= 29 || user.email.endsWith("@academlo.com");
// });

// console.log(filterArray);
// console.log(users);

//FIND

// let findNumber = numbers.find(number => number > 10);

// let findArray = users.find(user => {
//   return user.age > 40;
// });

// console.log(findNumber);

// SOME

// let someArray = users.some(user => user.age > 29);
// console.log(someArray);

//DESESTRUCTURACION Y SPREAD OPERATOR

// const { name, email, age, ...rest } = users[0];

// console.log(name, email, age);
// console.log(rest.name);
