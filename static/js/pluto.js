function getPictureForApi(param,callback) {
	try {
		var p=param || {}
		api.getPicture(p, function(ret, err) {
			if (ret) {
				if(callback){
					callback(ret);
				}
			} else {
				alert(JSON.stringify(err));
			}
		});
	} catch (e) {
		console.error(e.message)
	}
}

