let inp; //text area
let clear;
let del;
let res;
let num;
let opr;
const index = [];
let output;

inp = document.getElementById('input');
num = document.querySelectorAll('#num');
for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", function () {
    inp.value += num[i].textContent;
  });
}


del = document.getElementById('del');
del.addEventListener("click", function(){
  str = inp.value;
  s = str.slice(0, -1);
  inp.value = s;
})

res = document.getElementById('res');
res.addEventListener('click', function () {
  str = inp.value;
  lastchar = str.charAt(str.length-1);
  firstchar =str.charAt(0)
  if((lastchar != '-') && (lastchar != '+') && (lastchar != 'x') && (lastchar != '÷') && (lastchar != '%')
      && (firstchar != 'x') && (firstchar != '÷') && (firstchar != '%'))
  {
  div = str.indexOf('÷')
  mul = str.indexOf('x')
  let result = str.replace(/÷/g, "/");
  let t = result.replace(/x/g, '*');
  let answer = eval(t);;
    inp.value = answer;
  }
  else{
    inp.value = "Nan"
  }
})