 document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form from submitting traditionally
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            if (username && password) {
                // Redirect to another page (e.g., dashboard.html)
                window.location.href = "stocks.html"; // Modify this to your actual next page
            } else {
                alert("Please enter both username and password.");
            }
        });
