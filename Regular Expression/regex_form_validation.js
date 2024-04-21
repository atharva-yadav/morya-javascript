var username = document.getElementById('email');
console.log(username)
var password = document.getElementById('pass');
var err = document.getElementById('err-username')

username.addEventListener('input', function(e){
    var pattern = /^[\w]{6,8}$/; //no spaces alloed after, before "/"
    var currVal = e.target.value;

    var valid = pattern.test(currVal);

    if(!valid){
        err.style.display = "block";
    }
    else{
        err.style.display = "none";
    }

});

// we are checking for the input should be the between 6 to 8 character long