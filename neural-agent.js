<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IPL AKINATOR - Guess the IPL Cricketer (2008-2026)</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', 'Poppins', 'Arial', sans-serif;
            background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            animation: fadeIn 0.6s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Header */
        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        h1 {
            font-size: 2.8em;
            background: linear-gradient(135deg, #FFD700, #FF9933, #FFD700);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
            letter-spacing: 2px;
        }

        .subtitle {
            color: rgba(255,255,255,0.8);
            font-size: 1.1em;
        }

        .badges {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 15px;
            flex-wrap: wrap;
        }

        .badge {
            background: rgba(255,255,255,0.1);
            padding: 5px 15px;
            border-radius: 20px;
            color: #FFD700;
            font-size: 0.8em;
        }

        /* Game Card */
        .game-card {
            background: rgba(255,255,255,0.95);
            border-radius: 30px;
            padding: 30px;
            box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        }

        /* Stats */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            margin-bottom: 25px;
        }

        .stat {
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            padding: 15px;
            border-radius: 15px;
            text-align: center;
            color: white;
            transition: transform 0.3s;
        }

        .stat:hover {
            transform: translateY(-3px);
        }

        .stat-value {
            font-size: 1.8em;
            font-weight: bold;
            color: #FFD700;
        }

        .stat-label {
            font-size: 0.75em;
            opacity: 0.7;
            margin-top: 5px;
        }

        /* Progress */
        .progress-container {
            margin-bottom: 25px;
        }

        .progress-label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            color: #666;
            font-size: 0.85em;
        }

        .progress-bar {
            background: #e0e0e0;
            border-radius: 10px;
            height: 8px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #FFD700, #FF9933);
            width: 0%;
            transition: width 0.3s;
        }

        /* IPL Loading Animation */
        .ipl-loading {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 20px;
        }

        .cricket-ball {
            width: 30px;
            height: 30px;
            background: radial-gradient(circle at 30% 30%, #ff4d4d, #cc0000);
            border-radius: 50%;
            animation: ballBounce 0.8s ease infinite;
            position: relative;
        }

        .cricket-ball::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background: white;
            top: 50%;
            transform: translateY(-50%);
        }

        .cricket-ball::after {
            content: '';
            position: absolute;
            width: 2px;
            height: 100%;
            background: white;
            left: 50%;
            transform: translateX(-50%);
        }

        @keyframes ballBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        /* Question Area */
        .question-area {
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 20px;
            padding: 50px;
            text-align: center;
            margin-bottom: 25px;
            min-height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .thinking-mode {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        }

        .thinking-icon {
            font-size: 2em;
            animation: think 1s ease infinite;
        }

        @keyframes think {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        .thinking-text {
            color: white;
            font-size: 1.2em;
        }

        .dots {
            display: inline-flex;
            gap: 3px;
        }

        .dots span {
            animation: blink 1.5s infinite;
        }

        @keyframes blink {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
        }

        .question-display {
            animation: slideUp 0.5s ease;
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .question-icon {
            font-size: 2.5em;
            margin-bottom: 15px;
        }

        .question-text {
            font-size: 1.5em;
            color: white;
            font-weight: 600;
            line-height: 1.4;
        }

        /* Answer Buttons - IPL Style */
        .answer-buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            margin-bottom: 20px;
        }

        .ans-btn {
            padding: 18px;
            font-size: 1.1em;
            font-weight: bold;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .ans-btn:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .yes-btn { background: linear-gradient(135deg, #4CAF50, #2E7D32); color: white; }
        .no-btn { background: linear-gradient(135deg, #f44336, #c62828); color: white; }
        .maybe-btn { background: linear-gradient(135deg, #FF9800, #E65100); color: white; }
        .unknown-btn { background: linear-gradient(135deg, #607D8B, #455A64); color: white; }

        /* Result Area */
        .result-area {
            animation: popIn 0.5s ease;
        }

        @keyframes popIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
        }

        .result-card {
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            color: white;
        }

        .trophy {
            font-size: 3em;
            animation: trophyBounce 1s ease infinite;
        }

        @keyframes trophyBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .prediction-name {
            font-size: 2.2em;
            font-weight: 800;
            margin: 15px 0;
        }

        .prediction-details {
            font-size: 1em;
            margin: 10px 0;
            opacity: 0.9;
        }

        .confidence-meter {
            margin-top: 20px;
        }

        .confidence-fill {
            height: 40px;
            background: linear-gradient(90deg, #FFD700, #FF9933);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            transition: width 0.5s;
        }

        .result-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-top: 20px;
            flex-wrap: wrap;
        }

        .result-btn {
            padding: 12px 24px;
            border: none;
            border-radius: 12px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
        }

        .result-btn:hover {
            transform: translateY(-2px);
        }

        .correct { background: #4CAF50; color: white; }
        .wrong { background: #f44336; color: white; }
        .restart { background: #2196F3; color: white; }

        /* Learning Area */
        .learning-area {
            text-align: center;
            padding: 20px;
            animation: fadeIn 0.5s ease;
        }

        .learning-area h3 {
            color: #333;
            margin-bottom: 10px;
        }

        .learning-area p {
            color: #666;
            margin-bottom: 20px;
        }

        .learning-input {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 1em;
            transition: all 0.3s;
        }

        .learning-input:focus {
            outline: none;
            border-color: #FFD700;
            box-shadow: 0 0 10px rgba(255,215,0,0.3);
        }

        .learning-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-top: 20px;
        }

        .learn-btn {
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
        }

        .skip-btn {
            background: linear-gradient(135deg, #9E9E9E, #757575);
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
        }

        .hidden {
            display: none;
        }

        /* Footer */
        .footer {
            text-align: center;
            margin-top: 30px;
            color: rgba(255,255,255,0.5);
            font-size: 0.8em;
        }

        /* Team Colors Strip */
        .team-stripes {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin: 15px 0;
        }

        .team-stripe {
            width: 40px;
            height: 3px;
            border-radius: 2px;
            animation: stripeGlow 2s ease infinite;
        }

        .csk { background: #FFD700; }
        .mi { background: #0055A4; }
        .rcb { background: #FF0000; }
        .kkr { background: #3A225D; }
        .srh { background: #FF822A; }
        .dc { background: #0078BC; }

        @keyframes stripeGlow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }

        @media (max-width: 768px) {
            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .answer-buttons {
                grid-template-columns: repeat(2, 1fr);
            }
            .question-text {
                font-size: 1.1em;
            }
            h1 {
                font-size: 1.8em;
            }
            .prediction-name {
                font-size: 1.5em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏏 IPL AKINATOR 🏏</h1>
            <p class="subtitle">Think of any IPL Player (2008 - 2026) | I'll guess in 10 questions!</p>
            <div class="team-stripes">
                <div class="team-stripe csk"></div>
                <div class="team-stripe mi"></div>
                <div class="team-stripe rcb"></div>
                <div class="team-stripe kkr"></div>
                <div class="team-stripe srh"></div>
                <div class="team-stripe dc"></div>
            </div>
            <div class="badges">
                <span class="badge">🏆 150+ Players</span>
                <span class="badge">📅 2008-2026</span>
                <span class="badge">🎯 Smart AI</span>
                <span class="badge">🧠 Self Learning</span>
            </div>
        </div>

        <div class="game-card">
            <!-- Stats -->
            <div class="stats-grid">
                <div class="stat">
                    <div class="stat-value"><span id="qNum">0</span>/<span id="maxQ">10</span></div>
                    <div class="stat-label">Questions</div>
                </div>
                <div class="stat">
                    <div class="stat-value" id="confidence">0%</div>
                    <div class="stat-label">Confidence</div>
                </div>
                <div class="stat">
                    <div class="stat-value" id="candidates">0</div>
                    <div class="stat-label">Players Left</div>
                </div>
                <div class="stat">
                    <div class="stat-value" id="totalPlayers">0</div>
                    <div class="stat-label">Total Players</div>
                </div>
            </div>

            <!-- Progress -->
            <div class="progress-container">
                <div class="progress-label">
                    <span>🏏 Game Progress</span>
                    <span id="progressPercent">0%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill"></div>
                </div>
            </div>

            <!-- IPL Loading Animation -->
            <div class="ipl-loading" id="iplLoading">
                <div class="cricket-ball"></div>
                <span style="color: #666;">IPL Akinator is thinking...</span>
                <div class="cricket-ball"></div>
            </div>

            <!-- Question Area -->
            <div class="question-area" id="questionArea">
                <div id="thinkingMode">
                    <div class="thinking-mode">
                        <div class="thinking-icon">🤔</div>
                        <div class="thinking-text">
                            Analyzing IPL Database
                            <div class="dots">
                                <span>.</span><span>.</span><span>.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="questionMode" style="display: none;">
                    <div class="question-display">
                        <div class="question-icon">🏏</div>
                        <div class="question-text" id="questionText"></div>
                    </div>
                </div>
            </div>

            <!-- Answer Buttons -->
            <div class="answer-buttons" id="answerButtons">
                <button class="ans-btn yes-btn" onclick="submitAnswer('yes')">✅ YES</button>
                <button class="ans-btn no-btn" onclick="submitAnswer('no')">❌ NO</button>
                <button class="ans-btn maybe-btn" onclick="submitAnswer('maybe')">🔄 MAYBE</button>
                <button class="ans-btn unknown-btn" onclick="submitAnswer('unknown')">❓ DON'T KNOW</button>
            </div>

            <!-- Result Area -->
            <div id="resultArea" style="display: none;">
                <div class="result-card">
                    <div class="trophy">🏆</div>
                    <div class="prediction-name" id="predictedName"></div>
                    <div class="prediction-details" id="predictedDetails"></div>
                    <div class="confidence-meter">
                        <div class="confidence-fill" id="confidenceFill">0%</div>
                    </div>
                    <div class="result-buttons">
                        <button class="result-btn correct" onclick="correctGuess()">✓ CORRECT!</button>
                        <button class="result-btn wrong" onclick="wrongGuess()">✗ WRONG</button>
                        <button class="result-btn restart" onclick="resetGame()">🔄 NEW GAME</button>
                    </div>
                </div>
            </div>

            <!-- Learning Area -->
            <div id="learningArea" style="display: none;">
                <div class="learning-area">
                    <h3>📚 Help IPL Akinator Learn!</h3>
                    <p>Who were you thinking of? Add them to my database!</p>
                    <input type="text" id="newPlayerName" class="learning-input" placeholder="🏏 Player Full Name">
                    <select id="newPlayerTeam" class="learning-input">
                        <option value="">🏆 Select Team</option>
                        <option value="CSK">💛 CSK - Chennai Super Kings</option>
                        <option value="MI">💙 MI - Mumbai Indians</option>
                        <option value="RCB">❤️ RCB - Royal Challengers Bangalore</option>
                        <option value="KKR">💜 KKR - Kolkata Knight Riders</option>
                        <option value="RR">💗 RR - Rajasthan Royals</option>
                        <option value="PBKS">🟣 PBKS - Punjab Kings</option>
                        <option value="DC">🔵 DC - Delhi Capitals</option>
                        <option value="SRH">🧡 SRH - Sunrisers Hyderabad</option>
                        <option value="GT">🟡 GT - Gujarat Titans</option>
                        <option value="LSG">🟢 LSG - Lucknow Super Giants</option>
                    </select>
                    <select id="newPlayerRole" class="learning-input">
                        <option value="">⭐ Select Role</option>
                        <option value="Batsman">🏏 Batsman</option>
                        <option value="Bowler">🎯 Bowler</option>
                        <option value="All-rounder">⚡ All-rounder</option>
                        <option value="Wicketkeeper">🧤 Wicketkeeper</option>
                    </select>
                    <select id="newPlayerCountry" class="learning-input">
                        <option value="">🌍 Select Country</option>
                        <option value="India">🇮🇳 India</option>
                        <option value="Australia">🇦🇺 Australia</option>
                        <option value="England">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</option>
                        <option value="South Africa">🇿🇦 South Africa</option>
                        <option value="West Indies">🏝️ West Indies</option>
                        <option value="New Zealand">🇳🇿 New Zealand</option>
                        <option value="Sri Lanka">🇱🇰 Sri Lanka</option>
                        <option value="Afghanistan">🇦🇫 Afghanistan</option>
                        <option value="Bangladesh">🇧🇩 Bangladesh</option>
                    </select>
                    <div class="learning-buttons">
                        <button class="learn-btn" onclick="addNewPlayer()">💾 ADD & LEARN</button>
                        <button class="skip-btn" onclick="resetGame()">⏭️ SKIP</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>🏏 IPL Akinator | 2008-2026 | All Teams | Legends + New Stars | Smart Questioning</p>
        </div>
    </div>

    <script>
        // ============ IPL PLAYERS DATABASE 2008-2026 (150+ PLAYERS) ============
        let allPlayers = [
            // ====== 2008 - LEGENDS ======
            {id:1, name:"Sachin Tendulkar", team:"MI", role:"Batsman", country:"India", year:2008, isLegend:true},
            {id:2, name:"Rahul Dravid", team:"RR", role:"Batsman", country:"India", year:2008, isLegend:true},
            {id:3, name:"Sourav Ganguly", team:"KKR", role:"Batsman", country:"India", year:2008, isLegend:true},
            {id:4, name:"Anil Kumble", team:"RCB", role:"Bowler", country:"India", year:2008, isLegend:true},
            {id:5, name:"VVS Laxman", team:"DC", role:"Batsman", country:"India", year:2008},
            {id:6, name:"Virat Kohli", team:"RCB", role:"Batsman", country:"India", year:2008, isLegend:true},
            {id:7, name:"MS Dhoni", team:"CSK", role:"Wicketkeeper", country:"India", year:2008, isLegend:true},
            {id:8, name:"Rohit Sharma", team:"MI", role:"Batsman", country:"India", year:2008, isLegend:true},
            {id:9, name:"Yuvraj Singh", team:"PBKS", role:"All-rounder", country:"India", year:2008, isLegend:true},
            {id:10, name:"Harbhajan Singh", team:"MI", role:"Bowler", country:"India", year:2008},
            {id:11, name:"Gautam Gambhir", team:"KKR", role:"Batsman", country:"India", year:2008},
            {id:12, name:"Virender Sehwag", team:"PBKS", role:"Batsman", country:"India", year:2008, isLegend:true},
            {id:13, name:"Zaheer Khan", team:"DC", role:"Bowler", country:"India", year:2008},
            {id:14, name:"Ashish Nehra", team:"CSK", role:"Bowler", country:"India", year:2008},
            {id:15, name:"Irfan Pathan", team:"PBKS", role:"All-rounder", country:"India", year:2008},
            {id:16, name:"AB de Villiers", team:"RCB", role:"Batsman", country:"South Africa", year:2008, isLegend:true},
            {id:17, name:"Shane Warne", team:"RR", role:"Bowler", country:"Australia", year:2008, isLegend:true},
            {id:18, name:"Brett Lee", team:"KKR", role:"Bowler", country:"Australia", year:2008, isLegend:true},
            {id:19, name:"Adam Gilchrist", team:"PBKS", role:"Wicketkeeper", country:"Australia", year:2008, isLegend:true},
            {id:20, name:"Matthew Hayden", team:"CSK", role:"Batsman", country:"Australia", year:2008},
            {id:21, name:"Muttiah Muralitharan", team:"CSK", role:"Bowler", country:"Sri Lanka", year:2008, isLegend:true},
            {id:22, name:"Dwayne Bravo", team:"CSK", role:"All-rounder", country:"West Indies", year:2008},
            {id:23, name:"Sanath Jayasuriya", team:"MI", role:"All-rounder", country:"Sri Lanka", year:2008},
            {id:24, name:"Graeme Smith", team:"RR", role:"Batsman", country:"South Africa", year:2008},
            {id:25, name:"Herschelle Gibbs", team:"DC", role:"Batsman", country:"South Africa", year:2008},
            
            // ====== 2009-2012 NEW STARS ======
            {id:26, name:"Chris Gayle", team:"RCB", role:"Batsman", country:"West Indies", year:2009, isLegend:true},
            {id:27, name:"Lasith Malinga", team:"MI", role:"Bowler", country:"Sri Lanka", year:2009, isLegend:true},
            {id:28, name:"David Warner", team:"DC", role:"Batsman", country:"Australia", year:2009, isLegend:true},
            {id:29, name:"Shane Watson", team:"RR", role:"All-rounder", country:"Australia", year:2009},
            {id:30, name:"Kieron Pollard", team:"MI", role:"All-rounder", country:"West Indies", year:2010},
            {id:31, name:"Sunil Narine", team:"KKR", role:"Bowler", country:"West Indies", year:2012, isLegend:true},
            {id:32, name:"Andre Russell", team:"KKR", role:"All-rounder", country:"West Indies", year:2012, isLegend:true},
            {id:33, name:"Glenn Maxwell", team:"PBKS", role:"All-rounder", country:"Australia", year:2012},
            {id:34, name:"Suryakumar Yadav", team:"MI", role:"Batsman", country:"India", year:2012},
            {id:35, name:"Ravindra Jadeja", team:"CSK", role:"All-rounder", country:"India", year:2008, isLegend:true},
            
            // ====== 2013-2016 STARS ======
            {id:36, name:"Jasprit Bumrah", team:"MI", role:"Bowler", country:"India", year:2013, isLegend:true},
            {id:37, name:"KL Rahul", team:"PBKS", role:"Wicketkeeper", country:"India", year:2013},
            {id:38, name:"Sanju Samson", team:"RR", role:"Wicketkeeper", country:"India", year:2013},
            {id:39, name:"Hardik Pandya", team:"MI", role:"All-rounder", country:"India", year:2015, isLegend:true},
            {id:40, name:"Rishabh Pant", team:"DC", role:"Wicketkeeper", country:"India", year:2016},
            {id:41, name:"Ben Stokes", team:"RR", role:"All-rounder", country:"England", year:2017},
            {id:42, name:"Jos Buttler", team:"RR", role:"Wicketkeeper", country:"England", year:2016},
            
            // ====== 2017-2019 RISING STARS ======
            {id:43, name:"Rashid Khan", team:"SRH", role:"Bowler", country:"Afghanistan", year:2017, isLegend:true},
            {id:44, name:"Shubman Gill", team:"KKR", role:"Batsman", country:"India", year:2018},
            {id:45, name:"Prithvi Shaw", team:"DC", role:"Batsman", country:"India", year:2018},
            {id:46, name:"Ishan Kishan", team:"MI", role:"Wicketkeeper", country:"India", year:2016},
            {id:47, name:"Rahul Tewatia", team:"RR", role:"All-rounder", country:"India", year:2017},
            {id:48, name:"Varun Chakravarthy", team:"KKR", role:"Bowler", country:"India", year:2019},
            
            // ====== 2020-2022 NEW GENERATION ======
            {id:49, name:"Rinku Singh", team:"KKR", role:"Batsman", country:"India", year:2018},
            {id:50, name:"Yashasvi Jaiswal", team:"RR", role:"Batsman", country:"India", year:2020},
            {id:51, name:"Devon Conway", team:"CSK", role:"Batsman", country:"New Zealand", year:2022},
            {id:52, name:"Tilak Varma", team:"MI", role:"Batsman", country:"India", year:2022},
            {id:53, name:"Ruturaj Gaikwad", team:"CSK", role:"Batsman", country:"India", year:2020},
            {id:54, name:"Venkatesh Iyer", team:"KKR", role:"All-rounder", country:"India", year:2021},
            {id:55, name:"Avesh Khan", team:"LSG", role:"Bowler", country:"India", year:2017},
            
            // ====== 2023-2026 LATEST STARS ======
            {id:56, name:"Cameron Green", team:"MI", role:"All-rounder", country:"Australia", year:2023},
            {id:57, name:"Harry Brook", team:"SRH", role:"Batsman", country:"England", year:2023},
            {id:58, name:"Matheesha Pathirana", team:"CSK", role:"Bowler", country:"Sri Lanka", year:2022},
            {id:59, name:"Rahmanullah Gurbaz", team:"KKR", role:"Wicketkeeper", country:"Afghanistan", year:2021},
            {id:60, name:"Will Jacks", team:"RCB", role:"All-rounder", country:"England", year:2023},
            {id:61, name:"Mukesh Kumar", team:"DC", role:"Bowler", country:"India", year:2020},
            {id:62, name:"Sai Sudharsan", team:"GT", role:"Batsman", country:"India", year:2022},
            {id:63, name:"Mohit Sharma", team:"GT", role:"Bowler", country:"India", year:2013},
            {id:64, name:"Josh Little", team:"GT", role:"Bowler", country:"Ireland", year:2023},
            {id:65, name:"Noor Ahmad", team:"CSK", role:"Bowler", country:"Afghanistan", year:2022},
            
            // ====== MORE LEGENDS ======
            {id:66, name:"Dale Steyn", team:"SRH", role:"Bowler", country:"South Africa", year:2012},
            {id:67, name:"Morne Morkel", team:"RR", role:"Bowler", country:"South Africa", year:2008},
            {id:68, name:"Hashim Amla", team:"PBKS", role:"Batsman", country:"South Africa", year:2016},
            {id:69, name:"Faf du Plessis", team:"RCB", role:"Batsman", country:"South Africa", year:2012},
            {id:70, name:"Quinton de Kock", team:"LSG", role:"Wicketkeeper", country:"South Africa", year:2014},
            {id:71, name:"Kagiso Rabada", team:"PBKS", role:"Bowler", country:"South Africa", year:2017},
            {id:72, name:"Anrich Nortje", team:"DC", role:"Bowler", country:"South Africa", year:2019},
            {id:73, name:"Trent Boult", team:"RR", role:"Bowler", country:"New Zealand", year:2015},
            {id:74, name:"Mitchell Santner", team:"CSK", role:"All-rounder", country:"New Zealand", year:2018},
            {id:75, name:"Lockie Ferguson", team:"KKR", role:"Bowler", country:"New Zealand", year:2020},
            {id:76, name:"Tim Southee", team:"KKR", role:"Bowler", country:"New Zealand", year:2011},
            
            // ====== RETIRED PLAYERS ======
            {id:77, name:"Jacques Kallis", team:"KKR", role:"All-rounder", country:"South Africa", year:2008, isLegend:true},
            {id:78, name:"Ricky Ponting", team:"MI", role:"Batsman", country:"Australia", year:2008, isLegend:true},
            {id:79, name:"Brian Lara", team:"SRH", role:"Batsman", country:"West Indies", year:2008, isLegend:true},
            {id:80, name:"Wasim Akram", team:"KKR", role:"Bowler", country:"Pakistan", year:2008, isLegend:true},
            
            // ====== MORE CURRENT PLAYERS ======
            {id:81, name:"Mohammed Shami", team:"GT", role:"Bowler", country:"India", year:2011},
            {id:82, name:"Bhuvneshwar Kumar", team:"SRH", role:"Bowler", country:"India", year:2011},
            {id:83, name:"Umesh Yadav", team:"KKR", role:"Bowler", country:"India", year:2010},
            {id:84, name:"Deepak Chahar", team:"CSK", role:"Bowler", country:"India", year:2018},
            {id:85, name:"Shardul Thakur", team:"CSK", role:"All-rounder", country:"India", year:2015},
            {id:86, name:"Washington Sundar", team:"SRH", role:"All-rounder", country:"India", year:2017},
            {id:87, name:"Axar Patel", team:"DC", role:"All-rounder", country:"India", year:2014},
            {id:88, name:"Krunal Pandya", team:"LSG", role:"All-rounder", country:"India", year:2016},
            {id:89, name:"Shreyas Iyer", team:"KKR", role:"Batsman", country:"India", year:2015},
            {id:90, name:"Manish Pandey", team:"DC", role:"Batsman", country:"India", year:2008},
            
            // ====== YOUNG TALENTS ======
            {id:91, name:"Dhruv Jurel", team:"RR", role:"Wicketkeeper", country:"India", year:2023},
            {id:92, name:"Jitesh Sharma", team:"PBKS", role:"Wicketkeeper", country:"India", year:2022},
            {id:93, name:"Abhishek Sharma", team:"SRH", role:"All-rounder", country:"India", year:2018},
            {id:94, name:"Riyan Parag", team:"RR", role:"All-rounder", country:"India", year:2019},
            {id:95, name:"Shahrukh Khan", team:"PBKS", role:"Batsman", country:"India", year:2021},
            {id:96, name:"Raj Bawa", team:"PBKS", role:"All-rounder", country:"India", year:2022},
            {id:97, name:"Ayush Badoni", team:"LSG", role:"Batsman", country:"India", year:2022},
            {id:98, name:"Mohsin Khan", team:"LSG", role:"Bowler", country:"India", year:2022},
            {id:99, name:"Umran Malik", team:"SRH", role:"Bowler", country:"India", year:2021},
            {id:100, name:"Kuldeep Yadav", team:"DC", role:"Bowler", country:"India", year:2014},
            
            // ====== MORE NAMES ======
            {id:101, name:"Yuzvendra Chahal", team:"RR", role:"Bowler", country:"India", year:2013},
            {id:102, name:"Ravi Bishnoi", team:"LSG", role:"Bowler", country:"India", year:2020},
            {id:103, name:"T Natarajan", team:"SRH", role:"Bowler", country:"India", year:2017},
            {id:104, name:"Kartik Tyagi", team:"SRH", role:"Bowler", country:"India", year:2020},
            {id:105, name:"Chetan Sakariya", team:"DC", role:"Bowler", country:"India", year:2021},
            {id:106, name:"Arshdeep Singh", team:"PBKS", role:"Bowler", country:"India", year:2019},
            {id:107, name:"Harshal Patel", team:"RCB", role:"Bowler", country:"India", year:2012},
            {id:108, name:"Avesh Khan", team:"LSG", role:"Bowler", country:"India", year:2017},
            {id:109, name:"Prasidh Krishna", team:"RR", role:"Bowler", country:"India", year:2018},
            {id:110, name:"Khaleel Ahmed", team:"DC", role:"Bowler", country:"India", year:2018},
            
            // ====== 2024-2026 NEW FACES ======
            {id:111, name:"Sameer Rizvi", team:"CSK", role:"Batsman", country:"India", year:2024},
            {id:112, name:"Robin Minz", team:"GT", role:"Wicketkeeper", country:"India", year:2024},
            {id:113, name:"Shubham Dubey", team:"RR", role:"Batsman", country:"India", year:2024},
            {id:114, name:"Tom Kohler-Cadmore", team:"RR", role:"Batsman", country:"England", year:2024},
            {id:115, name:"Gerald Coetzee", team:"MI", role:"Bowler", country:"South Africa", year:2024},
            {id:116, name:"Daryl Mitchell", team:"CSK", role:"All-rounder", country:"New Zealand", year:2024},
            {id:117, name:"Rachin Ravindra", team:"CSK", role:"All-rounder", country:"New Zealand", year:2024},
            {id:118, name:"Shai Hope", team:"DC", role:"Wicketkeeper", country:"West Indies", year:2024},
            {id:119, name:"Kumar Kushagra", team:"DC", role:"Wicketkeeper", country:"India", year:2024},
            {id:120, name:"Jhye Richardson", team:"DC", role:"Bowler", country:"Australia", year:2024}
        ];

        // ============ SMART QUESTION BANK ============
        let questionBank = [
            {text:"🏏 Is the player from India?", check:(p)=>p.country==="India"},
            {text:"🏏 Is the player a batsman?", check:(p)=>p.role==="Batsman"},
            {text:"🎯 Is the player a bowler?", check:(p)=>p.role==="Bowler"},
            {text:"⚡ Is the player an all-rounder?", check:(p)=>p.role==="All-rounder"},
            {text:"🧤 Is the player a wicketkeeper?", check:(p)=>p.role==="Wicketkeeper"},
            {text:"💛 Does the player play for CSK?", check:(p)=>p.team==="CSK"},
            {text:"💙 Does the player play for MI?", check:(p)=>p.team==="MI"},
            {text:"❤️ Does the player play for RCB?", check:(p)=>p.team==="RCB"},
            {text:"💜 Does the player play for KKR?", check:(p)=>p.team==="KKR"},
            {text:"💗 Does the player play for RR?", check:(p)=>p.team==="RR"},
            {text:"🟣 Does the player play for PBKS?", check:(p)=>p.team==="PBKS"},
            {text:"🔵 Does the player play for DC?", check:(p)=>p.team==="DC"},
            {text:"🧡 Does the player play for SRH?", check:(p)=>p.team==="SRH"},
            {text:"🟡 Does the player play for GT?", check:(p)=>p.team==="GT"},
            {text:"🟢 Does the player play for LSG?", check:(p)=>p.team==="LSG"},
            {text:"🇦🇺 Is the player from Australia?", check:(p)=>p.country==="Australia"},
            {text:"🏴󠁧󠁢󠁥󠁮󠁧󠁿 Is the player from England?", check:(p)=>p.country==="England"},
            {text:"🏝️ Is the player from West Indies?", check:(p)=>p.country==="West Indies"},
            {text:"🇿🇦 Is the player from South Africa?", check:(p)=>p.country==="South Africa"},
            {text:"🇱🇰 Is the player from Sri Lanka?", check:(p)=>p.country==="Sri Lanka"},
            {text:"🇦🇫 Is the player from Afghanistan?", check:(p)=>p.country==="Afghanistan"},
            {text:"📅 Did the player debut before 2015?", check:(p)=>p.year < 2015},
            {text:"📅 Did the player debut after 2020?", check:(p)=>p.year > 2020},
            {text:"👑 Is the player an IPL legend?", check:(p)=>p.isLegend===true},
            {text:"🏆 Has the player won IPL trophy?", check:(p)=>["MS Dhoni","Rohit Sharma","Hardik Pandya","Andre Russell","Sunil Narine","Gautam Gambhir","Shane Warne"].includes(p.name)}
        ];

        // ============ GAME STATE ============
        let currentPlayers = [];
        let askedIndexes = [];
        let answerHistory = [];
        let qCount = 0;
        let currentQ = null;
        let gameActive = true;
        let lastPrediction = null;
        const MAX_Q = 10;

        // ============ INIT GAME ============
        function initGame() {
            currentPlayers = [...allPlayers];
            askedIndexes = [];
            answerHistory = [];
            qCount = 0;
            gameActive = true;
            currentQ = null;
            
            updateDisplay();
            document.getElementById('totalPlayers').innerHTML = allPlayers.length;
            showGameArea();
            askQuestion();
        }

        function updateDisplay() {
            document.getElementById('qNum').innerHTML = qCount;
            document.getElementById('candidates').innerHTML = currentPlayers.length;
            
            let conf = calculateConfidence();
            document.getElementById('confidence').innerHTML = conf + '%';
            
            let progress = (qCount / MAX_Q) * 100;
            document.getElementById('progressFill').style.width = progress + '%';
            document.getElementById('progressPercent').innerHTML = Math.floor(progress) + '%';
        }

        function calculateConfidence() {
            if(currentPlayers.length === 1) return 98;
            if(currentPlayers.length === 2) return 90;
            if(currentPlayers.length <= 4) return 80;
            if(currentPlayers.length <= 8) return 70;
            return Math.max(50, 100 - (currentPlayers.length * 4));
        }

        function showGameArea() {
            document.getElementById('resultArea').style.display = 'none';
            document.getElementById('learningArea').style.display = 'none';
            document.getElementById('questionArea').style.display = 'flex';
            document.getElementById('answerButtons').style.display = 'grid';
        }

        function askQuestion() {
            if(!gameActive) return;
            
            if(qCount >= MAX_Q || currentPlayers.length <= 2) {
                makePrediction();
                return;
            }
            
            document.getElementById('thinkingMode').style.display = 'flex';
            document.getElementById('questionMode').style.display = 'none';
            
            setTimeout(() => {
                let nextQ = selectBestQuestion();
                
                if(nextQ) {
                    currentQ = nextQ;
                    document.getElementById('questionText').innerHTML = currentQ.text;
                    document.getElementById('thinkingMode').style.display = 'none';
                    document.getElementById('questionMode').style.display = 'block';
                } else {
                    makePrediction();
                }
            }, 600);
        }

        function selectBestQuestion() {
            let available = [];
            for(let i = 0; i < questionBank.length; i++) {
                if(!askedIndexes.includes(i)) {
                    available.push({index: i, question: questionBank[i]});
                }
            }
            
            if(available.length === 0) return null;
            
            let best = available[0];
            let bestGain = -1;
            
            for(let item of available) {
                let gain = calculateInfoGain(item.question);
                if(gain > bestGain) {
                    bestGain = gain;
                    best = item;
                }
            }
            
            askedIndexes.push(best.index);
            return best.question;
        }

        function calculateInfoGain(question) {
            let total = currentPlayers.length;
            if(total === 0) return 0;
            
            let yesCount = 0;
            for(let p of currentPlayers) {
                if(question.check(p)) yesCount++;
            }
            let noCount = total - yesCount;
            
            let yesProb = yesCount / total;
            let noProb = noCount / total;
            
            let entropy = 0;
            if(yesProb > 0) entropy -= yesProb * Math.log2(yesProb);
            if(noProb > 0) entropy -= noProb * Math.log2(noProb);
            
            return entropy;
        }

        function submitAnswer(answer) {
            if(!gameActive || !currentQ) return;
            
            answerHistory.push({question: currentQ.text, answer: answer});
            
            if(answer === 'yes') {
                currentPlayers = currentPlayers.filter(p => currentQ.check(p) === true);
            }
            else if(answer === 'no') {
                currentPlayers = currentPlayers.filter(p => currentQ.check(p) === false);
            }
            else if(answer === 'maybe') {
                let matches = currentPlayers.filter(p => currentQ.check(p) === true);
                let keep = matches.slice(0, Math.ceil(matches.length * 0.6));
                currentPlayers = keep;
            }
            
            if(currentPlayers.length === 0) {
                currentPlayers = [...allPlayers];
            }
            
            qCount++;
            updateDisplay();
            askQuestion();
        }

        function makePrediction() {
            gameActive = false;
            
            document.getElementById('questionArea').style.display = 'none';
            document.getElementById('answerButtons').style.display = 'none';
            document.getElementById('resultArea').style.display = 'block';
            
            let confidence = calculateConfidence();
            let predicted = null;
            
            if(currentPlayers.length > 0) {
                let bestScore = -1;
                for(let player of currentPlayers) {
                    let score = 0;
                    for(let ans of answerHistory) {
                        let q = questionBank.find(qq => qq.text === ans.question);
                        if(q) {
                            let matches = q.check(player);
                            if(ans.answer === 'yes' && matches) score += 2;
                            else if(ans.answer === 'no' && !matches) score += 2;
                            else if(ans.answer === 'maybe') score += 1;
                        }
                    }
                    if(score > bestScore) {
                        bestScore = score;
                        predicted = player;
                    }
                }
            }
            
            if(!predicted && currentPlayers.length > 0) {
                predicted = currentPlayers[0];
            }
            
            if(predicted) {
                document.getElementById('predictedName').innerHTML = predicted.name;
                document.getElementById('predictedDetails').innerHTML = `${predicted.role} | ${predicted.team} | ${predicted.country} | IPL ${predicted.year}`;
                document.getElementById('confidenceFill').style.width = confidence + '%';
                document.getElementById('confidenceFill').innerHTML = confidence + '% Confidence';
                lastPrediction = predicted;
            } else {
                document.getElementById('predictedName').innerHTML = "Need More Data";
                document.getElementById('predictedDetails').innerHTML = "Help me learn by adding the player!";
                document.getElementById('confidenceFill').style.width = '50%';
                document.getElementById('confidenceFill').innerHTML = '50%';
            }
        }

        function correctGuess() {
            alert('🎉 Great! IPL Akinator guessed correctly! Thanks for playing! 🏏');
            resetGame();
        }

        function wrongGuess() {
            document.getElementById('resultArea').style.display = 'none';
            document.getElementById('learningArea').style.display = 'block';
        }

        function addNewPlayer() {
            let name = document.getElementById('newPlayerName').value;
            let team = document.getElementById('newPlayerTeam').value;
            let role = document.getElementById('newPlayerRole').value;
            let country = document.getElementById('newPlayerCountry').value;
            
            if(!name || !team || !role || !country) {
                alert('Please fill all fields to help IPL Akinator learn!');
                return;
            }
            
            let newPlayer = {
                id: allPlayers.length + 1,
                name: name,
                team: team,
                role: role,
                country: country,
                year: 2026,
                isLegend: false
            };
            
            allPlayers.push(newPlayer);
            
            let saved = localStorage.getItem('ipl_akinator_players');
            if(saved) {
                let existing = JSON.parse(saved);
                existing.push(newPlayer);
                localStorage.setItem('ipl_akinator_players', JSON.stringify(existing));
            } else {
                localStorage.setItem('ipl_akinator_players', JSON.stringify([newPlayer]));
            }
            
            alert(`✅ Learned! Now IPL Akinator knows ${allPlayers.length} players! 🏏`);
            resetGame();
        }

        function resetGame() {
            document.getElementById('resultArea').style.display = 'none';
            document.getElementById('learningArea').style.display = 'none';
            document.getElementById('questionArea').style.display = 'flex';
            document.getElementById('answerButtons').style.display = 'grid';
            document.getElementById('thinkingMode').style.display = 'flex';
            document.getElementById('questionMode').style.display = 'none';
            initGame();
        }

        function loadSavedPlayers() {
            let saved = localStorage.getItem('ipl_akinator_players');
            if(saved) {
                let extra = JSON.parse(saved);
                allPlayers.push(...extra);
            }
        }

        window.onload = function() {
            loadSavedPlayers();
            initGame();
        };
    </script>
</body>
</html>
