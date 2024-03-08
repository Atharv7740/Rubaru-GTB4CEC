function setActiveNav(index) {
    var navbar = document.getElementById("nav");
    var items = navbar.getElementsByTagName("li");
    

    // Remove active class from all items
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
    }
    // Add active class to the clicked item
    items[index].classList.add("active");
  }