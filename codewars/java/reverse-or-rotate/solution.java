class RevRot {
    
    public static String revRot(String strng, int sz) {
      if (sz <= 0 || sz > strng.length() || strng.isEmpty()) {
        return "";
      }
      
      String strngNew = "";
      
      for (int x = 0; x < strng.length(); x = x + sz) {
        if (x + sz > strng.length()) break;
        
        String chunk = strng.substring(x, x + sz);
        
        int n = 0;
        for (String ns : chunk.split("")) {
          n += Math.pow(Integer.valueOf(ns), 3); 
        }
        
        String chNew = "";
        
        if (n % 2 == 0) {
          for (String ch : chunk.split("")) {
            chNew = ch + chNew;
          }
        } else {
          chNew = chunk.substring(1, chunk.length()) + chunk.substring(0, 1);
        }
        
        strngNew += chNew;
      }
      
      return strngNew;
    }

}