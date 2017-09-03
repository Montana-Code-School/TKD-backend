const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    console.log(stripeErr);
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

const paymentApi = app => {
  setInterval(() => {
    app.get('/', (req, res) => {
      if (res.statusCode === 200) {
        res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
      }
      else {
        res.send("error");
      }
    });
  }, 500)


  app.post('/', (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res));
  });

  return app;
};

module.exports = paymentApi;
