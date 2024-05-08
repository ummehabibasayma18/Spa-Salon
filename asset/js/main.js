// contact sec
const nameElement = document.getElementById("name");
      const emailElement = document.getElementById("email");
      const messageElement = document.getElementById("massage");

      //   set setError function
      function setError(element, message) {
        element.style.border = "3px solid red";
        const errorElement = element.nextElementSibling;
        errorElement.innerText = message;
      }

      //   set Success function
      function setSuccess(element) {
        element.style.border = "3px solid green";
        const errorElement = element.nextElementSibling;
        errorElement.innerText = "";
      }

      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };


function handleForm(e) {
  e.preventDefault();
  const name = nameElement.value;
  const email = emailElement.value;
  const message = messageElement.value;

  console.log(name, email);
  if (name === "" || name.length < 3) {
    return setError(nameElement, "Name is required");
  } else {
    setSuccess(nameElement);
  }
  if (validateEmail(email)) {
     setSuccess(emailElement);
  } else {
    return setError(emailElement , "Email is required" );
  }
  if (message === "") {
    return setError(messageElement, "message is required");
  } else {
    setSuccess(messageElement);
  }

// email js
var templateParams = {
  name: name,
  email: email,
  message: message,
  
};

emailjs
.send('service_07909c6', 'template_5efu1e7', templateParams).then(
  (response) => {
    // console.log("send",response);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your maill send successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  },
  (error) => {
    // console.log('FAILED...', error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
     
    });
  },
);
}



