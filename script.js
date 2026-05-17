// ============ GAME CONTROLLER ============
let currentCandidates = [];
let askedQuestions = [];
let answerHistory = [];
let questionIndex = 0;
let gameActive = true;
let currentQuestion = null;
let lastPrediction = null;

// Initialize game
function initGame() {
    currentCandidates = [...IPL_DATABASE];
    askedQuestions = [];
    answerHistory = [];
    questionIndex = 0;
    gameActive = true;
    currentQuestion = null;
    
    updateUI();
    document.getElementById('totalDB').innerHTML = IPL_DATABASE.length;
    askNextQuestion();
}

// Update UI
function updateUI() {
    document.getElementById('questionCount').innerHTML = questionIndex;
    document.getElementById('candidatesCount').innerHTML = currentCandidates.length;
    
    let confidence = neuralAI.getConfidence(currentCandidates, answerHistory);
    document.getElementById('confidenceValue').innerHTML = Math.floor(confidence) + '%';
    
    let progress = (questionIndex / MAX_QUESTIONS) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressPercent').innerHTML = Math.floor(progress) + '%';
    
    // Update entropy display
    let entropy = neuralAI.calculateEntropy(currentCandidates);
    document.getElementById('entropyValue').innerHTML = entropy.toFixed(2);
}

// Ask next question using Neural AI
function askNextQuestion() {
    if (!gameActive) return;
    
    if (questionIndex >= MAX_QUESTIONS || currentCandidates.length <= 2) {
        makePrediction();
        return;
    }
    
    // Show thinking animation
    document.getElementById('thinkingMode').style.display = 'flex';
    document.getElementById('questionDisplay').style.display = 'none';
    
    // Animate neural activity
    animateNeuralActivity();
    
    setTimeout(() => {
        // Get AI-generated question
        const question = neuralAI.selectQuestion(currentCandidates, askedQuestions);
        
        if (question) {
            currentQuestion = question;
            askedQuestions.push(question);
            document.getElementById('questionText').innerHTML = question;
            document.getElementById('thinkingMode').style.display = 'none';
            document.getElementById('questionDisplay').style.display = 'block';
        } else {
            makePrediction();
        }
    }, 800);
}

// Animate neural activity
function animateNeuralActivity() {
    const neurons = document.querySelectorAll('.neuron');
    neurons.forEach((neuron, i) => {
        setTimeout(() => {
            neuron.style.animation = 'none';
            setTimeout(() => {
                neuron.style.animation = 'neuralPulse 1.5s infinite';
            }, 10);
        }, i * 100);
    });
}

// Submit answer
function submitAnswer(answer) {
    if (!gameActive || !currentQuestion) return;
    
    answerHistory.push({
        question: currentQuestion,
        answer: answer,
        type: detectQuestionType(currentQuestion)
    });
    
    // Filter candidates based on answer
    filterCandidates(currentQuestion, answer);
    
    questionIndex++;
    updateUI();
    askNextQuestion();
}

// Detect question type for neural processing
function detectQuestionType(question) {
    if (question.includes("player")) return "category";
    if (question.includes("coach")) return "category";
    if (question.includes("staff")) return "category";
    if (question.includes("CSK") || question.includes("MI") || question.includes("RCB")) return "team";
    if (question.includes("batsman") || question.includes("bowler")) return "role";
    if (question.includes("India") || question.includes("Australia")) return "country";
    if (question.includes("2010") || question.includes("2015")) return "era";
    return "general";
}

// Filter candidates using neural matching
function filterCandidates(question, answer) {
    if (answer === 'yes') {
        currentCandidates = currentCandidates.filter(p => 
            neuralAI.matchAttribute(p, question) >= 0.7
        );
    } 
    else if (answer === 'no') {
        currentCandidates = currentCandidates.filter(p => 
            neuralAI.matchAttribute(p, question) < 0.3
        );
    }
    else if (answer === 'maybe') {
        // Keep 60% of matches
        let keepCount = Math.ceil(currentCandidates.length * 0.6);
        currentCandidates = currentCandidates.slice(0, keepCount);
    }
    // 'unknown' keeps all
    
    if (currentCandidates.length === 0) {
        currentCandidates = [...IPL_DATABASE];
    }
}

