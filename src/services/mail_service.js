const mailer = require('nodemailer');
require('dotenv').config();


const mailsender = async (email,title,body)=>{
try{ 
const transporter = mailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
 let mail = await transporter.sendMail({
  from:`StudyPoint || DreamTech<${process.env.EMAIL_USER}>`,
  to:`${email}`,
  subject:`${title}`,
  html:`${body}`
 })
   console.log(mail);
   return mail ;


 }

catch (error){
  console.log(`Fail to configure maile ${error}`);
   
}
} 


module.exports = mailsender;