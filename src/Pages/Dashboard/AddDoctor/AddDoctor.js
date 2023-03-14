import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const AddDoctor = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate()

  const photoHostKey = process.env.REACT_APP_imgddHostKey;

  const handleAddDoctor = data => {

    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${photoHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgdata => {
        if (imgdata.success) {

          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgdata.data.url
          }

          fetch('https://doctor-portal-server-lac.vercel.app/doctors', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
            .then(res => res.json())
            .then(result => {
              console.log(result)
              toast.success(`${data.name} Doctor Add Successful`)
              navigate('/dashboard/Managedoctors')

            })
        }
      }
      )

  }

  const { data: specialies, isLoading } = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch('https://doctor-portal-server-lac.vercel.app/appointmentSpecialty')
      const data = await res.json()
      return data
    }

  })
  if (isLoading) {
    return <Loading></Loading>

  }

  return (
    <div className='w-96 p-7'>
      <h1 className="text-3xl font-bold">Add A DOCTOR</h1>
      <form onSubmit={handleSubmit(handleAddDoctor)}>

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
            <span className="label-text">Specialty</span>

          </label>
          <select {...register('specialty')} className="select select-bordered w-full max-w-xs">

            {
              specialies.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
            }


          </select>

        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>

          </label>
          <input type="file" className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required:
                'Photo is required',
              minLength: {
                value: 3,
                message: 'must be Three chareacter '
              }

            })}
          />
          {errors.img && <p className='text-red-500'>{errors.img?.message}</p>}

        </div>



        <input className='btn btn-accent w-full mt-7' value='Add Doctor' type="submit" />
      </form>

    </div>
  );
};

export default AddDoctor;