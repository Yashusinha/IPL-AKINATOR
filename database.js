// ============ IPL COMPLETE DATABASE 2008-2026 ============
const IPL_DATABASE = [
    // ============ PLAYERS ============
    // Legendary Players
    { id: 1, name: "Sachin Tendulkar", category: "player", team: "MI", role: "Batsman", country: "India", year: 2008, specialty: "Master Blaster" },
    { id: 2, name: "Rahul Dravid", category: "player", team: "RR", role: "Batsman", country: "India", year: 2008, specialty: "The Wall" },
    { id: 3, name: "Sourav Ganguly", category: "player", team: "KKR", role: "Batsman", country: "India", year: 2008, specialty: "Dada" },
    { id: 4, name: "Anil Kumble", category: "player", team: "RCB", role: "Bowler", country: "India", year: 2008, specialty: "Spin King" },
    { id: 5, name: "VVS Laxman", category: "player", team: "DC", role: "Batsman", country: "India", year: 2008, specialty: "Stylish" },
    { id: 6, name: "Virat Kohli", category: "player", team: "RCB", role: "Batsman", country: "India", year: 2008, specialty: "Chase Master" },
    { id: 7, name: "MS Dhoni", category: "player", team: "CSK", role: "Wicketkeeper", country: "India", year: 2008, specialty: "Captain Cool" },
    { id: 8, name: "Rohit Sharma", category: "player", team: "MI", role: "Batsman", country: "India", year: 2008, specialty: "Hitman" },
    { id: 9, name: "Yuvraj Singh", category: "player", team: "PBKS", role: "All-rounder", country: "India", year: 2008, specialty: "Sixer King" },
    { id: 10, name: "Harbhajan Singh", category: "player", team: "MI", role: "Bowler", country: "India", year: 2008, specialty: "Turbunator" },
    { id: 11, name: "Gautam Gambhir", category: "player", team: "KKR", role: "Batsman", country: "India", year: 2008, specialty: "Fighter" },
    { id: 12, name: "Virender Sehwag", category: "player", team: "PBKS", role: "Batsman", country: "India", year: 2008, specialty: "Nawab" },
    { id: 13, name: "Zaheer Khan", category: "player", team: "DC", role: "Bowler", country: "India", year: 2008, specialty: "Swing Master" },
    { id: 14, name: "Ashish Nehra", category: "player", team: "CSK", role: "Bowler", country: "India", year: 2008, specialty: "Left-arm" },
    { id: 15, name: "Irfan Pathan", category: "player", team: "PBKS", role: "All-rounder", country: "India", year: 2008, specialty: "Swing" },
    
    // Overseas Legends
    { id: 16, name: "AB de Villiers", category: "player", team: "RCB", role: "Batsman", country: "South Africa", year: 2008, specialty: "360 Player" },
    { id: 17, name: "Chris Gayle", category: "player", team: "RCB", role: "Batsman", country: "West Indies", year: 2009, specialty: "Universe Boss" },
    { id: 18, name: "Shane Warne", category: "player", team: "RR", role: "Bowler", country: "Australia", year: 2008, specialty: "King of Spin" },
    { id: 19, name: "Brett Lee", category: "player", team: "KKR", role: "Bowler", country: "Australia", year: 2008, specialty: "Speedster" },
    { id: 20, name: "Adam Gilchrist", category: "player", team: "PBKS", role: "Wicketkeeper", country: "Australia", year: 2008, specialty: "Gilly" },
    { id: 21, name: "Matthew Hayden", category: "player", team: "CSK", role: "Batsman", country: "Australia", year: 2008, specialty: "Haydos" },
    { id: 22, name: "Muttiah Muralitharan", category: "player", team: "CSK", role: "Bowler", country: "Sri Lanka", year: 2008, specialty: "Spin Wizard" },
    { id: 23, name: "Lasith Malinga", category: "player", team: "MI", role: "Bowler", country: "Sri Lanka", year: 2009, specialty: "Yorker King" },
    { id: 24, name: "Kieron Pollard", category: "player", team: "MI", role: "All-rounder", country: "West Indies", year: 2010, specialty: "Polly" },
    { id: 25, name: "Dwayne Bravo", category: "player", team: "CSK", role: "All-rounder", country: "West Indies", year: 2008, specialty: "DJ Bravo" },
    { id: 26, name: "Sunil Narine", category: "player", team: "KKR", role: "Bowler", country: "West Indies", year: 2012, specialty: "Mystery" },
    { id: 27, name: "Andre Russell", category: "player", team: "KKR", role: "All-rounder", country: "West Indies", year: 2012, specialty: "Dre Russ" },
    { id: 28, name: "David Warner", category: "player", team: "SRH", role: "Batsman", country: "Australia", year: 2009, specialty: "Bull" },
    { id: 29, name: "Steve Smith", category: "player", team: "RR", role: "Batsman", country: "Australia", year: 2010, specialty: "Smudge" },
    { id: 30, name: "Glenn Maxwell", category: "player", team: "RCB", role: "All-rounder", country: "Australia", year: 2012, specialty: "Big Show" },
    
    // Current Stars
    { id: 31, name: "Jasprit Bumrah", category: "player", team: "MI", role: "Bowler", country: "India", year: 2013, specialty: "Yorker King" },
    { id: 32, name: "Hardik Pandya", category: "player", team: "MI", role: "All-rounder", country: "India", year: 2015, specialty: "Kung Fu" },
    { id: 33, name: "KL Rahul", category: "player", team: "LSG", role: "Wicketkeeper", country: "India", year: 2013, specialty: "Classy" },
    { id: 34, name: "Rashid Khan", category: "player", team: "GT", role: "Bowler", country: "Afghanistan", year: 2017, specialty: "Mystery" },
    { id: 35, name: "Suryakumar Yadav", category: "player", team: "MI", role: "Batsman", country: "India", year: 2012, specialty: "SKY" },
    { id: 36, name: "Ravindra Jadeja", category: "player", team: "CSK", role: "All-rounder", country: "India", year: 2008, specialty: "Sir Jadeja" },
    { id: 37, name: "Shubman Gill", category: "player", team: "GT", role: "Batsman", country: "India", year: 2018, specialty: "Prince" },
    { id: 38, name: "Sanju Samson", category: "player", team: "RR", role: "Wicketkeeper", country: "India", year: 2013, specialty: "Talent" },
    { id: 39, name: "Rishabh Pant", category: "player", team: "DC", role: "Wicketkeeper", country: "India", year: 2016, specialty: "Pantastic" },
    { id: 40, name: "Mohammed Shami", category: "player", team: "GT", role: "Bowler", country: "India", year: 2011, specialty: "Swing" },
    
    // New Stars 2020-2026
    { id: 41, name: "Rinku Singh", category: "player", team: "KKR", role: "Batsman", country: "India", year: 2018, specialty: "Finisher" },
    { id: 42, name: "Yashasvi Jaiswal", category: "player", team: "RR", role: "Batsman", country: "India", year: 2020, specialty: "Young Gun" },
    { id: 43, name: "Tilak Varma", category: "player", team: "MI", role: "Batsman", country: "India", year: 2022, specialty: "Promising" },
    { id: 44, name: "Cameron Green", category: "player", team: "MI", role: "All-rounder", country: "Australia", year: 2023, specialty: "Tall" },
    { id: 45, name: "Harry Brook", category: "player", team: "SRH", role: "Batsman", country: "England", year: 2023, specialty: "Aggressive" },
    
    // ============ COACHES ============
    { id: 101, name: "Stephen Fleming", category: "coach", team: "CSK", role: "Head Coach", country: "New Zealand", year: 2008 },
    { id: 102, name: "Mahela Jayawardene", category: "coach", team: "MI", role: "Head Coach", country: "Sri Lanka", year: 2017 },
    { id: 103, name: "Tom Moody", category: "coach", team: "SRH", role: "Head Coach", country: "Australia", year: 2013 },
    { id: 104, name: "Rahul Dravid", category: "coach", team: "RR", role: "Head Coach", country: "India", year: 2014 },
    { id: 105, name: "Gary Kirsten", category: "coach", team: "RCB", role: "Head Coach", country: "South Africa", year: 2019 },
    { id: 106, name: "Trevor Bayliss", category: "coach", team: "PBKS", role: "Head Coach", country: "Australia", year: 2019 },
    { id: 107, name: "Brendon McCullum", category: "coach", team: "KKR", role: "Head Coach", country: "New Zealand", year: 2022 },
    { id: 108, name: "Andy Flower", category: "coach", team: "LSG", role: "Head Coach", country: "Zimbabwe", year: 2022 },
    { id: 109, name: "Ashish Nehra", category: "coach", team: "GT", role: "Head Coach", country: "India", year: 2022 },
    { id: 110, name: "Ricky Ponting", category: "coach", team: "DC", role: "Head Coach", country: "Australia", year: 2018 },
    { id: 111, name: "Jacques Kallis", category: "coach", team: "KKR", role: "Head Coach", country: "South Africa", year: 2015 },
    { id: 112, name: "Shane Bond", category: "coach", team: "MI", role: "Bowling Coach", country: "New Zealand", year: 2015 },
    { id: 113, name: "Mike Hussey", category: "coach", team: "CSK", role: "Batting Coach", country: "Australia", year: 2021 },
    { id: 114, name: "Laxmipathy Balaji", category: "coach", team: "CSK", role: "Bowling Coach", country: "India", year: 2021 },
    
    // ============ SUPPORT STAFF ============
    { id: 201, name: "Nitin Patel", category: "staff", team: "MI", role: "Head Physio", country: "India", year: 2010 },
    { id: 202, name: "Tom Simsek", category: "staff", team: "CSK", role: "Strength Coach", country: "Australia", year: 2018 },
    { id: 203, name: "Evan Speechly", category: "staff", team: "RCB", role: "Head Physio", country: "South Africa", year: 2019 },
    { id: 204, name: "Zubin Bharucha", category: "staff", team: "RR", role: "Performance Director", country: "India", year: 2018 },
    { id: 205, name: "Paul Chapman", category: "staff", team: "KKR", role: "Head Trainer", country: "Australia", year: 2012 },
    { id: 206, name: "Andrew Leipus", category: "staff", team: "DC", role: "Physio", country: "Australia", year: 2019 },
    { id: 207, name: "Shanker Basu", category: "staff", team: "RCB", role: "Strength Coach", country: "India", year: 2008 }
];

// Load saved data from localStorage
let customData = [];
const savedData = localStorage.getItem('neural_ai_custom');
if (savedData) {
    customData = JSON.parse(savedData);
    IPL_DATABASE.push(...customData);
}

// Export for use
const MAX_QUESTIONS = 10;
