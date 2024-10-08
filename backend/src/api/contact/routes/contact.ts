'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact',
      handler: 'contact.submitForm',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};