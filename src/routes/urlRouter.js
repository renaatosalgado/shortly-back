import { Router } from "express";
import { shortenUrl, getUrl, deleteUrl } from "../controllers/urlsController.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", validateTokenMiddleware, shortenUrl);
urlRouter.get("/urls/:id", getUrl);
urlRouter.delete("/urls/:id", deleteUrl);

export default urlRouter;