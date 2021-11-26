import java.math.BigInteger;
public class SumFct {
  public static BigInteger perimeter(BigInteger n) {
        BigInteger f0 = BigInteger.ZERO;
        BigInteger f1 = BigInteger.ONE;
        BigInteger placeholder = BigInteger.ZERO;

        BigInteger bigSum = BigInteger.ONE;

        for (int x = 1; x <= n.intValue(); x++) {
            placeholder = f0.add(f1);
            f0 = f1;
            f1 = placeholder;

            bigSum = bigSum.add(f1);
        }

        return bigSum.multiply(BigInteger.valueOf(4));
  }
}