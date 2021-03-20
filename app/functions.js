
function setMenuItems() {
    var adduserdom = document.getElementById("adduserlink");
    var logindom = document.getElementById("loginlink");
    if(loggedIn) {
        adduserdom.setAttribute('href', '#!sale');
        adduserdom.innerHTML = "Dashboard";
        logindom.innerHTML = "Logout";
        logindom.setAttribute('href', '#!logout');
    } else {
        adduserdom.setAttribute('hidden', 'hidden');
        logindom.innerHTML = "Login";
        logindom.setAttribute('href', '#!login');
    }
}
