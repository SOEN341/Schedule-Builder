<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Account</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="CSS/Custom CSS.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react-with-addons.min.js"></script>
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
    <script src="Components/LinkProvider.js" type="text/jsx"></script>
</head>
<body>
<div id="pageContent"></div>
<script type="text/jsx">
    var RBS = ReactBootstrap;
    ReactDOM.render(
            <Main currentPage={2}/>, document.getElementById('pageContent')
    );
</script>
</body>
</html>