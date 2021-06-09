let demo = document.getElementById("demo");

function myDisplayer(suma) {
  let newContent = document.createElement("p");
  newContent.innerText = suma;
  demo.appendChild(newContent);
  //   demo.innerHTML = suma;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(6, 10);

myDisplayer(result);
