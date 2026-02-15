import Note from "../models/Note.js";

export async function getAllNodes(_,res){
    try {
        const notes=await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function createNode(req,res){
    try {
        const {title,content}=req.body
        const note = new Note({title,content}) 
        const savedNote= await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNode controller",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function updateNode(req,res){
    try {
        const {title,content}=req.body;
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});
        if(!updatedNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in the updateNode controller",error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function deleteNode(req,res){
    try {
        const deletedNode=await Note.findByIdAndDelete(req.params.id);
        if(!deletedNode) return res.status(404).json({message:"Note not found"});
        res.status(200).json({message:"Note deleted successfully"});
    } catch (error) {
        console.error("Error in the deleteNode controller",error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function getNodeById(req,res){
    try {
        const reqNote=await Note.findById(req.params.id);
        if(!reqNote) return res.status(404).json({message:"Note not found"});
        res.json(reqNote);
    } catch (error) {
        console.error("Error in getNodeById controller");
        res.status(500).json({message:"Internal Server Error"});
    }
}