function validatePhoneNumber(elementValue) {
  var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return phoneNumberPattern.test(elementValue);
}

validatePhoneNumber(1234567890);
console.log(validatePhoneNumber(5612557172));
