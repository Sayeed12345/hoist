function x() {
    for (let i = 1; i <= 5; i++) {
        /* it does not work with var because this copy of i refers the same memory location,
               so somehow we have to give a new copy of i everytime to this timeout & forms a closure with it.
               But it works with let because let is block scope & it creates a new copy every time this loop is executed*/
        setTimeout(
            /* setTimeout takes this callback function attaches a timer 
                           & when the timer expires it calls that function.*/
            function() {
                console.log(i);
            }, i * 1000);
    }
    console.log("Hello World");
    /* it will first print Hello World 
        JavaScript does not wait at that point of time itself.*/
}
x(); // it will later print 1 after 1000 milliseconds.



// function x() {
//     for (var i = 1; i <= 5; i++) { // here var is used
//         function close(x) {
//             setTimeout(
//                 function() {
//                     console.log(x);
//                 }, x * 1000);
//         }
//         close(i);
//         /* here it will work because everytime we call this close function ,
//                with this i it creates new copy of i for itself over here*/
//     }
//     console.log("Hello World");
// }
// x();