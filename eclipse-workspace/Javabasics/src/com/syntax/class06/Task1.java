package com.syntax.class06;

import java.util.Scanner;

public class Task1 {
public static void main(String[] args) {
	Scanner scan=new Scanner(System.in);
	System.out.println("enter your country");
	String country;
	country=scan.nextLine();
	String language;
	
	switch(country) {
	case "turkey":
		language="Turkish";
		break;
	case "england":
		language="english";
		break;
	case "france":
		language="french";
		break;
	case "greece":
		language="greek";
		break;
		
		default:
			language="unknown";
			
	}
	System.out.println("you are from "+country+" and your language is "+language);		
}
}
