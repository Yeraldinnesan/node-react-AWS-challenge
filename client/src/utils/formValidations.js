export const formValidation = (formData) => {
  const errors = {};
  const fullNameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;

  if (!fullNameRegex.test(formData.fullName))
    errors.fullName = "Full name required";
  if (!formData.placeOfBirth.country) errors.country = "Country required";
  if (!formData.placeOfBirth.state) errors.state = "State required";
  if (!formData.placeOfBirth.city) errors.city = "City required";
  return errors;
};
