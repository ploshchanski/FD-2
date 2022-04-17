
document.getElementById('sitename').addEventListener('blur', () => sitenameValid(false));
document.getElementById('siteurl').addEventListener('blur', () => siteurlValid(false));
document.getElementById('visitors').addEventListener('blur', () => visitorsValid(false));
document.getElementById('email').addEventListener('blur', () => emailValid(false));
document.getElementById('division').addEventListener('change', () => divisionValid(false));
document.getElementById('votes').addEventListener('change', () => votesValid(false));
document.getElementById('description').addEventListener('blur', () => descriptionValid(false));
let checkRadio = document.querySelectorAll('.radio');
for (let i = 0; i < checkRadio.length; i++) {
    checkRadio[i].addEventListener('change', () => validRadio(false))
}
document.getElementById('submit').addEventListener('click', submitCheck);

function sitenameValid(focusOnErr) {
    let errCount = 0;
    let sitenameValue = document.getElementById('sitename').value;
    if (sitenameValue === '') {
        document.getElementById('errsitename').innerHTML = 'заполните поле!';
        errCount++;
        if (focusOnErr) {
            document.getElementById('sitename').focus();
        }

    } else {
        document.getElementById('errsitename').innerHTML = '';
    }
    return errCount;
}
function descriptionValid(focusOnErr) {
    let errCount = 0;
    let Value = document.getElementById('description').value;
    if (Value === '') {
        document.getElementById('errdescription').innerHTML = 'заполните поле!';
        errCount++;
        if (focusOnErr) {
            document.getElementById('description').focus();
        }
    } else {
        document.getElementById('errdescription').innerHTML = '';
    }
    return errCount;
}

function siteurlValid(focusOnErr) {
    let errCount = 0;
    let Value = document.getElementById('siteurl').value;
    if (Value === '') {
        document.getElementById('errsiteurl').innerHTML = 'заполните поле!';
        errCount++;
        if (focusOnErr) {
            document.getElementById('siteurl').focus();
        }
    } else {
        document.getElementById('errsiteurl').innerHTML = '';
    }
    return errCount;
}
function visitorsValid(focusOnErr) {
    let errCount = 0;
    let Value = document.getElementById('visitors').value;
    if (Value === '') {
        document.getElementById('errvisitors').innerHTML = 'заполните поле!';
        errCount++;
        if (focusOnErr) {
            document.getElementById('visitors').focus();
        }
    } else {
        document.getElementById('errvisitors').innerHTML = '';
    }
    return errCount;
}
function emailValid(focusOnErr) {
    let errCount = 0;
    let Value = document.getElementById('email').value;
    if (Value === '') {
        document.getElementById('erremail').innerHTML = 'заполните поле!';
        errCount++;
        if (focusOnErr) {
            document.getElementById('email').focus();
        }
    } else {
        document.getElementById('erremail').innerHTML = '';
    }
    return errCount;
}
function divisionValid(focusOnErr) {
    let errCount = 0;
    let Value = document.getElementById('division').value;
    if (Value === "1") {
        document.getElementById('errdivision').innerHTML = 'данная рублика недоступна!';
        errCount++;
        if (focusOnErr) {
            document.getElementById('division').focus();
        }
    } else {
        document.getElementById('errdivision').innerHTML = '';
    }
    return errCount;
}


function validRadio(focusOnErr) {
    let checkRadio = document.querySelectorAll('.radio');
    let count = 0;
    let errCount = 0;
    for (let i = 0; i < checkRadio.length; i++) {
        if (checkRadio[i].checked === false) {
            count++;
        }
    }

    if (count === checkRadio.length) {
        document.getElementById('errpayment').innerHTML = 'заполните поле!';
        errCount++;
        if (focusOnErr) {
            checkRadio[0].scrollIntoView();
        }
    } else {
        document.getElementById('errpayment').innerHTML = '';
    }

    return errCount;
}
function votesValid(focusOnErr) {
    let errCount = 0;
    let votesCheck = document.getElementById('votes').checked;
    if (votesCheck != true) {
        document.getElementById('errvotes').innerHTML = 'заполните поле!';
        errCount++;
        if (focusOnErr) {
            document.getElementById('votes').scrollIntoView();
        }
    } else {
        document.getElementById('errvotes').innerHTML = '';
    }
    return errCount;
}




function submitCheck(eo) {
    eo = eo || window.event;
    let errCount = 0;
    errCount += sitenameValid(!errCount);
    errCount += siteurlValid(!errCount);
    errCount += visitorsValid(!errCount);
    errCount += emailValid(!errCount);
    errCount += divisionValid(!errCount);
    errCount += votesValid(!errCount);
    errCount += divisionValid(!errCount);
    errCount += descriptionValid(!errCount);
    errCount += validRadio(!errCount);

    if (errCount) {
        eo.preventDefault();
    }
}
visitorsValid();
sitenameValid();
siteurlValid();
emailValid();
votesValid();
divisionValid();
descriptionValid();
validRadio();