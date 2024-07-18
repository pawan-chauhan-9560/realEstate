import express from "express";

const router = express.Router();

router.get('/test',(req,res)=>{
    res.json({
        test:'tes'
    })
})
export default router;