package com.syntax.class09;

public class PattersnInJava {

	public static void main(String[] args) {
	for(int i=1; i<=5; i++) {     // this line simply prints 5 star
	System.out.print("*");
	
	}
	System.out.println("=====================PRINTING PATTERNS WITH LOOPS");
	for(int i=1; i<=4; i++) {
		for(int j=1; j<=5; j++) {
			System.out.print("*");
		}System.out.println("*");
	
	}System.out.println("DIFFERENT PATTERNS");
	for(int i =1; i<=10; i++){                  //10 by 10 rows
		for(int j=1; j<=10; j++) {
			System.out.print("*");
		}System.out.println("*");
		
	}System.out.println("========DIFFERENT PATTERNS");
	for(int i=1; i<=5; i++) {                       // 5 by 10 rows
		for(int j=1; j<10; j++) {
			System.out.print("*");
		}System.out.println("*");
	}
	}
}
