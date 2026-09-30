document.addEventListener('DOMContentLoaded', InitApp);

function InitApp(){

    var marketItems = document.querySelectorAll('.market-snapshot li, .list li');
    var courseSearchInput = document.getElementById('course');
    var courseItems = document.querySelectorAll('.course');
    var contactForm = document.querySelector('textarea#message') ? document.querySelector('textarea#message').closest('form') : null;
    var loginForm = document.getElementById('password') ? document.getElementById('password').closest('form') : null;
    var registerForm = document.getElementById('newpassword') ? document.getElementById('newpassword').closest('form') : null;
    var paymentForm = document.getElementById('cardnumber') ? document.getElementById('cardnumber').closest('form') : null;

    if (marketItems.length > 0){
        for (var i=0; i < marketItems.length; i++){
            var item = marketItems[i];
            var text = item.textContent;

            if (text.includes('+')){
                item.style.color = '#10b981';
                item.style.fontWeight = 'bold';


            }

            else if(text.includes('-')){
                item.style.color = '#ef4444';
                item.style.fontWeight = 'bold';
            }
        }
    }


    if(courseSearchInput && courseItems.length > 0) {
        var courseArray = Array.from(courseItems);

        courseSearchInput.addEventListener('input', function(event){
            var filterQuery = event.target.value.toLowerCase().trim();

            courseArray.forEach(function(course) {
                var courseText = course.textContent.toLowerCase();
                 
                if (courseText.includes(filterQuery)) {
                    course.style.display = '';

                }else{
                    course.style.display = 'none'
                }
            });

        });
    }


    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            var nameInput = document.getElementById('name');
            var emailInput = document.getElementById('email');
            var messageInput = document.getElementById('message');

            var isValid = true;

           
            if (!emailInput || !emailInput.value.includes('@')) {
                alert('Please enter a valid email address containing @.');
                if (emailInput) emailInput.style.borderColor = '#ef4444';
                isValid = false;
            } 
            
            else {
                emailInput.style.borderColor = '#10b981';
            }

            
            if (!messageInput || messageInput.value.trim().length < 5) {
                alert('Message must be at least 5 characters long.');
                if (messageInput) messageInput.style.borderColor = '#ef4444';
                isValid = false;
            } 
            
            else {
                messageInput.style.borderColor = '#10b981';
            }

            
            if (!isValid) {
                event.preventDefault();
            } 
            
            else {
                alert('Thank you ' + nameInput.value + '! Your message has been sent.');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit' ,function(event){
            var passwordInput  = loginForm.querySelector('input[type="password"]');

            if(passwordInput && passwordInput.value.length < 6){
                alert('Password must be at least 6 characters long.');
                passwordInput.style.borderColor = '#ef4444';
                event.preventDefault();

            }

        })
    }

    if(registerForm){
        registerForm.addEventListener('submit' , function(event){
           var newPassword = document.getElementById('newpassword');

           if (newPassword && newPassword.value.length < 8){
            alert('New password must be at least 8 characters long.');
            newPassword.style.borderColor = '#ef4444'
            event.preventDefault();
           }
        });
    }

    if (paymentForm) {
        paymentForm.addEventListener('submit' , function(event){
            var cardNumber = document.getElementById('cardnumber');
            var cvv = document.getElementById('cvv');

            var cleanCardNumber = cardNumber ? cardNumber.value.replace(/\s/g,'') : '';

            if(cleanCardNumber.length !== 16){
                alert('Card number must be exactly 16 digits.');
                if(cardNumber) cardNumber.style.borderColor = '#ef4444';
                event.preventDefault();

            }

            else if (cvv && cvv.value.length < 3){
                alert('CVV must be 3 or 4 digits.');
                cvv.style.borderColor = '#ef4444';
                event.preventDefault();

            }
            else{
                alert('Payment processing complete!!');
            }
        });
        
    }

}