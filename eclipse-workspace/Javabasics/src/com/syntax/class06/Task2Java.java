package com.syntax.class06;

import java.util.Scanner;

public class Task2Java {
	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		System.out.println("please enter a grade");
		char grade;
		grade = scan.next().charAt(0);
		String status;
	    switch(grade) {
		
		case'A':
			status="Excellent";
			break;
		case'B':
			status="Good";
			break;
		case'C':
			status="Avarage";
			break;
		case'D':
			status="bad";
			break;
			default:
		    status="not acceptable";
		
		}
		System.out.println("Your grade is "+grade+"="+status);
	}
	
}
