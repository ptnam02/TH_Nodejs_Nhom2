import express from "express";
import home from "./../controllers/homeController"
import about from "./../controllers/aboutController"
import user from "../controllers/UserController";
const Router = express.Router();
const initWebRoute = (app) => {
    Router.get('/',home)
    Router.get('/create-new-user',user)
    Router.get('/about',about)
    return app.use('/', Router)
}
export default initWebRoute