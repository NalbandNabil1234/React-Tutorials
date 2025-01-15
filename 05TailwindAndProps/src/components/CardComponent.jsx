import React from 'react'

// Props are the args passed to the react components it is nothing but the properties like how we pass to a function as an args here in react the props are passed inside the react components and can be accessed inside any react components in which it is passed into
function Card(props){
  // by this way we can access the props
  
    return(
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-2">
        <img
          src={props.img}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.imgName}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Hello World!</h2>
        </div>
        <p className="text-gray-300">
          this is a normal card containing an image which is created using tailwind css
        </p>
      </div>

    )
}

export default Card