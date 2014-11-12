function Tweet(obj, my_screen_name, dm){
	this.obj = obj;
	this.dm = dm || false;
	this.my_screen_name = my_screen_name || "";
}

Tweet.prototype.display = function(Logger){
	if(this.dm){
		this.obj.user = {};
		this.obj.user.screen_name = this.obj.sender.screen_name;
	}
	if(this.obj.user){
		Logger.screen_name(this.obj.user.screen_name, this.my_screen_name);
	}
	Logger.content(this.obj.text, this.my_screen_name);
	Logger.date(this.obj.created_at);
	Logger.log("");
}

module.exports = Tweet;
