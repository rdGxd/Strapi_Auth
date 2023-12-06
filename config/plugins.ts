module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "strapi-provider-email-smtp",
      providerOptions: {
        host: "smtp.gmail.com", //SMTP Host
        port: 465, //SMTP Port
        secure: true,
        username: env("SMTP_EMAIL_USER_NAME_APP"),
        password: env("SMTP_EMAIL_PASSWORD_APP"),
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
    },
    settings: {
      defaultFrom: env("SMTP_EMAIL_USER_NAME_APP"),
      defaultReplyTo: env("SMTP_EMAIL_USER_NAME_APP"),
    },
  },
  // ...
});
