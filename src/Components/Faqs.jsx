
import React, { useState } from "react";
import icp7 from '../../src/assets/icp7.png';
import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';
import './Faqs.css'; 

const Faqs = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    option: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate the field and set validation error if necessary
    if (value.trim() === '') {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'This field is required',
      }));
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '', // Clear validation error when field is not empty
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are any validation errors before submitting the form
    const hasErrors = Object.values(validationErrors).some(error => error !== '');
    if (hasErrors) {
      return; // Don't submit if there are validation errors
    }

    // Check if all fields are filled out
    const isFormFilled = Object.values(formData).every(value => value.trim() !== '');
    if (isFormFilled) {
      console.log(formData);
      // Reset the form data
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
        option: '',
      });
    } else {
      // This case should not occur due to inline validation
      console.error('Form submission prevented because of validation errors.');
    }
  };

  return (
    <div className=" min-h-screen px-[10%] py-[4%] flex flex-col justify-between" style={{ backgroundColor: '#100025' }}>
      <div className="flex flex-col md:flex-row justify-center items-center py-4 md:py-0 md:py-4 mt-32">
        <div className="w-full md:w-7/12 px-4">
          <h2 className="text-white font-bold">YOUR QUERY</h2>
          <header className="text-white text-3xl font-bold py-4">
            <h1>FREQUENTLY ASKED </h1>
            <h1> <span className='text-red-900'>optionS </span></h1>
          </header>
          <section id="about" className="mb-8">
            <p className="text-md text-white">
              Find answers to the common options about our incubation program
            </p>
            <p className='text-white'>and application Process.</p>
            <div className="flex justify-start space-x-4 mt-12">
              <button className="bg-white text-black py-2 px-10 border border-white rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white hover:font-bold">Contact Now</button>
            </div>
          </section>
        </div>
        <div>
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="mb-4">
              <select className="border rounded-md p-2 focus:outline-none text-black font-bold">
                <option value="">What is the program duration? {index}</option>
                <option value="">How do I apply?</option>
                <option value="">What support do you provide?</option>
                <option value="">Do you take equity?</option>
                <option value="">Can I apply with a team?</option>
              </select>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div>
          <p className="text-gray-300 text-lg">CONTACT</p>
          <h2 className="text-white text-3xl font-bold  ">GET IN
          <span className='text-gradient'>
  <span className='pl-2'>TOUCH</span>
</span>
</h2>
          <p className='text-white text-md flex justify-center '>Have any options or want to apply? Reach out to us</p>
        </div>
      </div>
      <div className="w-full justify-between flex-row  mt-12 h-[450px] bg-cover bg-center rounded-xl flex gradient-background">
    

  {/* Content */}
  <div className="flex justify-start mt-8 h-[300px] w-[400px] md:w-auto">
  <div className="flex flex-col justify-between pl-8">
  <div className="flex items-center mb-2"> 
  <FaEnvelope className="text-white mr-2" />
  <div className="flex flex-col">
  
  
    <p className="text-white">@example.com</p>
  </div>
</div>


    <div className="flex items-center mb-2">
      <FaPhone className="text-white mr-2" />
      <span className="text-white font-bold ">123-456-7890</span>
    </div>
    <div className="flex items-center mb-2"> 
      <FaMapMarker className="text-white mr-2" />
      <span className="text-white font-bold">123 Street, City, Country</span>
    </div>
  </div>
</div>



  {/* Image */}
  <div className="">
  <img
  src={icp7}
  alt="icp5"
  className="absolute z-10 w-30 h-[438px] mt-2 right-[80px] top[400rem] hidden md:block"
/>
  </div>

</div>

      <div className="flex justify-center items-center mt-20">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <h2 className="text-white text-4xl font-bold py-4 mt-8 text-center">
            CONNECT<span className='text-gradient'>
  <span className='text-red-900 pl-2'>WITH US</span>
</span>

          </h2>
          <p className="text-white text-smtext-center mb-4  flex justify-center">
            Have an option or need more information? Contact Us
          </p>
          <form
            onSubmit={handleSubmit}
            className=" md:w-[700px] p-6 shadow-md rounded-lg "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white ">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full md:w-auto border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
                {/* Display validation error message if any */}
                {validationErrors.name && <p className="text-red-500 text-xs">{validationErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white ">
                  Your Company
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full md:w-auto border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
                {/* Display validation error message if any */}
                {validationErrors.name && <p className="text-red-500 text-xs">{validationErrors.name}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white ">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full md:w-auto border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
                 {validationErrors.email_address && <p className="text-red-500 text-xs">{validationErrors.email_address}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white ">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full md:w-auto border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
                 {validationErrors.name && <p className="text-red-500 text-xs">{validationErrors.name}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="topic" className="block text-sm font-medium text-white ">
                Choose a Topic
              </label>
              <input
                type="text"
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
               {validationErrors.name && <p className="text-red-500 text-xs">{validationErrors.name}</p>}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-white">Which Best describes You ?</label>
              <div className="mt-2 flex flex-col md:flex-row">
                <div className="mr-8">
                  <input
                    type="radio"
                    id="option1"
                    name="option"
                    value="option1"
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="option1" className="ml-2 text-sm text-white">Option 1</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="option2"
                    name="option"
                    value="option2"
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="option2" className="ml-2 text-sm text-white">Option 2</label>
                </div>
              </div>
              <div className="mt-2 flex flex-col md:flex-row">
                <div className="mr-8">
                  <input
                    type="radio"
                    id="option3"
                    name="option"
                    value="option3"
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="option3" className="ml-2 text-sm text-white">Option 3</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="option4"
                    name="option"
                    value="option4"
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="option4" className="ml-2 text-sm text-white">Option 4</label>
                </div>
              </div>
             
           
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <div className="mt-4">
              <input
                type="checkbox"
                id="acceptConditions"
                name="acceptConditions"
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="acceptConditions" className="ml-2 text-sm text-white">I accept all conditions</label>
            </div>
            <div className="flex justify-center mt-8">
              <button className="text-white py-2 px-10 text-xl rounded-full transition duration-300 bg-gradient-to-r from-pink-600 to-purple-700 font-bold">
                Submit
              </button>
            </div>

          </form>

        </div>
      </div>
      {/* <div className="  w-full h-[370px]  bg-blue-900 mt-24">
               

            </div> */}

    </div>
  );
};

export default Faqs;
