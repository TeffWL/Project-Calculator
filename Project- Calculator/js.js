
// Функция getValue принимает аргумент btn и присваивает его значению переменной op.

function getValue(btn) {
  op = btn.value;
}
let display = document.getElementById("display");
// Функция clear1 очищает значение элемента display, устанавливая его равным пустой строке.
function clear1() {
    display.value = "";
}
// Функция calc вычисляет значение выражения, записанного в элементе display, с помощью eval и присваивает результат обратно в элемент display.
function calc() {
    display.value = eval(display.value);
}

// Функция press принимает аргумент x и добавляет его значение к текущему значению элемента display.
function press(x) {
    display.value += x;
}
/* chek 


function getValue(btn) {
    console.log(btn.value);
  }
  */







































/*
document.getElementById("num1").addEventListener("click", function() {
    var textElement = document.createElement("text");
    textElement.textContent = "1";
    document.getElementById("text").appendChild(textElement);
  });
  document.getElementById("num2").addEventListener("click", function() {
    var textElement = document.createElement("text");
    textElement.textContent = "2";
    document.getElementById("text").appendChild(textElement);
  });
  document.getElementById("num3").addEventListener("click", function() {
    var textElement = document.createElement("text");
    textElement.textContent = "3";
    document.getElementById("text").appendChild(textElement);
  });
  document.getElementById("num4").addEventListener("click", function() {
    var textElement = document.createElement("text");
    textElement.textContent = "4";
    document.getElementById("text").appendChild(textElement);
  });
  document.getElementById("num5").addEventListener("click", function() {
    var textElement = document.createElement("text");
    textElement.textContent = "5";
    document.getElementById("text").appendChild(textElement);
  });
  document.getElementById("num6").addEventListener("click", function() {
    var textElement = document.createElement("text");
    textElement.textContent = "6";
    document.getElementById("text").appendChild(textElement);
  });
  document.getElementById("num7").addEventListener("click", function() {
    var textElement = document.createElement("text");
    textElement.textContent = "7";
    document.getElementById("text").appendChild(textElement);
  });
  document.getElementById("num8").addEventListener("click", function() {
    var textElement = document.createElement("text");
    textElement.textContent = "8";
    document.getElementById("text").appendChild(textElement);
  });
  document.getElementById("num9").addEventListener("click", function() {
    var textElement = document.createElement("text");
    textElement.textContent = "9";
    document.getElementById("text").appendChild(textElement);
  });
  document.getElementById("num0").addEventListener("click", function() {
    var textElement = document.createElement("text");
    textElement.textContent = "0";
    document.getElementById("text").appendChild(textElement);
  });
*= 
document.getElementById("plus").addEventListener("click", function() {
    var textElement = document.createElement("signs_1");
    textElement.textContent = "+";
    document.getElementById("text").appendChild(textElement);
  });
  document.getElementById("minus").addEventListener("click", function() {
    var textElement = document.createElement("signs_1");
    textElement.textContent = "-";
    document.getElementById("text").appendChild(textElement);
  });
  document.getElementById("multiply").addEventListener("click", function() {
    var textElement = document.createElement("signs_1");
    textElement.textContent = "*";
    document.getElementById("text").appendChild(textElement);
  });
  document.getElementById("divide").addEventListener("click", function() {
    var textElement = document.createElement("signs_1");
    textElement.textContent = "/";
    document.getElementById("text").appendChild(textElement);
  });*/ 