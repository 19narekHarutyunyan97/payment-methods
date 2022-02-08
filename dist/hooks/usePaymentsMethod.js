"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addScript = _interopRequireDefault(require("../helpers/addScript"));

var _payments = require("../helpers/payments");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const paymentMethods = [{
  id: 1,
  name: 'Paypal',
  action: 'drop-in',
  script: 'https://www.paypal.com/sdk/js?client-id=AUsk7O53MeApsXHX_QxvDiUF9ognWdHqJL1c3YN51Y5DU0sXWxBDnBj0lzSDtK5--L9sJbA5HoCiBXcH'
}, {
  id: 2,
  name: 'BrainThree',
  action: 'drop-in',
  script: 'https://js.braintreegateway.com/web/dropin/1.32.1/js/dropin.min.js'
}, {
  id: 3,
  name: 'Ameria',
  action: 'redirect',
  urlRedirect: 'https://ameriabank.am/'
}, {
  id: 4,
  name: 'twoPay',
  action: 'drop-in',
  script: 'https://2pay-js.2checkout.com/v1/2pay.js'
}];

const usePaymentsMethod = _ref => {
  let {
    payBtnClassName,
    containerPaymentMethods
  } = _ref;

  const onChangeHandelPaymentMethods = (id, cartId) => {
    if (id) {
      const paymentMethod = paymentMethods.find(item => +item.id === +id);
      const {
        script,
        name,
        action,
        urlRedirect
      } = paymentMethod;
      const btnBuy = document.getElementById("".concat(payBtnClassName));
      document.getElementById("".concat(containerPaymentMethods)).innerHTML = '';

      if (action === "redirect") {
        btnBuy.addEventListener('click', event => {
          event.preventDefault();
          window.open(urlRedirect, '_blank');
        }, {
          once: true
        });
      } else {
        (0, _addScript.default)(script, name, () => {
          switch (id) {
            case 1:
              (0, _payments.PaypalDropIn)(containerPaymentMethods);
              break;

            case 2:
              (0, _payments.BraintreeDropIn)(containerPaymentMethods, payBtnClassName);
              break;

            case 4:
              (0, _payments.TwoPayJsDropIn)(containerPaymentMethods, payBtnClassName);
              break;
          }
        });
      }
    }
  };

  return {
    onChangeHandelPaymentMethods
  };
};

var _default = usePaymentsMethod;
exports.default = _default;