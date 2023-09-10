document.addEventListener("DOMContentLoaded", function() {
    let form = document.forms[0];
    let select = form.elements.target;

    let target = select.value;

    // TECT
    let div = document.createElement("div");
    div.innerHTML = target;
    form.appendChild(div); 
    // END TECT

    select.onchange = function() {
        target = select.value;
        div.innerHTML = target; //TECT
    }
});