// Make prediction using Neural AI
function makePrediction() {
    gameActive = false;
    
    document.getElementById('questionArea').style.display = 'none';
    document.getElementById('answerButtons').style.display = 'none';
    document.getElementById('resultArea').style.display = 'block';
    
    const prediction = neuralAI.predict(currentCandidates, answerHistory);
    const confidence = neuralAI.getConfidence(currentCandidates, answerHistory);
    
    if (prediction) {
        displayPrediction(prediction, confidence);
        lastPrediction = prediction;
    } else if (currentCandidates.length > 0) {
        displayPrediction(currentCandidates[0], confidence);
        lastPrediction = currentCandidates[0];
    } else {
        document.getElementById('predictedName').innerHTML = "Need More Data";
        document.getElementById('predictedDetails').innerHTML = "Please help me learn!";
        document.getElementById('confidenceFill').style.width = '50%';
        document.getElementById('confidenceFill').innerHTML = '50%';
    }
}

// Display prediction
function displayPrediction(person, confidence) {
    document.getElementById('predictedName').innerHTML = person.name;
    document.getElementById('predictedDetails').innerHTML = `${person.role} | ${person.team} | Since ${person.year}`;
    
    let categoryText = '';
    let categoryColor = '';
    let emoji = '';
    
    if (person.category === 'player') {
        categoryText = '🏏 Player';
        categoryColor = '#4CAF50';
        emoji = '🏏';
    } else if (person.category === 'coach') {
        categoryText = '📋 Coach';
        categoryColor = '#FF9800';
        emoji = '📋';
    } else {
        categoryText = '🛠️ Support Staff';
        categoryColor = '#2196F3';
        emoji = '🛠️';
    }
    
    document.getElementById('predictedCategory').innerHTML = categoryText;
    document.getElementById('predictedCategory').style.background = categoryColor;
    document.getElementById('confidenceFill').style.width = Math.floor(confidence) + '%';
    document.getElementById('confidenceFill').innerHTML = Math.floor(confidence) + '% Confidence';
}

// Correct guess
function correctGuess() {
    neuralAI.learnFromFeedback(true, lastPrediction, lastPrediction);
    alert('🎉 Neural AI learned from this correct guess!');
    resetGame();
}

// Wrong guess
function wrongGuess() {
    document.getElementById('resultArea').style.display = 'none';
    document.getElementById('learningArea').style.display = 'block';
}

// Learn new person
function learnNewPerson() {
    const name = document.getElementById('newName').value;
    const category = document.getElementById('newCategory').value;
    const team = document.getElementById('newTeam').value.toUpperCase();
    const role = document.getElementById('newRole').value;
    const country = document.getElementById('newCountry').value;
    
    if (!name || !team || !role) {
        alert('Please fill all fields!');
        return;
    }
    
    const newPerson = {
        id: IPL_DATABASE.length + 1,
        name: name,
        category: category,
        team: team,
        role: role,
        country: country,
        year: 2026,
        specialty: "New Entry"
    };
    
    IPL_DATABASE.push(newPerson);
    customData.push(newPerson);
    
    // Save to localStorage
    localStorage.setItem('neural_ai_custom', JSON.stringify(customData));
    
    // Train neural network with this new data
    neuralAI.learnFromFeedback(false, lastPrediction, newPerson);
    
    alert(`✅ Neural Network trained! Now I know ${IPL_DATABASE.length} IPL personalities!`);
    resetGame();
}

// Reset game
function resetGame() {
    document.getElementById('resultArea').style.display = 'none';
    document.getElementById('learningArea').style.display = 'none';
    document.getElementById('questionArea').style.display = 'flex';
    document.getElementById('answerButtons').style.display = 'grid';
    document.getElementById('thinkingMode').style.display = 'flex';
    document.getElementById('questionDisplay').style.display = 'none';
    initGame();
}

// Start game
window.onload = () => {
    initGame();
};
