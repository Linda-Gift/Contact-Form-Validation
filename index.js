const firstNameInput = document.getElementById("firstname")
const lastNameInput = document.getElementById("lastname")
const emailInput = document.getElementById("email")
const radioInput = document.getElementById("second-form-group")
const messageTextArea = document.getElementById("message")
const checkBoxSelection = document.getElementById("checkbox")
const firstNameAlert = document.getElementById("firstname-alert")
const lastNameAlert = document.getElementById("lastname-alert")
const emailAlert = document.getElementById("email-alert")
const messageAlert = document.getElementById("message-alert")
const checkBoxAlert = document.getElementById("checkbox-alert")
const form = document.getElementById("form-container")
const formInputs = document.getElementsByTagName("input")
const formAlert = document.getElementById("form-alert1")


// Full Name Input Field Validation
firstNameInput.addEventListener("keyup", function(){
  validateFirstNameInput()
})

function validateFirstNameInput(){
  let userFirstName = firstNameInput.value 
  if(userFirstName.length == 0){
      firstNameAlert.innerText = `Enter First Name`
      firstNameInput.style.border = "1px solid red"
  }else if(!userFirstName.match(/^[^\d]+$/)){
      firstNameAlert.innerText = `You cannot enter numbers in this field`
  }else{
      firstNameAlert.innerText = ` `
      firstNameInput.style.border = "2px solid green"
  }
}

// Last Name input Field validation
lastNameInput.addEventListener("keyup", function(){
  validateLastNameInput()
})

function validateLastNameInput(){
  let userLastName = lastNameInput.value 
  if(userLastName.length == 0){
      lastNameAlert.innerText = `Enter Last Name`
      lastNameInput.style.border = "1px solid red"
  }else if(!userLastName.match(/^[^\d]+$/)){
      lastNameAlert.innerText = `You cannot enter numbers in this field`
  }else{
      lastNameAlert.innerText = ` `
      lastNameInput.style.border = "2px solid green"
  }
}

// Email input Field validation
emailInput.addEventListener("keyup", function(){
  validateEmailInput()
})

function validateEmailInput(){
  let userEmail = emailInput.value 
  if(userEmail.length == 0){
      emailAlert.innerText = `Enter your email`
      emailInput.style.border = "1px solid red"
  }else if(!userEmail.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-z\-0-9]+\.)+[a-zA-z]{2,}))$/)){
    emailAlert.innerText = `Enter A Valid Email Address`
}else{
    emailAlert.innerText = ` `
    emailInput.style.border = "2px solid green"
}
}

// Message input Field validation
messageTextArea.addEventListener("keyup", function(){
  validateMessageTextAreaInput()
})

function validateMessageTextAreaInput(){
  let message = messageTextArea.value 
  if(message.length == 0){
      messageAlert.innerText = `Enter a message`
      messageTextArea.style.border = "1px solid red"
  }else if(!message.match(/^[^\d]+$/)){
      messageAlert.innerText = `You cannot enter numbers in this field`
  }else{
      messageAlert.innerText = ` `
      messageTextArea.style.border = "2px solid green"
  }
}

// Checkbox input Field validation
checkBoxSelection.addEventListener("click", function(){
  validateIsChecked()
})

function validateIsChecked(){
  let checkBox = checkBoxSelection.checked 
  if(!checkBox == true){
      checkBoxAlert.innerText = `Click to consent`
      // checkBoxAlert.style.border = "1px solid red"
  }else{
      checkBoxAlert.innerText = ` `
      messageTextArea.style.background = "2px solid #063F36"
  }
}

// Form submission validation
form.addEventListener("submit", function(event){
  event.preventDefault()
  let isFormValid = true

  if(firstNameInput.value.length === 0 || !firstNameInput.value.match(/^[^\d]+$/)){
    isFormValid = false
    validateFirstNameInput()
  }
  if(lastNameInput.value.length === 0 || !lastNameInput.value.match(/^[^\d]+$/)){
    isFormValid = false
    validateLastNameInput()
  }
  if(emailInput.value.length === 0 || !emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
    isFormValid = false
    validateEmailInput()
  }
  if(messageTextArea.value.length === 0){
    isFormValid = false;
    validateMessageTextAreaInput()
  }
  if(!checkBoxSelection.checked){
    isFormValid = false
    validateIsChecked()
  }

  if(isFormValid){
    
    formAlert.style.display = "flex"
    // Submit form or further process

    form.reset()
  } else {
    formAlert.innerText = `Please fill in all the required fields correctly.`
    formAlert.style.color = "red"
    formAlert.style.display = "block"
  }
 
})
