import routes from "../routes";

export const getJoin =(req,res) => {
    res.render("join", {pageTitle:"Join"});
};

export const postJoin=(req,res) => {
    const {name, email, password, password2} = req.body

    if (password !== password2) {
        res.status(400);
        res.render("join", {pageTitle: "join"});
    }else {
        res.redirect(routes.home);
    }
}

export const getLogin = (req,res) => {
    res.render("login", {pageTitle :"Log In"});
};
export const postLogin = (req,res) => {
    res.redirect(routes.home)
};

export const logout = (req,res) => {
    // To Do : Process Log Out
    res.redirect(routes.home);
};

export const users = (req,res) => res.render("Users", {pageTitle: "Users"});
export const userDetail = (req,res) => res.render("User Detail", {pageTitle: "User Detail"});
export const editProfile = (req,res) => res.render("editProfile", {pageTitle: "Edit Profile"});
export const changePassword = (req,res) => res.render("Change password", {pageTitle: "Change Password"})


