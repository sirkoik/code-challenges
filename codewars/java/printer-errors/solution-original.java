public class Printer {
    
    public static String printerError(String s) {
      final int l = s.length();
      int errors = 0;
      
      for (int x = 0; x < s.length(); x++) {
        if ((int) s.charAt(x) >= 110) {
          errors++;
        }
      }
      
      return errors + "/" + l;
    }
}