import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-slate-800 text-white py-10 px-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-6 md:mb-0'>
          <h2 className='text-2xl font-bold font-serif '>AlexFit</h2>
          <p className='mt-2 text-lime-200'>Your ultimate fitness  webApp companion</p>
        </div>
        <div className='flex flex-col md:flex-row gap-8'>
          <div>
            <h3 className='text-xl font-semibold'>Contact Us</h3>
            <ul className='mt-2'>
              <li><strong> Email:</strong> contact@alexfit.com</li>
              <li><strong> Email:</strong> alexprosperous225@.com</li>
              <li><strong> Phone:</strong> +6585632.. </li>
              <li><strong> Address:</strong> 305 AlexFitness, Johannesburg sandton, South africa</li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold'>Quick Links</h3>
            <ul className='mt-2'>
              <li><a href='/about' className='hover:underline'>About Us</a></li>
              <li><a href='/services' className='hover:underline'>Services</a></li>
              <li><a href='/contact' className='hover:underline'>Contact</a></li>
              <li><a href='/faq' className='hover:underline'>FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold'>Follow Us now</h3>
            <ul className='mt-2 flex gap-4'>
              <li><a href='https://facebook.com/alexfit' className='hover:underline'>Facebook</a></li>
              <li><a href='https://twitter.com/alexfit' className='hover:underline'>Twitter</a></li>
              <li><a href='https://instagram.com/alexfit' className='hover:underline'>Instagram</a></li>
              <li><a href='https://www.linkedin.com/in/alex-k-460005199' className='hover:underline'>LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mt-10 text-center'>
        <p className='text-lime-200  font-serif'>© 2024 AlexFit. All rights reserved.</p>
      </div>
    </footer>
  );
}
