package com.syntax.class08;

import java.util.Scanner;

public class JavaLoopsRepl65 {
	 public static void main(String[] args) {
		 Scanner input=new Scanner(System.in);
		 int x;
		System.out.println("In: ");
		  x=input.nextInt();
		
		 
		 for(int i=x-1; i>=0; i--) {
			 
			 System.out.print(i+" ");	
		 } 
	 }

}
