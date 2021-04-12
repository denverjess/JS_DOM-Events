/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

const header1 = document.getElementById("node1");
header1.textContent = "I used the getElementById(\"node1\") method to access this"

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

const header2 = document.getElementsByClassName("node2");
header2[0].textContent = "I used the getElementByClassName(\"node2\") method to access this"

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

const header3 = document.getElementsByTagName("h3");
for (let i = 0; i < header3.length; i++) {
    header3[i].innerHTML = "I used the getElementByTagName(\"h3\") method to access all of these"
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
const para = document.createElement("p");
para.textContent = "This node was created using the createElement() method"

// TODO: Append the created node to the parent node using the element.appendChild() method
const parent = document.getElementById("parent");
parent.appendChild(para);

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
const newElement = document.createElement("a");
newElement.textContent = "I am a <p> tag"

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(newElement, para);

// BONUS: Add a link href to the <a>

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
// TODO: Remove the "New Child Node"

/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
// BONUS - Make the red box go all the way around the perimeter of the green box */

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
