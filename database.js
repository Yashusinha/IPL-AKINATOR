// IPL Players Database - Complete Dataset
const IPL_PLAYERS_DB = [
    { 
        id: 1, 
        name: "Virat Kohli", 
        team: "RCB", 
        role: "Batsman", 
        nationality: "Indian", 
        batting_style: "Right-handed", 
        bowling_style: "Right-arm medium",
        known_for: "King Kohli - Chase Master", 
        emoji: "👑",
        key_stats: { 
            matches: "237", 
            runs: "7263", 
            average: "37.25", 
            hundreds: "5",
            ipl_titles: "0"
        },
        tags: ["captain", "batsman", "right-handed", "indian", "rcb", "legend"]
    },
    { 
        id: 2, 
        name: "MS Dhoni", 
        team: "CSK", 
        role: "WK-Batsman", 
        nationality: "Indian", 
        batting_style: "Right-handed", 
        bowling_style: "Right-arm medium",
        known_for: "Captain Cool - Thala - Greatest Finisher", 
        emoji: "🥾",
        key_stats: { 
            matches: "250", 
            runs: "5082", 
            average: "39.09", 
            stumpings: "42",
            ipl_titles: "4"
        },
        tags: ["captain", "wicketkeeper", "batsman", "right-handed", "indian", "csk", "legend"]
    },
    { 
        id: 3, 
        name: "Rohit Sharma", 
        team: "MI", 
        role: "Batsman", 
        nationality: "Indian", 
        batting_style: "Right-handed", 
        bowling_style: "Right-arm offbreak",
        known_for: "Hitman - 5 IPL Titles as Captain", 
        emoji: "🚀",
        key_stats: { 
            matches: "243", 
            runs: "6214", 
            average: "29.6", 
            hundreds: "2",
            ipl_titles: "5"
        },
        tags: ["captain", "batsman", "right-handed", "indian", "mi", "legend", "opener"]
    },
    { 
        id: 4, 
        name: "Jasprit Bumrah", 
        team: "MI", 
        role: "Bowler", 
        nationality: "Indian", 
        batting_style: "Right-handed", 
        bowling_style: "Right-arm fast",
        known_for: "Yorker King - Best Death Bowler", 
        emoji: "🎯",
        key_stats: { 
            matches: "120", 
            wickets: "145", 
            economy: "7.39", 
            best_bowling: "5/10",
            ipl_titles: "5"
        },
        tags: ["bowler", "fast-bowler", "right-handed", "indian", "mi", "death-specialist"]
    },
    { 
        id: 5, 
        name: "Rashid Khan", 
        team: "GT", 
        role: "Bowler", 
        nationality: "Afghan", 
        batting_style: "Right-handed", 
        bowling_style: "Legbreak Googly",
        known_for: "Mystery Spinner - T20 Wizard", 
        emoji: "🕸️",
        key_stats: { 
            matches: "109", 
            wickets: "139", 
            economy: "6.73", 
            best_bowling: "4/24",
            ipl_titles: "1"
        },
        tags: ["bowler", "spinner", "leg-spinner", "afghan", "gt", "overseas"]
    },
    { 
        id: 6, 
        name: "Hardik Pandya", 
        team: "MI", 
        role: "All-rounder", 
        nationality: "Indian", 
        batting_style: "Right-handed", 
        bowling_style: "Right-arm fast-medium",
        known_for: "Explosive Finisher - Dynamic All-rounder", 
        emoji: "💪",
        key_stats: { 
            matches: "123", 
            runs: "2309", 
            wickets: "53", 
            strike_rate: "145",
            ipl_titles: "4"
        },
        tags: ["all-rounder", "batsman", "bowler", "right-handed", "indian", "mi"]
    },
    { 
        id: 7, 
        name: "Andre Russell", 
        team: "KKR", 
        role: "All-rounder", 
        nationality: "West Indies", 
        batting_style: "Right-handed", 
        bowling_style: "Right-arm fast",
        known_for: "Dre Russ - Power Hitter - 200+ Strike Rate", 
        emoji: "⚡",
        key_stats: { 
            matches: "100", 
            runs: "2200", 
            wickets: "89", 
            strike_rate: "175",
            ipl_titles: "1"
        },
        tags: ["all-rounder", "batsman", "bowler", "right-handed", "west-indies", "kkr", "overseas"]
    },
    { 
        id: 8, 
        name: "AB de Villiers", 
        team: "RCB", 
        role: "Batsman", 
        nationality: "South African", 
        batting_style: "Right-handed", 
        bowling_style: "Right-arm medium",
        known_for: "Mr. 360 - Greatest Shot-Maker", 
        emoji: "🌀",
        key_stats: { 
            matches: "184", 
            runs: "5162", 
            average: "39.7", 
            strike_rate: "151",
            ipl_titles: "0"
        },
        tags: ["batsman", "wicketkeeper", "right-handed", "south-african", "rcb", "overseas"]
    },
    { 
        id: 9, 
        name: "David Warner", 
        team: "DC", 
        role: "Batsman", 
        nationality: "Australian", 
        batting_style: "Left-handed", 
        bowling_style: "Right-arm legbreak",
        known_for: "Bull - Aggressive Opener - Orange Cap King", 
        emoji: "🐂",
        key_stats: { 
            matches: "176", 
            runs: "6397", 
            average: "41.5", 
            hundreds: "4",
            ipl_titles: "1"
        },
        tags: ["batsman", "left-handed", "australian", "dc", "srh", "opener", "overseas"]
    },
    { 
        id: 10, 
        name: "Sunil Narine", 
        team: "KKR", 
        role: "Bowler", 
        nationality: "West Indies", 
        batting_style: "Left-handed", 
        bowling_style: "Right-arm offbreak",
        known_for: "Mystery Spinner + Explosive Opener", 
        emoji: "🎩",
        key_stats: { 
            matches: "162", 
            wickets: "163", 
            economy: "6.73", 
            runs: "1045",
            ipl_titles: "2"
        },
        tags: ["bowler", "spinner", "left-handed", "west-indies", "kkr", "overseas", "opener"]
    }
];

