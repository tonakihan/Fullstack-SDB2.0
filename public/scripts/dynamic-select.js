document.addEventListener("DOMContentLoaded", () => {
    let form = document.forms.one;
    let select = form.elements.target;
    let div = document.getElementById("output");

    let usrTarget = select.value;
    div.innerHTML = usrTarget; // Надо придумать

    select.onchange = () => {
        usrTarget = select.value;
        div.innerHTML = usrTarget; // Ща посмотрим
    }
});
