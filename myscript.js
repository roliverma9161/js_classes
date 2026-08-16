function showpassword() {
    if (c1.checked == true) {
        t1.type = "text";
    } else {
        t1.type = "password";
    }
}

function checkpassword() {
    var count = 0;
    var pass = t1.value;

    if (pass.length >= 8) {

        count++;
    }
    if (pass.match(/[A-Z]/)) {
        count++;
    }
    if (pass.match(/[a-z]/)) {
        count++;
    }
    if (pass.match(/[0-9]/)) {
        count++;
    }
    if (pass.match(/[@#$*]/)) {
        count++;
    }
    if (count == 0) {
        hint.innerHTML = "";
    } else if (count == 1) {
        hint.innerHTML = "password is week";
        outer.style.backgroundcolor = "red";

    } else if (count == 2) {
        hint.innerHTML = "password is good";

    } else if (count == 3) {
        hint.innerHTML = "password is better";

    } else if (count == 4) {
        hint.innerHTML = "password is strong";

    } else if (count == 5) {
        hint.innerHTML = "password is unbreakable";

    }
}