const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5500;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST /contact route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("📥 Received request:", req.body);

  // Setup nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sreeharisudheesh1@gmail.com",
      pass: "hhky csjr dpjw yprt", // App password (never use your actual password!)
    },
  });

  // Mail content
  const mailOptions = {
    from: email,
    to: "sreeharisudheesh1@gmail.com",
    subject: `New Contact Form Submission from ${name}`,
    text: `Message: ${message}\n\nFrom: ${name} <${email}>`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", result.response);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
