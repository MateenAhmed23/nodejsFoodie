const express = require("express");
const Deal = require("../models/Deal");

const router =  new express.Router();


router.post('/deal/addNew', async(req,res)=>{
    const deal = new Deal(req.body);
    try{
        await deal.save();
        res.status(201).send(deal); 
    }catch(e){
        res.status(400).send(e);
    }
});

router.get("/deals/all", async (req,res)=>{
    try{
        const deals = await Deal.find({});
        if(deals.length===0)
            return res.status(400).send("Could not find any deals");
        return res.status(200).send(deals);
    }catch(e){
        return res.status(500).send(e);
    }
});

router.post('/deals/specific', async (req,res)=>{

    const {city,type,area} = req.body.data;
    console.log(city,type,area);

    console.log(req.body.data);
    try{
        const deals = await Deal.find({
            city: city,
            type:type,
            area:area
        });
        console.log(deals.length);
        if(deals.length===0){
            return res.status(400).send("Could not find any deals"); 
        }
        return res.status(200).send(deals);
    }catch(e){
        return res.status(500).send(e);
    }
})




module.exports = router;