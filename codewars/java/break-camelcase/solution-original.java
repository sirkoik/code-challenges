class Solution {
  // non-regex solution
  public static String camelCase(String input) {
    String out = "";
    String[] in = input.split("");
    
    for (int x = 0; x < in.length; x++) {
      out += x > 0 && !in[x].equals(" ") && !in[x-1].equals(" ") && in[x].equals(in[x].toUpperCase())? " " + in[x] : in[x];
    }
    
    return out;
  }
}