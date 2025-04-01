'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { CardDemo } from '@/components/ui/CardDemo';
import { Rubik } from 'next/font/google';
import { cn } from '@/app/lib/utils';
// import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
const rubik = Rubik({ subsets: ['latin'], weight: ['400', '700'] });
const resend = new Resend('re_ivHQ9Dhg_PAAX7sgidR9nsfCovLiYmSWs');

const Contact = () => {
  const inputRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputRef.current) return;

    const formData = new FormData(inputRef.current);
    // const name = formData.get('name') as string;
    // const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
      const { data, error } = await resend.emails.send({
        from: email,
        to: ['firosmalik.job@gmail.com'],
        subject: subject,
        react: message,
      });

      if (error) {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again.');
        return;
      }

      console.log('Email sent successfully:', data);
      alert('Email sent successfully!');
      inputRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An unexpected error occurred. Please try again.');
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
                    <input type="text" id="name" name="name" className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
                  <input type="email" id="email" name="email" className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-1" htmlFor="subject">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea id="message" name="message" className="textarea textarea-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} />
                </div>

                <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
