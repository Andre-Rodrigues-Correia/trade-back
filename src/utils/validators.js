

function validateStrongPassword(password) {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+\.]{8,}$/;

    return strongPasswordRegex.test(password);
}
function validateBirthday(birthday) {

    const birthdayAux = new Date(birthday);

    if (isNaN(birthdayAux.getTime())) {
        return false;
    }


    const minimumAge = 18;
    const today = new Date();


    if ((today.getFullYear() - birthdayAux.getFullYear()) < minimumAge) {
        return false;
    }

    return true;
}

export  { validateBirthday, validateStrongPassword}
