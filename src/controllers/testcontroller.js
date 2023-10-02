import express from "express";
import userModel from "./../sevices/userModel.js";
const isExistUser = async (req, res) => {
  const username = "admin";
  const email = "admin@gmail.com";
  const rsl = await userModel.isUserExist(username, email);
  res.send(rsl);
  console.log(rsl);
};
export default { isExistUser };
