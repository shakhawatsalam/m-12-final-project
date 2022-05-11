import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block md:block'>
                 <img className='md:mt-[-100px] lg:mt-[-200px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make An Appointment Today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, magni omnis ducimus aspernatur, magnam at, architecto dolorem assumenda quis debitis nobis dicta provident natus. Odit corrupti numquam eos aliquam necessitatibus at quibusdam tempora eveniet incidunt! Sed ullam itaque dolore laudantium!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;