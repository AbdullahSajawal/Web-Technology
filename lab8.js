document.getElementById("colorBtn").addEventListener("click", function () {
    document.body.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
});

document.getElementById("textBtn").addEventListener("click", function () {
    document.getElementById("message").textContent = "The text has been changed!";
});

document.getElementById("box1").addEventListener("mouseover", function () {
    this.style.transform = "scale(1.2)";
});
document.getElementById("box1").addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
});

document.getElementById("box2").addEventListener("click", function () {
    this.style.display = "none";
});

document.getElementById("shape").addEventListener("click", function () {
    this.style.backgroundColor = "green";
    this.textContent = "Clicked!";
});
