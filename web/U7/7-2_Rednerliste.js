const button = document.getElementById('hinzufuegen');
button.addEventListener('click', function (event) {
    let redner = document.getElementById('redner').value;
    console.log(redner);
    if( redner !== ""){
        var entry = document.createElement('li');
        entry.textContent = redner;
        let list = document.getElementById('redner-list');
        list.appendChild(entry);
    }


});