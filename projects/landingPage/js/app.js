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
let indexNavbar = document.querySelector('#navbar__list');

/**
 * Start Helper Functions
 * 
*/
// Function for creating list item.
function createListItem(listItem, id, name){

    // Template literals were used, so that we can use the javascript variables.
    // The code below, links the item, to the section id and provides it with the section name.
    listItem.innerHTML = `<a class = "nav__link" href = '#${id}'>${name}</a>`;
    
}
// Function to add a smooth scrolling behaviour, when clicking on list items to the section.
function sectionSmoothScroll(section, listItem){
    // add event listener on the listItem anchor
    listItem.addEventListener('click', e=>{
        // prevents event form being taken normally even if it doesn't get explicitly handled
        e.preventDefault();
        // add the smooth scroll behavior to the section
        section.scrollIntoView({behavior:"smooth"});
    });
}

// function to test visibility
function isVisible(ele){

    let userBox = ele.getBoundingClientRect();
    return (userBox.bottom >= 0
            && userBox.right >= 0
            && userBox.top <= (window.innerHeight || document.documentElement.clientHeight)
            && userBox.left <= (window.innerHeight ||document.documentElement.clientWidth));
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav

// The index navbar__list is empty we gotta fill it!
function fillIndexNavbar(sections){
    
    // A nice not for you ;)
    // for of loop is 24% faster than for each according to stackoverflow.
    for(let ele of sections){
        
        // Creating a list item, for the navbar__list
        let listItem = document.createElement('li');
        // calling helping function createListItem, which takes three attributes
        createListItem(listItem, ele.getAttribute('id'), ele.getAttribute('data-nav'));
        // add smooth scroll
        sectionSmoothScroll(ele, listItem);
        // appending the listItem after they been fully created to the navbar
        indexNavbar.appendChild(listItem);
    }
}

// Add class 'active' to section when near top of viewport
// Looking into the CSS, you can find an active section class
// Using this class and simple logic we can achieve the required purpose
function activateSection(){
   
    // First we need to loop on our sections
    for (let ele of indexSections){
        // Now we gotta check which one is visible?
        if((isVisible(ele)) && (ele.classList.contains('your-active-class'))) continue;
        if(isVisible(ele)) ele.classList.add('your-active-class'); else ele.classList.remove('your-active-class');
        // Hmm, i suppose those if conditions can be handled better #note for future improvement.
    }
}

// We gotta put things into action right?
// Main
fillIndexNavbar(indexSections);
document.addEventListener('scroll', activateSection, 1);


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click


// Set sections as active


