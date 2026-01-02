// const { json } = require("body-parser");
// const { parse } = require("cli");

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

    e.preventDefault()

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("⚠️ Please fill in all fields before submitting!");
        return;
    }

    try {

        const res = await axios.post("http://localhost:3000/api/login", {
            email,
            password
        });

        const data = res.data;
        console.log("LOGIN RESPONSE:", data);

        if (data.status === 404 || data.status === 401) {
            alert(data.message);
            return;
        }

        if (data.status === 200) {

            alert(data.message);
            localStorage.setItem("token", data.token);
            console.log("Token saved:", localStorage.getItem("token"));
            window.location.href = "home.html";
        }


    } catch (err) {

        console.log(err);
        alert("Not working");
    }


}

// ----------------------------- Login ended ----------------------------


// ----------------------------- Home stared ----------------------------
async function home(e) {

    e.preventDefault();

    try {
        // ✅ 1. Token ko pehle get karo
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Token missing! Please login again.");
            window.location.href = "login.html";
            return;
        }
        console.log("Token:", token);

        // ✅ 2. Axios request me token bhejo
        const res = await axios.post("http://localhost:3000/api/home",
            { withCredentials: true }
        );

        let data = res.data;
        console.log("Home data:", data);

    } catch (err) {
        console.log(err);
        alert("Not working")
    }
}

// ----------------------------- Home ended ----------------------------


// ----------------------------- PostJob started ----------------------------


async function conti(e) {

    e.preventDefault();

    let company = document.getElementById("company").value;
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let number = document.getElementById("number").value;
    let jobTilte = document.getElementById("tilte").value;
    let jobLocation = document.getElementById("jobLocation").value;
    let jobType = document.getElementById("jobType").value;
    let jobPay = document.getElementById("jobPay").value;
    let city = document.getElementById("city").value;
    let experience = document.getElementById("experience").value;
    let skills = document.getElementById("skills").value;
    let appliMethod = document.getElementById("appliMethod").value;
    let expiry = document.getElementById("expiry").value;
    let description = document.getElementById("description").value;


    try {

        console.log(company,
            fName,
            lName,
            number,
            jobTilte,
            jobLocation,
            jobType,
            jobPay,
            city,
            experience,
            skills,
            appliMethod,
            expiry,
            description);




        if (company === "" ||
            fName === "" ||
            lName === "" ||
            number === "" ||
            jobTilte === "" ||
            jobLocation === "" ||
            jobType === "" ||
            jobPay === "" ||
            city === "" ||
            experience === "" ||
            skills === "" ||
            appliMethod === "" ||
            expiry === "" ||
            description === "") {


            alert("⚠️ Please fill in all fields before submitting!");
            return;

        }



        if (number.length <= 7 || number.length > 15) {

            alert("Please enter a valid phone number to continue.");
            return;
        }


        const res = await axios.post("http://localhost:3000/api/company",

            {
                company,
                fName,
                lName,
                number,
                jobTilte,
                jobLocation,
                jobType,
                jobPay,
                city,
                experience,
                skills,
                appliMethod,
                expiry,
                description
            }
        );

        console.log(res);


        if (res.status === 200) {

            window.location.href = "home.html";
            // alert("Working successfuly")
        }


    }
    catch (err) {

        console.log(err);
        alert("Not working")
    }


}
// ----------------------------- PostJob ended ----------------------------


// // ----------------------------- AddJob started ----------------------------


// async function addJobConfirm(e) {

//     try {
//         e.preventDefault();


//         let jobTilte = document.getElementById("tilte").value;
//         let jobLocation = document.getElementById("jobLocation").value;
//         let jobTimeline = document.getElementById("jobTimeline").value;
//         let jobType = document.getElementById("jobType").value;
//         let jobPay = document.getElementById("jobPay").value;
//         let quantityInput = document.getElementById("quantityInput").value;
//         let description = document.getElementById("description").value;

//         if (jobTilte === '' || jobLocation === '' || jobTimeline === '' || jobType === '' || jobPay === '' || description === '') {


//             alert("⚠️ Please fill in all fields before submitting!");
//             return;
//         }

//         if (jobLocation === 'Select' || jobTimeline === 'selectTime' || jobType === 'selectType' || quantityInput === "0" || jobPay === 'selectPay') {


//             alert("!Please select an option");
//             return;
//         }



//         const res = await axios.post("http://localhost:3000/api/jobData",

//             {
//                 jobTilte,
//                 jobLocation,
//                 jobTimeline,
//                 jobType,
//                 quantityInput,
//                 jobPay,
//                 description
//             }
//         );


//         if (res.status === 200) {

//             window.location.href = "home.html"
//         }


//     }
//     catch (err) {

//         console.log(err);
//         alert("Not working")

//     }


// }

// let plus = document.getElementById("plus");
// let minus = document.getElementById("minus");

// plus.addEventListener("click", () => {

//     let currentValue = parseInt(quantityInput.value)

