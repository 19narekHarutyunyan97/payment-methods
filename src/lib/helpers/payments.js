const PaypalDropIn = (containerID) => {
    return window.paypal
        .Buttons({
            style: {
                color:  'blue',
                label:  'pay',
                height: 40
            }
        })
        .render(`#${containerID}`);
}

const BraintreeDropIn = (containerID, idBuyBtn) => {

    return window.braintree.dropin.create({
        container: `#${containerID}`,
        authorization: "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNkltaDBkSEJ6T2k4dllYQnBMbk5oYm1SaWIzZ3VZbkpoYVc1MGNtVmxaMkYwWlhkaGVTNWpiMjBpZlEuZXlKbGVIQWlPakUyTkRRek16TXdOalFzSW1wMGFTSTZJalpoTTJSak5HSTJMV1JsWm1NdE5HTXlZUzFpTkRrMExUbGtNekkzWXpneE16aGtOU0lzSW5OMVlpSTZJblF5Wm5ZMVkyNDVNMlo0Y201M05IZ2lMQ0pwYzNNaU9pSm9kSFJ3Y3pvdkwyRndhUzV6WVc1a1ltOTRMbUp5WVdsdWRISmxaV2RoZEdWM1lYa3VZMjl0SWl3aWJXVnlZMmhoYm5RaU9uc2ljSFZpYkdsalgybGtJam9pZERKbWRqVmpiamt6Wm5oeWJuYzBlQ0lzSW5abGNtbG1lVjlqWVhKa1gySjVYMlJsWm1GMWJIUWlPbVpoYkhObGZTd2ljbWxuYUhSeklqcGJJbTFoYm1GblpWOTJZWFZzZENKZExDSnpZMjl3WlNJNld5SkNjbUZwYm5SeVpXVTZWbUYxYkhRaVhTd2liM0IwYVc5dWN5STZlMzE5LmVhOUc2U21hVFZjZEZGd3dTQ0NEQ2Vub1RfeTR0OXExczJhT2djaE5zY1V2NVg3UkNEUzVwR2pUUWN1SUlCd0RTN29NT2tLeEpELXhxMTY4SkJBMlZRIiwiY29uZmlnVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL3QyZnY1Y245M2Z4cm53NHgvY2xpZW50X2FwaS92MS9jb25maWd1cmF0aW9uIiwiZ3JhcGhRTCI6eyJ1cmwiOiJodHRwczovL3BheW1lbnRzLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vZ3JhcGhxbCIsImRhdGUiOiIyMDE4LTA1LTA4IiwiZmVhdHVyZXMiOlsidG9rZW5pemVfY3JlZGl0X2NhcmRzIl19LCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvdDJmdjVjbjkzZnhybnc0eC9jbGllbnRfYXBpIiwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwibWVyY2hhbnRJZCI6InQyZnY1Y245M2Z4cm53NHgiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsInZlbm1vIjoib2ZmIiwiY2hhbGxlbmdlcyI6W10sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL29yaWdpbi1hbmFseXRpY3Mtc2FuZC5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tL3QyZnY1Y245M2Z4cm53NHgifSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImJpbGxpbmdBZ3JlZW1lbnRzRW5hYmxlZCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOnRydWUsInVudmV0dGVkTWVyY2hhbnQiOmZhbHNlLCJhbGxvd0h0dHAiOnRydWUsImRpc3BsYXlOYW1lIjoiVWNyYWZ0IiwiY2xpZW50SWQiOm51bGwsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImVudmlyb25tZW50Ijoib2ZmbGluZSIsImJyYWludHJlZUNsaWVudElkIjoibWFzdGVyY2xpZW50MyIsIm1lcmNoYW50QWNjb3VudElkIjoidWNyYWZ0IiwiY3VycmVuY3lJc29Db2RlIjoiVVNEIn19",
        // ...plus remaining configuration
    }, (error, dropinInstance) => {
        document.querySelector(`#${idBuyBtn}`).addEventListener('click', function () {
            dropinInstance.requestPaymentMethod((error, payload) => {
                if (error) console.error(error);

                console.log(payload.nonce)
            });
        })
        console.log(error);
    });
}

const TwoPayJsDropIn = (containerID, idBuyBtn) => {
    const jsPaymentClient = new  window.TwoPayClient('YOUR_MERCHANT_CODE');
    const component = jsPaymentClient.components.create('card');
    component.mount(`#${containerID}`);

    document.querySelector(`#${idBuyBtn}`).addEventListener('click', function (event) {
        event.preventDefault();

        // Extract the Name field value
        const billingDetails = {
            name: "name"
        };
        jsPaymentClient.tokens.generate(component, billingDetails).then((response) => {
            console.log(response.token);
        }).catch((error) => {
            console.error(error);
        });
    })
}



export {
    PaypalDropIn,
    BraintreeDropIn,
    TwoPayJsDropIn
}