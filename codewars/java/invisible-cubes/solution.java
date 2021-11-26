public class NotVisibleCubes {
  public Long notVisibleCubes(Long n) {
    if (n < 2) return 0L;
    
    Long smSide = n - 2;
    return smSide * smSide * smSide;
  } 
}