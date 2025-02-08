import React from "react";
import img1 from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpg'
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-5 pt-5 sm:py-5 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            React Router
                            <span className="hidden sm:block text-3xl mt-2 font-thin">Want to Learn React Router Click Below</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="https://reactrouter.com/"
                        >
                           Click Here
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-2 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src={img1} alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-2">
                <img className="sm:w-96 w-48" src={img2} alt="image2" />
            </div>

            <h1 className="text-center text-xl sm:text-xl pt-10 pb-10 font-light w-[85%] m-auto">React Router is a popular library used for routing in React applications. It enables you to navigate between different views or components without reloading the page, providing a single-page application (SPA) experience. Here's a quick rundown of key concepts and how to use React Router.</h1>
        </div>
    );
}
