package reviewclass02;

import java.util.Scanner;

public class JavaAssignment40 {

	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		 byte num;
		 String day;
		 System.out.println("Enter any number from 1-7.");
		 num=scan.nextByte();
		 day=scan.nextLine();
		
		 switch(num) {
		 case 1:
		 day="monday";
		 break;
		 case 2:
	     day="Tuesday";
	     break;
		 case 3:
		 day=" wednesday";
		 break;
		 case 4:
		 day="thursday";
		 break;
		 case 5:
		 day="friday";
		 break;
		 case 6:
		 day="Saturday";
		 break;
		 case 7:
		 day="Sunday";
		 break;
		 default:
		 day="Invalid";
			 
		 }System.out.println(day);
		 
	}
	

}
