package com.syntax.class06;

import java.util.Scanner;

public class Assignment37 {

	public static void main(String[] args) {
	Scanner scan=new Scanner(System.in);
	System.out.println("is it weekend?");
	boolean weekend;
	String subject;
	weekend=scan.nextBoolean();
	if(weekend){
		subject="Java";
	}else {
			subject="Manual testing";
		}
	System.out.println("Today you will be learning "+subject);	
	}
		
	
	
		

	}


