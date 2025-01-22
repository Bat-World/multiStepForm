export const isStepOneValid = (data) => {
    const { firstName, lastName, userName } = data;
    const errors = {};
    let isValid = true;
  
    if (firstName.length <= 1) {
      errors.firstName = "First name should include at least 2 characters";
      isValid = false;
    }
    if (lastName.length <= 1) {
      errors.lastName = "Last name should include at least 2 characters";
      isValid = false;
    }
    if (userName.length <= 1) {
      errors.userName = "Username should include at least 2 characters";
      isValid = false;
    }
  
    return { isValid, errors };
  };