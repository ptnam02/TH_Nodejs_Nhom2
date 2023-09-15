import express from 'express';
const user = (req, res) =>{
    return res.render('newUser',{data: { title: "Tạo tài khoản" }})
}
export default user