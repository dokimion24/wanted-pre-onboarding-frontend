export function useValidateInput() {
  const validateInput = (id, value) => {
    const validInput = {
      email: false,
      password: false,
    };

    if (id === "email") {
      const pattern = /@/;
      return { ...validInput, [id]: pattern.test(value) };
    } else if (id === "password") {
      return { ...validInput, [id]: value.length >= 8 };
    }

    return validInput;
  };

  return validateInput;
}
