// Ensure that we interact with the DOM only after it has fully loaded
document.addEventListener('DOMContentLoaded', function () {

  const inputBox = document.getElementById('input-box');
  const listContainer = document.getElementById('list-container');

  function addTask() {
      if (inputBox.value.trim() === '') { // also consider trimming the input to check for empty strings of spaces
          alert('You must write something');
      } else {
          let li = document.createElement('li');
          li.textContent = inputBox.value; // safer to use textContent
          listContainer.appendChild(li);
          let span = document.createElement('span');
          // using the correct Unicode format here
          span.textContent = '\u00D7'; // this represents the multiplication sign (×), often used to mean "close"
          li.appendChild(span);
          inputBox.value = '';
      }
  }

  // Trigger the addTask function when the button is clicked
  document.querySelector('button').addEventListener('click', addTask);

  // Also consider allowing the user to press "Enter" to add a task
  inputBox.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
          addTask();
      }
  });

  // Event delegation for list container
  listContainer.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
          e.target.classList.toggle('checked'); // Mark the task as completed
      } else if (e.target.tagName === 'SPAN') {
          e.target.parentElement.remove(); // Remove the task if the '×' span is clicked
      }
  }, false);

});
