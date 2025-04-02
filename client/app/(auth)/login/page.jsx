
"use client"

import React, { useState } from 'react'
import { GoEye } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import { useFormik } from 'formik';
import * as Yup from "yup"



function page() {
    const [showPassword, setShowPassword] = useState(false)

    

   
    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: Yup.object({
            userName: Yup.string().required("user name required").min(5, "Must be 5 characters").max(15, "Must be 15 characters or less"),
            password: Yup.string().required("passord required").min(5, "Must be 5 characters").max(15, "Must be 15 characters or less")
        })
    });




  return (
    <div className=' h-[100vh] w-full  bg-gradient-to-r from-[#120e50] via-[#111181] via-80% to-[#117286] to-100% flex items-center justify-center ' >
      



        <main 
            className=' bg-white w-[370px] h-fit py-4 px-8 rounded-lg '
        >

            <div>


                <h1 
                    className=' text-3xl mb-6 '
                >
                    Login to your account
                </h1>
                <form action="" onSubmit={formik.handleSubmit} >
                    <div>
                        <label htmlFor="userName">User name</label><br />
                        <input type="text" id='userName' placeholder='Enter User Name'
                            className=' border border-blue-400 outline-none p-2 w-full rounded-md mb-3 '
                            onChange={formik.handleChange}
                            value={formik.values.userName}
                            onBlur={formik.handleBlur}
                        /><br />
                        {
                            formik.touched.userName && formik.errors.userName && 
                            <p className=' text-sm text-red-700  mb-2 ' >*{formik.errors.userName}</p>
                        }
                        <label htmlFor="password" className=' mt-3 ' >Password</label><br />
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
                    <input type="submit" value="Login Now"
                        className=' cursor-pointer w-full bg-blue-500 rounded-lg p-2 mb-2 text-white mt-5 '
                    />

                </form>
                <p className=' font-extralight ' >Don't Have An Account ? <a href="/signup" className=' text-blue-500 font-normal ' >Sign Up</a></p>
                    
            </div>

        </main>




    </div>
  )
}

export default page
