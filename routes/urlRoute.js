const express = require("express");
const router = express.Router();
const urlModel = require("../models/urlModels");
const createError = require("http-errors");
const { shortener } = require("../utils/urlShortner");

router.post("/urlshortner", async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url) throw createError.BadRequest("Please enter the Url");
    const shortned = await shortener(url);
    const doesExist = await urlModel.findOne({ url: url });
    if (doesExist) {
      return res.status(200).json({
        shortenedUrl: shortned,
      });
    }
    const newUrl = new urlModel({ url: url });
    const saveUrl = await newUrl.save();
    res.status(200).json({
      shortenedUrl:shortned,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = { router };
