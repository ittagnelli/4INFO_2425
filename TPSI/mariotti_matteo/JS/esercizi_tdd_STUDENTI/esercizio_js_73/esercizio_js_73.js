document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('submitButton').addEventListener('click', process_form);
});

function process_form() {
    console.log('Form Inviato');
}