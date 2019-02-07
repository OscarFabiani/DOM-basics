window.onload = function() {
  let h1 = document.createElement('h1');
  let h1Text = document.createTextNode('Oh herro');
  h1.appendChild(h1Text);
  document.body.appendChild(h1);
  window.alert('h1 created');
}
function myAlert() {
  window.alert('Test header clicked!');
  window.alert(document.getElementById('start'));
  window.alert(document.getElementsByClassName('container'));
  window.alert(document.getElementsByTagName('button'));
}
function myChange() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
function myChange2() {
  document.getElementById('demo2').innerHTML = 'Text changed!';
  document.getElementById('demo2').style.color = 'blue';
}