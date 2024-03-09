import { MatchData } from '../MatchData';
import { MatchResults } from '../MatchResult';
import { Analyzer } from '../Summary';

export class WinAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (const match of matches) {
      if (match[1] === this.team && match[5] === MatchResults.HomeWin) {
        wins++;
      }
      if (match[2] === this.team && match[5] === MatchResults.AwayWin) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
