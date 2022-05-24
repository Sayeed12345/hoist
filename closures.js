function x() {
    var a = 7;

    function y() {
        console.log(a);
        /*closure means a function bind together with its lexical environment (or) 
               function along with its lexical scope forms a closure*/
    }
    y();
    /*inside y it form a closure with variable which were part of x lexical scope ,
       so the function y was bind to th  e variables of x thus it forms a closure & it has access to its parents lexical scope */
}
x();



function x() {
    var a = 7;

    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
/*... 
.. 
.. 
...*/
z();
/*functions that are returned from another function they stil maintain their lexical scope ,
they remember where they were actually present*/




function x() {
    var a = 7;

    return function y() { //same as above
        console.log(a);
    }
}
var z = x();
console.log(z);
/*... 
.. 
.. 
...*/
z();



function x() {
    var a = 7;

    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x();
console.log(z);
/*... 
.. 
.. 
...*/
z();




function z() {
    var b = 200;

    function x() {
        var a = 100;

        function y() {
            console.log(a, b);
            /* y forms a closure along with scope of x&z ,
                      here it forms closure with var b which was its parents's parent & along with a which its parent , 
                      hence its known as closure*/
        }
        y();
    }
    x();
}
z();





/* Uses of Closures ;
Module Design Pattern
Currying
Functions like once
Memoize
Maintaining state in async world 
setTimeouts
Iterators & more*/