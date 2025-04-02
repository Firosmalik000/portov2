'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CardDemo } from '@/components/ui/CardDemo';
import { Rubik } from 'next/font/google';
import { cn } from '@/app/lib/utils';
import Swal from 'sweetalert2';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '700'] });

const Contact = () => {
  const inputRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    event.preventDefault();

    if (!inputRef.current) return;

    setStatus('loading');
    setErrorMessage(null);

    const formData = new FormData(inputRef.current);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
      Swal.fire({
        icon: 'info',
        title: 'Sending Email',
        text: 'Please wait a moment, your email is being sent.',
        didOpen() {
          Swal.showLoading();
        },
      });
      const response = await fetch('/api/send-email', {
        // Call API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your email has been sent successfully.',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        inputRef.current.reset();
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send email.');
        console.error('Error sending email:', data.error);
        Toast.fire({
          icon: 'success',
          title: 'Failed to send email. Please try again.',
        });
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred.');
      console.error('Error sending email:', error);
      Toast.fire({
        icon: 'success',
        title: 'An unexpected error occurred. Please try again.',
      });
    }
  };

  return (
    <div className="text-white w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-transparent to-gray-800">
      <motion.h2 initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }} className={cn('text-2xl md:text-4xl lg:text-3xl text-center font-extrabold mb-6', rubik.className)}>
        CONNECT WITH ME!
      </motion.h2>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="container bg-gray-800 shadow-2xl rounded-xl lg:w-2/3 w-11/12 max-w-4xl p-8"
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2">
            <CardDemo />
          </div>
          <div className="w-full lg:w-1/2">
            <form className="w-full" ref={inputRef} onSubmit={sendEmail}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label className="block text-gray-300 font-medium mb-1" htmlFor="name">
                      Name
                    </label>
                    <input type="text" id="name" name="name" className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div className="w-full">
                    <label className="block text-gray-300 font-medium mb-1" htmlFor="phone">
                      Phone Number
                    </label>
                    <input type="text" id="phone" name="phone" className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-1" htmlFor="email">
                    Email
                  </label>
                  <input type="email" id="email" name="email" className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-1" htmlFor="subject">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea id="message" name="message" className="textarea textarea-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} required />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                  disabled={status === 'loading' ? true : false}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </motion.button>

                {status === 'error' && <p className="text-red-500 mt-2">{errorMessage}</p>}
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
