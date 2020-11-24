package com.sysntax.repl;

import java.util.Scanner;

public class Arrays76Repl {
	//Write a program that creates a String array with size 7. 
	//Ask the user to input Days of a week beginning with Sunday using Scanner class.
	//Add these inputs to your array and then print all values from that array

	//Example:
	//Please enter day 1 of the week
	//Sunday
	//Please enter day 2 of the week
	//Monday
	//Please enter day 3 of the week
	//Tuesday etc
	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		String day[]=new String[7];
		for(int row=0; row<7; row++) {
			System.out.println("Please enter day "+(row+1)+" of the week");
			day[row]=scan.next();
			
		}
		for(int i=0; i<day.length;i++) {
			System.out.println(day[i]);
		}
		
		
		

	}

}
