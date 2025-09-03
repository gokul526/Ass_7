function getValues() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  return { n1, n2 };
}

function showResult(value) {
  document.getElementById("result").innerText = value;
}

function add() {
  let { n1, n2 } = getValues();
  showResult(n1 + n2);
}

function sub() {
  let { n1, n2 } = getValues();
  showResult(n1 - n2);
}

function mul() {
  let { n1, n2 } = getValues();
  showResult(n1 * n2);
}

function div() {
  let { n1, n2 } = getValues();

    showResult(n1 / n2);
  
}

function square() {
  let { n1 } = getValues();
  showResult(n1 * n1);
}

function cube() {
  let { n1 } = getValues();
  showResult(n1 * n1 * n1);
}
