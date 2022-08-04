const express = require('express');
const stripe = require("stripe")(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/payment", (req, res) => {
  console.log(req.body);
     stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "inr",
      },function(err, stripeRes){
        if(err){
          console.log(err);
          return err;
        }
        console.log(stripeRes);
        return res.status(200).json({
          stripeRes,
        })
      }
    );
  });


module.exports = router;