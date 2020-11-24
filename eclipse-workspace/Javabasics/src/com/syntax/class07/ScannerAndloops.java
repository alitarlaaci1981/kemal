package com.syntax.class07;

import java.util.Scanner;

public class ScannerAndloops {

	public static void main(String[] args) {
		//we want ask users name and print Good Afternoon________;//good afternoon 5 times
		
		Scanner input;
		String name;
		int num=1;
		input=new Scanner(System.in);
		while(num<=5) {
		System.out.println(" What is your name ");
		
		
	    name=input.nextLine();
	    
	    System.out.println(" good afternoon "+name);
	    num++;
		}  
		System.out.println("+++++++++++++++++++++++++++++++++++++++++++++");
		
	int num2=1;
	while(num2<17) {
	System.out.println("enter your number");
	num =input.nextInt();
	num++;
	System.out.println(" lets go wegas");
	}
	}			
}

