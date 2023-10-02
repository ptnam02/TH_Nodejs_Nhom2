import express from "express";
import home from "./../controllers/homeController";
import about from "./../controllers/aboutController";
import UserController from "../controllers/UserController";
import cart from "../controllers/cartController";
import { product, productDetail } from "../controllers/productController";
import testcontroller from "../controllers/testController"
import { config } from "dotenv";

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// viewEngine(app);
const Router = express.Router();

const initWebRoute = (app) => {

//Test
Router.get('/test',testcontroller.isExistUser);

  //route Home
  Router.get("/", home);
  //route User
  Router.get("/list-user", UserController.getAllUsers);
  Router.get("/create-new-user", UserController.createNewUser);
  Router.post("/insert-new-user", UserController.insertUser);

//route About
  Router.get("/about", about);
//route product
  Router.get("/product", product);
  Router.get("/productDetail", productDetail);
  //route Cart
  Router.get("/cart", cart);

  return app.use("/", Router);
};
export default initWebRoute;
