console.log('main begin');
fetch('/express/list').then(response => {
    console.log(response);
    return response.json();
}).then(data => {
	console.log(data);
})

fetch('/koa/list').then(response => {
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
})
console.log('main end');