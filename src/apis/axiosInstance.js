import dotenv from "dotenv";

dotenv.config();

const axiosInstance = () => {
  const config = {
    baseURL: process.env.BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  };
};
