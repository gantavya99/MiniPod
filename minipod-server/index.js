const dotenv = require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const FormData = require("form-data");
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const filePath = path.join(__dirname,"audio.mp3")
const model = "whisper-1";
const sendRequest = () => {
    const formData = new FormData();
    formData.append("model", model);
    formData.append("file", fs.createReadStream(filePath));
  
    axios
      .post("https://api.openai.com/v1/audio/transcriptions", formData, {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          // 429 - Too Many Requests
          const retryAfter = parseInt(error.response.headers['retry-after']) || 1;
          console.log(`Rate limited. Retrying after ${retryAfter} seconds...`);
          setTimeout(sendRequest, retryAfter * 1000); // Retry after the specified seconds
        } else {
          console.error(error);
        }
      });
  };
  
  sendRequest(); // Start the initial request
  //This code will retry the request after the specified "Retry-After" delay if a 429 error occurs. Make sure to adjust the retry logic according to your specific requirements and the API's rate limits.
  
  
  
  
  
  