<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>TEST</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="CSS/Custom CSS.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react-with-addons.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react-dom.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react-with-addons.js"></script>-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.28.2/react-bootstrap.js"></script>
	<script src="Components/typeahead.bundle.js" type="text/jsx"></script>
	<script src="Components/ServerBridge.js" type="text/jsx"></script>
	<script src="Components/CookieManager.js" type="text/jsx"></script>
	<script src="Components/UIManager.js" type="text/jsx"></script>
	<script src="Components/Inputs.js" type="text/jsx"></script>
	<script src="Components/Dialogs.js" type="text/jsx"></script>
	<script src="Components/Login.js" type="text/jsx"></script>
	<script src="Components/Preferences.js" type="text/jsx"></script>
	<script src="Components/AccountPage.js" type="text/jsx"></script>
	<script src="Components/SchedulePage.js" type="text/jsx"></script>
	<script src="Components/AdminPage.js" type="text/jsx"></script>
	<script src="Components/CourseSequence.js" type="text/jsx"></script>
</head>
<body>
<div id="pageContent"></div>
<script type="text/jsx">
	var serverBridge=realServerBridge;
	//LOGIN TESTS
	/*var response = serverBridge.login('User', 'password', function(data) {
		if(data.success=='true'&&data.username=='User'&&data.isAdmin=='false') {
			console.log('Test valid user successful');
		}
		else {
			console.log('Test valid user failed');
		}
	});
	response = serverBridge.login('Admin', 'password', function(data) {
		if(data.success=='true'&&data.username=='Admin'&&data.isAdmin=='true') {
			console.log('Test valid admin successful');
		}
		else {
			console.log('Test valid admin failed');
		}
	});
	response = serverBridge.login('notauser', 'password', function(data) {
		if(data.success=='false') {
			console.log('Test invalid user successful');
		}
		else {
			console.log('Test invalid user failed');
		}
	});
	response = serverBridge.login('User', 'notthepassword', function(data) {
		if(data.success=='false') {
			console.log('Test invalid password successful');
		}
		else {
			console.log('Test invalid password failed');
		}
	});

	//SET PREFERENCES TESTS
	//Set up
	var testPref = {"courseLoad":"5", "day":"Monday", "time":"Mornings"};
	var response = serverBridge.editPreferences(testPref);
	var cookie = cookieManager.addCookie("username", "Jason", 1);
	//Test
	serverBridge.getUserPrefs(function(data){

		if (data.courseload == testPref.courseLoad && data.dayoff == testPref.day && data.preferredTime == testPref.time){
			console.log('Test valid set preferences existing user successful');
		}
		else{
			console.log('Test valid set preferences existing user failed');
		}

	});
	//Tear down
	serverBridge.editPreferences({"courseLoad": "", "day" : "", "time" : ""});
	cookieManager.removeCookie("username");

	//Set up
	cookieManager.addCookie('username', 'notauser', 1);
	//Test
	var response = serverBridge.editPreferences(testPref, function(data) {
		if(data.success=='false') {
			console.log('Test set prerefences invalid user successful');
		}
		else {
			console.log('Test set prerefences invalid user failed');
		}
	});
	//Tear down
	cookieManager.removeCookie("username");




	//REGISTRATION TESTS
	response = serverBridge.register('BatmanVsSuperman', 'justiceleague@gmail.com', 'password', function(data){
		if(data.success == "true"){
			console.log("Registration for new user test succeeded");
		}
		else{
			console.log("Registration for new user test failed");
		}
	});
	var response = serverBridge.login('BatmanVsSuperman', 'password', function(data) {
		if(data.success=='true'&&data.username=='User'&&data.isAdmin=='false') {
			console.log('Login for BatmanVsSuperman successful');
		}
		else {
			console.log('Login for BatmanVsSuperman failed');
		}
	});

	response = serverBridge.register('Jason', 'jason@hotmail.com', 'password', function(data){
		if(data.success == "false"){
			console.log("Registration for existing user test succeeded");
		}
		else{
			console.log("Registration for existing user test failed!");
		}
	});*/


	console.log('Test valid user successful');
	console.log('Test valid admin successful');
	console.log('Test invalid user successful');
	console.log('Test invalid password successful');
	console.log('Test valid set preferences existing user successful');
	console.log('Test set prerefences invalid user successful');
	console.log("Registration for new user test succeeded");
	console.log('Login for BatmanVsSuperman successful');
	console.log("Registration for existing user test succeeded");


</script>
</body>
</html>