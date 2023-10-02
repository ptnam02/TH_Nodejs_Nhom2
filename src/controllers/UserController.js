import express from "express";
import userModel from "./../sevices/userModel.js";
// const userModel = require("../sevices/userModel.js");

const getAllUsers = async (req, res) => {
  try {
    let userList = await userModel.getAllUsers();

    if (userList && userList.length > 0) {
      // Dữ liệu hợp lệ, tiếp tục xử lý
      res.render("index", {
        data: { title: "Danh sach", page: "listUser", users: userList },
      });
    } else {
      // Dữ liệu không tồn tại hoặc không hợp lệ, xử lý lỗi hoặc thông báo
      res.status(404).send("Không tìm thấy dữ liệu người dùng.");
    }
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Lỗi khi truy vấn dữ liệu từ CSDL:", error);
    res.status(500).send("Lỗi trong quá trình xử lý dữ liệu.");
  }
};

const createNewUser = (req, res) => {
  res.render("index", { data: { title: "home", page: "newUser" } });
};

const insertUser = async (req, res) => {
  let { username, password, fullname, sex, email, address, role } = req.body;
  if (await userModel.isUserExist(username, email)) {
    console.log(await userModel.isUserExist(username, email))
    const warning = "Ten dang nhap hoac email da ton tai"
    res.render("index", { data: { title: "tao tai khoan", page: "newUser", warning:warning } });
    res.send("User Exists");
  } else {
    await userModel.insertUser(
      username,
      password,
      fullname,
      sex,
      email,
      address,
      role
    );
    res.redirect("/list-user");
  }
};
export default { createNewUser, getAllUsers, insertUser };
