import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor;


    

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-20 rounded-full">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-comfirm-modal" class="btn btn-xs btn-error">open modal</label>

                
            </td>
            {/* <td>{user.email}</td> */}
        </tr>
    );

};

export default DoctorRow;