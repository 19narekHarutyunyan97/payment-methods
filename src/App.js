import usePaymentsMethod from "./lib/hooks/usePaymentsMethod";

function App() {
   const {onChangeHandelPaymentMethods} = usePaymentsMethod({
       payBtnClassName: 'buy-btn',
       containerPaymentMethods: 'container-payments'
   })

  return (
    <div className="App">
      <ul onClick={(e) => onChangeHandelPaymentMethods(e.target.value, 55)}>
          <li value={1}>Paypal</li>
          <li value={2}>Brain</li>
          <li value={3}>Ameria</li>
          <li value={4}>2Pay</li>
          <button id="buy-btn">Buy</button>
      </ul>
        <div id="container-payments">

        </div>
    </div>
  );
}

export default App;
