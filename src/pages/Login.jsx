import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/Context/AuthContext";


function Login() {
  let {setToken} = useContext(UserContext)

  let navigate = useNavigate()
  const [isloading,setIsLoading] = useState(false)
  const [successMsg,setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const handleLogin = async (values) => {
    console.log(values);
    setIsLoading(true)
    setSuccessMsg('')
    setErrorMsg('')
    try {
      let {data} = await axios.post(
        `https://note-sigma-black.vercel.app/api/v1/users/signIn`,
        values
      );
      setIsLoading(false)
      console.log(data);
      if(data?.msg=='done'){
        setSuccessMsg('Account logged successfully')
        setTimeout(()=>{
          navigate('/')
        },1500)
        localStorage.setItem('userToken',data.token)
        setToken(data.token)
      }
    } catch (err) {
      setIsLoading(false)
      setErrorMsg(err.response.data.msg)
      console.log(err);
    }
  };
  const validation = Yup.object().shape({

    email: Yup.string().email("invalid email").required("email is required"),
    password: Yup.string()
      .matches(
        /^[A-Za-z0-9]{6,20}$/,
        "password must be between 6 and 20 characters"
      )
      .required("password is required"),
   
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
    <>
      <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl  text-center  mx-auto w-[90%] md:w-[40%] my-11 m-10">
     
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <p className="text-green-700  font-semibold my-10">{successMsg}</p>
          <p className="text-red-600  font-semibold my-10">{errorMsg}</p>
       
          <input
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            className="w-full p-2  rounded mb-4 border border-gray-300"
          />
           {formik.errors.email&&formik.touched.email? <div
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span class="font-medium">{formik.errors.email}</span>
          </div>:''}
          <input
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            className="w-full p-2  rounded mb-4 border border-gray-300"
          />
           {formik.errors.password&&formik.touched.password? <div
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span class="font-medium">{formik.errors.password}</span>
          </div>:''}
          
        
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            {isloading?<i className="fas fa-spinner fa-spin"></i>:'Login'}
          </button>
          <p className="mt-4 flex justify-between">
            Do not have account?
            <Link
              to="/register"
              className="text-green-500 font-semibold hover:text-green-600"
            >
              Register now ...
            </Link>
          </p>
      </form>
    </>
  );
}
export default Login;
