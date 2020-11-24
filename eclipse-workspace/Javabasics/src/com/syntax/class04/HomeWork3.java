package com.syntax.class04;

import java.util.Scanner;

public class HomeWork3 {
	public static void main(String[] args) {
		Scanner banking= new Scanner(System.in);
		System.out.println(" do you have a credit card?");
		String question= banking.nextLine();
		System.out.println("whats the balance on the card");
		int balance=banking.nextInt();
		if(balance>1000) {
			System.out.println("pay of immediately");
		}else {
			System.out.println(" you can spend more");
		}
	}

}
