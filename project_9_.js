let burger = document.getElementsByClassName('burger')[0]
let navbar = document.getElementsByClassName('navbar')[0]
let navlist = document.getElementsByClassName('navlist')[0]
let rightnav = document.getElementsByClassName('rightnav')[0]

burger.addEventListener('click', ()=>{
    //tOGGLE BASICALLY MEANS if active(invoked) then make it inactive(uninvoked) and if its inactive then make it active.
    // When the nav items are not visible means, "height_of_nav_resp" class is active for "navbar" class , "visibility_class_resp" class is also active for "navlist" class , "visibility_class_resp" class is also active for "rightnav" class, thus after clicking the Hamburger these classes will not be active.
    navbar.classList.toggle('height_of_nav_resp');
    navlist.classList.toggle('visibility_class_resp');
    rightnav.classList.toggle('visibility_class_resp');
})