// Question Bank for dynamic questioning
const QUESTION_BANK = [
    { id: 1, text: "Is your player a batsman?", tags: ["batsman"] },
    { id: 2, text: "Is your player a bowler?", tags: ["bowler"] },
    { id: 3, text: "Is your player an all-rounder?", tags: ["all-rounder"] },
    { id: 4, text: "Does your player play for CSK?", tags: ["csk"] },
    { id: 5, text: "Does your player play for MI?", tags: ["mi"] },
    { id: 6, text: "Does your player play for RCB?", tags: ["rcb"] },
    { id: 7, text: "Does your player play for KKR?", tags: ["kkr"] },
    { id: 8, text: "Does your player play for GT?", tags: ["gt"] },
    { id: 9, text: "Does your player play for DC or SRH?", tags: ["dc", "srh"] },
    { id: 10, text: "Is your player Indian?", tags: ["indian"] },
    { id: 11, text: "Is your player an overseas player?", tags: ["overseas"] },
    { id: 12, text: "Has your player won an IPL title?", tags: ["ipl_titles"] },
    { id: 13, text: "Is your player a wicketkeeper?", tags: ["wicketkeeper"] },
    { id: 14, text: "Is your player left-handed?", tags: ["left-handed"] },
    { id: 15, text: "Has your player been a captain?", tags: ["captain"] },
    { id: 16, text: "Is your player a spinner?", tags: ["spinner"] },
    { id: 17, text: "Is your player a fast bowler?", tags: ["fast-bowler"] },
    { id: 18, text: "Is your player known for big hitting?", tags: ["power-hitter"] },
    { id: 19, text: "Has your player scored 5000+ IPL runs?", tags: ["5000+runs"] },
    { id: 20, text: "Is your player from Australia or West Indies?", tags: ["australian", "west-indies"] }
];

module.exports = {
    IPL_PLAYERS_DB,
    QUESTION_BANK
};
