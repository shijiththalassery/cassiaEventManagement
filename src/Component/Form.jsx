
import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import { useInView } from 'react-intersection-observer';
import "../css/Animated.css";
import axios from 'axios'
import { useResetProjection } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const apiUrl = import.meta.env.VITE_API_URL;
function Form() {

    const [refX, inViewX] = useInView({ triggerOnce: true });
    const [refY, inViewY] = useInView({ triggerOnce: true });
    const [refZ, inViewZ] = useInView({ triggerOnce: true });

    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [district, setDistrict] = useState('');
    const [event, setEvent] = useState('');

    const sizes = ["sm"];

    const handleSubmit = async () => {
        let results ;
        const postData = {
            name: name,
            place: place,
            email: email,
            phone: phone,
            district: district,
            event: event
        }
        try {
            if (postData) {
                if (postData.name === "") {
                    toast.warn('Please Enter your Name');
                }
                if (postData.place === "") {
                    toast.warn('Please Enter your Place');
                }
                if (postData.district === "") {
                    toast.warn('Please Select your district');
                }
                if (postData.event === "") {
                    toast.warn('Please Select your Event');
                }
                if (!postData.email.includes('@')) {
                    toast.warn('Please Enter Correct Email');
                }
                else if (!/^[6-9]\d{9}$/.test(postData.phone)) {
                    toast.warn('Please Enter Correct Phone Number');
                    toast.warn('No need to add country code');
                }else{
                   const respond =  axios.post('https://cassiaeventmanagement.onrender.com/sendMessage', postData).
                   then((result)=>{
                   toast.success('Your inquiry has been submitted')
                   }).catch((error)=>{
                    console.log(error,'this is the error from back end')
                    toast.error('Your inquiry is not submitted')
                   })
                }
            }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="flex justify-center mt-8 mb-8">
            <div className="w-full max-w-screen-lg mt-3 ">
                {sizes.map((size) => (
                    <div key={size} className="flex flex-wrap -mx-4 mb-6 md:mb-0 mt-2 animated-grid">
                        <div className={`w-full md:w-1/2 px-4 mb-4 md:mb-0 mt-2 ${inViewX ? 'content-x' : ''} ${size !== 'sm' ? 'md:flex' : ''}`}>
                            <Input
                                size={size}
                                type="Name"
                                label="Name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className={`w-full md:w-1/2 px-4 mb-4 md:mb-0 mt-2 ${size !== 'sm' ? 'md:flex' : ''}`}>
                            <Input
                                size={size}
                                type="Place"
                                label="Place"
                                placeholder="Enter your Place"
                                value={place}
                                onChange={(e) => { setPlace(e.target.value) }} />
                        </div>
                        <div className={`w-full md:w-1/2 px-4 mb-4 md:mb-0  mt-2 ${size !== 'sm' ? 'md:flex' : ''} `}>
                            <Input
                                size={size}
                                type="Phone"
                                label="Phone"
                                placeholder="Enter your Phone"
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }} />
                        </div>
                        <div className={`w-full md:w-1/2 px-4 mb-4 md:mb-0 mt-2 ${size !== 'sm' ? 'md:flex' : ''}`}>
                            <Input
                                size={size}
                                type="Email"
                                label="Email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div className={`w-full md:w-1/2 px-4 mb-4 md:mb-0 mt-2 ${size !== 'sm' ? 'md:flex' : ''}`}>
                            <select
                                className="w-full h-12 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                aria-label="Select location option"
                                onChange={(e) => {
                                    setDistrict(e.target.value);

                                }}
                                value={district} // This ensures that the selected value is controlled by the state
                            >
                                <option value="">District</option>
                                <option value="Trivandrum">Trivandrum</option>
                                <option value="Kollam">Kollam</option>
                                <option value="Kottayam">Kottayam</option>
                                <option value="Alappuzha">Alappuzha</option>
                                <option value="Pathanamtitta">Pathanamtitta</option>
                                <option value="Ernakulam">Ernakulam</option>
                                <option value="Palakkad">Palakkad</option>
                                <option value="Idukki">Idukki</option>
                                <option value="Thrissure">Thrissure</option>
                                <option value="Malappuram">Malappuram</option>
                                <option value="Kozhikkode">Kozhikkode</option>
                                <option value="Wayanad">Wayanad</option>
                                <option value="Kannur">Kannur</option>
                                <option value="Kasargod">Kasargod</option>
                            </select>
                        </div>
                        <div className={`w-full md:w-1/2 px-4 mb-4 md:mb-0 mt-2 ${size !== 'sm' ? 'md:flex' : ''}`}>
                            <select
                                className="w-full h-12 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                aria-label="Select event option"
                                onChange={(e) => {
                                    setEvent(e.target.value);

                                }}
                                value={event} // This ensures that the selected value is controlled by the state
                            >
                                <option value="">Event</option>
                                <option value="Marrige">Marrige</option>
                                <option value="Birth Day">Birth Day</option>
                                <option value="Naming Ceremony">Naming Ceremony</option>
                            </select>
                        </div>
                    </div>
                ))}
                <div className='flex flex-col justify-center items-center mt-4'>
                    <Button color="primary" variant="bordered" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Form;

