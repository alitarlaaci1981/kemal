package com.syntax.class06;

import java.util.Scanner;

public class HomeWork {
	public static void main(String[] args) {
		Scanner scan= new Scanner(System.in);
		
		int num1;
		int num2;
		int result  ;
		char operator;
		System.out.println("please enter a number");
		num1=scan.nextInt();
		System.out.println("please enter a number");
		num2=scan.nextInt();
		System.out.println("please enter an operator");
		operator=scan.next().charAt(0);
		switch(operator) {
		case '+':
		result=num1+num2; break;
		case'-':
		result=num1-num2; break;
		case'*':
		result=num1*num2;break;
		case'/':
		result=num1/num2;break;
		default:
			System.out.println("invalid operator");
			result=0;
			}
		System.out.println("your result is "+result);		
		}
	}
