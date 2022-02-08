import AddScript from "../helpers/addScript";
import {PaypalDropIn, BraintreeDropIn, TwoPayJsDropIn} from "../helpers/payments"

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

const usePaymentsMethod = ({payBtnClassName, containerPaymentMethods}) => {

    const onChangeHandelPaymentMethods = (id, cartId) => {
        if(id) {
            const paymentMethod = paymentMethods.find((item) => +item.id === +id)
            const {script, name, action, urlRedirect} = paymentMethod;
            const btnBuy = document.getElementById(`${payBtnClassName}`);
            document.getElementById(`${containerPaymentMethods}`).innerHTML = '';

            if (action === "redirect") {
                btnBuy.addEventListener('click', (event) => {
                    event.preventDefault();
                    window.open(
                        urlRedirect,
                        '_blank'
                    );
                }, { once: true })
            } else {
                AddScript(script, name, () => {
                    switch (id) {
                        case 1:
                            PaypalDropIn(containerPaymentMethods)
                            break;
                        case 2:
                            BraintreeDropIn(containerPaymentMethods, payBtnClassName)
                            break;
                        case 4:
                            TwoPayJsDropIn(containerPaymentMethods,payBtnClassName)
                            break;

                    }
                })
            }
        }
    }

    return {onChangeHandelPaymentMethods}
};

export default usePaymentsMethod;
