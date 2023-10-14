
var close_sign_up=document.querySelector("#close_sign_up");
var close_login_btn=document.querySelector("#close_login_btn");
var signup_page=document.querySelector("#signup_page");
var overlay=document.querySelector("#overlay");
var create_account=document.querySelector("#create_account");
var join_group=document.querySelector("#join_group");
var login_page=document.querySelector("#login_page");
var Already_sign_in=document.querySelector("#Already_sign_in");
var create_new_acc=document.querySelector("#create_new_acc");
var mobile_join_btn=document.querySelector("#mobile_join_btn");
var clicked_open_menu=document.querySelector("#clicked_open_menu");
var menu_btn=document.querySelector(".menu_btn");
var create_account_mobile=document.querySelector("#create_account_mobile");
var Finally_login=document.querySelector("#Finally_login");
var profile_in=document.querySelector(".profile_in");
var create_account=document.querySelector("#create_account");
var mobile_join_btn=document.querySelector("#mobile_join_btn");
var Go_to_sign_page=document.querySelector("#Go_to_sign_page");

Go_to_sign_page.addEventListener('click',function(){
    signup_page.classList.remove('hidden');

    overlay.classList.add('overlay');
    login_page.classList.add('hidden');
})

Finally_login.addEventListener('click',function(){
    create_account.classList.add('hidden');
    profile_in.classList.remove('hidden');
    login_page.classList.add('hidden');
    overlay.classList.remove('overlay');

})



create_account_mobile.addEventListener('click',function(){
    
    signup_page.classList.remove('hidden');

    overlay.classList.add('overlay');
    login_page.classList.add('hidden');
    })

clicked_open_menu.addEventListener('click',function(){
menu_btn.classList.toggle('hidden');
})

mobile_join_btn.addEventListener('click',function(){
    login_page.classList.remove('hidden');
    overlay.classList.add('overlay');
})

close_sign_up.addEventListener('click',function(){
    signup_page.classList.add('hidden');
    overlay.classList.remove('overlay');
})

create_account.addEventListener('click',function(){
    signup_page.classList.remove('hidden');
    overlay.classList.add('overlay');
})


join_group.addEventListener('click',function(){

    login_page.classList.remove('hidden');
    overlay.classList.add('overlay');
})

close_login_btn.addEventListener('click',function(){
    login_page.classList.add('hidden');
    overlay.classList.remove('overlay');
})

Already_sign_in.addEventListener('click',function(){
    signup_page.classList.add('hidden');
    // overlay.classList.add('overlay');
    login_page.classList.remove('hidden');
    overlay.classList.add('overlay');
})

create_new_acc.addEventListener('click',function(){
    login_page.classList.add('hidden');
    signup_page.classList.remove('hidden');
    overlay.classList.add('overlay');
})