//     if (!isNaN(currentValue)) {

//         quantityInput.value = currentValue + 1
//     }

// });

// minus.addEventListener("click", () => {

//     let currentValue = parseInt(quantityInput.value)

//     if (!isNaN(currentValue) && currentValue > parseInt(quantityInput.min)) {

//         quantityInput.value = currentValue - 1
//     }

// });


// function addJob(e) {

//     e.preventDefault();

//     window.location.href = "postJob.html"
// }
// // ----------------------------- AddJob ended ----------------------------


// ----------------------------- Find Job started ----------------------------
let jobPay = document.getElementById("jobPay");
let fName = document.getElementById("fName").value;
let lName = document.getElementById("lName").value;
let number = document.getElementById("number").value;
let city = document.getElementById("city").value;
let experience = document.getElementById("experience").value;
let skills = document.getElementById("skills").value;
let appliMethod = document.getElementById("appliMethod").value;
let expiry = document.getElementById("expiry").value;
let description = document.getElementById("description").value;
// async function call() {
//     try {

//     }
//     catch (err) {
//         console.log(err);

//     }
// }
// call()


async function jobFinder(e) {


    e.preventDefault();

    try {

        let company = document.getElementById("company");
        let jobTilte = document.getElementById("tilte");
        let jobType = document.getElementById("jobType");
        let jobLocation = document.getElementById("jobLocation");
        let findJob = document.getElementById("findJob");

        const res = await axios.get("http://localhost:3000/api/companiesData",

            {
                company,
                jobTilte,
                jobLocation,
                jobPay,
                jobType
            }

        );

        let response = res.data.data
        if (response) {

            findJob.innerHTML = ""
            console.log(response);
            for (let i = 0; i < response.length; i++) {


                findJob.innerHTML += `
                <div class="job-list containerCont">
                    <div class="job-card" onclick="showJobDetail(${i}, '${response[i].company}', '${response[i].jobTilte}', '${response[i].jobLocation}', '${response[i].jobType}', '${response[i].jobPay}')">
                        <h3 class="company-name">${response[i].company}</h3>
                        <p class="job-title">${response[i].jobTilte}</p>
                        <p class="job-location">${response[i].jobLocation}, ${response[i].jobType}</p>
                        <p class="job-salary">${response[i].jobPay}</p>
                    </div>

                </div>`

            }
        }

    } catch (err) {
        console.log("Error:", err);
    }
}

function showJobDetail(index, company, jobTitle, jobLocation, jobType, jobPay) {
    // Job details ko URL parameters mein pass karenge
    const url = `jobDetailPage.html?company=${encodeURIComponent(company)}&jobTitle=${encodeURIComponent(jobTitle)}&jobLocation=${encodeURIComponent(jobLocation)}&jobType=${encodeURIComponent(jobType)}&jobPay=${encodeURIComponent(jobPay)}`;

    // Naye page pe redirect karenge
    window.location.href = "newJobData.html";
}

window.onload = function () {
    // URL se query parameters ko fetch karna
    const urlParams = new URLSearchParams(window.location.search);

    const company = urlParams.get('company');
    const jobTitle = urlParams.get('jobTitle');
    const jobLocation = urlParams.get('jobLocation');
    const jobType = urlParams.get('jobType');
    const jobPay = urlParams.get('jobPay');

    // Data ko page par display karna
    document.getElementById('company-name').innerText = company;
    document.getElementById('job-title').innerText = jobTitle;
    document.getElementById('job-location').innerText = `${jobLocation}, ${jobType}`;
    document.getElementById('job-salary').innerText = jobPay;
}



