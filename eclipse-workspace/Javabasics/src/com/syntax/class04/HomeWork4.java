package com.syntax.class04;

import java.util.Scanner;

public class HomeWork4 {
	public static void main(String[] args) {
		Scanner worker= new Scanner(System.in);
		System.out.println("enter the number of worked years");
		int years= worker.nextInt();
		if(years>=5) {
			System.out.println("user eligable for bonus");
			
		System.out.println("enter the annual salary");
		int salary= worker.nextInt();
		if(salary<=50000) {
			System.out.println("you earn 5000$ bonus");
		}else if(salary<50000) {
			System.out.println("you earn 3000$ bonus");
		}
	}else {
		System.out.println(" you are not eligable for the bonus ");
	}
	
		
	}
}