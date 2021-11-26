public class NewAverage
{
    public static long newAvg(double[] arr, double navg)
    {
      double sum = 0.0;
        for (double a : arr) {
          sum += a;
        }
      double nextN = Math.ceil(navg * (arr.length + 1) - sum);
      if (nextN <= 0) throw new IllegalArgumentException();
      
      return (long) nextN;
    }
}