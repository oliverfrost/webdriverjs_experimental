'use strict';
//
// // Создаётся объект promise
// let promise = new Promise((resolve, reject) => {
//
//     // setTimeout(() => {
//     //     // переведёт промис в состояние fulfilled с результатом "result"
//     //     reject("result");
//     // }, 1000);
//
//     var a = 4;
//
//     setTimeout(function(){
//         a = Math.floor((Math.random() * 10) + 1);
//
//         if( a%2 === 0) {
//             console.log("A is even: " + a);
//             resolve("This is my even result string");
//         } else {
//             console.log("A is odd: " + a);
//             reject("This is my rejected string");
//         }       
//        
//     }, 3000);
//
// });
//
// // promise.then навешивает обработчики на успешный результат или ошибку
// promise
//     .then(
//         result => {
//             // первая функция-обработчик - запустится при вызове resolve
//             console.log("Fulfilled: " + result); // result - аргумент resolve
//         },
//         error => {
//             // вторая функция - запустится при вызове reject
//             console.log("Rejected: " + error); // error - аргумент reject
//         }
//     );




function callMe() {
    return new Promise(function(resolve, reject) {
        var a = 4;

        setTimeout(function(){
            a = Math.floor((Math.random() * 10) + 1);

            if( a%2 === 0) {
                console.log("A is even: " + a);
                resolve("This is my even result string");
            } else {
                console.log("A is odd: " + a);
                reject("This is my rejected string");
            }

        }, 3000);
    });
}

callMe().then(
    result => {
        // первая функция-обработчик - запустится при вызове resolve
        console.log("Fulfilled: " + result); // result - аргумент resolve
    },
    error => {
        // вторая функция - запустится при вызове reject
        console.log("Rejected: " + error); // error - аргумент reject
    }
);