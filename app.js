const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');


//function to display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);






//funtion to show the "active" section (section currently being viewed) in the menu selection
    //NOTE - only want this feature on desktop (not mobile)
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');

    const selection_welcome = document.querySelector('#welcome-link');
    const selection_prod_units = document.querySelector('#prod_units-link');
    const selection_tech = document.querySelector('#tech-link');
    const selection_credits = document.querySelector('#credits-link');

    let scrollPos = window.scrollY;
    // console.log(scrollPos);



    // adds 'highlight' class to my menu items at innerWidth > 960 [do this again for more narrow widths...]

    // at around 960 screen width...
    let welcome_prod_unitsBreak1 = 550;
    let prod_units_techBreak1 = 2400;
    let tech_creditsBreak1 = 3770;

    
    if (window.innerWidth > 960 && scrollPos <= 0) {
        selection_welcome.classList.remove('highlight');
        selection_prod_units.classList.remove('highlight');
        selection_tech.classList.remove('highlight');
        selection_credits.classList.remove('highlight');
        return;
        
    }   else if (window.innerWidth > 960 && scrollPos < welcome_prod_unitsBreak1) {
        selection_welcome.classList.add('highlight');
        selection_prod_units.classList.remove('highlight');
        selection_tech.classList.remove('highlight');
        selection_credits.classList.remove('highlight');
        return;
        
    }    else if (window.innerWidth > 960 && scrollPos < prod_units_techBreak1) {
        selection_welcome.classList.remove('highlight');
        selection_prod_units.classList.add('highlight');
        selection_tech.classList.remove('highlight');
        selection_credits.classList.remove('highlight');
        return;
        
    }   else if (window.innerWidth > 960 && scrollPos < tech_creditsBreak1) {
        selection_welcome.classList.remove('highlight');
        selection_prod_units.classList.remove('highlight');
        selection_tech.classList.add('highlight');
        selection_credits.classList.remove('highlight');
        return;
    }   else if (window.innerWidth > 960 && scrollPos >= tech_creditsBreak1) {
        selection_welcome.classList.remove('highlight');
        selection_prod_units.classList.remove('highlight');
        selection_tech.classList.remove('highlight');
        selection_credits.classList.add('highlight');
        return;
    
    }
    if ( (elem && window.innerWidth > 960 && scrollPos < 600) || elem ){
        elem.classList.remove('highlight');
        return;
        
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);




// function to close mobile menu after clicking a menu item...
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 960 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);