var promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject(new Error('FULFILLED!'));
    }, 300);
});

function onReject(error) {
    console.log(error.message);
}

promise.then(result => {

}, reason => {
    onReject(reason);
});