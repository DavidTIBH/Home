var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
};

modal.onclick = function () {
    modal.style.display = "none";
};