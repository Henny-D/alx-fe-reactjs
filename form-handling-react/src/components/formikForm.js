import React from 'react'
import {Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email:Yup.string().email("invalid email format").required("Email is required"),
    password: Yup.string().min(3,"Password must be at least 3 characters").required("Password is rquired"),
})

function formikForm() {
  return (
    <div>
        <h2> Registration with Formik</h2>
        <Formik 
        initialValues={{username:",email:", password:""}}
        validationSchema={validationSchema}
        onSubmit={(values)=>{
            console.log("Form submitted successfully:" , values);
        }}
        >
            {({ isSubmitting}) => (
                <Form>
                    <div>
                        <lable>Username:</lable>
                        <Field type="text" name="username"/>
                        <ErrorMessage name="username" component="p" style={{color:"red"}} />
                    </div>

                    <div>
                        <lable>Email:</lable>
                        <Field type="email" name="email"/>
                        <ErrorMessage email="email" component="p" style={{color:"red"}} />
                    </div>

                    <div>
                        <lable>Password:</lable>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component="p" style={{color:"red"}} />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting? "Submitting..." : "Register"}
                    </button>
                    </Form>
            )}
            </Formik>
            </div>
  )
};

export default formikForm