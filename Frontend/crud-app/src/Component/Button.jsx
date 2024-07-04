/* eslint-disable react/prop-types */


const Button = ({ text=""}) => {
    return (
      <button className="bg-black p-2 text-white rounded-md ">
         {text} 
    </button>
  )
}

export default Button