var filterBtn = document.querySelectorAll(".work .btn-primary"),
    filterImg = document.getElementsByClassName("img-filter"),
    j,
    k;


for (j = 0; j < filterBtn.length; j++) {
    filterBtn[j].onclick = function () {
        "use strict"
        for (k = 0; k < filterImg.length; k++) {
            if (filterImg[k].getAttribute("data-target") == this.getAttribute("data-target") || this.getAttribute("data-target") == "all") {
                filterImg[k].classList.add("show");
                filterImg[k].classList.remove("hide");
            } else {
                filterImg[k].classList.remove("show");
                filterImg[k].classList.add("hide");

            }
        }
    }
}
