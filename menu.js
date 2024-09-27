document.getElementById("menuIcon").addEventListener("click", function () {
    var dropdown = document.querySelector(".dropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});

document.getElementById("menuzinho").addEventListener("click", function () {
    var drop = document.querySelector(".dropdown");
    if(drop.style.display ==="block")
    {
        drop.style.display = "none";
    }
});