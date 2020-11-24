package reviewclass03;

public class SumEvenWhile {
	public static void main(String[] args) {
		
	int totalEven=0;
	int totalOdd=0;
	
for(int count=1; count<50; count++) {
	if(count%2==0) {
		totalEven+=count;
	}else {
		totalOdd+=count;
	}
}
System.out.println("total even is "+totalEven);
System.out.println("total even is "+totalOdd);
System.out.println("grand total is "+totalEven+totalOdd);
}
}