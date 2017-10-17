var promise = new Promise(function(resolve, reject) {
    resolve('I FIRED');
    reject(new Error('FULFILLED!'));
});

function onReject(error) {
    console.log(error.message);
}

promise.then(result => {
    console.log(result);
}, reason => {
    onReject(reason);
});