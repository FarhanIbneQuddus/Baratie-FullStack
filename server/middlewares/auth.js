export const protect = async (req, res, next) => {
    try{
        const {userId} = await req.auth();
        if(!userId){
            return res.json({success: flase, message: "not authenticated"})
        }
        next()
    } catch (error) {
        res.json({success: flase, message: error.message })
    }
}