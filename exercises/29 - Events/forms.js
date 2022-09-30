const wes = document.querySelector('.wes');

wes.addEventListener('click', (event) => {
  event.preventDefault();
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', (event) => {
  const name = event.currentTarget.name.value;
  if (name.toLowerCase().includes('chad')) {
    alert('sorry bro');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
}

signupForm.name.addEventListener('keyup', logEvent);

const photo = document.querySelector('.photo');

photo.addEventListener('click', () => {
  console.log('you clicked the photo');
});
