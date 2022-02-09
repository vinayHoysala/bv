///function with no arguements and no return value
function doSomething() {
    console.log("Doing something");

}
doSomething();              ///op:DoingSomething
doSomething();                //// DoingSomething


/////function with no arguments and no return value    (calling the function)
function doSomething(whatToDo) {
    console.log("Doing : " + whatToDo);        ////(here whatToDo is variable)
}

doSomething("Drink Coffee");
doSomething("Write Code");


////here we passed a string in line 6 which has been assigned to a variable whatToDo present in the function doSomethin()/
///we repeated the samr bycalling it once again. this is called reusing the code.