document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const signinBtn = document.querySelector('.sign-btn');
  const loginBtn = document.querySelector('.login-btn');

  signinBtn?.addEventListener('click', () => container?.classList.add('active'));
  loginBtn?.addEventListener('click', () => container?.classList.remove('active'));

  function setupToggle(pwdId, eyeId) {
    const pwd = document.getElementById(pwdId);
    const eye = document.getElementById(eyeId);
    if (!pwd || !eye) {
      console.warn('Missing elements for toggle:', pwdId, eyeId);
      return;
    }

    
    eye.classList.add('fa-eye');
    eye.classList.remove('fa-eye-slash');

    eye.addEventListener('click', () => {
      const show = pwd.type === 'password';
      pwd.type = show ? 'text' : 'password';

      
      eye.classList.toggle('fa-eye');
      eye.classList.toggle('fa-eye-slash');

      
      eye.style.color = show ? '#111' : '#666';
    });
  }

  setupToggle('login-password', 'login-eye');
  setupToggle('signup-password', 'signup-eye');
});
