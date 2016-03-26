var cookieHandler = {
	addCookie: function(name, value) {
		var d = new Date();
		d.setTime(d.getTime() + (7*24*60*60*1000)); //One week until the cookie expires
		if(document.cookie.search(name)>-1) {
			removeCookie(name);
		}
		var expires = "; expires="+d.toUTCString();
		document.cookie = name + "=" + value + expires);
	},
	
	removeCookie: function(name) {
		var cookies=document.cookie.split(';');
		for(var i=0; i<cookies.length-1; i++) {
			if(cookies[i].search(name)>-1)
			{
				document.cookies=cookies[i]+';';
			}
		}
	},
	
	getCookies: function() {
		
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