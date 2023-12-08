// Initialize rating to 0
let userRating = 0;

// Function to handle rating
function rateProduct(rating) {
    userRating = rating;
    updateRatingMessage();
}

// Function to update rating message
function updateRatingMessage() {
    const messageElement = document.getElementById('rating-message');
    messageElement.textContent = `You rated the product ${userRating} ${userRating === 1 ? 'star' : 'stars'}. Thank you for your feedback!`;
    
    // Optional: You can send the userRating to your server for storage or further processing.
    // For now, it's just displayed in the message.
}