import express from "express";
import { createNode, getAllNodes, updateNode,deleteNode,getNodeById } from "../controllers/notesControllers.js";

const route=express.Router();

route.get("/",getAllNodes)
route.get("/:id",getNodeById)
route.post("/",createNode)
route.put("/:id",updateNode)
route.delete("/:id",deleteNode)

export default route;
