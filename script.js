const sideNav = $("#side-nav");
const menuTgglBtn = $("#menu-toggle-btn");

$(menuTgglBtn).click(function (e) { 
    $(sideNav).toggleClass("w-[260px] w-0");
});