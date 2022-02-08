"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwoPayJsDropIn = exports.PaypalDropIn = exports.BraintreeDropIn = void 0;

const PaypalDropIn = containerID => {
  return window.paypal.Buttons({
    style: {
      color: 'blue',
      label: 'pay',
      height: 40
    }
  }).render("#".concat(containerID));
};

exports.PaypalDropIn = PaypalDropIn;

const BraintreeDropIn = (containerID, idBuyBtn) => {
  return window.braintree.dropin.create({
    container: "#".concat(containerID),
    authorization: "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNkltaDBkSEJ6T2k4dllYQnBMbk5oYm1SaWIzZ3VZbkpoYVc1MGNtVmxaMkYwWlhkaGVTNWpiMjBpZlEuZXlKbGVIQWlPakUyTkRReU16STRORE1zSW1wMGFTSTZJbVJqTnpSaE56TTRMVFptTldZdE5EUTJNQzA0TXpOaUxUUmpZMk0wTW1VMU9UbGlOeUlzSW5OMVlpSTZJalF5ZW5obmFuRmliWFkzTm1Sek9YUWlMQ0pwYzNNaU9pSm9kSFJ3Y3pvdkwyRndhUzV6WVc1a1ltOTRMbUp5WVdsdWRISmxaV2RoZEdWM1lYa3VZMjl0SWl3aWJXVnlZMmhoYm5RaU9uc2ljSFZpYkdsalgybGtJam9pTkRKNmVHZHFjV0p0ZGpjMlpITTVkQ0lzSW5abGNtbG1lVjlqWVhKa1gySjVYMlJsWm1GMWJIUWlPbVpoYkhObGZTd2ljbWxuYUhSeklqcGJJbTFoYm1GblpWOTJZWFZzZENKZExDSnpZMjl3WlNJNld5SkNjbUZwYm5SeVpXVTZWbUYxYkhRaVhTd2liM0IwYVc5dWN5STZlMzE5LmtwNFFfNkk2TTVkWUtiTFpraDYyb1ZyR2pFNnE1Wk14UkZOV2ZwOW5lM1FJcHRFazFPdXo3UmczV3MxUXpmNld6ajZORXRnbmpWeEdqcHQ1Rl9qN0lBIiwiY29uZmlnVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzQyenhnanFibXY3NmRzOXQvY2xpZW50X2FwaS92MS9jb25maWd1cmF0aW9uIiwiZ3JhcGhRTCI6eyJ1cmwiOiJodHRwczovL3BheW1lbnRzLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vZ3JhcGhxbCIsImRhdGUiOiIyMDE4LTA1LTA4IiwiZmVhdHVyZXMiOlsidG9rZW5pemVfY3JlZGl0X2NhcmRzIl19LCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvNDJ6eGdqcWJtdjc2ZHM5dC9jbGllbnRfYXBpIiwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwibWVyY2hhbnRJZCI6IjQyenhnanFibXY3NmRzOXQiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsInZlbm1vIjoib2ZmIiwiY2hhbGxlbmdlcyI6W10sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL29yaWdpbi1hbmFseXRpY3Mtc2FuZC5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tLzQyenhnanFibXY3NmRzOXQifSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImJpbGxpbmdBZ3JlZW1lbnRzRW5hYmxlZCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOnRydWUsInVudmV0dGVkTWVyY2hhbnQiOmZhbHNlLCJhbGxvd0h0dHAiOnRydWUsImRpc3BsYXlOYW1lIjoidWMiLCJjbGllbnRJZCI6bnVsbCwicHJpdmFjeVVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS9wcCIsInVzZXJBZ3JlZW1lbnRVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vdG9zIiwiYmFzZVVybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9jaGVja291dC5wYXlwYWwuY29tIiwiZGlyZWN0QmFzZVVybCI6bnVsbCwiZW52aXJvbm1lbnQiOiJvZmZsaW5lIiwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwibWVyY2hhbnRBY2NvdW50SWQiOiJ1YyIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9fQ==" // ...plus remaining configuration

  }, (error, dropinInstance) => {
    document.querySelector("#".concat(idBuyBtn)).addEventListener('click', function () {
      dropinInstance.requestPaymentMethod((error, payload) => {
        if (error) console.error(error);
        console.log(payload.nonce);
      });
    });
    console.log(error);
  });
};

exports.BraintreeDropIn = BraintreeDropIn;

const TwoPayJsDropIn = (containerID, idBuyBtn) => {
  const jsPaymentClient = new window.TwoPayClient('YOUR_MERCHANT_CODE');
  const component = jsPaymentClient.components.create('card');
  component.mount("#".concat(containerID));
  document.querySelector("#".concat(idBuyBtn)).addEventListener('click', function (event) {
    event.preventDefault(); // Extract the Name field value

    const billingDetails = {
      name: "name"
    };
    jsPaymentClient.tokens.generate(component, billingDetails).then(response => {
      console.log(response.token);
    }).catch(error => {
      console.error(error);
    });
  });
};

exports.TwoPayJsDropIn = TwoPayJsDropIn;