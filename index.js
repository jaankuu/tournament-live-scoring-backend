const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const Events = require("./models").event;
const Scores = require("./models").score;
const app = new express()
const PORT = 4000

app.use(loggerMiddleWare("dev"));
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(corsMiddleWare());


// GET endpoint for testing purposes, can be removed
app.get("/", (req, res) => {
    res.send("Hi from express");
  });
  

// Listen for connections on specified port (default is port 4000)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
  

// Get all events

app.get("/events", async (req, res) => {
    try {
      const events = await Events.findAll()
      const mappedEvents = events.map(event => event.toJSON())
      res.status(200).send(mappedEvents)
    } catch(error) {
        console.log(error.message)
    }
})

// Get event by ID 

app.get("/events/:id", async (req, res) => {
  try {
    const { id } = req.params

    if (isNaN(parseInt(id))) {
      return res.status(400).send({ message: "Event ID is not a number"})
    }

    const event = await Events.findByPk(id)
    const scores = await Scores.findAll({ where: { eventId : event.id}})

    if (event === null) {
      return res.status(404).send({ message: "Event not found"})
    }

    res.status(200).send({ message: "ok", event, scores})
  } catch(error) {
    console.log(error.message)
  }
})
