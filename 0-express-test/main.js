fetch('/express/getKoalist').then(response => {
    return response.json();
}).then(data => console.log(data));

fetch('/express/getNonexist').then(response => {
    return response.json();
}).then(data => console.log(data));