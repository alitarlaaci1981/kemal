package reviewclass03;

public class WhileDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
String greeting="hello";
   int count=1;
   while(count<=10) {
	count++;
	//count=count+1;   second way
	//count=+1;    third way
	System.out.println(greeting);
}System.out.println("===========================================");
   //reassigning count to 1
   count=1;
   while(true) {
	   count++;
	   System.out.println(greeting);
	   if(count==6) {
		   break;
	   }
   }


	}

}
