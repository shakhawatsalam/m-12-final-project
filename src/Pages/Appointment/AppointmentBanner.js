import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bannerBg from '../../assets/images/bg.png'


const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen sm:bg-none" style={{
            background: `url(${bannerBg})`,
            backgroundSize: 'cover'

        }} >
            <div className="z-0 flex items-center max-w-7xl gap-28 lg:gap-56 p-1 flex-col lg:flex-row-reverse justify-around">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;