export class StringUtils {
  public static getFirstLastIndexOf(
    toAnalyze: string,
    sequence: string,
  ): number {
    for (let i = toAnalyze.length - 1; i > 0; i--) {
      if (toAnalyze[i] != sequence) return i + 1;
    }
  }

  public static safeSlice(
    stringToSlice: string,
    fromIndex: number,
    toIndex: number,
  ) {
    const highter = fromIndex > toIndex ? fromIndex : toIndex;
    const lower = highter == fromIndex ? toIndex : fromIndex;

    return stringToSlice.slice(
      lower > stringToSlice.length ? 0 : lower < 0 ? 0 : lower,
      highter > stringToSlice.length ? 0 : highter < 0 ? 0 : highter,
    );
  }
}
