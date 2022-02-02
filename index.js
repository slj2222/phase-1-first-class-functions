//receivesAFunction 
//takea a cb as an argument

function spy() {
    console.log("i see spy");
}


function receivesAFunction(callback) {
    console.log("received a function");
    callback();
}

receivesAFunction(spy);


////////////////////
function returnsANamedFunction() {
    return receivesAFunction;
}

console.log(returnsANamedFunction);




/////////////////////////


function anonymousFunction() {
    return(" ");
    ;
};
function returnsAnAnonymousFunction(callback) {
callback();
}

returnsAnAnonymousFunction(anonymousFunction);