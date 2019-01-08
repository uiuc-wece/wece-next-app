var imgCards = document.getElementsByClassName("img-card");
for (var i = 0; i < imgCards.length; i++) {
  imgCards[i].addEventListener("click", function() {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      this.classList.add("active");
    }
  });
}
