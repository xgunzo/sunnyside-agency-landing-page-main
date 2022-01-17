window.onload = function() {
    let menuButton = document.getElementById("menu-button");
    let active = document.getElementById("active");
    let body = document.body;
    
    
    menuButton.addEventListener("click", function(e) {
        active.style.display = "block";
        e.stopPropagation();

    body.addEventListener("click", function(){
            active.style.display = "none";
        } )

        active.addEventListener("click", function(e) {
            e.stopPropagation();
        })

    })
}

