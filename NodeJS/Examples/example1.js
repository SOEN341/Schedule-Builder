var hello = function (name) {
    console.log("Hello " + name);
};

//This is a function expression. It gets invoked immediately.
(function (){
    var time = new Date();
    console.log("The time is " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
}());

//This is a function declaration
function hello2(name){
    console.log("Hello2 " + name);
};
hello();
//function that calls the hello function in four seconds.
setTimeout(hello, 4000);
