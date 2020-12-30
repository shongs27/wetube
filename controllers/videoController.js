import {videos} from "../db.js";
import routes from "../routes";

export const home = (req,res) => res.render("home", {pageTitle: "Home", videos});

export const search = (req,res) =>
{   
    const { query: { term : searchingBy}} = req;
    res.render("search", {pageTitle: "Search", searchingBy, videos}) };

export const getUpload = (req,res) => res.render("Upload", {pageTitle: "Upload"});
export const postUpload = (req,res) => {
    const {
        body : {file, title, description}
    } = req;
    // To Do: Upload and save Video
    res.redirect(routes.videoDetal(32494))
}
export const videoDetail = (req,res) => res.render("Video Detail", {pageTitle: "Video Detail"});
export const editVideo = (req,res) => res.render("Edit Video", {pageTitle: "Edit Video"});
export const deleteVideo = (req,res) => res.render("delete Video", {pageTitle: "delete Video"});

