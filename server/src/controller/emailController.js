import emails from "../models/emailModel.js"

const emailSubscribe = async(req,res)=> {
    try {
        const {email} = req.body

        const emailCreate = {
            email
        }

        const subscribe = await emails.create(emailCreate)
        res.json({
            success:true,
            subscribe,
            message:"Subscribed Successfully"
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
          });
    }
}

const getAllEmail = async (req,res)=> {
    try {
        const email = await emails.find({})
        res.json({
            success:true,
            email,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
          });
    }
}

const deleteEmails = async (req,res)=> {
    try {
        const {_id} = req.params;

        const deleteId = await emails.findByIdAndDelete(_id)
        res.json({
            success:true,
            deleteEmails,
            message:"Subscription Cancelled"
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
          });
    }
}

export {
    emailSubscribe,
    getAllEmail,
    deleteEmails

}