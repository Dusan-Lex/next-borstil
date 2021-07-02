export const emailValidation = (email) => {
  const mailformat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return mailformat.test(email);
};
