package com.syntax.class08;

import java.util.Scanner;

public class LoopsTask {
//Create a program that will be asking user to apply for a credit card 10 times.
	//As soon you get an “yes” from a user program should stop asking.

	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);// TODO Auto-generated method stub
boolean answers;

for(int i=1;i<=10;i++) {
	System.out.println("apply for a credit card 10 times");
	answers=scan.nextBoolean();
	if(answers==true) {
		
		break;
	}
}System.out.println("apply");

	}
	
}

