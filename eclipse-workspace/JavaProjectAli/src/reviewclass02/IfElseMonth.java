package reviewclass02;

import java.util.Scanner;

public class IfElseMonth {

	public static void main(String[] args) {
	Scanner scan=new Scanner(System.in);
	System.out.println("please enter the number of the months");	
	int month= scan.nextInt();
	
	if(month==1) {
		System.out.println("january");
	}else if(month==2) {
		System.out.println("february");
	}else if(month==3) {
		System.out.println("march");
	}else if (month==4){
		System.out.println("April");
	}else if(month==5) {
		System.out.println("may");
	}else if(month==6){
	System.out.println("june");
	
	}else if(month==7) {
		System.out.println("july");
	}else if(month==8) {
	System.out.println("august");
	}else if(month==9) {
		System.out.println("september");
	}else if(month==10) {
		System.out.println("october");
	}else if(month==11) {
		System.out.println("november");
	}else if(month==12) {
	System.out.println("december");	
	}else{
	System.out.println("invalid month");	
	}
		System.out.println("i dont care");	
    }
	
	
	}
	

	


