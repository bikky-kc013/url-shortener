const mongoose = require("mongoose");
const urlSchema =new  mongoose.Schema({
  url: {
    required: true,
    type: String,
  },
});

const UrlModel = mongoose.model("UrlModel", urlSchema);

module.exports = UrlModel;
