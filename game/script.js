var i = 0;
var j = 0;
var k = 0;
var select = 1;
let c;
var n1 = name1.value;
var n2 = name2.value;
function makeid() {
      c = select % 2;
      if (c == 0) {
            i = Math.floor(Math.random() * 6)
            i = i + 1;
            if (k > 0) {

                  document.getElementById('block2_' + k).innerHTML = k;
                  document.getElementById('block2_' + k).style = "  background-color:rgb(200, 245, 217) ";

            }
            k = k + i;
            if (k > 20) {
                  k = k - i;
            }
            document.getElementById('code').innerHTML = name2.value + " move " + i;
            if (k <= 20) {

                  document.getElementById('block2_' + k).innerHTML = name2.value;
                  document.getElementById('block2_' + k).style = "background-color: black; color: white;boder:none;";
            }
            if (k == 20) {
                  document.getElementById("alert").innerHTML = name2.value + " win";
               
            }
            select = select + 1;
      }
      else if (c > 0) {
            i = Math.floor(Math.random() * 6)
            i = i + 1;
            if (j > 0) {
                  document.getElementById("block" + j).innerHTML = j;
                  document.getElementById("block" + j).style = "background-color: rgb(200, 245, 217)";

            }
            j = j + i;
            if (j > 20) {
                  j = j - i;
            }
            document.getElementById('code').innerHTML = name1.value + " move " + i;
            if (j <= 20) {
                  document.getElementById("block" + j).innerHTML = name1.value;
                  document.getElementById("block" + j).style = " background-color: white; color : black;boder:none;";

            }
            if (j == 20) {
                  document.getElementById("alert").innerHTML = name1.value + " win";
                  
            }
            select = select + 1;
      }
}
function set_name() {
      document.getElementById("block_1").innerHTML = "P1: " + name1.value;
      document.getElementById('block_2').innerHTML = "P2: " + name2.value; document.getElementById('second_page').style = "display:block;";
      document.getElementById('first_page').style = "display:none;";
}