const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const authRouter = require("./routers/auth");
const authMiddleWare = require("./auth/middleware");
const Events = require("./models").event;
const Users = require("./models").user;
const Scores = require("./models").score;
const { PORT } = require("./config/constants");

const app = new express()

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

app.post("/createEvent", async (req,res) => {
  try {
    const { name, time, location, description, userId } = req.body

    const allEvents = await Events.findAll()
    const newEventId = Math.max(allEvents?.map(event => event.id)) + 1

    const newEvent = await Events.create({
      name: name,
      id: newEventId,
      time: time,
      location: location,
      description: description,
      userId: userId
    })
    return res.status(201).send({ message: "Event created", newEvent})
  } catch(error) {
    console.log(error.message)
  }
})


app.use("/", authRouter);

// POST endpoint for testing purposes, can be removed
app.post("/echo", (req, res) => {
  res.json({
    youPosted: {
      ...req.body,
    },
  });
});

// POST endpoint which requires a token for testing purposes, can be removed
app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  // accessing user that was added to req by the auth middleware
  const user = req.user;
  // don't send back the password hash
  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});
