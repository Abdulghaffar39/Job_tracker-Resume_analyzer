// ----------------------------- SignUp started ----------------------------
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
// ----------------------------- SignUp ended ----------------------------


// ----------------------------- Login started ----------------------------
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
// ----------------------------- Login ended ----------------------------


// ----------------------------- Home stared ----------------------------
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
// ----------------------------- Home ended ----------------------------


// ----------------------------- PostJob started ----------------------------

var company = document.getElementById("company").value;
var fName = document.getElementById("fName").value;
var lName = document.getElementById("lName").value;
var number = document.getElementById("number").value;


async function conti(e) {


    try {

        var company = document.getElementById("company").value;
        var fName = document.getElementById("fName").value;
        var lName = document.getElementById("lName").value;
        var number = document.getElementById("number").value;
        e.preventDefault();


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


        const res = await axios.post("http://localhost:3000/api/company", {

            company,
            fName,
            lName,
            number
        });


        if(res.status === 200){

            window.location.href = "addJob.html";
        }


    }
    catch (err) {

        console.log(err);
        alert("Not working")

    }


}
// ----------------------------- PostJob ended ----------------------------


// ----------------------------- AddJon started ----------------------------
async function addJobConfirm(e) {

    try {
        e.preventDefault();


        let jobTilte = document.getElementById("tilte").value;
        let jobLocation = document.getElementById("jobLocation").value;
        let jobTimeline = document.getElementById("jobTimeline").value;
        let jobType = document.getElementById("jobType").value;
        let jobPay = document.getElementById("jobPay").value;
        let quantityInput = document.getElementById("quantityInput").value;
        let description = document.getElementById("description").value;

        if (jobTilte === '' || jobLocation === '' || jobTimeline === '' || jobType === '' || jobPay === '' || description === '') {


            alert("⚠️ Please fill in all fields before submitting!");
            return;

        }

        if (jobLocation === 'Select' || jobTimeline === 'selectTime' || jobType === 'selectType' || quantityInput === "0" || jobPay === 'selectPay') {


            alert("!Please select an option");
            return;

        }


    }
    catch (err) {

        console.log(err);
        alert("Not working")

    }


}

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let quantityInput = document.getElementById("quantityInput");

plus.addEventListener("click", () => {

    let currentValue = parseInt(quantityInput.value)

    if (!isNaN(currentValue)) {

        quantityInput.value = currentValue + 1
    }

});

minus.addEventListener("click", () => {

    let currentValue = parseInt(quantityInput.value)

    if (!isNaN(currentValue) && currentValue > parseInt(quantityInput.min)) {

        quantityInput.value = currentValue - 1
    }

});
// ----------------------------- AddJon ended ----------------------------


// ----------------------------- Find Job started ----------------------------

async function jobFinder(e) {

    e.preventDefault();


    try {

        let findJob = document.getElementById("findJob");

        const res = await axios.get("http://localhost:3000/api/companiesData", {

            company,
            fName,
            lName,
            number
        });

        const data = res.data.data;

        if (data) {

            console.log(data);
            for (let i = 0; i < data.length; i++) {


                findJob.innerHTML += `<div class="container_1">

                    <div class="parent_1">

                        <div class="child_1">
                            <h1 id="findJob_head">${data[i].company}</h1>
                        </div>

                        <div class="child_2">
                            <p id="findJob_paraOne">${data[i].fName}</p>
                            <p id="findJob_paraTwo">${data[i].lName}</p>
                        </div>

                    </div>

                </div>`

            }
        }


        // if (res.status === 200) {


        //     alert("Working successfully!");

        // }

    } catch (err) {
        console.log("Error:", err);
    }
}


// ----------------------------- Find Job ended ----------------------------



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

    window.location.href = "findJob.html"
}

function backPost(e) {

    e.preventDefault();

    window.location.href = "home.html"
}

function addJob(e) {

    e.preventDefault();

    window.location.href = "postJob.html"
}


