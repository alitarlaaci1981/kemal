package com.syntax.class06;

import java.util.Scanner;

public class TryOut {
	public static void main(String[] args) {
		
		Scanner scan= new Scanner(System.in);
		
		/*Prompt the user to enter person heights in inches. 
		 * Person should be classified as one of the following:•
		 *  short (under 60 inch)• medium(between 60 -72 inch)• tall (over 72 inch)
		 */
		System.out.println("please enter your height");
		int height=scan.nextInt();
		String size=scan.nextLine();
		
		if(height>0&& height<=60) {
			size=" you are short";
		}else if(height>=60&&height<72) {
			size="you are medium";
			
		}else if(height>72){
			size="you are tall";
			
		}else {
			System.out.println("invalid height");
		}		
			
		}
	}
	


