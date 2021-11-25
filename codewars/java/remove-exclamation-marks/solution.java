// replaceAll method instead of a manual for loop

class Solution {
    static String removeExclamationMarks(String s) {
        return s != null? s.replaceAll("!", "") : s;
    }
}