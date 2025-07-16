function blink_cursor() {
  let blinky = document.getElementById("cursor-blinky");
  let blinky_sm = document.getElementById("cursor-blinky-sm");
  
  const cursor_text = '&#9608;';
  blinky.innerHTML = (blinky.innerHTML == '█') ?
    '&#9617;' : '&#9608;';
  blinky_sm.innerHTML = (blinky.innerHTML == '█') ?
    '&#9617;' : '&#9608;';
}

window.addEventListener("load", (event) => {
  let dropdown_icon = document.getElementById("nav-dropdown-icon");
  let navbar_header = document.getElementById("home-link-full");

  dropdown_icon.addEventListener("click", function (e) {
    // show a div with the list
      let ul_navbar = document.getElementById("ul-navbar");
      let dropdown_icon = document.getElementById("nav-dropdown-icon");

      dropdown_icon.className = (!dropdown_icon.className) ?
	  "nav-expanded" : "" ;
      ul_navbar.className = (ul_navbar.className === "ul-navbar") ?
          "ul-navbar nav-expanded" : "ul-navbar" ;
      navbar_header.className = (navbar_header.className === "navbar-header") ?
          "navbar-header nav-expanded" : "navbar-header" ;
  });

  setInterval(blink_cursor, 500)
});

