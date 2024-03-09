import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from '../MatchResult';
import { dateStringToDate } from '../utils';

type MatchType = [Date, string, string, number, number, MatchResults, string];

export class MatchReader extends CsvFileReader<MatchType> {
  constructor(public filename: string) {
    super(filename);
  }
  mapRow(row: string[]): MatchType {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResults,
      row[6],
    ];
  }
}
