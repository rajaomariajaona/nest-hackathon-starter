export default {
  jwt: {
    secretOrKey: '__JWT_SECRET_KEY__',
    expiresIn: 3600,
  },
  // You can also use any other email sending services
  mail: {
    service: {
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      user: 'apikey',
      pass: '__SENDGRID_API_KEY__',
    },
    senderCredentials: {
      name: '__SENDER_NAME__',
      email: '__SENDER_EMAIL__',
    },
  },
  // these are used in the mail templates
  project: {
    name: '__YOUR_PROJECT_NAME__',
    address: '__YOUR_PROJECT_ADDRESS__',
    logoUrl: 'https://__YOUR_PROJECT_LOGO_URL__',
    slogan: 'Made with ❤️ in Istanbul',
    color: '#123456',
    socials: [
      ['GitHub', '__Project_GitHub_URL__'],
      ['__Social_Media_1__', '__Social_Media_1_URL__'],
      ['__Social_Media_2__', '__Social_Media_2_URL__'],
    ],
    url: 'http://localhost:4200',
    mailVerificationUrl: 'http://localhost:4200/signup/validate',
    termsOfServiceUrl: 'http://localhost:4200/legal/terms',
  },
};
