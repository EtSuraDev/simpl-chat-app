import React, {useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup"

import { GoEye } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { Link, useNavigate } from 'react-router';

function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const [serverRes, setServerRes] = useState(null)
    const navigate = useNavigate()

    console.log(import.meta.env.VITE_BACK_END)


    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        onSubmit: async values => {
            try {
                const res = await axios.post(`${import.meta.env.VITE_BACK_END}/auth/signup`,
                                                {userName: values.userName, password: values.password},
                                                { withCredentials: true }
                                            )
                console.log(res.data)
                navigate("/", {replace: true})
            } catch (error) {
                console.log(error.response.data)
                setServerRes(error.response.data.msg)
            }
        },
        validationSchema: Yup.object({
            userName: Yup.string().required("user name required").min(5, "Must be 5 characters").max(15, "Must be 15 characters or less"),
            password: Yup.string().required("passord required").min(5, "Must be 5 characters").max(15, "Must be 15 characters or less")
        })
    });

  return (
        <div className=' h-[100vh] w-full  bg-[radial-gradient(circle,_#7A95C9_34%,_#04172D_95%)] flex items-center justify-center relative ' >






        <main 
            className=' bg-white w-[370px] h-fit py-4 px-8 rounded-lg '
        >

            <div>


                <h1 
                    className=' text-3xl mb-6 '
                >
                    Create an account
                </h1>
                <form action="" onSubmit={formik.handleSubmit} >
                    <div>
                        <label htmlFor="userName">User name</label><br />
                        <input type="text" id='userName' placeholder='Enter User Name'
                            className=' border border-blue-400 outline-none p-2 w-full rounded-md mb-2 '
                            onChange={formik.handleChange}
                            value={formik.values.userName}
                            onBlur={formik.handleBlur}
                        /><br />
                        {
                            formik.touched.userName && formik.errors.userName && 
                            <p className=' text-sm text-red-700  mb-2 ' >*{formik.errors.userName}</p>
                        }
                        <label htmlFor="password" className='' >Password</label><br />
                        <div
                            className=' border border-blue-400  p-2 w-full rounded-md flex items-center justify-between ' 
                        >
                            <input type={showPassword? "text": "password"} id='password' placeholder=' Enter Your password '
                                className=' outline-none w-[80%] '
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                            />
                            {
                                showPassword ?
                                <GoEye className=' cursor-pointer ' onClick={() => setShowPassword(prev => !prev)} />
                                :
                                <FaRegEyeSlash className=' cursor-pointer ' onClick={() => setShowPassword(prev => !prev)} />
                            }
                        </div>
                        {
                            formik.touched.password && formik.errors.password && 
                            <p className=' text-sm text-red-700  mb-2 ' >*{formik.errors.password}</p>
                        }
                    </div>
                    <input type="submit" value="Create account"
                        className=' cursor-pointer w-full bg-blue-500 rounded-lg p-2 mb-2 mt-6 text-white '
                    />

                </form>
                <p className=' font-extralight ' >Already Have An Account ? <Link to="/login" className=' text-blue-500 font-normal ' >Log in</Link></p>
                <p className=' mt-2.5 text-sm text-red-700 ' >{serverRes}</p>
                    
            </div>

        </main>




    </div>
  )
}

export default Signup
