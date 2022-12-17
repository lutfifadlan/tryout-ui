import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(1, 'Password is required')
    .required('Password is required'),
});

export default function SignInPage() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SigninSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('values =', values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gray-100">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-md">
            <h1 className="text-3xl font-semibold text-center text-black">
              Sign in
            </h1>
            <Form className="mt-6">
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.email && touched.email ? (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                ) : null}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.password && touched.password ? (
                  <p className="text-red-500 text-xs italic">
                    {errors.password}
                  </p>
                ) : null}
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-600 rounded-md hover:bg-black focus:outline-none focus:bg-black"
                >
                  Login
                </button>
              </div>
            </Form>

            <div className="flex mt-3 justify-center">
              <a href="#" className="text-xs text-black hover:underline">
                Forget Password?
              </a>
            </div>

            <p className="mt-8 text-xs font-light text-center text-gray-600">
              {' '}
              Don&apos;t have an account?{' '}
              <a href="#" className="font-medium text-black hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      )}
    </Formik>
  );
}
