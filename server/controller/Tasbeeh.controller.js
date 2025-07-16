import { Tasbeeh } from "../models/Tasbeeh.model.js";
import catchAsync from "../utils/WrapAsync.js";




export const CreateTasbeeh =  catchAsync(async (req,res)=>{

    const {title,goal} = req.body

    if(!title.trim()){
        return res.status(400).json({
            message:"provide a title"
        })
    }

    const tasbeeh = await Tasbeeh.create({
        user:req.user.id,
        title,
        goal:goal || 100
    })

    return res.status(201).json({
        success:true,
        message:"Tasbeeh has created successfully!",
    data:tasbeeh
    })

})


export const GetTasbeeh = catchAsync( async(req,res)=>{

    const tasbeeh =  await Tasbeeh.find({user:req.user.id})

    if(tasbeeh.length ===0){
return res.status(404).json({
    message:"no tasbeeh found for this user"
})

}
return res.status(200).json({
    success:true,
    tasbeeh:tasbeeh
})
})



export const updateTasbeeh = catchAsync( async(req,res)=>{

    const {increment} = req.body
    const tasbeeh =  await Tasbeeh.findOne({_id:req.params.id , user:req.user.id})
if(!tasbeeh){
    return res.status(400).json({
        message:"notasbeeh foundn for this user"
    })
}

if(increment){
    tasbeeh.count +=1

}

await tasbeeh.save()


return res.status(200).json({
    success:true,
    message:"tasbeeh count udated!",
    data : tasbeeh
})
})


export const resetTasbeeh = catchAsync(async(req,res)=>{
    const tasbeeh =  await Tasbeeh.findOne({_id:req.params.id , user:req.user.id})
    if(!tasbeeh){
    return res.status(400).json({
        message:"no tasbeeh found for this user"
    })
}
    tasbeeh.count = 0
    await tasbeeh.save()

    return res.status(200).json({
        message:"reset!",
        data:tasbeeh
    })

})