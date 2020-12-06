const express = require("express");
const Router = express.Router();

const Product = require("../controllers/product");
const User = require("../controllers/user");
const { checkChannelID, checkClientID } = require("../middleware");

Router.route("/").get((req, res) => res.status(200).send("OK!"));

Router.route("/product").get(Product.getProducts);
Router.route("/product").post(Product.getProductInfo);

Router.route("/user/:channel_id").get(checkChannelID, User.getUser);
Router.route("/user/:channel_id").post(
    checkChannelID,
    checkClientID,
    User.createUser
);
Router.route("/user/delete/:channel_id").post(
    checkChannelID,
    User.markUserForDeletion
);

module.exports = Router;
