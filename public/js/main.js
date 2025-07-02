(() => {
  // <stdin>
  window.addEventListener("load", (event) => {
    console.log("heyeheyehyehey");
    let dropdown_icon = document.getElementById("nav-dropdown-icon");
    let navbar_header = document.getElementById("home-link-full");
    dropdown_icon.addEventListener("click", function(e) {
      let ul_navbar = document.getElementById("ul-navbar");
      let dropdown_icon2 = document.getElementById("nav-dropdown-icon");
      dropdown_icon2.className = !dropdown_icon2.className ? "nav-expanded" : "";
      ul_navbar.className = ul_navbar.className === "ul-navbar" ? "ul-navbar nav-expanded" : "ul-navbar";
      navbar_header.className = navbar_header.className === "navbar-header" ? "navbar-header nav-expanded" : "navbar-header";
    });
  });
})();
