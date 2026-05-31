// IPL PLAYERS DATABASE (expanded)
const IPL_PLAYERS = [
    { id: 0, name: "Virat Kohli", team: "RCB", role: "Batsman", stats: "8000+ IPL Runs", fact: "Most runs in IPL history!", image: "🐐", achievements: "7 Orange Caps", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Virat+Kohli+cricket", tags: ["batsman","captain","indian"] },
    { id: 1, name: "MS Dhoni", team: "CSK", role: "WK-Batsman", stats: "5000+ Runs", fact: "Most IPL playoff appearances as captain", image: "👑", achievements: "5 IPL Titles", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?MS+Dhoni+cricket", tags: ["wicketkeeper","captain","indian"] },
    { id: 2, name: "Rohit Sharma", team: "MI", role: "Batsman", stats: "6000+ Runs", fact: "Most IPL titles as captain (6)", image: "🔥", achievements: "3 Centuries", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Rohit+Sharma+cricket", tags: ["batsman","captain","indian"] },
    { id: 3, name: "Jasprit Bumrah", team: "MI", role: "Bowler", stats: "145+ Wickets", fact: "Best death bowler in IPL", image: "🎯", achievements: "Economy 7.39", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Jasprit+Bumrah+cricket", tags: ["bowler","fast-bowler","indian"] },
    { id: 4, name: "AB de Villiers", team: "RCB", role: "Batsman", stats: "5000+ Runs", fact: "Fastest 50 for RCB (14 balls)", image: "🦸", achievements: "229 sixes", nationality: "South African", imageUrl: "https://source.unsplash.com/400x300/?AB+de+Villiers+cricket", tags: ["batsman","overseas"] },
    { id: 5, name: "David Warner", team: "DC", role: "Batsman", stats: "6000+ Runs", fact: "Only overseas player with 3 Orange Caps", image: "⚡", achievements: "Highest run-scorer for SRH", nationality: "Australian", imageUrl: "https://source.unsplash.com/400x300/?David+Warner+cricket", tags: ["batsman","overseas"] },
    { id: 6, name: "Andre Russell", team: "KKR", role: "All-rounder", stats: "2000+ Runs, 90+ Wickets", fact: "Highest strike rate in IPL (175+)", image: "💪", achievements: "2 Man of Tournament", nationality: "West Indies", imageUrl: "https://source.unsplash.com/400x300/?Andre+Russell+cricket", tags: ["all-rounder","power-hitter","overseas"] },
    { id: 7, name: "Hardik Pandya", team: "GT", role: "All-rounder", stats: "2300+ Runs, 50+ Wickets", fact: "GT Captain - 2022 Champions", image: "🚀", achievements: "Impact player", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Hardik+Pandya+cricket", tags: ["all-rounder","indian"] },
    { id: 8, name: "Rashid Khan", team: "GT", role: "Bowler", stats: "120+ Wickets", fact: "Best economy for leg-spinner", image: "🌀", achievements: "Purple Cap 2020", nationality: "Afghan", imageUrl: "https://source.unsplash.com/400x300/?Rashid+Khan+cricket", tags: ["bowler","spinner","overseas"] },
    { id: 9, name: "Suryakumar Yadav", team: "MI", role: "Batsman", stats: "3000+ Runs", fact: "360-degree player", image: "✨", achievements: "Strike rate 145+", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Suryakumar+Yadav+cricket", tags: ["batsman","indian"] },
    { id: 10, name: "KL Rahul", team: "LSG", role: "WK-Batsman", stats: "4000+ Runs", fact: "Fastest to 3000 IPL runs", image: "📊", achievements: "Captain of LSG", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?KL+Rahul+cricket", tags: ["wicketkeeper","batsman","indian"] },
    { id: 11, name: "Shubman Gill", team: "GT", role: "Batsman", stats: "2000+ Runs", fact: "Youngest to score 1000 runs", image: "⭐", achievements: "2023 Orange Cap", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Shubman+Gill+cricket", tags: ["batsman","indian"] },
    { id: 12, name: "Ravindra Jadeja", team: "CSK", role: "All-rounder", stats: "2500+ Runs, 150+ Wickets", fact: "Best fielder in IPL", image: "🛡️", achievements: "4 IPL Titles", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Ravindra+Jadeja+cricket", tags: ["all-rounder","fielder","indian"] },

    // Additional players
    { id: 13, name: "Chris Gayle", team: "KXIP", role: "Batsman", stats: "4800+ Runs", fact: "Universe Boss - huge six-hitter", image: "🔥", achievements: "Most sixes in IPL", nationality: "West Indies", imageUrl: "https://source.unsplash.com/400x300/?Chris+Gayle+cricket", tags: ["batsman","power-hitter","overseas"] },
    { id: 14, name: "Shikhar Dhawan", team: "PBKS", role: "Batsman", stats: "5700+ Runs", fact: "Explosive left-hander", image: "🏹", achievements: "Consistent opener", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Shikhar+Dhawan+cricket", tags: ["batsman","opener","indian"] },
    { id: 15, name: "Gautam Gambhir", team: "KKR", role: "Batsman", stats: "3000+ Runs", fact: "Captain of 2 titles", image: "🎖️", achievements: "2 IPL Titles", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Gautam+Gambhir+cricket", tags: ["batsman","captain","indian"] },
    { id: 16, name: "Dinesh Karthik", team: "RR", role: "WK-Batsman", stats: "2600+ Runs", fact: "Finisher and keeper", image: "🧤", achievements: "Long IPL career", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Dinesh+Karthik+cricket", tags: ["wicketkeeper","batsman","indian"] },
    { id: 17, name: "Sanju Samson", team: "RR", role: "WK-Batsman", stats: "2200+ Runs", fact: "Explosive middle-order batsman", image: "🌟", achievements: "Young captain", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Sanju+Samson+cricket", tags: ["wicketkeeper","batsman","indian"] },
    { id: 18, name: "Ishan Kishan", team: "MI", role: "WK-Batsman", stats: "1800+ Runs", fact: "Powerful left-hander", image: "⚡", achievements: "Explosive starts", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Ishan+Kishan+cricket", tags: ["wicketkeeper","batsman","indian"] },
    { id: 19, name: "Lasith Malinga", team: "MI", role: "Bowler", stats: "170+ Wickets", fact: "Sling-arm yorker king", image: "💥", achievements: "3x IPL Winner", nationality: "Sri Lanka", imageUrl: "https://source.unsplash.com/400x300/?Lasith+Malinga+cricket", tags: ["bowler","fast-bowler","overseas"] },
    { id: 20, name: "Bhuvneshwar Kumar", team: "SRH", role: "Bowler", stats: "150+ Wickets", fact: "Swing specialist", image: "🌬️", achievements: "Purple Cap 2x", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Bhuvneshwar+Kumar+cricket", tags: ["bowler","swing","indian"] },
    { id: 21, name: "Yuzvendra Chahal", team: "RR", role: "Bowler", stats: "150+ Wickets", fact: "Leg-spinner and wicket-taker", image: "🌀", achievements: "Leading spinner", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Yuzvendra+Chahal+cricket", tags: ["bowler","spinner","indian"] },
    { id: 22, name: "Amit Mishra", team: "SRH", role: "Bowler", stats: "160+ Wickets", fact: "Leg-spinner with many hat-tricks", image: "🎯", achievements: "Experienced spinner", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Amit+Mishra+cricket", tags: ["bowler","spinner","indian"] },
    { id: 23, name: "Kuldeep Yadav", team: "KKR", role: "Bowler", stats: "100+ Wickets", fact: "Chinaman/left-arm wrist spinner", image: "🌀", achievements: "Match-winner", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Kuldeep+Yadav+cricket", tags: ["bowler","spinner","indian"] },
    { id: 24, name: "Mohammed Shami", team: "GT", role: "Bowler", stats: "120+ Wickets", fact: "Powerful seam bowler", image: "⚡", achievements: "Death-over specialist", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Mohammed+Shami+cricket", tags: ["bowler","fast-bowler","indian"] },
    { id: 25, name: "Umesh Yadav", team: "RCB", role: "Bowler", stats: "90+ Wickets", fact: "Pacer with bounce", image: "🔥", achievements: "Pace attack", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Umesh+Yadav+cricket", tags: ["bowler","fast-bowler","indian"] },
    { id: 26, name: "Kieron Pollard", team: "MI", role: "All-rounder", stats: "3000+ Runs, 100+ Wickets", fact: "Big-hitting finisher", image: "💪", achievements: "MI legend", nationality: "West Indies", imageUrl: "https://source.unsplash.com/400x300/?Kieron+Pollard+cricket", tags: ["all-rounder","power-hitter","overseas"] },
    { id: 27, name: "Chris Morris", team: "RR", role: "All-rounder", stats: "1200+ Runs, 80+ Wickets", fact: "Expensive overseas all-rounder", image: "🚀", achievements: "Big auction price", nationality: "South Africa", imageUrl: "https://source.unsplash.com/400x300/?Chris+Morris+cricket", tags: ["all-rounder","overseas"] },
    { id: 28, name: "Robin Uthappa", team: "KKR", role: "Batsman", stats: "4500+ Runs", fact: "Finisher and opener", image: "🏏", achievements: "Orange Cap contender", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Robin+Uthappa+cricket", tags: ["batsman","indian"] },
    { id: 29, name: "Ravichandran Ashwin", team: "CSK", role: "Bowler", stats: "80+ Wickets", fact: "Off-spinner and handy batsman", image: "🎳", achievements: "Smart bowler", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Ravichandran+Ashwin+cricket", tags: ["bowler","spinner","indian"] },
    { id: 30, name: "Sunil Narine", team: "KKR", role: "Bowler", stats: "160+ Wickets", fact: "Mystery spinner + explosive opener", image: "🎩", achievements: "2 IPL Titles", nationality: "West Indies", imageUrl: "https://source.unsplash.com/400x300/?Sunil+Narine+cricket", tags: ["bowler","spinner","overseas"] },
    { id: 31, name: "Rishabh Pant", team: "DC", role: "WK-Batsman", stats: "2700+ Runs", fact: "Explosive middle-order keeper-batsman", image: "🧤", achievements: "Match-winning finishes", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Rishabh+Pant+cricket", tags: ["wicketkeeper","batsman","indian","finisher"] },
    { id: 32, name: "Eoin Morgan", team: "KKR", role: "Batsman", stats: "3100+ Runs", fact: "Captain who lifted the IPL trophy", image: "🏆", achievements: "World Cup-winning leader", nationality: "England", imageUrl: "https://source.unsplash.com/400x300/?Eoin+Morgan+cricket", tags: ["batsman","captain","overseas","middle-order"] },
    { id: 33, name: "Dwayne Bravo", team: "MI", role: "All-rounder", stats: "2900+ Runs, 150+ Wickets", fact: "Death-over specialist and party anthem legend", image: "🎉", achievements: "Purple Cap winner", nationality: "West Indies", imageUrl: "https://source.unsplash.com/400x300/?Dwayne+Bravo+cricket", tags: ["all-rounder","bowler","overseas","death-bowler"] },
    { id: 34, name: "Shreyas Iyer", team: "KKR", role: "Batsman", stats: "2100+ Runs", fact: "Classy middle-order captain", image: "⚡", achievements: "KKR captain", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Shreyas+Iyer+cricket", tags: ["batsman","captain","indian","middle-order"] },
    { id: 35, name: "Ruturaj Gaikwad", team: "CSK", role: "Batsman", stats: "2400+ Runs", fact: "CSK's reliable opener", image: "🌟", achievements: "Orange Cap contender", nationality: "Indian", imageUrl: "https://source.unsplash.com/400x300/?Ruturaj+Gaikwad+cricket", tags: ["batsman","indian","opener"] },
    { id: 36, name: "Kagiso Rabada", team: "DC", role: "Bowler", stats: "140+ Wickets", fact: "Pace spearhead for Delhi", image: "💨", achievements: "Leading wicket-taker", nationality: "South Africa", imageUrl: "https://source.unsplash.com/400x300/?Kagiso+Rabada+cricket", tags: ["bowler","fast-bowler","overseas"] },
    { id: 37, name: "Pat Cummins", team: "LSG", role: "Bowler", stats: "120+ Wickets", fact: "Australian Express and leader", image: "🔥", achievements: "LSG captain", nationality: "Australia", imageUrl: "https://source.unsplash.com/400x300/?Pat+Cummins+cricket", tags: ["bowler","fast-bowler","overseas","captain"] },
    { id: 38, name: "Matheesha Pathirana", team: "MI", role: "Bowler", stats: "60+ Wickets", fact: "Sri Lanka's young yorker specialist", image: "💥", achievements: "Emerging pace sensation", nationality: "Sri Lanka", imageUrl: "https://source.unsplash.com/400x300/?Matheesha+Pathirana+cricket", tags: ["bowler","fast-bowler","overseas"] }
];

const DEBUT_BEFORE_2015 = new Set([
    "Virat Kohli", "MS Dhoni", "Rohit Sharma", "AB de Villiers", "David Warner",
    "Jasprit Bumrah", "Rashid Khan", "Andre Russell", "Ravindra Jadeja", "KL Rahul",
    "Shubman Gill", "Chris Gayle", "Shikhar Dhawan", "Gautam Gambhir", "Dinesh Karthik",
    "Sanju Samson", "Ishan Kishan", "Lasith Malinga", "Bhuvneshwar Kumar", "Yuzvendra Chahal",
    "Amit Mishra", "Kuldeep Yadav", "Mohammed Shami", "Umesh Yadav", "Kieron Pollard",
    "Chris Morris", "Robin Uthappa", "Ravichandran Ashwin", "Sunil Narine"
]);

const COACH_OR_MENTOR = new Set([
    "MS Dhoni", "AB de Villiers", "Ravichandran Ashwin"
]);

// QUESTIONS DATABASE
const QUESTIONS = [
    { id: 0, text: "Is your player an opening batsman?", test: p => p.tags.includes("opener") || p.name === "Virat Kohli" || p.name === "Rohit Sharma" || p.name === "David Warner" || p.name === "KL Rahul" || p.name === "Shubman Gill", category:["batting"] },
    { id: 1, text: "Has your player captained an IPL team?", test: p => p.tags.includes("captain") || p.name === "MS Dhoni" || p.name === "Rohit Sharma" || p.name === "Virat Kohli" || p.name === "Hardik Pandya" || p.name === "KL Rahul", category:["captain"] },
    { id: 2, text: "Has your player scored over 5000 IPL runs?", test: p => /5000\+/.test(p.stats) || /6000\+/.test(p.stats) || /8000\+/.test(p.stats) || p.name === "AB de Villiers", category:["batting"] },
    { id: 3, text: "Is your player primarily a bowler?", test: p => p.role === "Bowler" || p.tags.includes("bowler"), category:["bowling"] },
    { id: 4, text: "Has your player played for Chennai Super Kings?", test: p => p.team === "CSK" || p.name === "MS Dhoni" || p.name === "Ravindra Jadeja", category:["team"] },
    { id: 5, text: "Is your player an all-rounder?", test: p => p.role === "All-rounder" || p.name === "Andre Russell" || p.name === "Hardik Pandya" || p.name === "Ravindra Jadeja", category:["allrounder"] },
    { id: 6, text: "Has your player won the Player of the Tournament?", test: p => p.name === "Andre Russell" || p.name === "Rashid Khan" || p.name === "Virat Kohli", category:["achievement"] },
    { id: 7, text: "Does your player play for Mumbai Indians?", test: p => p.team === "MI" || p.name === "Rohit Sharma" || p.name === "Jasprit Bumrah" || p.name === "Suryakumar Yadav" || p.name === "Lasith Malinga", category:["team"] },
    { id: 8, text: "Is your player a wicket-keeper?", test: p => p.role === "WK-Batsman" || p.name === "MS Dhoni" || p.name === "KL Rahul" || p.name === "Dinesh Karthik" || p.name === "Ishan Kishan", category:["fielding"] },
    { id: 9, text: "Has your player hit 200+ sixes in IPL?", test: p => p.name === "Virat Kohli" || p.name === "Rohit Sharma" || p.name === "AB de Villiers" || p.name === "Andre Russell", category:["batting"] },
    { id: 10, text: "Is your player from overseas (non-Indian)?", test: p => p.nationality && p.nationality !== "Indian", category:["nationality"] },
    { id: 11, text: "Has your player won the Orange Cap?", test: p => p.name === "Virat Kohli" || p.name === "David Warner" || p.name === "Rohit Sharma" || p.name === "Shubman Gill", category:["achievement"] },
    { id: 12, text: "Has your player taken 100+ wickets?", test: p => p.role === "Bowler" || p.name === "Jasprit Bumrah" || p.name === "Rashid Khan" || p.name === "Ravindra Jadeja", category:["bowling"] },
    { id: 13, text: "Does your player have a strike rate over 140?", test: p => p.name === "Andre Russell" || p.name === "AB de Villiers" || p.name === "Hardik Pandya" || p.name === "Suryakumar Yadav", category:["batting"] },
    { id: 14, text: "Has your player played more than 200 IPL matches?", test: p => p.name === "MS Dhoni" || p.name === "Virat Kohli" || p.name === "Rohit Sharma" || p.name === "Ravindra Jadeja", category:["experience"] },
    { id: 15, text: "Did your player debut before 2015?", test: p => DEBUT_BEFORE_2015.has(p.name), category:["experience"] },
    { id: 16, text: "Is your player known for bowling spin?", test: p => p.tags.includes("spinner") || p.tags.includes("spin") || p.name === "Rashid Khan" || p.name === "Yuzvendra Chahal" || p.name === "Ravichandran Ashwin" || p.name === "Sunil Narine" || p.name === "Amit Mishra" || p.name === "Kuldeep Yadav", category:["bowling"] },
    { id: 17, text: "Has your player ever been a coach or mentor on an IPL side?", test: p => COACH_OR_MENTOR.has(p.name), category:["coaching"] }
];

// GAME STATE
let gameState = {
    currentQuestionIndex: 0,
    currentQuestionId: null,
    answersHistory: [],
    possiblePlayers: [...IPL_PLAYERS],
    waitingForGuess: false,
    gameActive: true,
    finalGuessPlayer: null,
    questionLock: false
};

// Helper Functions
function calculateProbabilities() {
    const players = gameState.possiblePlayers;
    if (players.length === 0) {
        return [];
    }
    if (gameState.answersHistory.length === 0) {
        return players.map(player => ({
            name: player.name,
            probability: 0,
            player
        }));
    }

    const scores = players.map(player => {
        let rawScore = 0;
        let totalWeight = 0;

        for (let answer of gameState.answersHistory) {
            const question = QUESTIONS.find(q => q.id === answer.qId);
            if (!question) continue;

            const matches = question.test(player);
            totalWeight += 1;

            if (answer.answer === 'yes') {
                rawScore += matches ? 1 : 0;
            } else if (answer.answer === 'no') {
                rawScore += !matches ? 1 : 0;
            } else if (answer.answer === 'maybe') {
                rawScore += matches ? 0.5 : 0.25;
            }
        }

        const score = totalWeight === 0 ? 0 : (rawScore / totalWeight);
        return { player, score };
    });

    scores.sort((a, b) => b.score - a.score);
    const confidenceFactor = Math.min(1, gameState.answersHistory.length / 4);
    return scores.map(s => ({
        name: s.player.name,
        probability: Math.round(s.score * 100 * confidenceFactor),
        player: s.player
    }));
}

function updateProbabilityUI() {
    const probabilities = calculateProbabilities();
    const container = document.getElementById('prob-bars');
    if (!container) return;
    
    container.innerHTML = '';
    if (probabilities.length === 0) {
        container.innerHTML = `<div class="prob-item">No matching players found. Please restart or correct your answers.</div>`;
        const confidence = document.getElementById('confidence-badge');
        if (confidence) {
            confidence.innerHTML = "⚠️ NO MATCH FOUND";
            confidence.style.background = "rgba(255,115,115,0.25)";
        }
        const preview = document.getElementById('player-preview');
        if (preview) preview.innerHTML = '🏏';
        const sideStats = document.getElementById('side-stats');
        if (sideStats) {
            sideStats.innerHTML = `
                <div class="stat-item">Top Guess: —</div>
                <div class="stat-item">Confidence: —</div>
                <div class="stat-item">Questions: ${gameState.currentQuestionIndex}</div>
                <div class="stat-item">Players in DB: ${IPL_PLAYERS.length}</div>
            `;
        }
        return;
    }

    const topPlayers = probabilities.slice(0, 5);
    
    topPlayers.forEach(p => {
        const probItem = document.createElement('div');
        probItem.className = 'prob-item';
        probItem.innerHTML = `
            <div class="prob-name">
                <span>${p.name}</span>
                <span>${Math.round(p.probability)}%</span>
            </div>
            <div class="prob-bar-bg">
                <div class="prob-fill" style="width: ${p.probability}%"></div>
            </div>
        `;
        container.appendChild(probItem);
    });
    
    // Update confidence badge
    const confidence = document.getElementById('confidence-badge');
    if (topPlayers[0] && topPlayers[0].probability > 70) {
        confidence.innerHTML = "🎯 HIGH CONFIDENCE";
        confidence.style.background = "rgba(46,125,50,0.3)";
    } else if (topPlayers[0] && topPlayers[0].probability > 40) {
        confidence.innerHTML = "📊 MEDIUM CONFIDENCE";
        confidence.style.background = "rgba(245,124,0,0.3)";
    } else {
        confidence.innerHTML = "🔍 STILL ANALYZING";
        confidence.style.background = "rgba(255,255,255,0.1)";
    }

    // Update side panel preview/stats if present
    const preview = document.getElementById('player-preview');
    const sideStats = document.getElementById('side-stats');
    if (preview) {
        preview.innerHTML = topPlayers[0] ? (topPlayers[0].player.image || '🏏') : '🏏';
    }
    if (sideStats) {
        const top = topPlayers[0];
        sideStats.innerHTML = `
            <div class="stat-item">Top Guess: ${top ? top.name : '—'}</div>
            <div class="stat-item">Confidence: ${top ? Math.round(top.probability) + '%' : '—'}</div>
            <div class="stat-item">Questions: ${gameState.currentQuestionIndex}</div>
            <div class="stat-item">Players in DB: ${IPL_PLAYERS.length}</div>
        `;
    }
    
    // Auto-guess if candidate set is small and confidence is strong
    if (!gameState.waitingForGuess && gameState.gameActive) {
        if (gameState.possiblePlayers.length === 1) {
            makeFinalGuess(gameState.possiblePlayers[0]);
            return;
        }

        if (gameState.currentQuestionIndex >= 5 && gameState.possiblePlayers.length <= 3 && topPlayers[0] && topPlayers[0].probability >= 80) {
            makeFinalGuess(topPlayers[0].player);
        }
    }
}

function makeFinalGuess(player) {
    if (gameState.waitingForGuess || !gameState.gameActive) return;
    
    gameState.waitingForGuess = true;
    // remember how many answers were given before the guess
    gameState.preGuessAnswersCount = gameState.answersHistory.length;
    gameState.finalGuessPlayer = player;
    
    const guessCard = document.getElementById('guess-card');
    const guessDisplay = document.getElementById('guess-player-display');
    const answerBtns = document.getElementById('answer-btns');
    
    guessDisplay.innerHTML = `
        <div style="font-size: 50px; margin-bottom: 10px;">${player.image}</div>
        <div style="font-size: 28px; font-weight: bold;">${player.name}</div>
        <div style="font-size: 14px; color: #FFD700; margin-top: 8px;">${player.team} • ${player.role}</div>
    `;
    
    guessCard.classList.remove('hidden');
    answerBtns.style.display = 'none';
}

function askNextQuestion() {
    if (!gameState.gameActive) return;
    if (gameState.waitingForGuess) return;

    const askedIds = new Set(gameState.answersHistory.map(a => a.qId));
    const availableQuestions = QUESTIONS.filter(q => !askedIds.has(q.id));

    if (availableQuestions.length === 0) {
        const topProb = calculateProbabilities()[0];
        if (topProb) makeFinalGuess(topProb.player);
        return;
    }

    // Choose the next unused question that best splits the remaining candidates.
    const pool = gameState.possiblePlayers.length > 0 ? gameState.possiblePlayers : [...IPL_PLAYERS];
    const lastAnswer = gameState.answersHistory[gameState.answersHistory.length - 1];
    const lastQuestion = lastAnswer ? QUESTIONS.find(q => q.id === lastAnswer.qId) : null;
    const preferredCategory = lastAnswer && lastAnswer.answer === 'yes' && lastQuestion ? lastQuestion.category : null;

    let bestQuestions = [];
    let bestBalance = Infinity;

    for (const question of availableQuestions) {
        const yesCount = pool.filter(player => question.test(player)).length;
        const noCount = pool.length - yesCount;
        let balance = Math.abs(yesCount - noCount);

        if (preferredCategory && question.category && preferredCategory.some(cat => question.category.includes(cat))) {
            balance *= 0.85; // prefer related follow-up questions
        }

        if (balance < bestBalance) {
            bestBalance = balance;
            bestQuestions = [question];
        } else if (balance === bestBalance) {
            bestQuestions.push(question);
        }
    }

    const bestQuestion = bestQuestions[Math.floor(Math.random() * bestQuestions.length)];
    gameState.currentQuestionId = bestQuestion.id;
    document.getElementById('question-text').innerHTML = `🤔 ${bestQuestion.text}`;
    document.getElementById('q-num').innerHTML = gameState.answersHistory.length + 1;
    document.getElementById('total-q').innerHTML = QUESTIONS.length;
    // Ensure answer buttons are visible and enabled when asking a question
    const answerBtnsContainer = document.getElementById('answer-btns');
    if (answerBtnsContainer) {
        answerBtnsContainer.style.display = 'flex';
        const btns = answerBtnsContainer.querySelectorAll('button');
        btns.forEach(b => { b.disabled = false; b.style.pointerEvents = 'auto'; });
    }
    document.getElementById('thinking-indicator').classList.add('hidden');
    gameState.questionLock = false;
    pulseQuestionGlow();
    updateProbabilityUI();
}

function pulseQuestionGlow() {
    const questionText = document.getElementById('question-text');
    document.body.classList.add('ai-active');
    questionText.classList.add('ai-glow');
    setTimeout(() => {
        questionText.classList.remove('ai-glow');
        document.body.classList.remove('ai-active');
    }, 900);
}

function animateButton(button) {
    if (!button) return;
    button.classList.add('btn-press-glow');
    setTimeout(() => button.classList.remove('btn-press-glow'), 350);
}

async function handleAnswer(answer) {
    if (gameState.questionLock || !gameState.gameActive || gameState.waitingForGuess) return;
    
    gameState.questionLock = true;
    document.getElementById('thinking-indicator').classList.remove('hidden');
    
    const currentQ = QUESTIONS.find(q => q.id === gameState.currentQuestionId);
    if (!currentQ) return;

    gameState.answersHistory.push({
        qId: currentQ.id,
        answer: answer
    });

    // Local-only: no backend submission
    
    gameState.possiblePlayers = gameState.possiblePlayers.filter(player => {
        const matches = currentQ.test(player);
        if (answer === 'yes') return matches === true;
        if (answer === 'no') return matches === false;
        if (answer === 'maybe') return true;
        return false;
    });
    
    if (gameState.possiblePlayers.length === 0) {
        gameState.currentQuestionIndex = gameState.answersHistory.length;
        gameState.gameActive = false;
        gameState.questionLock = false;
        gameState.waitingForGuess = false;
        updateProbabilityUI();
        setTimeout(() => {
            alert('No players match those answers. Please restart the game or adjust your answers.');
            document.getElementById('thinking-indicator').classList.add('hidden');
        }, 10);
        return;
    }
    
    gameState.currentQuestionIndex = gameState.answersHistory.length;
    
    // Short delay before next question
    setTimeout(() => {
        askNextQuestion();
        gameState.questionLock = false;
        document.getElementById('thinking-indicator').classList.add('hidden');
    }, 400);
}

function showWinScreen(player) {
    gameState.gameActive = false;
    document.getElementById('screen-game').classList.add('hidden');
    
    const winScreen = document.getElementById('screen-win');
    winScreen.classList.remove('hidden');
    // Determine image URL (priority: player.imageUrl, Unsplash search, placeholder)
    const imgContainer = document.getElementById('win-player-image');
    let imgHtml = '';
    if (player.imageUrl) {
        imgHtml = `<img src="${player.imageUrl}" alt="${player.name}" class="player-img"/>`;
    } else {
        // try Unsplash search by name + cricket
        const unsplash = `https://source.unsplash.com/400x300/?${encodeURIComponent(player.name + ' cricket')}`;
        // Use unsplash URL; if it fails to load user will still see fallback styling
        imgHtml = `<img src="${unsplash}" alt="${player.name}" class="player-img" onerror="this.onerror=null;this.src='https://placehold.co/400x300/2d1b69/fff?text=${encodeURIComponent(player.name)}'"/>`;
    }

    imgContainer.innerHTML = imgHtml || (player.image || "🏏");
    document.getElementById('win-player-name').innerHTML = player.name;
    document.getElementById('win-player-team').innerHTML = `🏆 ${player.team} • ${player.role}`;
    document.getElementById('win-player-stats').innerHTML = `📊 ${player.stats}`;
    document.getElementById('win-player-fact').innerHTML = `✨ "${player.fact}" ✨`;
}

function restartGame() {
    gameState = {
        currentQuestionIndex: 0,
        currentQuestionId: null,
        answersHistory: [],
        possiblePlayers: [...IPL_PLAYERS],
        waitingForGuess: false,
        gameActive: true,
        finalGuessPlayer: null,
        questionLock: false
    };
    
    document.getElementById('guess-card').classList.add('hidden');
    document.getElementById('answer-btns').style.display = 'flex';
    document.getElementById('screen-game').classList.remove('hidden');
    document.getElementById('screen-win').classList.add('hidden');
    document.getElementById('screen-wrong').classList.add('hidden');
    document.getElementById('screen-start').classList.add('hidden');
    
    updateProbabilityUI();
    askNextQuestion();
}

// Event Listeners
document.getElementById('startBtn').onclick = () => {
    const btn = document.getElementById('startBtn');
    animateButton(btn);
    restartGame();
};
document.getElementById('restartGameBtn').onclick = () => {
    const btn = document.getElementById('restartGameBtn');
    animateButton(btn);
    restartGame();
};
const quickStartBtn = document.getElementById('quick-start');
if (quickStartBtn) quickStartBtn.onclick = () => {
    animateButton(quickStartBtn);
    restartGame();
};
document.getElementById('answerYes').onclick = () => {
    const btn = document.getElementById('answerYes');
    animateButton(btn);
    handleAnswer('yes');
};
document.getElementById('answerNo').onclick = () => {
    const btn = document.getElementById('answerNo');
    animateButton(btn);
    handleAnswer('no');
};
document.getElementById('answerMaybe').onclick = () => {
    const btn = document.getElementById('answerMaybe');
    animateButton(btn);
    handleAnswer('maybe');
};

document.getElementById('correctGuessBtn').onclick = () => {
    if (gameState.finalGuessPlayer) {
        showWinScreen(gameState.finalGuessPlayer);
    } else {
        const top = calculateProbabilities()[0];
        if (top) showWinScreen(top.player);
    }
};

document.getElementById('wrongGuessBtn').onclick = () => {
    // Local-only: continue the game after wrong guess
    // If we had a final guess, remove it from candidates so we don't repeat it
    if (!gameState.guessedWrong) gameState.guessedWrong = [];
    if (gameState.finalGuessPlayer) {
        const name = gameState.finalGuessPlayer.name || gameState.finalGuessPlayer;
        gameState.guessedWrong.push(name);
        gameState.possiblePlayers = gameState.possiblePlayers.filter(p => p.name !== name);
    }

    // Reset guess-related flags and show the 'wrong' screen
    gameState.gameActive = false;
    gameState.waitingForGuess = false;
    gameState.questionLock = false;
    gameState.finalGuessPlayer = null;
    document.getElementById('screen-game').classList.add('hidden');
    document.getElementById('screen-wrong').classList.remove('hidden');
};

document.getElementById('continueGameBtn').onclick = () => {
    // Continue game: ensure state is unlocked and ask next question
    gameState.gameActive = true;
    gameState.waitingForGuess = false;
    gameState.questionLock = false;
    gameState.currentQuestionId = null;
    gameState.currentQuestionIndex = gameState.answersHistory.length;
    document.getElementById('guess-card').classList.add('hidden');
    document.getElementById('answer-btns').style.display = 'flex';
    document.getElementById('screen-wrong').classList.add('hidden');
    document.getElementById('screen-game').classList.remove('hidden');

    updateProbabilityUI();
    // small delay to ensure UI updates before asking
    setTimeout(() => {
        askNextQuestion();
    }, 200);
};

document.getElementById('restartWrongBtn').onclick = () => restartGame();
document.getElementById('playAgainWinBtn').onclick = () => restartGame();
document.getElementById('homeWinBtn').onclick = () => {
    document.getElementById('screen-win').classList.add('hidden');
    document.getElementById('screen-start').classList.remove('hidden');
};

document.getElementById('checkNameBtn').onclick = () => {
    const inputName = document.getElementById('playerNameInput').value.trim().toLowerCase();
    const match = IPL_PLAYERS.find(p => p.name.toLowerCase() === inputName);
    if (match) {
        showWinScreen(match);
    } else {
        alert("Player not found in my database! Click 'NO, WRONG GUESS' to continue.");
    }
};

document.getElementById('addPlayerBtn').onclick = addPlayerToDatabase;

function addPlayerToDatabase() {
    const name = document.getElementById('newPlayerName').value.trim();
    const imageUrl = document.getElementById('newPlayerImageUrl').value.trim();
    const team = document.getElementById('newPlayerTeam').value.trim() || 'Unknown';
    const role = document.getElementById('newPlayerRole').value.trim() || 'Batsman';

    if (!name) {
        alert('Enter a player name first.');
        return;
    }

    const nextId = IPL_PLAYERS.length > 0 ? Math.max(...IPL_PLAYERS.map(p => p.id)) + 1 : 0;
    const newPlayer = {
        id: nextId,
        name,
        team,
        role,
        stats: 'New player',
        fact: 'Added by user',
        image: '🏏',
        achievements: 'Custom entry',
        nationality: 'Unknown',
        imageUrl: imageUrl || `https://source.unsplash.com/400x300/?cricket,player`,
        tags: [role.toLowerCase().includes('bowl') ? 'bowler' : role.toLowerCase().includes('bat') ? 'batsman' : 'player']
    };

    IPL_PLAYERS.push(newPlayer);
    gameState.possiblePlayers.push(newPlayer);
    updateProbabilityUI();

    document.getElementById('newPlayerName').value = '';
    document.getElementById('newPlayerImageUrl').value = '';
    document.getElementById('newPlayerTeam').value = '';
    document.getElementById('newPlayerRole').value = '';

    alert(`Added ${name}. The player is now included in this session.`);
}

// Initialize
document.getElementById('screen-start').classList.remove('hidden');
