import { Note } from "../models/Notes.model.js";
import catchAsync from "../utils/WrapAsync.js";

export const CreateNotes = catchAsync(async (req, res) => {
  // 1. Extract title and content from body
  const { title, content } = req.body;

  // 2. Validate inputs
  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({
      message: "Please fill the fields properly!",
    });
  }

  // 3. Create note and associate with user
  const note = await Note.create({
    title,
    content,
    user: req.user.id, // <-- Associate with logged-in user
  });

  // 4. Send success response
  return res.status(201).json({
    message: "Note created successfully!",
    data: note,
  });
});





export const GetNotes = catchAsync( async(req,res)=>{

    const user  = req.user.id
    const note = await Note.find({user})

    if(note.length==0){
        return res.status(404).json({
            message:"user has not created any note"
        })

    }

    return res.status(200).json({
        message:"succes",
        note:note,
        
    })

})



export const updateNotes = catchAsync(async (req, res) => {
  const { title, content } = req.body;

  // 1. Find the note by ID and ensure it's owned by this user
  const note = await Note.findOne({ _id: req.params.id, user: req.user.id });

  if (!note) {
    return res.status(404).json({
      message: "Note not found or you are not authorized to update this.",
    });
  }

  // 2. Update fields
  note.title = title || note.title;
  note.content = content || note.content;

  // 3. Save updated note
  await note.save();

  return res.status(200).json({
    message: "Note updated successfully!",
    data: note,
  });
});


export const DeleteNotes = catchAsync(async(req,res)=>{

  const note = await Note.findOne({_id:req.params.id , user:req.user.id})
if(!note){

  return res.status(404).json({
    message:"no note found for this user"
  })
}

 await note.deleteOne()

 return res.status(200).json(
  {
    message: "note deleted succesfully!"
  }
 )
})
