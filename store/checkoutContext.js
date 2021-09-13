import { useState, createContext } from "react";

const CheckoutContext = createContext({
  Checkout: null,
  toggleCheckout: () => {},
});

export const CheckoutContextProvider = (props) => {
  const [checkoutState, setCheckoutState] = useState(false);

  const toggleCheckoutHandler = () => {
    setCheckoutState((prevCheckoutState) => {
      // document.body.style.overflow = !prevCheckoutState ? "hidden" : "";
      return !prevCheckoutState;
    });
  };
  const setCheckoutHandler = (checkout) => {
    setCheckoutState(checkout);
  };

  const context = {
    checkout: checkoutState,
    toggleCheckout: toggleCheckoutHandler,
    setCheckout: setCheckoutHandler,
  };
  return (
    <CheckoutContext.Provider value={context}>
      {props.children}
    </CheckoutContext.Provider>
  );
};
export default CheckoutContext;
