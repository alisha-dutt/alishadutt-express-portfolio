const scriptURL = 'https://script.google.com/macros/library/d/1MUO_Qtv9k_AqnojJTDpd1CBfqk8Z7pYPI5VpuytKF3CRK8C_K_xDZ-jL/1'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
