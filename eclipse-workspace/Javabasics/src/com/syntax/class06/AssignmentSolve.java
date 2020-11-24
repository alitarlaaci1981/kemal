package com.syntax.class06;

import java.util.Scanner;

public class AssignmentSolve {

	public static void main(String[] args) {
		Scanner scan= new Scanner(System.in);
		
		String word1;
		String word2;
		int num1;
		int num2;
		System.out.println("please enter two strings");
		word1 =scan.nextLine();
		word2=scan.nextLine();
		System.out.println("please enter two numbers");
		num1=scan.nextInt();
		num2=scan.nextInt();
		String output=null;
		if(num1==num2&& word1.equals(word2)){
			output="AND";
		}else if(num1==num2||word1==word2) {
			output="OR";
		}else if(num1!=num2&&word1!=word2) {
			output="NONE";
			
		}System.out.println(output);
			}
			
			
	
		
		}
