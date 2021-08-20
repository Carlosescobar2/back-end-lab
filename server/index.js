const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req,res)=> { 
  const fortune = ["Never fear! The end of something marks the start of something new.", 
  "Pennies from heaven find their way to your doorstep this year!",
"Now is a good time to buy stock.", "Adventure can be real happiness.", 
"An inch of time is an inch of gold."]

let randomIndex = Math.floor(Math.random() * fortune.length);
let randomFortune = fortune[randomIndex];

res.status(200).send(randomFortune);
})


app.listen(4000, () => console.log("Server running on 4000"));
