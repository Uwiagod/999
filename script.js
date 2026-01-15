// Function for the purchase button
function purchase() {
    alert("Redirecting to Secure Payment Gateway for SHEHUB X CHEAT...");
    // You can replace this with your actual payment link (Stripe, PayPal, etc.)
    // window.location.href = "https://your-payment-link.com";
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
