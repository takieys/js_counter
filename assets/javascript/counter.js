let incrementButton = document.querySelector("#increment");
let decrementButton = document.querySelector("#decrement");
let counter = document.querySelector("#counter");
incrementButton.addEventListener("click", function () {
  // Any code you write in here, will run every time incrementButton
  // is clicked.
  // Run the console.log function to display some text in the console:
  console.log("+ button clicked");
  let newCounterValue = Number(counter.innerHTML) + 1;
  if (newCounterValue >= 10) {
    counter.style.color = "red";
  }
  counter.innerHTML = newCounterValue;
}); // We have to close the curly braces and parentheses we opened above

decrementButton.addEventListener("click", function () {
  console.log("- button clicked");
  let newCounterValue = Number(counter.innerHTML) - 1;
  if (newCounterValue < 10) {
    counter.style.color = "black";
  }
  if (counter.innerHTML > 0) {
    counter.innerHTML = newCounterValue;
  }
  counter.innerHTML = newCounterValue;
});
