function generatePassword() {
    var length = document.getElementById("passwordLength").value;
    var includeSymbols = document.getElementById("includeSymbols");
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "!@#$%&+?/";
    var password = "";

    if (includeSymbols.checked) {
      var characters = lowercase + uppercase + numbers + symbols;
    }else {
      var characters = lowercase + uppercase + numbers;
    }

    for (var i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
  }

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");

    swal({
        title: "COPIED",
        icon: "success",
        button: true
    });
  }
