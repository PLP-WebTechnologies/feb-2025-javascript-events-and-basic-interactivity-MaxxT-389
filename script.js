document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Event Handling ---
    const clickButton = document.getElementById('clickButton');
    const hoverArea = document.getElementById('hoverArea');
    const keypressInput = document.getElementById('keypressInput');
    const keypressOutput = document.getElementById('keypressOutput');
    const doubleClickButton = document.getElementById('doubleClickButton');
    const secretAction = document.getElementById('secretAction');

    clickButton.addEventListener('click', () => {
        alert('Button Clicked! 🎉');
    });

    hoverArea.addEventListener('mouseover', () => {
        hoverArea.style.backgroundColor = '#4fc3f7';
        hoverArea.textContent = 'You are hovering!';
    });

    hoverArea.addEventListener('mouseout', () => {
        hoverArea.style.backgroundColor = '#bbdefb';
        hoverArea.textContent = 'Hover Over Me';
    });

    keypressInput.addEventListener('keypress', (event) => {
        keypressOutput.textContent = `You pressed: ${event.key}`;
    });

    doubleClickButton.addEventListener('dblclick', () => {
        secretAction.classList.remove('hidden');
        setTimeout(() => {
            secretAction.classList.add('hidden');
        }, 3000);
    });

    // --- 2. Interactive Elements ---
    const changeTextButton = document.getElementById('changeTextButton');
    let buttonTextToggle = false;
    changeTextButton.addEventListener('click', () => {
        changeTextButton.textContent = buttonTextToggle ? 'Change My Text' : 'Text Changed!';
        buttonTextToggle = !buttonTextToggle;
    });

    const galleryImages = document.querySelectorAll('#imageGallery .gallery-image');
    const prevImageButton = document.getElementById('prevImage');
    const nextImageButton = document.getElementById('nextImage');
    let currentImageIndex = 0;

    function showImage(index) {
        galleryImages.forEach(img => img.classList.remove('active'));
        galleryImages[index].classList.add('active');
    }

    if (galleryImages.length > 0) {
        showImage(currentImageIndex);

        prevImageButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            showImage(currentImageIndex);
        });

        nextImageButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            showImage(currentImageIndex);
        });
    }

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = content.classList.contains('active');

            // Close all other open items
            document.querySelectorAll('.accordion-content.active').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle the current item
            content.classList.toggle('active');
        });
    });

    // --- 3. Form Validation ---
    const form = document.getElementById('myForm');
    const requiredField = document.getElementById('requiredField');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const requiredFieldError = document.getElementById('requiredFieldError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formValidationResult = document.getElementById('formValidationResult');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Required field check
        if (requiredField.value.trim() === '') {
            requiredFieldError.style.display = 'block';
            isValid = false;
        } else {
            requiredFieldError.style.display = 'none';
        }

        // Email format validation
        if (emailInput.value.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Password rules
        if (passwordInput.value.length < 8) {
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
            formValidationResult.textContent = 'Form validation failed. Please correct the errors.';
            formValidationResult.style.color = 'red';
        } else {
            formValidationResult.textContent = 'Form submitted successfully!';
            formValidationResult.style.color = 'green';
            // In a real scenario, you would submit the form data here
        }
    });

    // Bonus: Real-time feedback while typing (Email)
    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    });

    // Bonus: Real-time feedback while typing (Password)
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length < 8) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    });
});
