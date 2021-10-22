export const emailValidation = (email) => {
  const mailformat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return mailformat.test(email);
};

export const phoneNumberValidation = (phoneNumber) => {
  const phonenumberformat = /\(?(0[0-9]{2})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  return phonenumberformat.test(phoneNumber);
};

export const nameValidation = (name) => {
  const nameformat = /^[a-zA-Z]+( [a-zA-Z]+)+$/;
  return nameformat.test(name);
};

export const cityValidation = (city) => {
  const cityformat = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
  return cityformat.test(city);
};
