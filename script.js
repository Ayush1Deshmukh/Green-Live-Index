// Modal functionality
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close');
const startAssessmentBtn = document.getElementById('startAssessmentBtn');

loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    loginModal.classList.add('hidden');
});

window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.classList.add('hidden');
    }
});

// Calculate Green Living Score
function calculateScore() {
    const carUsage = parseInt(document.getElementById('carUsage').value);
    const energyUse = parseInt(document.getElementById('energyUse').value);
    const wasteManagement = parseInt(document.getElementById('wasteManagement').value);
    const ecoPurchases = parseInt(document.getElementById('ecoPurchases').value);

    const totalScore = carUsage + energyUse + wasteManagement + ecoPurchases;

    document.getElementById('score').innerText = `Score: ${totalScore}`;
    
    // Example suggestions based on score
    let suggestions = '';
    if (totalScore < 5) {
        suggestions = 'Consider adopting more eco-friendly practices.';
    } else if (totalScore < 10) {
        suggestions = 'You are doing well! Try to improve further.';
    } else {
        suggestions = 'Excellent! Keep up the great work!';
    }

    document.getElementById('suggestions').innerText = suggestions;
    document.getElementById('results').classList.remove('hidden');
}

// Show the assessment section when the button is clicked
startAssessmentBtn.addEventListener('click', () => {
    document.getElementById('assessment').scrollIntoView({ behavior: 'smooth' });
});
