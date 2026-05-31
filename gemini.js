// Gemini AI Integration (Fallback to smart questions if no API key)
class GeminiAI {
    constructor() {
        this.hasApiKey = false;
        try {
            require('dotenv').config();
            if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE') {
                this.hasApiKey = true;
                const { GoogleGenerativeAI } = require("@google/generative-ai");
                this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
                this.model = this.genAI.getGenerativeModel({ model: "gemini-pro" });
                console.log("✅ Gemini AI Connected!");
            } else {
                console.log("⚠️ No Gemini API Key. Using smart fallback questions.");
            }
        } catch (error) {
            console.log("⚠️ Gemini not available. Using smart fallback questions.");
        }
    }

    async generateQuestion(possiblePlayers, previousQuestions) {
        // If Gemini is available, use it
        if (this.hasApiKey && this.model) {
            try {
                const prompt = this.buildPrompt(possiblePlayers, previousQuestions);
                const result = await this.model.generateContent(prompt);
                const response = await result.response;
                const questionText = response.text();
                
                return {
                    id: Date.now(),
                    text: questionText.trim(),
                    category: "custom"
                };
            } catch (error) {
                console.error("Gemini API Error:", error);
                return this.getSmartQuestion(possiblePlayers, previousQuestions);
            }
        }
        
        // Fallback to smart questions
        return this.getSmartQuestion(possiblePlayers, previousQuestions);
    }

    buildPrompt(players, previousQuestions) {
        const topPlayers = players.slice(0, 10).map(p => 
            `${p.name} (${p.team}) - ${p.role}, ${p.battingStyle}`
        ).join('\n');
        
        const askedQuestions = previousQuestions.map(q => q.text).join(', ');
        
        return `You are an IPL Akinator AI. Guess which IPL player the user is thinking of.
        
Possible Players:
${topPlayers}

Already Asked Questions: ${askedQuestions || 'None'}

Generate ONE unique yes/no question to narrow down the player.
Question should be about: team, role, batting style, nationality, or captaincy.
Return ONLY the question, no extra text.`;
    }

    getSmartQuestion(players, previousQuestions) {
        const askedTexts = previousQuestions.map(q => q.text);
        const topPlayer = players[0];
        
        // Smart question selection based on top player
        const questionPool = [
            { text: `Is your player from ${topPlayer?.team || 'CSK'}?`, condition: true },
            { text: `Is your player a ${topPlayer?.role || 'batsman'}?`, condition: true },
            { text: `Is your player ${topPlayer?.battingStyle || 'right-handed'}?`, condition: true },
            { text: `Is your player an Indian player?`, condition: true },
            { text: `Is your player a team captain?`, condition: true },
            { text: `Has your player won the Orange Cap?`, condition: true },
            { text: `Has your player won the Purple Cap?`, condition: true },
            { text: `Does your player hit big sixes?`, condition: true },
            { text: `Is your player known as a finisher?`, condition: true },
            { text: `Has your player played for more than 2 IPL teams?`, condition: true }
        ];
        
        // Find unanswered question
        for (const q of questionPool) {
            if (!askedTexts.includes(q.text)) {
                return {
                    id: Date.now(),
                    text: q.text,
                    category: "smart"
                };
            }
        }
        
        // Default question
        return {
            id: Date.now(),
            text: `Is your player's name starting with letter ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}?`,
            category: "default"
        };
    }
}

module.exports = new GeminiAI();
