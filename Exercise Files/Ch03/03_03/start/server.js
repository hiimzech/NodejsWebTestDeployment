import express from "express";
import skiTerms from "./ski-terms.json" with { type: "json" };
import bodyparser from "body-parser";
import fs from "fs";

const app = express();

app.use("/", express.static("./client"));
app.get("/dictionary", (req, res) => {
  res.json(skiTerms);
});

const save = () => {
  fs.writeFile("./ski-terms.json",
    JSON.stringify(skiTerms, null, 2),
    (err) => {
      if (err) {
        throw err;
      }
    }
  )
}

app.post("/dictionary", bodyparser.json(), (req, res) => {
  const newTerm = req.body;
  skiTerms.push(newTerm);
  save();
  res.json({
    status: "success",
    term: newTerm
  })
});

app.listen(3000, () =>
  console.log("ski dictionary running at 3000")
);
