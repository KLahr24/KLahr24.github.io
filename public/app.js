// app.js
document.getElementById('myForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  const responseData = await fetch('/submit-form', {
    method: 'POST',
    body: formData
  });

  const responseText = await responseData.text();
  console.log(responseText);
});
