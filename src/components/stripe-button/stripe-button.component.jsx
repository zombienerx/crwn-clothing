import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Gvn61FxN51TsCPqwBaQDmoY2odbSKClobCmVNEittWvoGhP0fcQfgEseQmieKnIyIWkLKCR0JHbyn7dS5HDISZl00zS1Ym3b3';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successfull');
  };

  return (
    <StripeCheckout
      label="pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
