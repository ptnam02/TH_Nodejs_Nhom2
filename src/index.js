import dotenv from "dotenv";
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/webRoute";
const app = express();
dotenv.config();
const port = process.env.PORT;
import path from "path";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configViewEngine(app);

app.use(express.static(path.join(__dirname, "public")));

initWebRoute(app);

app.use((req, res, next) => {
  res.status(404).send("Lỗi 404 - Không tìm thấy trang");
});

app.listen(port, () => {
  console.log(`Máy chủ đang lắng nghe tại http://localhost:${port}`);
});
