$(document).ready(function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Show info icon when input field is focused
    $('input[type="text"], select').on('focus', function() {
        // Hide info icon for all fields
        $('span.info-icon').hide();

        let inputId = $(this).attr('id');
        $(`#${inputId}Info`).show();
    });

    // Hide info icon when input field loses focus
    $('input[type="text"], select').on('blur', function() {
        let inputId = $(this).attr('id');
        $(`#${inputId}Info`).hide();
    });

    // Check input validity on input event
    $('input[type="text"]').on('input', function() {
        let inputId = $(this).attr('id');
        let inputValue = $(this).val();

        if (inputValue === '') {
            $(`#${inputId}Error`).hide();
            $(`#${inputId}Info`).show();
            $(`#${inputId}Info img`).attr('src', 'info.svg');
        } else if (isNaN(inputValue)) {
            $(`#${inputId}Error`).show();
            $(`#${inputId}Info img`).attr('src', 'error.svg').attr('title', 'Please enter a valid number');
        } else {
            $(`#${inputId}Error`).hide();
            $(`#${inputId}Info`).hide();
        }

        console.log(`Input changed for ${inputId} to: ${inputValue}`);
    });

    // Hide info icon and show error icon on form submission
    $('#submitBtn').click(function() {
        let errors = false;
        console.log('submit start');

        $('input[type="text"]').each(function() {
            let inputId = $(this).attr('id');
            let inputValue = $(this).val();

            if (inputValue === '' || isNaN(inputValue)) {
                $(`#${inputId}Error`).show();
                $(`#${inputId}Info`).hide();
                $(`#${inputId}Error img`).attr('title', 'Please enter a valid number');
                errors = true;
            } else {
                $(`#${inputId}Error`).hide();
                $(`#${inputId}Info`).show();
                $(`#${inputId}Info img`).attr('src', 'info.svg');
            }

            console.log(`Error found in ${inputId}. Value: ${inputValue}`);
        });

        let ageGroup = $('#ageGroup').val();

        if (ageGroup === '') {
            $('#ageGroupError').show();
            $('#ageGroupInfo').hide();
            $('#ageGroupError img').attr('title', 'This field is mandatory');
            errors = true;
        } else {
            $('#ageGroupError').hide();
            $('#ageGroupInfo').show();
            $('#ageGroupInfo img').attr('src', 'info.svg');
        }

        if (!errors) {
            let grossIncome = parseFloat($('#grossIncome').val()) || 0;
            let extraIncome = parseFloat($('#extraIncome').val()) || 0;
            let deductions = parseFloat($('#deductions').val()) || 0;

            let totalIncome = grossIncome + extraIncome - deductions;
            let tax = 0;

            if (totalIncome <= 8) {
                tax = 0;
            } else {
                if (ageGroup === '<40') {
                    tax = 0.3 * (totalIncome - 8);
                } else if (ageGroup === '>=40 <60') {
                    tax = 0.4 * (totalIncome - 8);
                } else if (ageGroup === '>=60') {
                    tax = 0.1 * (totalIncome - 8);
                }
            }

            $('#resultText').text(`${tax.toFixed(2)} Lakhs`);
            $('#resultModal').modal('show');  // This should show the modal
        }
    });
});