window.addEventListener("click", function showJobDetail() {
    console.log('addengwwork');

})

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

        // let title = document.getElementById("newJobHead");
        // let location = document.getElementById("newJobLocation");
        // let location2 = document.getElementById("newJobLocation2");
        // let pay1 = document.getElementById("newJobSalary1");
        // let pay = document.getElementById("newJobPayment");
        // let typejob = document.getElementById("newJobType");
        // let descrip = document.getElementById("newJobDesPara");


        // const res1 = await axios.get("http://localhost:3000/api/companiesData",

        //     {
        //         company,
        //         fName,
        //         lName,
        //         number
        //     }
        // );

        // const res2 = await axios.get("http://localhost:3000/api/jobDataPost",

        //     {
        //         jobTilte,
        //         jobLocation,
        //         jobTimeline,
        //         jobType,
        //         jobPay,
        //         quantityInput,
        //         description
        //     }

        // );

        const data1 = res1.data.data;
        const data2 = res2.data.jobPost;
        console.log(data1, data2);



        const values = Math.min(data1.length, data2.length);

        if (values) {

            for (let i = 0; i < values; i++) {

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
document.querySelector(".checkResult").style.display = "block";

async function resume() {

    let fileInput = document.getElementById("fileResume");
    let jobDes = document.getElementById("jobDes");



    if (!fileInput.files.length) {
        alert("Please select a PDF file");
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);
    formData.append("jobDescription", jobDes.value);

    try {
        const res = await axios.post("http://localhost:3000/api/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });



        document.querySelector(".checkResult").style.display = "block";

        let data = res.data.aiAnalysis;
        let clean = data.replace(/```json | ```/g, "").trim();
        let parsed = JSON.parse(clean);

        console.log(parsed);
        // Score Boxes
        document.getElementById("resumeScore").innerText = parsed["resumeScore"];
        document.getElementById("atsScore").innerText = parsed["atsScore"];

        // Missing Skills
        const skillsList = document.getElementById("missSkills");
        skillsList.innerHTML = "";
        parsed["missingSkills"].forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        // require Skills
        const requireSkills = document.getElementById("requireSkills");
        requireSkills.innerHTML = "";
        parsed["recommendedSkillsToAdd"].forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            requireSkills.appendChild(li);
        });

        // Suggestions
        const suggestionsContainer = document.getElementById("suggestionsContainer");
        suggestionsContainer.innerHTML = "";
        parsed["suggestions"].forEach(txt => {
            const div = document.createElement("div");
            div.style.padding = "10px";
            div.style.margin = "10px 0";
            div.style.borderRadius = "8px";
            div.innerText = txt;
            suggestionsContainer.appendChild(div);
        });

        // Improved Resume
        const improvedResume = document.getElementById("resumeContainer");
        improvedResume.innerHTML = "";
        let resumeText = parsed["improvedResumeText"];
        let sections = resumeText.split('---');
        sections.forEach(section => {
            const div = document.createElement("div");
            div.style.border = "1px solid #ddd";
            div.style.padding = "12px";
            div.style.margin = "10px 0";
            div.style.borderRadius = "8px";
            div.style.whiteSpace = "pre-wrap";
            div.innerText = section.trim();
            improvedResume.appendChild(div);
        });
        const objDiv = document.getElementById("checkResult");
        objDiv.scrollTop = objDiv.scrollHeight;

    } catch (err) {
        console.error("Upload error:", err);
        alert("Upload failed! See console.");
    }
}

let resumeText = document.getElementById("resumeContainer").innerText;

async function saveCVData() {

    let resumeText = document.getElementById("resumeContainer").innerText;

    if (!resumeText) {
        alert("⚠️ Resume is empty!");
        return;
    }

    try {

        const response = await axios.post("http://localhost:3000/api/saveResume",

            { resumeText }

        );

        console.log(response.data.details);
        window.location.href = "template.html"

    }
    catch (error) {

        console.error("Error saving resume:", error);
        alert("Error: Could not save resume.");
    }
}

async function templates(e) {

    e.preventDefault();


    try {

        const res = await axios.get("http://localhost:3000/api/getResumeData")

        console.log(res.data.getDataRes[0]);
        console.log(res.data.getDataRes);



    }
    catch (error) {

        console.error("Error saving resume:", error);
    }
}


// ----------------------------- resume ended ----------------------------


function resumeBack() {

    window.location.href = "findJob.html";
}

function resumeCheck() {

    window.location.href = "resume.html";
}

// ----------------------------- resume ended ----------------------------


// ----------------------------- Dashboard started ----------------------------



async function getDashboardData(e) {

    e.preventDefault();

    try {

        const token = localStorage.getItem("token");

        console.log("Token from localStorage:", token);

        if (!token) {
            console.log("❌ Token nahi mila");
            return;
        }

        const res = await axios.get("http://localhost:3000/api/dashboard");

        // const res2 = await axios.get("http://localhost:3000/api/companiesData",

        //     {
        //         company,
        //         fName,
        //         lName,
        //         number
        //     }
        // );

        // const res3 = await axios.get("http://localhost:3000/api/jobDataPost",

        //     {
        //         jobTilte,
        //         jobLocation,
        //         jobTimeline,
        //         jobType,
        //         jobPay,
        //         quantityInput,
        //         description
        //     }
        // );

        if (values) {

            console.log(values);
            for (let i = 0; i < values; i++) {


                findJob.innerHTML += `< div class="container_1" >

                    <div class="parent_1" onclick="newJobData()">

                        <div class="child_1">
                            <h1 id="findJob_head">${response1[i].company}</h1>
                        </div>

                        <div class="child_2">
                            <p id="findJob_paraOne">${response1[i].fName + " " + response1[i].lName}</p>
                            <p id="findJob_paraTwo">${response2[i].jobLocation}</p>
                        </div>

                    </div>
    
                </ > `

            }
        }

    } catch (err) {
        console.log("Error:", err);
    }

}

// ----------------------------- Dashboard ended ----------------------------


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

function dashboard() {

    window.location.href = "dashboard.html"
}

function findJob(e) {

    e.preventDefault();

    window.location.href = "findJob.html"
}

function backPost(e) {

    e.preventDefault();

    window.location.href = "home.html"
}



