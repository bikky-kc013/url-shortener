const shortUrl = require("node-url-shortener");
const shortener = async (url) => {
    try {
        const shortened = await new Promise((resolve, reject) => {
            shortUrl.short(url, (err, url) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(url);
                }
            });
        });

        return shortened;
    } catch (error) {
        console.error("Error:", error);
        return null; 
    }
};

module.exports={shortener};