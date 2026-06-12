document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/;
            const regexPlaca = /^[A-Za-z]{3}\d{2}[A-Za-z0-9]{1}$/; // Placa moto Colombia: 3 letras, 2 numeros, 1 letra o numero
            const regexPhone = /^\d{10}$/;
            const nameInput = document.getElementById('name');
            const placaInput = document.getElementById('placa');
            const phoneInput = document.getElementById('phone');

            let isValid = true;
            if (!regexName.test(nameInput.value.trim())) {
                nameInput.classList.add('is-invalid');
                nameInput.classList.remove('is-valid');
                isValid = false;
            } else {
                nameInput.classList.remove('is-invalid');
                nameInput.classList.add('is-valid');
            }

            if (!regexPlaca.test(placaInput.value.trim().toUpperCase())) {
                placaInput.classList.add('is-invalid');
                placaInput.classList.remove('is-valid');
                isValid = false;
            } else {
                placaInput.classList.remove('is-invalid');
                placaInput.classList.add('is-valid');
            }

            if (!regexPhone.test(phoneInput.value.trim())) {
                phoneInput.classList.add('is-invalid');
                phoneInput.classList.remove('is-valid');
                isValid = false;
            } else {
                phoneInput.classList.remove('is-invalid');
                phoneInput.classList.add('is-valid');
            }

            if (isValid) {
                const newUser = {
                    name: nameInput.value.trim(),
                    placa: placaInput.value.trim().toUpperCase(),
                    phone: phoneInput.value.trim(),
                    date: new Date().toLocaleString()
                };

                let users = JSON.parse(localStorage.getItem('users')) || [];
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                const modalElement = document.getElementById('registerModal');
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                if (modalInstance) {
                    modalInstance.hide();
                }
                window.location.href = 'Ingresados.html';
            }
        });
        const inputs = registerForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('is-invalid', 'is-valid');
            });
        });
    }
});