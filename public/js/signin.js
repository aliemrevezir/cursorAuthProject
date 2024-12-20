document.getElementById('signinForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        console.log('Response:', data); // Add this line to see the response

        if (response.ok) {
            alert('Signin successful!');
            window.location.href = '/dashboard.html';
        } else {
            alert(data.message || 'Signin failed');
        }
    } catch (error) {
        console.error('Detailed error:', error); // Add this line for detailed error
        alert('An error occurred during signin');
    }
});