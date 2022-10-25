fetch("https://jsonplaceholder.typicode.com/posts")
	.then((res) => res.json())
	.then((data) => console.log(data));

async function loadData() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();
	console.log(data);
}

loadData();
