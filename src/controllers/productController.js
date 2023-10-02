import express from "express";
const product = (req, res) =>{
    return res.render('index',{data: { title:'product', page: 'product'}});
}
const productDetail = (req, res) =>{
    return res.render('index',{data: { title:'productDetail', page: 'productDetail'}});
}
export { product, productDetail };