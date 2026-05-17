// ============ NEURAL AI AGENT - No API Required ============
class NeuralAIAgent {
    constructor() {
        // Neural network weights
        this.weights = {
            category: 0.8,
            team: 0.9,
            role: 0.85,
            country: 0.75,
            era: 0.7
        };
        
        // Learning parameters
        this.learningRate = 0.1;
        this.reinforcementMemory = [];
        this.successfulPatterns = [];
        
        // Neural activation function
        this.activation = (x) => 1 / (1 + Math.exp(-x));
        
        console.log("🧠 Neural AI Agent Initialized");
    }

    // ============ NEURAL NETWORK PREDICTION ============
    predict(players, answerHistory) {
        if (players.length === 0) return null;
        
        let bestPrediction = null;
        let highestScore = -1;
        
        for (let player of players) {
            let score = this.calculateNeuralScore(player, answerHistory);
            if (score > highestScore) {
                highestScore = score;
                bestPrediction = player;
            }
        }
        
        return bestPrediction;
    }

    calculateNeuralScore(player, history) {
        let score = 0;
        
        // Apply neural weights based on answer matches
        for (let item of history) {
            let matchScore = this.matchAttribute(player, item.question);
            let answerWeight = this.getAnswerWeight(item.answer);
            score += matchScore * answerWeight * this.weights[item.type || 'category'];
        }
        
        // Apply sigmoid activation
        return this.activation(score / Math.max(1, history.length)) * 100;
    }

    matchAttribute(player, question) {
        // Neural pattern matching
        if (question.includes("India") && player.country === "India") return 1;
        if (question.includes("CSK") && player.team === "CSK") return 1;
        if (question.includes("MI") && player.team === "MI") return 1;
        if (question.includes("RCB") && player.team === "RCB") return 1;
        if (question.includes("batsman") && player.role === "Batsman") return 1;
        if (question.includes("bowler") && player.role === "Bowler") return 1;
        if (question.includes("all-rounder") && player.role === "All-rounder") return 1;
        if (question.includes("wicketkeeper") && player.role === "Wicketkeeper") return 1;
        if (question.includes("player") && player.category === "player") return 1;
        if (question.includes("coach") && player.category === "coach") return 1;
        
        return 0.5; // Partial match
    }

    getAnswerWeight(answer) {
        switch(answer) {
            case 'yes': return 1.0;
            case 'no': return 1.0;
            case 'maybe': return 0.6;
            case 'unknown': return 0.3;
            default: return 0.5;
        }
    }

    // ============ SELECT BEST QUESTION ============
    selectQuestion(currentPlayers, askedQuestions) {
        if (currentPlayers.length === 0) return null;
        
        // Analyze player distribution
        const distribution = this.analyzeDistribution(currentPlayers);
        
        // Find best discriminating attribute
        let bestAttribute = null;
        let maxGain = -1;
        
        for (let [attr, values] of Object.entries(distribution)) {
            let gain = this.calculateInformationGain(values, currentPlayers.length);
            if (gain > maxGain) {
                maxGain = gain;
                bestAttribute = { type: attr, values: values };
            }
        }
        
        // Generate question from best attribute
        if (bestAttribute) {
            return this.generateQuestion(bestAttribute);
        }
        
        return "Is this person from India?";
    }

    analyzeDistribution(players) {
        const dist = {
            category: { player: 0, coach: 0, staff: 0 },
            team: {},
            role: {},
            country: {},
            era: { old: 0, mid: 0, new: 0 }
        };
        
        players.forEach(p => {
            // Category
            dist.category[p.category] = (dist.category[p.category] || 0) + 1;
            
            // Team
            dist.team[p.team] = (dist.team[p.team] || 0) + 1;
            
            // Role
            dist.role[p.role] = (dist.role[p.role] || 0) + 1;
            
            // Country
            dist.country[p.country] = (dist.country[p.country] || 0) + 1;
            
            // Era
            if (p.year < 2010) dist.era.old++;
            else if (p.year < 2016) dist.era.mid++;
            else dist.era.new++;
        });
        
        return dist;
    }

    calculateInformationGain(values, total) {
        let entropy = 0;
        for (let count of Object.values(values)) {
            if (count > 0) {
                let p = count / total;
                entropy -= p * Math.log2(p);
            }
        }
        return entropy;
    }

