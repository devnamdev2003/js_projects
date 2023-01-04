
function size() {
      var input = document.getElementById("numbers");
      input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                  event.preventDefault();
                  document.getElementById("answer_btn").click();
            }
      });
      let numbers_width = document.getElementById('numbers');
      let f_row_height = document.getElementById('f_row');
      numbers_width.style.height = (f_row_height.offsetHeight - 10) + 'px';
      let table_width = document.getElementById('tab_btn');
      let body_width = document.getElementById('body_tag').offsetWidth;
      table_width.style.left = ((body_width - table_width.offsetWidth) / 2) + "px";
}
function print(op) {
      let number = document.getElementById('numbers');
      number.value = number.value + op;
}
function ans() {
      let number = document.getElementById('numbers');
      for (let i = 0; i < number.value.length; i++) {
            if (number.value[i] == '*' || number.value[i] == '+' || number.value[i] == '-' || number.value[i] == '/') {
                  let num1 = number.value.slice(0, i);
                  let num2 = number.value.slice(i + 1, number.value.length + 1);
                  if (number.value[i] == '*') {
                        number.value = (+num1) * (+num2);
                  }
                  else if (number.value[i] == '+') {
                        number.value = (+num1) + (+num2);
                  }
                  else if (number.value[i] == '/') {
                        number.value = (+num1) / (+num2);
                  }
                  else if (number.value[i] == '-') {
                        number.value = (+num1) - (+num2);
                  }
            }
      }
}