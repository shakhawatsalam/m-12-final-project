import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';


const ContactUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`

        }} className='px-10 py-14'>
            <div>
                <h1 className='text-center text-2xl text-primary mt-10'>Contact Us</h1>
                <p className='text-center text-4xl text-white font-thin'>Stay connected with us</p>
                <div className='grid grid-cols-1 justify-items-center gap-5 mt-10'>
                    <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                    <input  type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                    <textarea  type="text" placeholder="Your message" className="input input-bordered w-full max-w-xs lg:w-[450px] lg:h-[100px]" />
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;