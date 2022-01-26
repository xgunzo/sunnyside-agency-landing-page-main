window.onload = function() {
    let menuButton = document.getElementById("menu-button");
    let active = document.getElementById("active");
    let arrow = document.getElementById("arrow");
    let body = document.body;
    
    menuButton.addEventListener("click", function(e) {
        active.style.display = "block";
        arrow.style.display = "none";
        e.stopPropagation();

    body.addEventListener("click", function(){
            active.style.display = "none";
            arrow.style.display = "block";
        } )

        active.addEventListener("click", function(e) {
            arrow.style.display = "absolute";
            e.stopPropagation();
        })

    })
}

