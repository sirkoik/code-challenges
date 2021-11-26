public class ReverseLonger {

  public static String shorterReverseLonger(String a, String b) {
    // Don't allow null
    if (a == null || b == null) {
      return "";
    }
    
    // Setup short and long
    String s, l;
    if (a.length() < b.length()) {
      s = a;
      l = b;
    } else {
      s = b;
      l = a;
    }
    
    // Reverse the long string
    String[] lArr = l.split("");
    String lReverse = "";
    
    for (int i = lArr.length - 1; i >= 0; i--) {
      lReverse += lArr[i];
    }
    
    return s + lReverse + s;
  }

}