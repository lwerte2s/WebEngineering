
function identity_function(x) {
    return () => { return x; }
}

//---------------------------------
function addf(x) {
    return (y) => { return x+y; }
}


//---------------------------------
function applyf(f){
    return (x) => {
        return (y) => {
            return f(x,y);
        }
    }
}


//---------------------------------
function curry(f, a) {
    return (b) =>{
        return f(a,b);
    }
}


//----------------------------------
function add(x,y) {
    return x+y;
}

function mul(x,y) {
    return x*y;
}

function inc(x) {
    return curry(add,1)(x);
}

function inc2(x) {
    return addf(x)(1);
}

//-----------------------------------
function methodize(f) {
    return  function(x) {
        return f(this,x);
    };
}

//------------------------------------
function demethodize(method) {
    return function (x,y) {
        return method.call(x,y);
    }
}


//-------------------------------------
function twice(f) {
    return (x) => {
        return f(x,x);
    }
}

//------------------------------------
function composeu(f1, f2) {
    return (x) => {
        return f2(f1(x));
    }
}

//-------------------------------------
function composeb(f1,f2,) {
    return (x,y,z) => {
        let result = f1(x,y);
        return f2(result,z);
    }
}

//----------------------------------------
function once(f) {
    let i = 0;
    return function (...y) {
        if(i++ === 0){
            return f(...y);
        }
    }
}

//-----------------------------------------
function counterf(x) {
    let i = x;
    return {
        dec : () => {
            return --i;
        },
        inc: () => {
            return ++i;
        }
    }
}

//---------------------------------------
function revocable(f) {
    let revoked = false;
    return {
        invoke : function (...y) {
            if(!revoked){
                return f(...y);
            }
        },
        revoke : function () {
            revoked = true;
        }
    }
}


//------------------------------------------
function vector() {
    let privateData = [];
    return {
        get: function (i) {
            return privateData[i];
        },
        store: function (i,x) {
            privateData[i] = x;
        },
        append: function (x) {
            privateData.push(x);
        }
    }
}