
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. SHOW / HIDE PASSWORD
    // =====================================

    const passwordInputs = document.querySelectorAll(
        'input[type="password"]'
    );

    passwordInputs.forEach(function (input) {

        // Create a wrapper around the password input.
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";

        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);

        // Create the show/hide button.
        const toggleButton = document.createElement("button");
        toggleButton.type = "button";
        toggleButton.textContent = "Show";
        toggleButton.setAttribute("aria-label", "Show password");

        toggleButton.style.position = "absolute";
        toggleButton.style.right = "12px";
        toggleButton.style.top = "50%";
        toggleButton.style.transform = "translateY(-50%)";
        toggleButton.style.border = "none";
        toggleButton.style.background = "transparent";
        toggleButton.style.color = "#8064a9";
        toggleButton.style.fontWeight = "600";
        toggleButton.style.cursor = "pointer";

        // Leave room for the button inside the input.
        input.style.paddingRight = "65px";

        wrapper.appendChild(toggleButton);

        toggleButton.addEventListener("click", function () {
            if (input.type === "password") {
                input.type = "text";
                toggleButton.textContent = "Hide";
                toggleButton.setAttribute("aria-label", "Hide password");
            } else {
                input.type = "password";
                toggleButton.textContent = "Show";
                toggleButton.setAttribute("aria-label", "Show password");
            }
        });
    });


    // =====================================
    // 2. CONFIRM PASSWORD MATCH
    // =====================================

    const password = document.querySelector(
        'input[name="Password"]'
    );

    const confirmPassword = document.querySelector(
        'input[name="ConfirmPassword"]'
    );

    if (password && confirmPassword) {

        function checkPasswordMatch() {
            if (confirmPassword.value === "") {
                confirmPassword.setCustomValidity("");
            } else if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity(
                    "Passwords do not match."
                );
            } else {
                confirmPassword.setCustomValidity("");
            }
        }

        password.addEventListener("input", checkPasswordMatch);
        confirmPassword.addEventListener("input", checkPasswordMatch);
    }


    // =====================================
    // 3. SIMPLE FORM VALIDATION
    // =====================================

    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {

        // Enable browser validation for required fields.
        const fields = form.querySelectorAll("input, select, textarea");

        fields.forEach(function (field) {
            if (field.dataset.validationRequired === "true") {
                field.required = true;
            }
        });

        form.addEventListener("submit", function (event) {

            // Check password confirmation before submitting.
            if (password && confirmPassword &&
                form.contains(password) &&
                form.contains(confirmPassword)) {

                if (password.value !== confirmPassword.value) {
                    confirmPassword.setCustomValidity(
                        "Passwords do not match."
                    );
                } else {
                    confirmPassword.setCustomValidity("");
                }
            }

            if (!form.checkValidity()) {
                event.preventDefault();
                form.reportValidity();
            }
        });
    });


    // =====================================
    // 4. DELETE CONFIRMATION
    // =====================================

    const deleteForms = document.querySelectorAll(
        "form[data-confirm-delete]"
    );

    deleteForms.forEach(function (form) {
        form.addEventListener("submit", function (event) {

            const confirmed = window.confirm(
                "Are you sure you want to delete this instructor? This action cannot be undone."
            );

            if (!confirmed) {
                event.preventDefault();
            }
        });
    });

});
