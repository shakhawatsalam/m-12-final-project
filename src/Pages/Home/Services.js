import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import service from './Service';
import Service from './Service';
import Exceptional from './Exceptional';
const Services = () => {
    const services = [
        {
            _id: 1, 
            name: "Fluride Treatment",
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
            img: fluoride
        },
        {
            _id: 2, 
            name: "Cavity Filling",
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
            img: cavity
        },
        {
            _id: 3, 
            name: "Theeth Whitening",
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
            img: whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center '>
                <h3 className='text-primary text-2xl font-bold'>Our Services</h3>
                <h2 className='text-4xl'>Service We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service = {service}
                    ></Service>)
                }
            </div>
            <Exceptional></Exceptional>
        </div>
    );
};

export default Services;