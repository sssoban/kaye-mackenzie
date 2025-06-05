import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import '../App.css'

function RealEstatePage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const templateParams = {
        email: email
      };

      await emailjs.send(
        'service_decxq3c',
        'template_uk0rttd',
        templateParams,
        'knfkMKnxQGXE4LaSa'
      );

      setMessage('Thank you! We will notify you when we launch. 🎉');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to submit. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="background-image">
      <img src="KayeMackenzieLogo.png" alt="Kaye Mackenzie Logo" className='pt-12 h-50 sm:h-70 mx-auto'/>
      <div className='sm:mt-20 mx-2'>
        <h1 className='text-[35px] sm:text-[65px] text-[#1E3C87] font-bold'>Page Update in Progress</h1>
        <p className=' sm:text-[20px] text-[#4B5563]'>We're working on something special and can't wait to share it with you.</p>
      </div>
      <div className='mt-10 mb-4'>
        <p className='font-poppins-regular text-[20px] text-[#4B5563]'>Be the first to know when it goes live!</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input 
          type="email" 
          value={email}
          onChange={handleEmailChange}
          placeholder='Enter your email address' 
          className='border-1 p-2 w-80 sm:w-100 text-center placeholder:text-[#9CA3AF] focus:placeholder-transparent'
          required
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className=' bg-[#405fad] text-white px-20 py-4 hover:bg-[#1E3C87] transition-colors'
        >
          {isSubmitting ? 'Submitting...' : 'Notify Me'}
        </button>
      </form>
      {message && (
        <div className='mt-2 font-poppins-regular'>
          {message}
        </div>
      )}
      
    </div>
  )
}

export default RealEstatePage
