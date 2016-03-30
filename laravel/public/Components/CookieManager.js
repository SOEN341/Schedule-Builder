var cookieManager = {
	addCookie: function(name, value, daysToExp) {
		var d = new Date();
		d.setTime(d.getTime() + (daysToExp*24*60*60*1000));
		
		var expires = "; expires="+d.toUTCString();
		document.cookie = name + "=" + value + expires;
		console.log('cookie!' + document.cookie);
	},
	
	/*removeCookie: function(name) {
		var cookies=document.cookie.split(';');
		for(var i=0; i<cookies.length-1; i++) {
			if(cookies[i].search(name)>-1)
			{
				document.cookies=cookies[i]+';';
			}
		}
	},*/
	
	removeCookie: function(name) {
		var expires = "; expires=Thu, 18 Dec 2013 12:00:00 UTC";
		document.cookie = name + "= 1" + expires;
		console.log('cookie ' + name + ' removed');
	},
	
	getCookies: function() {
		//Use this if we ever need a function to get all the cookies as a JSON object
	},
	
	getCookie: function(name) {
		var cname = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') {
				c = c.substring(1);
			}
			if (c.indexOf(cname) == 0) {
				return c.substring(cname.length,c.length);
			}
		}
		return "";
	}
}