import nodemailer from "nodemailer";

const sendEmail = async (email, subject, link) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false, // true for 465, false for other ports
        });

        const mailOptions = {
            from: '"E-Learning" <noreply@myapp.com>', // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            html: `<p>Hello, welcome to our service!</p><a href="${link}">Verify Email</a>`, // html body
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.log("Email not sent");
        console.error(error);
    }
};

export default sendEmail;
