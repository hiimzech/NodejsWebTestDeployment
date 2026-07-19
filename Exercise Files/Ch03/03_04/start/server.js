import express from "express";
//import skiTerms from "./ski-terms.json" assert { type: "json" };
import skiTerms from "./ski-terms.json" with { type: "json" };
import bodyParser from "body-parser";
import fs from "fs";

const app = express();

let definitions = skiTerms

app.use("/", express.static("./client"));
app.get("/dictionary", (req, res) => {
  //res.json(skiTerms);
  res.json(definitions);
});

app.post("/dictionary", bodyParser.json(), (req, res) => {
  //skiTerms.push(req.body);
  definitions.push(req.body);
  save();
  res.json({
    status: "success",
    term: req.body
  });
});

app.delete("/dictionary/:term", (req, res) => {
  //skiTerms.filter(({ term }) => term !== req.params.term);
  //definitions.filter(({ term }) => term !== req.params.term);
  console.log(req.params);
  console.log(definitions.filter(({ term }) => term !== req.params.term));
  definitions = definitions.filter(({ term }) => term !== req.params.term);
  save();
  res.json({
    status: "success",
    removed: req.params.term,
    newLength: definitions.length
  });
})

const save = () => {
  fs.writeFile(
    "./ski-terms.json",
    //JSON.stringify(skiTerms, null, 2),
    JSON.stringify(definitions, null, 2),
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
};



app.listen(3000, () =>
  console.log("ski dictionary running at 3000")
);
