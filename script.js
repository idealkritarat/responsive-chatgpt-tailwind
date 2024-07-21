const sideNav = $("#side-nav");
const menuTgglBtn = $("#menu-toggle-btn");

$(menuTgglBtn).click(function (e) { 
    $(sideNav).toggleClass("w-[260px] w-0");
});

const messageChatgpt = $("#message-chatgpt");
const sendMessageBtn = $("#send-message-btn");


$(messageChatgpt).keydown(function (e) { 
    if($(this).val().length < 2 && e.keyCode==8){
        $(sendMessageBtn).removeClass("hover:bg-[#C6C6C6] bg-white");
        $(sendMessageBtn).addClass("bg-[#676767]");
    } else {
        console.log("Chose 2");
        $(sendMessageBtn).removeClass("bg-[#676767]");
        $(sendMessageBtn).addClass("hover:bg-[#C6C6C6] bg-white");
    }
});


const dropdownBtn = $("#dropdown-btn");
const dropdownMenu = $("#dropdown-menu");
$(dropdownBtn).click(function (e) { 
    $(dropdownMenu).toggleClass("hidden");
});