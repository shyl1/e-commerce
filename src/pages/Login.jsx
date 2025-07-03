import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { UserContext } from "@/Context/AuthContext";

function Login() {
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();

  const [isloading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (values) => {
    setIsLoading(true);
    setSuccessMsg('');
    setErrorMsg('');
    try {
      const { data } = await axios.post(
        `https://note-sigma-black.vercel.app/api/v1/users/signIn`,
        values
      );
      setIsLoading(false);

      if (data?.msg === 'done') {
        setSuccessMsg('Account logged successfully');
        localStorage.setItem('userToken', data.token);
        setToken(data.token); // ✅ حطيناها قبل التنقل
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (err) {
      setIsLoading(false);
      setErrorMsg(err.response?.data?.msg || 'Something went wrong');
    }
  };

  const validation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .matches(/^[A-Za-z0-9]{6,20}$/, "Password must be 6-20 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema: validation,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl text-center mx-auto w-[90%] md:w-[40%] my-11"
    >
      <h2 className="text-2xl font-semibold mb-4">Login</h2>

      {successMsg && <p className="text-green-700 font-semibold my-4">{successMsg}</p>}
      {errorMsg && <p className="text-red-600 font-semibold my-4">{errorMsg}</p>}

      <input
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        name="email"
        className="w-full p-2 rounded mb-4 border border-gray-300"
      />
      {formik.errors.email && formik.touched.email && (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
          <span className="font-medium">{formik.errors.email}</span>
        </div>
      )}

      <input
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        name="password"
        className="w-full p-2 rounded mb-4 border border-gray-300"
      />
      {formik.errors.password && formik.touched.password && (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
          <span className="font-medium">{formik.errors.password}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isloading}
        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
      >
        {isloading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
      </button>

      <p className="mt-4 flex justify-between">
        Don’t have an account?
        <Link to="/register" className="text-green-500 font-semibold hover:text-green-600">
          Register now...
        </Link>
      </p>
    </form>
  );
}

export default Login;
