class Solution {
    static String removeExclamationMarks(String s) {
        String[] sArr = s.split("");
        String sNew = "";

        for (int x = 0; x < sArr.length; x++) {
          if (!sArr[x].equals("!")) sNew += sArr[x];
        }
      
        return sNew;
    }
}