    generateQuestion(attribute) {
        const questions = {
            category: {
                player: "🏏 Is this person a player?",
                coach: "📋 Is this person a coach?",
                staff: "🛠️ Is this person from support staff?"
            },
            team: {
                'CSK': "💛 Does this person play for or work with CSK?",
                'MI': "💙 Does this person play for or work with MI?",
                'RCB': "❤️ Does this person play for or work with RCB?",
                'KKR': "💜 Does this person play for or work with KKR?",
                'RR': "💗 Does this person play for or work with RR?",
                'PBKS': "🟣 Does this person play for or work with PBKS?",
                'DC': "🔵 Does this person play for or work with DC?",
                'SRH': "🧡 Does this person play for or work with SRH?",
                'GT': "🟡 Does this person play for or work with GT?",
                'LSG': "🟢 Does this person play for or work with LSG?"
            },
            role: {
                'Batsman': "🏏 Is this person a batsman?",
                'Bowler': "🎯 Is this person a bowler?",
                'All-rounder': "⚡ Is this person an all-rounder?",
                'Wicketkeeper': "🧤 Is this person a wicketkeeper?",
                'Head Coach': "📋 Is this person a Head Coach?",
                'Bowling Coach': "🎯 Is this person a Bowling Coach?",
                'Batting Coach': "🏏 Is this person a Batting Coach?"
            },
            country: {
                'India': "🇮🇳 Is this person from India?",
                'Australia': "🇦🇺 Is this person from Australia?",
                'England': "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Is this person from England?",
                'South Africa': "🇿🇦 Is this person from South Africa?",
                'West Indies': "🏝️ Is this person from West Indies?"
            },
            era: {
                old: "📅 Did this person start their IPL journey before 2010?",
                mid: "📅 Did this person start between 2010-2015?",
                new: "📅 Did this person start after 2015?"
            }
        };
        
        // Get the most balanced value (closest to 50-50 split)
        let bestValue = null;
        let bestBalance = 1;
        
        for (let [value, count] of Object.entries(attribute.values)) {
            let balance = Math.abs(0.5 - (count / Object.values(attribute.values).reduce((a,b) => a+b, 0)));
            if (balance < bestBalance) {
                bestBalance = balance;
                bestValue = value;
            }
        }
        
        if (bestValue && questions[attribute.type] && questions[attribute.type][bestValue]) {
            return questions[attribute.type][bestValue];
        }
        
        return "🤔 Is this person from India?";
    }

    // ============ REINFORCEMENT LEARNING ============
    learnFromFeedback(correct, predictedPlayer, actualPlayer) {
        const feedback = {
            timestamp: new Date(),
            correct: correct,
            predicted: predictedPlayer,
            actual: actualPlayer,
            learningWeight: this.learningRate
        };
        
        this.reinforcementMemory.push(feedback);
        
        // Update neural weights based on feedback
        if (!correct && actualPlayer) {
            // Adjust weights to improve future predictions
            this.weights.category += this.learningRate * 0.05;
            this.weights.team += this.learningRate * 0.05;
            this.weights.role += this.learningRate * 0.05;
            
            // Store successful pattern
            this.successfulPatterns.push({
                player: actualPlayer,
                characteristics: {
                    team: actualPlayer.team,
                    role: actualPlayer.role,
                    country: actualPlayer.country,
                    category: actualPlayer.category
                }
            });
        }
        
        // Keep memory size manageable
        if (this.reinforcementMemory.length > 100) {
            this.reinforcementMemory.shift();
        }
        
        console.log(`🧠 Neural AI Learned: ${correct ? 'Correct' : 'Incorrect'} guess`);
    }

    // Calculate confidence based on neural activation
    getConfidence(players, history) {
        if (players.length === 0) return 0;
        
        let entropy = this.calculateEntropy(players);
        let confidence = (1 - entropy) * 100;
        
        // Apply neural activation
        return Math.min(98, Math.max(50, this.activation(confidence / 100) * 100));
    }

    calculateEntropy(players) {
        if (players.length === 0) return 0;
        
        const categories = {};
        players.forEach(p => {
            categories[p.category] = (categories[p.category] || 0) + 1;
        });
        
        let entropy = 0;
        for (let count of Object.values(categories)) {
            let p = count / players.length;
            entropy -= p * Math.log2(p);
        }
        
        return entropy / Math.log2(3); // Normalize
    }
}

// Initialize Neural AI Agent
const neuralAI = new NeuralAIAgent();
