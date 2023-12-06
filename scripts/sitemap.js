// function toogle between products page and about page sub manu items

function accord() {
    var outManu = document.getElementsByClassName("dropDownMenu");
    var i, panel, originalText = "+", updatedText = "-";

    for (i = 0; i < outManu.length; i++) {
        outManu[i].addEventListener("click", function () {
            this.classList.toggle("active");
            panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
                this.innerHTML = originalText;
                this.style.backgroundColor = "#9dc69d";
            }
            else {
                panel.style.display = "block";
                this.innerHTML = updatedText;
                this.style.backgroundColor = "#ee8383";
            }
        });
    }

}

accord();
