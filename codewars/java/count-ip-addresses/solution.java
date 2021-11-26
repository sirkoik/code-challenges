public class CountIPAddresses {

  public static long ipsBetween(String start, String end) {
    String[] a1 = start.split("\\.");
    String[] a2 = end.split("\\.");

    int[] diffs = {0, 0, 0, 0};
    for (int x = 0; x < 4; x++) {
      diffs[x] = Integer.valueOf(a2[x]) - Integer.valueOf(a1[x]);
    }
    
    return diffs[0] * 256 * 256 * 256 + diffs[1] * 256 * 256 + diffs[2] * 256 + diffs[3];
  }
}