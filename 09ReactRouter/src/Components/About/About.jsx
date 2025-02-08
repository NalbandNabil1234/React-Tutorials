import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white h-[60vh] flex flex-col justify-center items-center">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 flex justify-center">
                    <div className="md:5/12 w-[17%]">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOb7BqjkXjatgJegO4d5Ky-ZgThyC8VLahw&s"
                            className=""
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 w-[66%]">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Empowering Seamless Navigation with React Router DOM
                        </h2>
                        <p className="mt-6 text-gray-600">
                        At the core of modern web applications, React Router DOM provides a powerful routing solution for single-page apps. It enables seamless navigation between views, ensuring a smooth, fast, and dynamic user experience without page reloads.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Our team is dedicated to helping developers harness the full potential of React Router DOM, offering easy-to-implement solutions that streamline navigation, improve performance, and ensure intuitive routing for scalable React applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}