var letsCookButton = document.querySelector('.lets-cook-button');

// Event Listeners
letsCookButton.addEventListener('click', showMeTheFoody);


// Event Handlers and Other Functions
function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length);
}


function showMeTheFoody() {
  var userSelection = document.querySelector('input[name="meal-component"]:checked').value;
  alert(getRandomIndex(userSelection));
}
