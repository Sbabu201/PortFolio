import React, { useState } from 'react';
import { contactusbg, phone } from '../assets';
import { AppText } from '../Constants';
import SectionHeading from '../Shared/SectionHeading';
import toast from 'react-hot-toast';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loader when submit button is clicked

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        message
      })
    };

    try {
      const response = await fetch("https://my-portfolio-1f763-default-rtdb.firebaseio.com/UserData.json", options);
      if (response.ok) {
        toast.success("Message sent successfully");
      } else {
        toast.error("Error occurred while sending message");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Error occurred while sending message");
    } finally {
      setIsLoading(false); // Hide loader after the operation is complete
    }
  };

  return (
    <div id="contact" className='flex flex-col justify-center  font-times mt-5'>
      <div className='flex flex-row  justify-center '>
        <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Us} />
        <img src={phone} alt='phone' className="w-[80px] ml-4" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44'>
        <img src={contactusbg} alt='contact' className="w-[300px] mr-10" />
        <div className='w-full'>
          <div className='flex flex-col '>
            <label className='text-gray-400 '>Email</label>
            <input
              type="text"
              placeholder='yourname@gmail.com'
              className='border-[1.5px] px-2 h-10 focus:outline-none border-purple-300 hover:border-purple-500 rounded-md'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-gray-400 '>Message</label>
            <textarea
              type="text"
              rows={7}
              placeholder='Type your message here'
              className='border-[1.5px] px-2 hover:border-purple-500 focus:outline-none border-purple-300 rounded-md'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className='transition-all ease-in-out hover:scale-110 bg-purple-500 flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-white  rounded-md'
              onClick={handleSubmit}
              disabled={isLoading} // Disable the button when loading
            >
              {isLoading ? ( // Show loader if isLoading is true
                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2-7.938A7.96 7.96 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"></path>
                </svg>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
