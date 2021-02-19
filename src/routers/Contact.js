const express = require("express");
const Contact = require("../models/Contact");

const router =  new express.Router();


router.post('/contactus', async(req,res)=>{
    const contact = new Contact(req.body);
    try{
        await contact.save();
        res.status(201).send(contact); 
    }catch(e){
        res.status(400).send(e);
    }
});

router.get('/contact/getAll', async(req,res)=>{
    try{
        const contacts = await Contact.find({});
        if(contacts.length===0)
            return res.status(400).send("Could not find any contacts");
        return res.status(200).send(contacts);
    }catch(e){
        return res.status(500).send(e);
    }
})

module.exports = router;