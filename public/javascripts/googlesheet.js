async function sendContact() {
    let formData = new FormData()
    formData.append("access_key", "fce1be2c-c767-40e4-83cb-2525a782a28b")
    formData.append("name", document.getElementById("cfName").value)
    formData.append("number", document.getElementById("cfNumber").value)
    formData.append("email", document.getElementById("cfEmail").value)
    formData.append("message", document.getElementById("cfMessage").value)

    let response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
    });

    result = await response.json();

    if (result.success) {
        Swal.fire({
            title: "Bravo!",
            text: "Your response was saved!",
            icon: "success"
          });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }

    setTimeout(() => { document.getElementById("cfResponse").innerText = "" }, 3000);
}