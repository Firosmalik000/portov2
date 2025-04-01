import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  phone: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName, phone, email, message }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Phone: {phone}</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);
