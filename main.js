function validateForm() {
  const requiredFields = document.querySelectorAll('[required]');
  const errorMessages = [];

  requiredFields.forEach(field => {
      if (field.type === 'radio') {
          const radioGroup = document.getElementsByName(field.name);
          let radioChecked = false;

          radioGroup.forEach(radio => {
              if (radio.checked) {
                  radioChecked = true;
              }
          });

          if (!radioChecked) {
              const label = document.querySelector(`label[for="${field.name}"]`);
              errorMessages.push(`Please select an option for "${label.innerText}"`);
          }
      } else {
          if (!field.value.trim()) {
              errorMessages.push(`Please fill in the "${field.name.replace(/_/g, ' ')}" field`);
          }
      }
  });

  if (errorMessages.length > 0) {
      alert(errorMessages.join('\n'));
      return false;
  }

  return true;
}

const downloadBtn = document.querySelector(".download-btn");
downloadBtn.addEventListener("click", () => {
  if (validateForm()) {
      window.print();
  }
});



// Function to initialize the Pikaday date picker
function initializeDatePicker(inputElementId) {
  const dateInput = document.getElementById(inputElementId);
  const picker = new Pikaday({
    field: dateInput,
    format: 'YYYY-MM-DD',
    toString(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closePopupButton = document.getElementById("closePopup");

  // Show the pop-up on page load
  popup.style.display = "block";

  // Close the pop-up when the "Close" button is clicked
  closePopupButton.addEventListener("click", function () {
      popup.style.display = "none";
  });
});


// Call the function to initialize the Pikaday date picker for "Certificate Date"
initializeDatePicker('certificate_date');

// Call the function to initialize the Pikaday date picker for "Select Date"
initializeDatePicker('select_date');

// Initialize the signature pad
const signatureCanvas = document.getElementById('signature');
const signaturePad = new SignaturePad(signatureCanvas);

// Clear signature when the "Clear" button is clicked
// const clearSignatureBtn = document.getElementById('clearSignature');
// clearSignatureBtn.addEventListener('click', (event) => {
//   event.preventDefault(); // Prevent the form from submitting
//   signaturePad.clear(); // Clear the signature canvas
// });

// Initialize the signature pad for the second signature pad with ID "signatureSecond"
const signatureCanvasSecond = document.getElementById('signatureSecond');
const signaturePadSecond = new SignaturePad(signatureCanvasSecond);

// Clear signature when the "Clear" button is clicked for the second signature pad
// const clearSignatureBtnSecond = document.getElementById('clearSignatureSecond');
// clearSignatureBtnSecond.addEventListener('click', (event) => {
//   event.preventDefault(); // Prevent the form from submitting
//   signaturePadSecond.clear(); // Clear the signature canvas
// });


// Initialize the signature pad for the second signature pad with ID "signatureSecond"
const signatureCanvasThird = document.getElementById('signatureThird');
const signaturePadThird = new SignaturePad(signatureCanvasThird);

// Clear signature when the "Clear" button is clicked for the second signature pad
// const clearSignatureBtnThird = document.getElementById('clearSignatureThird');
// clearSignatureBtnThird.addEventListener('click', (event) => {
//   event.preventDefault(); 
//   signaturePadThird.clear();
// });
