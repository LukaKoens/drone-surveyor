import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests are allowed' });
  }

  const { name, email, message } = req.body;

  // Configure Nodemailer with Zoho SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // true for 465, false for 587
    auth: {
      user: 'luka@dronesurveyor.co.nz', // Replace with your Zoho email
      pass: process.env.EMAIL_APP_PASSWORD, // Replace with Zoho app password
    },
  });

  const mailOptions = {
    from: '"Website Contact" <luka@dronesurveyor.co.nz>',
    to: 'luka@dronesurveyor.co.nz', // Your Zoho email
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Error sending email', error });
  }
}
