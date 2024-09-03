      document.getElementById('registration-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const fname = document.getElementById('fname').value.trim();
            const lname = document.getElementById('lname').value.trim();
            const dob = document.getElementById('dob').value;
            const email = document.getElementById('email-id').value.trim();
            const phone = document.getElementById('phone-no').value.trim();
            const gender = document.querySelector('input[name="Gender"]:checked');
            const country = document.getElementById('country-name').value;
            const state = document.getElementById('state-name').value;
            const address = document.getElementById('address').value.trim();
            const pincode = document.getElementById('pincode').value.trim();
            const city = document.getElementById('city').value.trim();
            const district = document.getElementById('district').value.trim();
            const hobbies = document.getElementById('hobbies').value.trim();
            
            if (!fname || !lname || !dob || !email || !phone || !gender || !country || !state || !address || !pincode || !city || !district || !hobbies) {
                document.getElementById('result').innerHTML = '<p style="color: red;">Please fill out all fields.</p>';
                return;
            }
           else {
            document.getElementById('result').innerHTML = '<p style="color: green;">Registration successful!</p>';
            
            document.getElementById('registration-form');
       } });