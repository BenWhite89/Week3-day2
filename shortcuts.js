var promise = Promise.reject(new Error('REJECT VALUE'));

promise.then(function(result) {
    console.log(result);
}).catch(function(err) {
    console.error(err.message);
})