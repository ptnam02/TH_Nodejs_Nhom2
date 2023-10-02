import express from "express";
const cart = (req, res) =>{
    return res.render('index',{data: { title:'cart', page: 'cart'}});
}
export default cart