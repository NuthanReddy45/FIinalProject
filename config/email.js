const { createTransport } = require("nodemailer");
const { emailTemplate } = require("./templates");
const {
  CLIENT_URL,
  EMAIL_HOST,
  EMAIL_USER,
  EMAIL_PASSWORD,
} = require("./default.json");
const { sign } = require("jsonwebtoken");

const createPasswordResetUrl = (id, token) =>
  `${CLIENT_URL}/reset-password/${id}/${token}`;

const createEmailVerificationUrl = (id, token) =>
  `${CLIENT_URL}/verify-email/${id}/${token}`;

// for verifying the email
const createEmailVerificationToken = ({ _id, email }) => {
  const secret = email;
  return sign({ id: _id }, secret, {
    expiresIn: "90d",
  });
};

const createPasswordResetToken = ({ _id, email, password }) => {
  const secret = password;
  return sign({ id: _id, email }, secret, {
    expiresIn: 15 * 60, // 15 minutes
  });
};

const transporter = createTransport({
  service: EMAIL_HOST,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

const passwordResetTemplate = (user, url) => {
  const { name, email } = user;
  return {
    from: `ELabour Delhi <noreply@talla_11915139@nitkkr.ac.in>`,
    to: email,
    subject: `ELabour Delhi - Password Reset Link`,
    html: emailTemplate({
      title: "Password Reset Link",
      subject: "ELabour Delhi - Password Reset Link",
      body: `Hey ${name}!
			Reset your password by clicking on the button below.`,
      link: url,
      btn: "Reset Password",
      footer: `The link will expire in 15 mins!
		If you haven't requested password reset, please ignore!
		`,
    }),
  };
};

const emailVerificationTemplate = (user, url) => {
  const { name, email } = user;
  return {
    from: `ELabour Delhi <noreply@talla_11915139@nitkkr.ac.in>`,
    to: email,
    subject: `Verify your email! ${name}`,
    html: emailTemplate({
      title: "Email Verification Link",
      subject: "ELabour Delhi - Email Verification Link",
      body: `Hey ${name}!
			Verify your email by clicking the button below.`,
      link: url,
      btn: "Verify",
      footer: `If you haven't created an account, please ignore!
		`,
    }),
  };
};

const employeeAdditionConfirmationTemplate = (user, org) => {
  const { name, email } = user;

  return {
    from: `ELabour Delhi <noreply@talla_11915139@nitkkr.ac.in>`,
    to: email,
    subject: `ELabour Delhi - Status Update`,
    html: emailTemplate({
      title: "Updated employment status!",
      subject: "ELabour Delhi - Updated employment status!",
      body: `Hey ${name}!
			You have been added to ${org} as an employee.`,
      footer: `If you don't work there or changed your employer, please raise a dispute through contact form!
		`,
    }),
  };
};

const emailVerifyConfirmationTemplate = (user) => {
  const { name, email } = user;

  return {
    from: `ELabour Delhi <noreply@talla_11915139@nitkkr.ac.in>`,
    to: email,
    subject: `ELabour Delhi - Email Verification Successful`,
    html: emailTemplate({
      title: "Email Verification Successful",
      subject: "ELabour Delhi - Email Verification Successful",
      body: `Hey ${name}!
			Your email address has been successfully verified. Thank you for signing up for ELabour Delhi. We look forward to helping you buy and sell used goods easily.`,
      footer: `If you are not expecting this email, please ignore!
		`,
    }),
  };
};

module.exports = {
  transporter,
  createPasswordResetUrl,
  createEmailVerificationUrl,
  createEmailVerificationToken,
  createPasswordResetToken,
  passwordResetTemplate,
  emailVerificationTemplate,
  employeeAdditionConfirmationTemplate,
  emailVerifyConfirmationTemplate,
};
