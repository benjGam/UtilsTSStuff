export class StringUtils {
  public static getFirstLastIndexOf(
    toAnalyze: string,
    sequence: string,
  ): number {
    for (let i = toAnalyze.length - 1; i > 0; i--) {
      if (toAnalyze[i] != sequence) return i;
    }
  }
}
