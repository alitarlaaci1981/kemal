package com.syntax.class05;

import java.util.Scanner;

public class HomeWork2 {
	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		System.out.println(" enter your birth month");
		String month=scan.nextLine();
		String season=null;
		if(month.equals("january")|| month.equals("february") || month.equals("march")) {
			season=" is winter";
		}else if(month.equals("april")|| month.equals("may")|| month.equals("june")) {
		season=" is spring";
		}else if(month.equals("july")|| month.equals("august")|| month.equals("september")) {
			season=" is summer";
		}else if(month.equals("october")|| month.equals("november")||month.equals("december"))
			season=" is autumn";
			
			
			System.out.println("you were born in "+season);	
		}
}
	


