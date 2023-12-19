
import React, { useState } from 'react';
import { Input, Button } from "@nextui-org/react";
import { useInView } from 'react-intersection-observer';
import "../css/Animated.css";
import axios from 'axios'
import { useResetProjection } from 'framer-motion';



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
        const reciever = '9567260882'; // Replace with your actual WhatsApp number
        const one = 'thottummal';
        const two = 'marrige';
        const three = '4567788';
        const name = 'shijith'

        const action = `https://wa.me/${reciever}?text=${encodeURIComponent(
          `${name} ${one} ${two} ${three}  `
        )}`;
    
        window.open(action, '_blank');
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
                                <option value="option1">Trivandrum</option>
                                <option value="option2">Kollam</option>
                                <option value="option3">Kottayam</option>
                                <option value="option1">Alappuzha</option>
                                <option value="option2">Pathanam titta</option>
                                <option value="option3">Ernakulam</option>
                                <option value="option1">Palakkad</option>
                                <option value="option2">Idukki</option>
                                <option value="option3">Thrissure</option>
                                <option value="option1">Malappuram</option>
                                <option value="option2">Kozhikkode</option>
                                <option value="option3">Wayanad</option>
                                <option value="option1">Kannur</option>
                                <option value="option2">Kasargod</option>
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
                                <option value="option1">Marrige</option>
                                <option value="option2">Birth Day</option>
                                <option value="option3">Naming Ceremony</option>
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
        </div>
    );
}

export default Form;

