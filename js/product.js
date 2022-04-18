
// function to check listbox validation
(function() {
const form = document.querySelector('#sectionForm');
const checkboxes = form.querySelectorAll('input[type=checkbox]');
const checkboxLength = checkboxes.length;
const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

function init() {
if (firstCheckbox) {
for (let i = 0; i < checkboxLength; i++) {
checkboxes[i].addEventListener('change', checkValidity);
}

checkValidity();
}
}

function isChecked() {
for (let i = 0; i < checkboxLength; i++) {
if (checkboxes[i].checked) return true;
}

return false;
}

function checkValidity() {
const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
firstCheckbox.setCustomValidity(errorMessage);
}

init();
})();
// function to check supplier name
function checkForm(){
var x = document.getElementById("sname").value;

if(x.length < 6){
   document.getElementById("error").innerHTML= "Must be atleast 6 character";
return false;
}
else if(x.search(/^[A-Za-z]\w{6,}$/) == -1){
   document.getElementById("error").innerHTML = "Must start with alphabet";
return false;
}
else{
   document.getElementById("error").innerHTML="";
return true;
}
}
