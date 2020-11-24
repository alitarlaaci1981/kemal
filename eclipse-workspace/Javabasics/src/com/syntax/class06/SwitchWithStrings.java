package com.syntax.class06;

import java.util.Scanner;

public class SwitchWithStrings {

	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		String country;
		String favoriteFood;
		System.out.println("please enter your country");
		country=scan.nextLine();
		switch(country.toLowerCase()) {
		case "Morocco":
		favoriteFood="couscous";
		break;
		case "Turkey":
			favoriteFood="baklava";
			break;
		case "kazakhstan":
			favoriteFood="beshparmak";
			break;
			default:
				favoriteFood="unknown";
			
		
		}
		System.out.println("your country is "+country+" your favorite food is "+favoriteFood);	
	}

}
