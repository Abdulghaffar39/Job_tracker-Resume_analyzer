async function signUp(e) {

    try {
        e.preventDefault();

        let fullName = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (fullName === "" || email === "" || password === "") {

            alert("⚠️ Please fill in all fields before submitting!")
            return;

        } else if (email.indexOf("@gmail.com") === -1) {

            alert("Please enter a valid email address!");
            return;

        }

        const res = await axios.post("http://localhost:3000/api/signUp",

            { fullName, email, password }
        )

        const data = res.data;
        console.log(res);

        if (data.status === 505) {

            alert(data.message);
            return;
        }


        if (data.status === 200) {

            alert(data.message);
            window.location.href = "login.html";
        }

    }
    catch (err) {

        console.log(err);
        alert("Not working")

    }


}

async function login(e) {

    try {
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (email === "" || password === "") {

            alert("⚠️ Please fill in all fields before submitting!");
            return;

        } else if (email.indexOf("@gmail.com") === -1) {

            alert("Please enter a valid email address!");
            return;

        }


        const res = await axios.post("http://localhost:3000/api/login",

            { email, password }

        )

        let data = res.data;
        console.log(data);

        if (data.status === 404) {

            alert(data.message);
            return;
        }

        if (data.status === 401) {

            alert(data.message);
            return;
        }

        if (data.status === 200) {

            alert(data.message);
            window.location.href = "home.html";
            return;
        }


    }
    catch (err) {

        console.log(err);
        alert("Not working")

    }


}

async function home(e) {

    try {
        e.preventDefault();

        const res = await axios.post("http://localhost:3000/api/login",

            { withCredentials: true }

        )

        let data = res.data;
        console.log(data);

    }
    catch (err) {

        console.log(err);
        alert("Not working")

    }


}

async function conti(e) {


    try {
        e.preventDefault();


        let company = document.getElementById("company").value;
        let fName = document.getElementById("fName").value;
        let lName = document.getElementById("lName").value;
        let number = document.getElementById("number").value;

        if (company === '' || fName === '' || lName === '' || number === '') {


            alert("⚠️ Please fill in all fields before submitting!");
            return;

        }


        if (company.length <= 4 || fName.length <= 4 || lName.length <= 4) {

            alert("The value provided is incomplete. Please correct it. at least 4 word!");
            return;
        }

        if (number.length <= 7 || number.length > 15) {

            alert("Please enter a valid phone number to continue.");
            return;
        }

        window.location.href = "addJob.html";


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

function logout(e) {

    e.preventDefault();

    window.location.href = "login.html"

}

function postJob(e) {

    e.preventDefault();

    window.location.href = "postJob.html"

}

function findJob(e) {

    e.preventDefault();

    window.location.href = "findJon.html"
}

function backPost(e) {

    e.preventDefault();

    window.location.href = "home.html"
}

function addJob(e) {

    e.preventDefault();

    window.location.href = "postJob.html"
}


