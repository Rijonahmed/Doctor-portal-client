import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {

  const { createUser } = useContext(AuthContext)
  const { register, formState: { errors }, handleSubmit } = useForm();
  const handleSignUp = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => console.log(error));
  }
  return (
    <div>
      <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-6'>
          <h1 className='text-2xl font-bold text-center'>Sign Up</h1>
          <form onSubmit={handleSubmit(handleSignUp)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>

              </label>
              <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required:
                    'Name is required',
                  minLength: {
                    value: 3,
                    message: 'must be Three chareacter '
                  }

                })}
              />
              {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}

            </div>
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



            <input className='btn btn-accent w-full' value='Sign Up' type="submit" />
          </form>
          <p><small>Already have an account <Link className='text-primary' to="/login">pleac Log In</Link></small></p>

          <div className="divider">OR</div>
          <button className="btn btn-outline w-full ">Continue google</button>

        </div>
      </div>
    </div>
  );
};

export default SignUp;