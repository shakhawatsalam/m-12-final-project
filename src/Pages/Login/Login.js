import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();



    const onSubmit = data => {
        console.log(data)
    };

    if (user) {
        // navigate('/home')
        // console.log(user);
    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-semibold">Login</h2>


                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>

                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'error message' 
                                }
                            })}
                        />
                        <label class="label">
                            <span class="label-text-alt">Alt label</span>

                        </label>
                    </div>


















                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                        <input type="submit" />
                    </form>


                    <div className='divider'>OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline'
                    >Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;