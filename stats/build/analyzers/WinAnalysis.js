"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (const match of matches) {
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResults.HomeWin) {
                wins++;
            }
            if (match[2] === this.team && match[5] === MatchResult_1.MatchResults.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} games`;
    }
}
exports.WinAnalysis = WinAnalysis;
