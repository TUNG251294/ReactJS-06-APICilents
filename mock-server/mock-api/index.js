const express = require("express");
const apiMocker = require("connect-api-mocker");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors({ origin: true, credentials: true }));

app.use("/api", apiMocker("mock-api"));

app.listen(port, () => console.log(`Server listening on port ${port}!`));

//npm run start
// server chạy trên port 3001, url có dạng http://localhost:3001/api/users/1