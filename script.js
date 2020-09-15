function validate() {
var zip = parseInt(document.getElementById('zip-input').value);
var toppings = [];
var toppingCheckboxes = document.getElementsByName('topping');
for (i = 0; i < toppingCheckboxes.length; i++) {
if (toppingCheckboxes[i].checked) {
toppings.push(toppingCheckboxes[i].value);
}
}
if (toppings.length > 3) {
alert("Error, you must have 3 or fewer toppings!");
return false;
}
else if (zip !== 98101) {
alert("Error, we only deliver to zip code 98101!");
return false;
} else {
return true;
}
}
function handleOrderClick() {
if (validate()) {
alert("Your order has been placed, thanks!");
}
}