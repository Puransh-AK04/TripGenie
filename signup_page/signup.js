const loginText = document.querySelector(".title-text .login");
  const loginForm = document.querySelector("form.login");
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  const signupLink = document.querySelector("form .signup-link a");
  const loginLink = document.querySelector("form .login-link a");
  signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  };
  loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  };
  signupLink.onclick = () => {
    signupBtn.click();
    return false;
  };
  loginLink.onclick = () => {
    loginBtn.click();
    return false;
  };

  // Function to toggle password visibility
  function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    const toggleIcon = passwordField.nextElementSibling;

    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleIcon.textContent = '🔒';
    } else {
      passwordField.type = 'password';
      toggleIcon.textContent = '👁';
    }
  }

  // Function to check Caps Lock status
  function checkCapsLock(event) {
    const capsLockWarning = document.querySelectorAll('.caps-lock-warning');
    const passwordFields = document.querySelectorAll('input[type="password"]');

    passwordFields.forEach((passwordField, index) => {
      if (event.getModifierState && event.getModifierState('CapsLock') && passwordField && passwordField.type === 'password') {
        capsLockWarning[index].style.display = 'block';
      } else {
        capsLockWarning[index].style.display = 'none';
      }
    });
  }

  // Function to check if passwords match
  function checkPasswordMatch() {
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }
    return true;
  }

  // Add event listener to detect Caps Lock keypress
  document.addEventListener('keydown', checkCapsLock);

  // Add event listener to ensure toggle icon visibility
  document.querySelectorAll('input[type="password"]').forEach(passwordField => {
    const toggleIcon = passwordField.nextElementSibling;
    toggleIcon.addEventListener('click', () => {
      togglePasswordVisibility(passwordField.id);
    });
  });