// For GET request use app.get() method
const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello sir")
});

// For POST request use app.post() method:
const express=require("express";
const app1=express();
app1.post('',(req,res)=>{
    res.send("Hello Madam")
})
