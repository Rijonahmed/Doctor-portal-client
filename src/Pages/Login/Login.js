import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const handleLogin = data => {
    console.log(data);
  }
  return (
    <div className='h-[800px] flex justify-center items-center'>
      <div className='w-96 p-6'>
        <h1 className='text-2xl font-bold text-center'>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>

            </label>
            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required:
                  'email is required',

                //massage: 'email is required'

                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: 'Provide a valid email'
                }
              })}

            />
            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
          </div>


          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>

            </label>
            <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required:

                  'password is required',

                minLength: {
                  value: 6,
                  message: 'six chareacter '
                }
              })}

            />
            {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
          </div>
          <label className="label">
            <span className="label-text">Forget Password</span>

          </label>


          <input className='btn btn-accent w-full' value='Login' type="submit" />
        </form>
        <p><small>New to Doctor site <Link className='text-primary' to="/signup">Create a new Account</Link></small></p>

        <div className="divider">OR</div>
        <button className="btn btn-outline w-full ">Continue google</button>

      </div>
    </div>
  );
};

export default Login;