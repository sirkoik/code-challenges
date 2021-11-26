public class Kata
{
  public static boolean smallEnough(int[] a, int limit)
  {
    for (int x = 0; x < a.length; x++) {
      if (a[x] > limit) return false;
    }
    return true;
  }
}