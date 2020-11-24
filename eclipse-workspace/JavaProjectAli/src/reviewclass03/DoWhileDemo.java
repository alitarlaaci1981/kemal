package reviewclass03;

public class DoWhileDemo {

	public static void main(String[] args) {
		//similarities between while and do while loops
		int age=0;  //just born
		while(age<10){
			System.out.println(" Happy Birthday! you are "+age+ " years old ");
			age++;
			
		}
		System.out.println("Now you are grown! you dont need a birthday celebration");
		int age2=0;//second son just born
		do {
			age2++;
			System.out.println(" Happy Birthday! you are "+age+ " years old");
			
		}while(age2<10);
		System.out.println("Now you are grown! you dont need a birthday celebration");
		//differences between while and do while loops
		String greeting="hi";
		boolean happy=false;
		while(happy) {
			System.out.println(greeting+" inside while");
			
		}do {
			System.out.println(greeting+" inside do while");
		}while(happy);
		
			
		
	}
}

