export const emailValidation = (email) => {
  const mailformat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return mailformat.test(email);
};

export const phoneNumberValidation = (phoneNumber) => {
  const phonenumberformat = /^(\+?381|0)[6123]\d(0?)(\d{6,7})$/;
  return phonenumberformat.test(phoneNumber);
};

export const nameValidation = (name) => {
  const nameformat = /^[a-zA-ZšŠđĐčČćĆžŽ]+(\s+[a-zA-ZšŠđĐčČćĆžŽ]+){1,2}$/;
  const nameformat2 =
    /^[аАбБвВгГдДђЂеЕжЖзЗиИјЈкКлЛљЉмМнНњЊоОпПрРсСтТћЋуУфФхХцЦчЧџЏшШ]+( [аАбБвВгГдДђЂеЕжЖзЗиИјЈкКлЛљЉмМнНњЊоОпПрРсСтТћЋуУфФхХцЦчЧџЏшШ]+)+$/;
  return nameformat.test(name) || nameformat2.test(name);
};

export const cityValidation = (city) => {
  const cityformat = /^[a-zA-ZšŠđĐčČćĆžŽ]+(?:[\s-][a-zA-ZšŠđĐčČćĆžŽ]+)*$/;
  const cityformat2 =
    /^[аАбБвВгГдДђЂеЕжЖзЗиИјЈкКлЛљЉмМнНњЊоОпПрРсСтТћЋуУфФхХцЦчЧџЏшШ]+(?:[\s-][аАбБвВгГдДђЂеЕжЖзЗиИјЈкКлЛљЉмМнНњЊоОпПрРсСтТћЋуУфФхХцЦчЧџЏшШ]+)*$/;
  return cityformat.test(city) || cityformat2.test(city);
};

export const postalCodeValidation = (postalCode) => {
  const postalcodeformat = /^(\d{5})$/;
  return postalcodeformat.test(postalCode);
};

export const pibValidation = (pib) => {
  const pibformat = /^(\d{9})$/;
  return pibformat.test(pib);
};
