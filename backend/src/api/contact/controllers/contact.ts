'use strict'

const { parseMultipartData, sanitizeEntity } = require('@strapi/utils');

module.exports = {
  async submitForm(ctx) {
    const { firstName, lastName, company, email, phone, topic, message } = ctx.request.body;

    try {
      // Wysyłka e-maila
      await strapi.plugins['email'].services.email.send({
        to: 'marc.tomk@gmail.com',  // Twój adres e-mail
        from: email, // Używamy adresu e-mail użytkownika jako nadawcy
        subject: `${topic}: ${company || firstName + ' ' + lastName}`,
        html: `
        <p><strong>Imię:</strong> ${firstName}</p>
        <p><strong>Nazwisko:</strong> ${lastName}</p>
        <p><strong>Firma:</strong> ${company || '-'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Temat:</strong> ${topic}</p>
        <p><strong>Wiadomość:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
      });

      // Zwróć odpowiedź z sukcesem
      ctx.send({ message: 'Wiadomość wysłana pomyślnie' });
    } catch (error) {
      ctx.send({ error: `${error}, ${firstName}, ${lastName}, ${company}, ${email}, ${phone}, ${topic}, ${message}, Błąd podczas wysyłania wiadomości` });
    }
  }
};