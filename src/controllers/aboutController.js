import express from "express";
const about = (req, res) =>{
    return res.render('index',{data: { title:'about', page: 'about'}});
}
export default about