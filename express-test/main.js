fetch('/koa/list').then(response => {
    return response.json();
}).then(data => console.log(data));