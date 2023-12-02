import React from 'react';
import { Input } from "@nextui-org/react";

function Form() {

    const sizes = ["sm"];
    return (
        <div className="flex justify-center mt-8 mb-8">
            <div className="w-full max-w-screen-lg mt-3">
                {sizes.map((size) => (
                    <div key={size} className="flex flex-wrap -mx-4 mb-6 md:mb-0 mt-2">
                        <div className={`w-full md:w-1/2 px-4 mb-4 md:mb-0 mt-2 ${size !== 'sm' ? 'md:flex' : ''}`}>
                            <Input size={size} type="Name" label="Name" />
                        </div>
                        <div className={`w-full md:w-1/2 px-4 mb-4 md:mb-0 mt-2 ${size !== 'sm' ? 'md:flex' : ''}`}>
                            <Input size={size} type="email" label="Email" placeholder="Enter your email" />
                        </div>
                        <div className={`w-full md:w-1/2 px-4 mb-4 md:mb-0  mt-2 ${size !== 'sm' ? 'md:flex' : ''}`}>
                            <Input size={size} type="Name" label="Name" />
                        </div>
                        <div className={`w-full md:w-1/2 px-4 mb-4 md:mb-0 mt-2 ${size !== 'sm' ? 'md:flex' : ''}`}>
                            <Input size={size} type="email" label="Email" placeholder="Enter your email" />
                        </div>
                        <div className={`w-full md:w-1/2 px-4 mb-4 md:mb-0 mt-2 ${size !== 'sm' ? 'md:flex' : ''}`}>
                            <Input size={size} type="Name" label="Name" />
                        </div>
                        <div className={`w-full md:w-1/2 px-4 mb-4 md:mb-0 mt-2 ${size !== 'sm' ? 'md:flex' : ''}`}>
                            <Input size={size} type="email" label="Email" placeholder="Enter your email" />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Form
