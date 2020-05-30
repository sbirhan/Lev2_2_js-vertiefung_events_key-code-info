document.getElementById("bodyID").addEventListener("keypress", writeCharCode);

function writeCharCode(event) {
    var keyCode = event.which;
    var key = String.fromCharCode(keyCode);
    document.getElementById("key").innerHTML = key;
    document.getElementById("keyCodeBig").innerHTML = keyCode;
    document.getElementById("keyCodeSmall").innerHTML = keyCode;
    document.getElementById("Code").innerHTML = event.code;
}


