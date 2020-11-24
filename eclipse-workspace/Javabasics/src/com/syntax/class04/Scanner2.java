package com.syntax.class04;

import java.util.Scanner;

public class Scanner2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Scanner heat  =new Scanner(System.in);
System.out.println("please enter the city");
String city= heat.nextLine();
System.out.println("plase enter the temperature");
	int temp=heat.nextInt();
	double degree=(temp-32)/ 1.8;
	int celc=(int) degree;
	
	System.out.println("the temperature is the city of "+city+" is "+celc);
	
	}
	}
	

