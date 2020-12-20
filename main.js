var letsCookButton = document.querySelector('.lets-cook-button');
var cookpot = document.querySelector('.cookpot');
var youShouldMakeFood = document.querySelector('.you-should-make-food');
var youShouldMake = document.querySelector('.you-should-make');
var displayedFood = document.querySelector('.display-food');
var clearButton = document.querySelector('.clear-button');


// Event Listeners
letsCookButton.addEventListener('click', showMeTheFoody);
clearButton.addEventListener('click', clearFood);


// Toolkit Functions
function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length);
}

function grabArray(componentName) {
  if (componentName === 'side') {
    return sides;
  } else if (componentName === 'main-dish') {
    return mainDishes;
  } else {
    return desserts;
  }
}

function hide(item) {
  item.classList.add('hidden');
}

function unhide(item) {
  item.classList.remove('hidden');
}


// Event Handlers
function showMeTheFoody() {
  var type = document.querySelector('input[name="meal-component"]:checked').value;
  var foods = grabArray(type);
  displayedFood.innerText = `${foods[getRandomIndex(foods)]}!`;
  hide(cookpot);
  unhide(youShouldMakeFood);
  unhide(clearButton);
}

function clearFood() {
  unhide(cookpot);
  hide(youShouldMakeFood);
  hide(clearButton);
}
