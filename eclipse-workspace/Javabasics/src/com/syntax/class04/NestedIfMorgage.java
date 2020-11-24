package com.syntax.class04;

public class NestedIfMorgage {

	public static void main(String[] args) {
		int price = 300000;
		int rate= 2;
		if (rate>4.5) {
			System.out.println("Morgage very High");			
		}
		else {
			if (price>200000) {
				System.out.println("I need morgage");
			} else {
				System.out.println("I pay cash");
			}
		}
		
		
		
	}	
}
