public class Solution{
    public static int[] solve(String[] arr){
      int symmetries[] = new int[arr.length];
      
      for (int i = 0; i < arr.length; i++) {
        String[] letters = arr[i].split("");
        
        // gets the ascii code of a character, adding 65 so that it's in the
        // correct position of the (uppercase) alphabet. Then it converts back
        // to a string so that it can be compared.
        for (int j = 0; j < letters.length; j++) {
          String indexAsStr = String.valueOf((char)(j + 65));
          
          // here indexAsStr is compared to letters[j] uppercase. If they are 
          // the same character, then the symmetry value is incremented by one.
          if (indexAsStr.equals(letters[j].toUpperCase())) {
            symmetries[i] += 1;
          }
        }
      }
      
      return symmetries;
    }
}