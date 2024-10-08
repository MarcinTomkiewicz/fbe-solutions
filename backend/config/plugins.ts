module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'strapi-provider-email-smtp',
        providerOptions: {
          host: 'smtp.gmail.com', //SMTP Host
          port: 465   , //SMTP Port
          secure: true,
          username: env('SMTP_USERNAME'),
          password:  env('SMTP_PASSWORD'),
          rejectUnauthorized: true,
          requireTLS: true,
          connectionTimeout: 1,
          // host: env('SMTP_HOST', 'smtp.gmail.com'), // Adres SMTP
          // port: env('SMTP_PORT', 587),
          // secure: false, // Ustaw na true, jeśli używasz portu 465
          // auth: {
          //   user: env('SMTP_USERNAME'), // Twój e-mail
          //   pass: env('SMTP_PASSWORD'), // Hasło
          // },
        },
      },
      settings: {
        defaultFrom: 'marc.tomk@gmail.com',
        defaultReplyTo: 'marc.tomk@gmail.com',
      },
    },
  });