package com.syntax.class04;

import java.util.Scanner;

public class ExampleofScanner {
	public static void main(String[] args) {
		 Scanner scan=new Scanner(System.in);
		 System.out.println("Please enter a number");
		int num=scan.nextInt();
		if(num%2==0) {
			System.out.println("Value is even");
			if(num>1000) {
				System.out.println("Even value is large");
			}else {
				System.out.println("even value is just right");
			}
			
		}else if(num%2==1) {
			System.out.println("Value is odd");
		}
	}
}

	
	
	

