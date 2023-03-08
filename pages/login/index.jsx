import React, { useEffect, useState } from "react";
import loginBanner from "../../public/client/assets/images/login-banner.png";
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { signIn, getCsrfToken, useSession, getSession } from 'next-auth/react'
import { Formik, Field, ErrorMessage } from 'formik'
import { toast } from "react-toastify";
import { loginSchema } from "../../schema/login";

const LoginContainer = ({ csrfToken }) => {
  const { push } = useRouter();
  const { data: session } = useSession();
  const [error, setError] = useState(null)
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
		document.body.classList.add("account-page");
	 
		return () => document.body.classList.remove("account-page");
		}, []);
	
  useEffect(() => {
    
    const getUser = async () => {
      try {
        const res = await fetch("http://188.132.130.99/en/api/v1/auth/users/");
        const user = await res.json()
        if (!res.ok) {
          throw new Error(user.message)
        }
        // If no error and we have user data, return it
        if (res.ok && user) {
          setCurrentUser(
            user?.find((item) => item.username === session?.user?.username)
          );
        }
        session && push("/home");
      } catch (err) {
        console.log(err);
      }
    };
    
    getUser();
  }, [session, push, currentUser]);

  return (
    <>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <Image
                      src={loginBanner}
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>Doccure</span>
                      </h3>
                    </div>
                    <Formik
                      initialValues={{ email: '', password: '', tenantKey: '' }}
                      validationSchema={loginSchema}
                      onSubmit={async (values, { setSubmitting }) => {
                        let options = {
                          redirect: false,
                          email: values.email,
                          password: values.password,
                          callbackUrl: `${window.location.origin}`,
                        };
                        const res = await signIn('credentials', options)
                        if (res?.error) {
                          setError(res.error)

                        } else {
                          setError(null)
                        }
                        if (res.url) push(res.url)
                        setSubmitting(false)
                      }}
                    >
                      {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group form-focus">
                      <input
                        name="csrfToken"
                        type="hidden"
                        defaultValue={csrfToken}
                      />
                        <Field 
                        name="email"
                        aria-label="enter your email"
                        aria-required="true"
                        type="text" 
                        className="form-control floating" />
                        <label className="focus-label">Email</label>
                        <small>
                          <ErrorMessage name="email" />
                        </small>
                      </div>
                      <div className="form-group form-focus">
                        <Field
                          name="password"
                          aria-label="enter your password"
                          aria-required="true"
                          type="password"
                          className="form-control floating"
                        />
                        <label className="focus-label">Password</label>
                        <small>
                          <ErrorMessage name="password" />
                        </small>
                      </div>
                      <div className="text-end">
                        <Link href="/forgot-password" className="forgot-link">
                          Forgot Password ?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                      >
                        {formik.isSubmitting ? 'Please wait...' : 'Login'}
                      </button>
                      <div className="text-center dont-have">
                        Don’t have an account?
                        <Link href="/register"> Register</Link>
                      </div>
                    </form>
                    )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginContainer;

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}
