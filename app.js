function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const stringPin = pin + '';
    if (stringPin.length == 4) {
        return stringPin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('pin-number').value = pin;
}

//
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const matchPinInput = document.getElementById('match-pin');
    if (isNaN(number)) {
        if (number == 'C') {
            matchPinInput.value = '';
        }
    }
    else {
        const priviousMatch = matchPinInput.value;
        const newMatchPin = priviousMatch + number;
        matchPinInput.value = newMatchPin;
    }
})


function varyfiedPin() {
    const getPinNumbre = document.getElementById('pin-number').value;
    const getMatchPin = document.getElementById('match-pin').value;
    const success = document.getElementById('notify-success');
    const field = document.getElementById('notify-field');
    if (getPinNumbre == getMatchPin) {
        success.style.display = 'block';
        field.style.display = 'none';
    }
    else {
        success.style.display = 'none';
        field.style.display = 'block';
    }
}