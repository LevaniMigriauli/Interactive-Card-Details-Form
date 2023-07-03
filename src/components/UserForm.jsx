import { useState } from "react";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import validator from "validator";

const UserForm = function () {
  const [userName, setUserName] = useState("");

  const [cardNumber, setCardNumber] = useState();
  //   const [cardNumberIsValid, setCardNumberIsValid] = useState(true);
  const [message, setMessage] = useState();

  const submitHandler = function (event) {
    event.preventDefault();
  };

  console.log(cardNumber ? /[a-zA-Z]/gi.test(cardNumber) : "");

  const handleCreditCard = function (event) {
    let value = event.target.value;
    setCardNumber(value);
    if (validator.isCreditCard(value)) {
      setMessage("");
    } else {
      setMessage("Wrong format, numbers only");
    }
  };

  //   const {
  //     getCardNumberProps,
  //     getCardImageProps,
  //     meta: { erroredInputs },
  //   } = useCreditCardValidator();

  //   console.log(getCardNumberProps, getCardImageProps);

  return (
    <form onSubmit={submitHandler} action="">
      <label htmlFor="">Cardholder Name</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <label htmlFor="">Card Number</label>
      <input
        type="text"
        value={cardNumber}
        name=""
        id=""
        onChange={
          //   setCardNumber(e.target.value);
          handleCreditCard
        }
        // onBlur={() =>
        //   cardNumber && setCardNumberIsValid(/[a-z]/gi.test(cardNumber))
        // }
        // {...getCardNumberProps()}
      />
      {/* <svg {...getCardImageProps({ images })} /> */}
      {/* <small> {erroredInputs.cardNumber && erroredInputs.cardNumber} </small> */}
      {/* {cardNumberIsValid && <div>Wrong format, numbers only</div>} */}
      {<div>{message}</div>}

      <input type="month" name="" id="" />
      <input type="date" name="" id="" />

      <button type="submit">Confirm</button>
    </form>
  );
};

export default UserForm;
