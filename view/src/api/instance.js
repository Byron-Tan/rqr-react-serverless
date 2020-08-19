import axios from "axios";

export default axios.create({
  baseURL: "https://us-central1-rqr-serverless-d6272.cloudfunctions.net/api",
});
