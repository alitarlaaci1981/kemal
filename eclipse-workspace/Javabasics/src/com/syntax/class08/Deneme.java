package com.syntax.class08;

import java.util.Scanner;

public class Deneme {

	public static void main(String[] args) {
		Scanner scan= new Scanner(System.in);
		
		System.out.println("enter a number");
		int value= scan.nextInt();
		while(value!=5) {
			System.out.println("enter a number");
			value=scan.nextInt();
			System.out.println("got 5!");
		}
		
		int value1=0;
		do {
			 value1=scan.nextInt();
			System.out.println("enter a number");
		}
		while(value1 !=5); {
			
		}
		System.out.println("got 5!");
	}

}
