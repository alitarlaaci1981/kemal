package com.syntax.class08;

import java.util.Scanner;

public class LoopsTask2 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
        System.out.println("please enter a number from 10-50");
		input = new Scanner(System.in);
		int num= input.nextInt();
		int evenSum=0;
		int oddSum=0;
		for (int i=1; i<=50; i++ ) {
			if (i%2==0) {
				evenSum=evenSum+i;
			} else {
				oddSum=oddSum+i;
			}
		}
		System.out.println("The sum of the even integers are "+evenSum);
		System.out.println("The sum of the odd integers are "+oddSum);
			}
}







	


