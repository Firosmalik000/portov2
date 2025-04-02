import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, phone, email, message }) => {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
};
