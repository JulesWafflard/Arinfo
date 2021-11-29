function myFunction() {
    var x = document.getElementById("burger-menu");
    if (x.classList.contains("open-burger")) {
        x.classList.remove("open-burger");
    } else {
        x.classList.add("open-burger");
    }
}