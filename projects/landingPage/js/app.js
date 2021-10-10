/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Global Variables Definition
*/

// Add all the sections in the index.html to indexSections
// querySelectorAll(), to return a list of the sections
const indexSections = document.querySelectorAll('section');

// Getting our navbar list, from index.html
const indexNavbar = document.querySelector('#navbar__list');



/**
 * Start Helper Functions
 * 
*/
// Function for creating list item.
function createListItem(listItem, id, name){
    // Template literals were used, so that we can use the javascript variables.
    // The code below, links the item, to the section id and provides it with the section name.
    listItem.innerHTML = `<a class = "section__link" href = '#${id}'>${name}</a>`;
}
// The index navbar__list is empty we gotta fill it!
function fillIndexNavbar(){
    // A nice not for you ;)
    // for of loop is 24% faster than for each according to stackoverflow.
    for(e of indexSections){
        // Creating a list item, for the navbar__list
        let listItem = document.createElement('li');
        // calling helping function createListItem, which takes three attributes
        createListItem(listItem, e.getAttribute('id'), e.getAttribute('data-nav'));
        // appending the listItem after they been fully created to the navbar
        indexNavbar.appendChild(listItem);
    }
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


