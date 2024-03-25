// const { Router } = require("express")
import { Router } from "express";

const routes = new Router();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

// module.exports = routes
export default routes;
