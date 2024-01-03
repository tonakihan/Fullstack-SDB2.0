document.addEventListener("DOMContentLoaded", () => {
    let eForm = document.forms.one;
    let eSelect = eForm.elements.target;
    let eDiv = document.getElementById("output");
    
    let url = "/api";

    eSelect.onchange = () => {
        eDiv.innerHTML = ""; 
    }

    eForm.addEventListener("submit", (evt) => {
        evt.preventDefault(); //Отмена события - по умолчанию
        
        if (eSelect.value == "Выбери таблицу" || eSelect.value == "") {
            alert("Выбери цель из списка для запроса");
        }
        else {
            //TODO: Добавить кружочек загрузки
            eDiv.innerHTML = "Loading..."
            try {
                getDataServer(url + "?target=" + eSelect.value)
                    .then(data => {
                        console.log(data);
                        eDiv.innerHTML = data;
                });
            } catch (e) {
                alert("Провал запроса. Ошибка.");
                console.error(e);
        }}
    })
});


let getDataServer = new Promise((res, rej) => {
    const response = await fetch(reqUrl, {
        method: "GET",
    })
    if (response.ok === false) {
        alert("Провал запроса. Ошибка.")
    }

    let data = await response.json().data;
    resolve(data);
});
