document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); 
  
 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
 
    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.text())
    .then(message => {
    
      alert(message);
    })
    .catch(error => {
    
      alert('Помилка: ' + error.message);
    });
  });
  