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


        if (res.status === 200) {

            window.location.href = "addJob.html";
        }


    }
    catch (err) {

        console.log(err);
        alert("Not working")

    }


}
// ----------------------------- PostJob ended ----------------------------


// ----------------------------- AddJob started ----------------------------

var jobTilte = document.getElementById("tilte").value;
var jobLocation = document.getElementById("jobLocation").value;
var jobTimeline = document.getElementById("jobTimeline").value;
var jobType = document.getElementById("jobType").value;
var jobPay = document.getElementById("jobPay").value;
var quantityInput = document.getElementById("quantityInput").value;
var description = document.getElementById("description").value;


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

        const res = await axios.post("http://localhost:3000/api/jobData", {

            jobTilte,
            jobLocation,
            jobTimeline,
            jobType,
            quantityInput,
            jobPay,
            description
        });


        if (res.status === 200) {

            window.location.href = "home.html"
        }


    }
    catch (err) {

        console.log(err);
        alert("Not working")

    }


}

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

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


function addJob(e) {

    e.preventDefault();

    window.location.href = "postJob.html"
}
// ----------------------------- AddJob ended ----------------------------


// ----------------------------- Find Job started ----------------------------

async function jobFinder(e) {

    e.preventDefault();

    try {

        let findJob = document.getElementById("findJob");

        const res1 = await axios.get("http://localhost:3000/api/companiesData", {

            company,
            fName,
            lName,
            number
        });


        const res2 = await axios.get("http://localhost:3000/api/jobDataPost", {

            jobLocation,
        });

        const response1 = res1.data.data;
        const response2 = res2.data.jobPost;


        const values = Math.min(response1.length, response2.length);

        if (values) {

            console.log(values);
            for (let i = 0; i < values; i++) {


                findJob.innerHTML += `<div class="container_1">

                    <div class="parent_1" onclick="newJobData()">

                        <div class="child_1">
                            <h1 id="findJob_head">${response1[i].company}</h1>
                        </div>

                        <div class="child_2">
                            <p id="findJob_paraOne">${response1[i].fName + " " + response1[i].lName}</p>
                            <p id="findJob_paraTwo">${response2[i].jobLocation}</p>
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


// ----------------------------- new Job Data started ----------------------------

function newJobData() {

    window.location.href = "newJobData.html"

}


function backFile(e) {

    e.preventDefault();

    window.location.href = "findJob.html"
}


// ----------------------------- new Job Data ended ----------------------------


// ----------------------------- new Job Detais started ----------------------------

async function newJobDetais(e) {

    e.preventDefault()

    try {

        let title = document.getElementById("newJobHead");
        let location = document.getElementById("newJobLocation");
        let location2 = document.getElementById("newJobLocation2");
        let pay1 = document.getElementById("newJobSalary1");
        let pay = document.getElementById("newJobPayment");
        let typejob = document.getElementById("newJobType");
        let descrip = document.getElementById("newJobDesPara");


        const res1 = await axios.get("http://localhost:3000/api/companiesData", {

            company,
            fName,
            lName,
            number
        });

        const res2 = await axios.get("http://localhost:3000/api/jobDataPost", {

            jobTilte,
            jobLocation,
            jobTimeline,
            jobType,
            jobPay,
            quantityInput,
            description,

        });

        const data1 = res1.data.data;
        const data2 = res2.data.jobPost;
        console.log(data1, data2);


        const values = Math.min(data1.length, data2.length);

        if (values) {

            for (let i = 0; i < values; i++) {

                console.log(data2[i].description);
                if (data1[i].company) {

                    title.innerHTML = data2[i].jobTilte;
                    location.innerHTML = data2[i].jobLocation;
                    location2.innerHTML = data2[i].jobLocation;
                    pay1.innerHTML = data2[i].jobPay;
                    pay.innerHTML = data2[i].jobPay;
                    typejob.innerHTML = data2[i].jobType;
                    descrip.innerHTML = data2[i].description;

                }

            }
        }

    }
    catch (err) {

        console.log("Error:", err);
    }

}

// ----------------------------- new Job Detais ended ----------------------------




// ----------------------------- employer started ----------------------------

function apply(e) {

    e.preventDefault();

    window.location.href = "employerData.html"

}

function applyBack(e) {

    e.preventDefault();

    window.location.href = "newJobData.html"

}

// ----------------------------- employer ended ----------------------------


// ----------------------------- resume started ----------------------------

function resumeBack() {

    window.location.href = "findJob.html";
}

function resumeCheck() {

    window.location.href = "resume.html";
}

// ----------------------------- resume ended ----------------------------

// async function resume() {

//     let fileResume = document.getElementById("fileResume");
//     const res = await axios.post("http://localhost:3000/api/generate", 
//         {
//             fileResume}
//     )


// }

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



