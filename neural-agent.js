class NeuralAgent {
    constructor() {
        this.weights = {
            role: 0.25,
            team: 0.25,
            battingStyle: 0.15,
            nationality: 0.15,
            isCaptain: 0.10,
            default: 0.10
        };
    }

    // Calculate probability for each player
    calculateProbabilities(players, answers) {
        return players.map(player => {
            let score = 100;
            let matches = 0;
            let totalQuestions = answers.length || 1;
            
            answers.forEach(answer => {
                const match = this.checkMatch(player, answer);
                if (match) {
                    matches++;
                    score += 5;
                } else {
                    score -= 15;
                }
            });
            
            // Calculate final probability
            let probability = (matches / totalQuestions) * 100;
            probability = Math.max(0, Math.min(100, probability + (score / 10)));
            
            return {
                ...player,
                probability: Math.round(probability)
            };
        }).sort((a, b) => b.probability - a.probability);
    }

    // Check if player matches answer
    checkMatch(player, answer) {
        const { questionId, answer: userAnswer } = answer;
        
        // Question mapping
        const questionMap = {
            1: { category: 'role', value: 'Batsman' },
            2: { category: 'role', value: 'Bowler' },
            3: { category: 'role', value: 'All-rounder' },
            4: { category: 'role', value: 'Wicket-keeper' },
            5: { category: 'team', value: 'CSK' },
            6: { category: 'team', value: 'MI' },
            7: { category: 'team', value: 'RCB' },
            8: { category: 'team', value: 'GT' },
            9: { category: 'battingStyle', value: 'Right-handed' },
            10: { category: 'battingStyle', value: 'Left-handed' },
            11: { category: 'nationality', value: 'Indian' },
            12: { category: 'isCaptain', value: true }
        };
        
        const question = questionMap[questionId];
        if (!question) return true;
        
        let playerValue = player[question.category];
        if (question.category === 'isCaptain') playerValue = player.isCaptain;
        
        if (userAnswer === 'yes') {
            return playerValue === question.value;
        } else {
            return playerValue !== question.value;
        }
    }

    // Filter players based on answer
    filterPlayersByAnswer(players, questionId, answer) {
        return players.filter(player => {
            const match = this.checkMatch(player, { questionId, answer });
            return match;
        });
    }

    // Get next best question
    getNextQuestion(players, askedQuestions) {
        const topPlayer = players[0];
        if (!topPlayer) return null;
        
        const questionPriority = [
            { category: 'team', text: `Does your player play for ${topPlayer.team}?`, value: topPlayer.team },
            { category: 'role', text: `Is your player a ${topPlayer.role}?`, value: topPlayer.role },
            { category: 'battingStyle', text: `Is your player ${topPlayer.battingStyle}?`, value: topPlayer.battingStyle },
            { category: 'nationality', text: `Is your player ${topPlayer.nationality}?`, value: topPlayer.nationality },
            { category: 'isCaptain', text: `Is your player a team captain?`, value: true }
        ];
        
        for (const q of questionPriority) {
            if (!askedQuestions.includes(q.text)) {
                return {
                    id: Date.now(),
                    text: q.text,
                    category: q.category
                };
            }
        }
        
        return {
            id: Date.now(),
            text: "Is your player an IPL legend?",
            category: "default"
        };
    }
}

module.exports = new NeuralAgent();
