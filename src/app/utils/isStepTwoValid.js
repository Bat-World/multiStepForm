export const isStepTwoValid = (data) => {
    const { email, phoneNumber, password, confirmPassword } = data;
    const errors = {};
    let isValid = true;
  
    if (!email.includes("@") || email.length < 6) {
      errors.email = "Email must include @ and be at least 6 characters long";
      isValid = false;
    }
    if (phoneNumber.length !== 8) {
      errors.phoneNumber = "Phone number must be 8 characters long";
      isValid = false;
    }
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }
  
    return { isValid, errors };
  };