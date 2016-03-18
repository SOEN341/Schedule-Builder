<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Schedule Builder</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="http://localhost:8000/CSS/Custom CSS.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react-dom.js"></script>
	<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react-with-addons.js"></script>-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.28.2/react-bootstrap.js"></script>
	  <!--
	<script src="https://github.com/SOEN341/Schedule-Builder/blob/master/Components/UIManager.js" type="text/jsx"></script>
	<script src="https://github.com/SOEN341/Schedule-Builder/blob/master/Components/Inputs.js" type="text/jsx"></script>
	<script src="https://github.com/SOEN341/Schedule-Builder/blob/master/Components/Login.js" type="text/jsx"></script>
	<script src="https://github.com/SOEN341/Schedule-Builder/blob/master/Components/Preferences.js" type="text/jsx"></script>
	<script src="https://github.com/SOEN341/Schedule-Builder/blob/master/Components/AccountPage.js" type="text/jsx"></script>
	-->
	  <!--
	  <script src="http://localhost:8000/Components/UIManager.js" type="text/jsx"></script>
	  <script src="http://localhost:8000/Components/Inputs.js" type="text/jsx"></script>
	  <script src="http://localhost:8000/Components/Login.js" type="text/jsx"></script>
	  <script src="http://localhost:8000/Components/Preferences.js" type="text/jsx"></script>
	  <script src="http://localhost:8000/Components/AccountPage.js" type="text/jsx"></script>
	  -->
	  <script src="Components/UIManager.js" type="text/jsx"></script>
	  <script src="Components/Inputs.js" type="text/jsx"></script>
	  <script src="Components/Login.js" type="text/jsx"></script>
	  <script src="Components/Preferences.js" type="text/jsx"></script>
	  <script src="Components/AccountPage.js" type="text/jsx"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  </head>
  <body>
	<div id="pageContent"></div>
    <script type="text/jsx">
		var RBS = ReactBootstrap;
		ReactDOM.render(
			<Main currentPage={0}/>, document.getElementById('pageContent')
		);
		console.log("Page generated");
    </script>
  </body>
</html>