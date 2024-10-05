// Write your code here!
// 1. Remove the <main> element with id 'main'
const main = document.getElementById('main');
main.remove();

// 2. Create a new <h1> element and assign it to a variable called 'newHeader'
const newHeader = document.createElement('h1');

// 3. Set the id of 'newHeader' to 'victory'
newHeader.id = 'victory';

// 4. Set the text of 'newHeader' to "George Yegon is the champion"
newHeader.textContent = 'George Yegon is the champion';

// 5. Append 'newHeader' to the body
document.body.appendChild(newHeader);
