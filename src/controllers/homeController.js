import express from "express";
const home = (req, res) =>{
    return res.render('index',{data: { title:'home', page: 'home'}});
}
export default home