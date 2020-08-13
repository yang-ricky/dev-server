fetch('/koa/getExpressList').then(response => {
    console.log(response);
    return response.json();
}).then(data => {
	console.log(data);
})

fetch('/koa/getName').then(response => {
    console.log(response);
    return response.json();
}).then(data => {
	console.log(data);
});