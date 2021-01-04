import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter"
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"

// import multer from "multer";
import routes from "./routes"
const app = express();

app.use(helmet({contentSecurityPolicy:false}));
app.set('view engine', "pug");
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json()); //bodyParser -> express 
app.use(bodyParser.urlencoded({extended: true})); // bodyParser -> express
app.use(morgan("dev"));
app.use(localsMiddleware);


// const multerVideo = multer({dest: "videos/"})

// app.use((req, res, next) => {
//     res.locals.siteName = "WeTube";
//     res.locals.routes = routes;
//     res.locals.user = {
//         isAuthenticated: true,
//         id: 1
//     }
//     next();
// })


app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// export const uploadVideo = multerVideo.single("videoFile");
export default app;