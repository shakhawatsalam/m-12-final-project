import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`https://ancient-anchorage-27912.herokuapp.com/available?date=${formatedDate}`)
        .then(res => res.json())
    );

    if (isLoading) {
        return <Loading />
    }
    // useEffect(() => {
    //     fetch(`https://ancient-anchorage-27912.herokuapp.com/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formatedDate]);
    return (
        <div>
            <p className='text-xl text-secondary text-center my-12'>Available Appointments on  {format(date, "PP")}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service

                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                setTreatment={setTreatment}
                date={date}
                treatment={treatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;