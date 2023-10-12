import axios from "axios";
import { redirect } from "react-router-dom";
import Login from "../components/Login";

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;

export const action = async ({ request }) => {
  try {
    const data = await request.formData();

    const loginData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    const response = await axios.post(
      "http://localhost:8000/api/user/login",
      loginData
    );

    const token = response.data.data.token;

    localStorage.setItem("token", token);

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());

    return redirect("/");
  } catch (error) {
    return error.response;
  }
};