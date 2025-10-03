import Note from "../models/Note.js"; 

export const getAllNotes = async (_, res) => {  // since req value is never used, we use _ in place of it (convention). 
  try {
    const notes = await Note.find().sort({createdAt: -1}); // -1 will sort in desc. order   (newest first)
    res.status(200).json(notes); 
  } catch (error) {
    console.error("Error in getAllNotes controller", error); 
    res.status(500).json({message: "Internal server error"});
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id); 
    if (!note) return res.status(404).json({message: "Note not found"}); 
    res.status(200).json(note); 
  } catch (error) {
    console.error("Error in getNoteById controller", error); 
    res.status(500).json({message: "Internal server error"}); 
  }
}

export const createNote = async (req, res) => {
  try {
    const {title, content} = req.body;
    const note = new Note({title: title, content: content});
    const savedNote = await note.save(); 
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller", error); 
    res.status(500).json({message: "Internal server error"});
  }
};

export const updateNote = async (req, res) => {
  try {
    const {title, content} = req.body; 
    const updateNote = await Note.findByIdAndUpdate(req.params.id, {title: title, content: content}, {new: true});
    if (!updateNote) return res.status(400).json({message: "Note not found"}); 
    res.status(200).json(updateNote);
  } catch (error) {
    console.error("Error in updateNode controller", error); 
    res.status(500).json({message: "Internal server error"});
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).json({message: "Note not found"}); 
    res.status(200).json("Note deleted successfully"); 
  } catch (error) {
    console.error("Error in deleteNode controller", error); 
    res.status(500).json({message: "Internal server error"});
  }
};