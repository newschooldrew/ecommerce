
import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";


 const CLIENT = {
   sandbox:
     "your_sandbox_key",
   production:
     "your_production_key"
 };

 const CLIENT_ID =
   process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;
//create button here
let PayPalButton = null;

// next create the class and Bind React and ReactDom to window
//as we will be needing them later

class PaypalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }
  
  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;
console.log(this.state.total)
    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      this.setState({ loading: false, showButtons: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
  }

  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "Purchase from Drews Shop",
          amount: {
            currency_code: "USD",
            value: this.props.total
          }
        }
      ]
    });
  };

  onApprove = (data, actions) => {
    actions.order.capture().then(details => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID
      };
      console.log("Payment Approved: ", paymentData);
      this.setState({ showButtons: false, paid: true });
    });
  };
  render(){
      const {paid,showButtons} = this.state;
      return(
        <div className="main">

        {showButtons && (
            <PayPalButton
              createOrder={(data, actions) => this.createOrder(data, actions)}
              onApprove={(data, actions) => this.onApprove(data, actions)}
            />
        )}

        {paid && (
          <div className="main">
            <h2>
              <p>Thanks for your purchase!</p>
            </h2>
          </div>
        )}
      </div>
    );
  }

 }

 export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=AU0ErApCQ95X84DgRuowQCW0muyyFJJ1w6fRnBw4ed6XqiuA15mCyZNg7NBePykJdl-NAxteKGOB4dPy`)(PaypalButton);