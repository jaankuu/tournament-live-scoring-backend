const { Router } = require("express");
const PORT = process.env.PORT || 4000
const Events = require("./models").events
// const Scores = require("../models").scores

const app = new Router()


// GET endpoint for testing purposes, can be removed
app.get("/", (req, res) => {
    res.send("Hi from express");
  });
  

// Listen for connections on specified port (default is port 4000)

// app.listen(PORT, () => {
//     console.log(`Listening on port: ${PORT}`);
//   });
  


app.get("/events", async (req, res) => {
    try {
      const events = await Events.findAll()
      res.send(events)
    } catch(error) {
        console.log(error.message)
    }
})

