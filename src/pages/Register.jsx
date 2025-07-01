import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useState } from "react";


function Register() {
  let navigate = useNavigate()
  const [isloading,setIsLoading] = useState(false)
  const [successMsg,setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const handleRegister = async (values) => {
    console.log(values);
    setIsLoading(true)
    setSuccessMsg('')
    setErrorMsg('')
    try {
      let {data} = await axios.post(
        `https://note-sigma-black.vercel.app/api/v1/users/signUp`,
        values
      );
      setIsLoading(false)
      console.log(data);
      if(data?.msg=='done'){
        setSuccessMsg('Account created successfully')
        setTimeout(()=>{
          navigate('/login')
        },1500)
      }
    } catch (err) {
      setIsLoading(false)
      setErrorMsg(err.response.data.msg)
      console.log(err);
    }
  };
  const validation = Yup.object().shape({
    name: Yup.string()
      .min(3, "name must be 3 characters")
      .max(20, "name must be less than 20 characters")
      .required("name is reqiired"),
    email: Yup.string().email("invalid email").required("email is required"),
    password: Yup.string()
      .matches(
        /^[A-Za-z0-9]{6,20}$/,
        "password must be between 6 and 20 characters"
      )
      .required("password is required"),
    age: Yup.number()
      .min(18, "age must be at least 18 years old")
      .max(99, "age must be less than 99 years old")
      .required("age is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "phone number is not valid")
      .required("phone is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
    },
    onSubmit: handleRegister,
    validationSchema: validation,
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl  text-center  mx-auto w-[90%] md:w-[40%] my-11 m-10">
     
          <h2 className="text-2xl font-semibold mb-4">Register..</h2>
          {successMsg? <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          <span class="font-medium">{successMsg}</span> 
        </div>: null}

          {errorMsg? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span class="font-medium">{errorMsg}</span> 
          </div>: null}
          <input
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
            className="w-full p-2 rounded mb-4 border border-gray-300"
          />
         {formik.errors.name&&formik.touched.name? <div
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span class="font-medium">{formik.errors.name}</span>
          </div>:''}
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
          <input
            type="number"
            placeholder="Age"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
            name="age"
            className="w-full p-2  rounded mb-4 border border-gray-300"
          />
           {formik.errors.age&&formik.touched.age? <div
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span class="font-medium">{formik.errors.age}</span>
          </div>:''}
          <input
            type="tel"
            placeholder="Phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            name="phone"
            className="w-full p-2  rounded mb-4 border border-gray-300"
          />
           {formik.errors.phone&&formik.touched.phone? <div
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span class="font-medium">{formik.errors.phone}</span>
          </div>:''}
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            {isloading?<i className="fas fa-spinner fa-spin"></i>:'Register'}
          </button>
          <p className="mt-4 flex justify-between">
            already have account?
            <Link
              to="/login"
              className="text-green-500 font-semibold hover:text-green-600"
            >
              Login now ...
            </Link>
          </p>
 
      </form>
    </>
  );
}
export default Register;
