let calcNumBtn = document.querySelectorAll(".num-btn");
let acBtn = document.getElementById("ac-btn");
let output = document.getElementById("calc-output2");
let equal = document.getElementById("equals-btn");
let clearBtn = document.getElementById("clear-btn");
let string = "";

const totalValue = calcNumBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget.value);
    string += e.currentTarget.value;
    output.innerHTML = string;
  });
  return string;
});

clearBtn.addEventListener("click", () => {
  string = string.slice(0, -1) || "";
  output.innerHTML = string || "0";
});

acBtn.addEventListener("click", (e) => {
  string = "";
  output.innerHTML = "0";
});

equal.addEventListener("click", () => {
  try {
    let expression = string.replace(/%/g, "/100*");
    let result = eval(expression);
    output.innerHTML = result;
    string = result.toString();
  } catch (err) {
    output.innerHTML = "Error";
  }
});

window.addEventListener("keydown", (e) => {
  let key = e.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "%", "."].includes(key)) {
    string += key;
    output.innerHTML = string;
  }

  if (key === "Enter" || key === "=") {
    try {
      let expression = string.replace(/%/g, "/100*");
      let result = eval(expression);
      output.innerHTML = result;
      string = result.toString();
    } catch (err) {
      output.innerHTML = "Error";
    }
  }

  if (key === "Backspace") {
    string = string.slice(0, -1) || "";
    output.innerHTML = string || "0";
  }

  if (key === "Escape") {
    string = "";
    output.innerHTML = "0";
  }
});
