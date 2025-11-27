const express = require("express")
const dbCon = require("./db/db.connection");
const router = require("./Router/route");
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const PORT = 3000 || process.env.PORT;


dbCon();

app.use("/api", router)

app.listen(PORT, () => {

    console.log(`Server is working successfuly on ${PORT}`);

})
