const scriptURL = 'https://script.google.com/macros/s/AKfycbzQSBsX9w05FU3mHULTuEzhmboMjghHhBHCdNhqSBITgS1y_f4Ar2uCEmyXJopQ2Ke2rQ/exec'

const form = document.forms['PortfolioResponses']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
