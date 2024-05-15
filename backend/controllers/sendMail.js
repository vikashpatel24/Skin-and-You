const { Resend } = require("resend");
const resend = new Resend("re_2ivRezJk_CUBRLVhqwN1YTHuGqw8rMCVz");
const img = "https://drive.google.com/uc?id=1Y-NrfCmbUTzddaP9r1BvXHQElajCLOpG";

const sendEmail = async ({ name, email, phone, date }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Skin&You <onboarding@resend.dev>",
      to: email,
      subject: "Appointment Booked Successfully - Skin&You",
      html: `
      <!doctype html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Message - Skin&You</title>
      <style>
          body {
              background-color: #f7f7f7;
              font-family: 'Roboto', sans-serif;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 800px;
              margin: 30px auto;
              padding: 40px; 
              background-color: #ffffff;
              border: 1px solid #ddd;
              text-align: left;
              box-shadow: 0 4px 8px rgba(0,0,0,0.05);
              border-radius: 5px;
          }
          .button {
              display: inline-block;
              padding: 10px 20px;
              margin: 20px 0;
              background-color: #26c6da;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
          }
          .footer {
              font-size: 12px;
              color: #777777;
              margin-top: 20px;
          }
          .header {
              font-weight: bold; 
          }
      </style>
      </head>
      <body>
      <div class="container">
          <img src=${img} alt="Logo" style="height: 100px; margin: 0 auto 20px; display: block;">
          <h2 class="header">Appointment Booked Successfully</h2>
          <p>Hello, ${name}</p>
          <p>Your appointment is booked successfully on Skin&You</p>
          <p>Here are your details:</p>
          <p>Your email Id: ${email}</p>
          <p>Your phone number: ${phone}</p>
          <p>Your booked date: ${date}</p>
          <br/>
          <p>Thank you for registering on <strong>Skin&You</strong></p>
          <br>
          <p class="footer">Regards,</p>
          <p class="footer">Skin&You</p>
      </div>
      </body>
      </html>`,
    });

    if (error) {
      console.error("Failed to send email:", error);
    }
  } catch (err) {
    console.error("Error while sending email:", err);
  }
};

module.exports = sendEmail;
