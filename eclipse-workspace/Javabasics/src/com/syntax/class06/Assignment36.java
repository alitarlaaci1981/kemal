package com.syntax.class06;

import java.util.Scanner;

public class Assignment36 {
	 public static void main(String[] args) {
		 Scanner scan= new Scanner(System.in);
		 System.out.println("PLEASE ENTER AND NUMBER FOR MULT");
			double num = scan.nextInt();
			for (double i = 1; i <= 10; i++) {
				System.out.println(num+"+"+i+"="+(num/i));
			}
		 }
}
