function route(handle, pathname){
	console.log("about to a request for " + pathname);
	if(typeof handle[pathname] === 'function'){
		return handle[pathname]();
	}else{
		console.log("No request handler for " + pathname);
		return "404 Not Found!";
	}
}

exports.route = route;
