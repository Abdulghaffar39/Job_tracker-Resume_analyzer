function signUp(e) {

    try {
        e.preventDefault();

        let fullName = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (fullName === "" || email === "" || password === "") {

            alert("⚠️ Please fill in all fields before submitting!")

        } else if (email.indexOf("@gmail.com") === -1) {

            alert("Please enter a valid email address!")

        } else {

            alert(`🎉 Thank you, ${fullName}! Your details have been submitted successfully.`)
            window.location.href = "login.html"
        }

    }
    catch (err) {

        console.log(err);
        alert("Not working")

    }


}

function login(e) {

    try {
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (email === "" || password === "") {

            alert("⚠️ Please fill in all fields before submitting!")

        } else if (email.indexOf("@gmail.com") === -1) {

            alert("Please enter a valid email address!")
        } else {

            alert(`🎉 Thank you, Login! Your details have been submitted successfully.`)
            window.location.href = "home.html"
        }

    }
    catch (err) {

        console.log(err);
        alert("Not working")

    }


}


function goLogin(e) {

    e.preventDefault();

    window.location.href = "login.html"

}

function goSignUP(e) {

    e.preventDefault();

    window.location.href = "index.html"

}


