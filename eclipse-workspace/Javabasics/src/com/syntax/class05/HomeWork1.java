package com.syntax.class05;

import java.util.Scanner;

public class HomeWork1 {
	public static void main(String[] args) {
		
		Scanner scan=new Scanner(System.in);
		
		System.out.println("please enter quiz");
		int quiz=scan.nextInt();
		System.out.println(" please enter midterm:");
		int midterm= scan.nextInt();
		System.out.println("please enter final");
		int finals =scan.nextInt();
		int Score=(quiz+midterm+finals)/3;
		String grade=scan.nextLine();
	if(Score>=90) {grade="A";}
		
	else if(Score>=70 && Score<90) {grade="B";}
	
    else if(Score>50&&Score<70) {	grade="C";}

    else if(Score<50){grade="F";}
	
    System.out.println("your grade is "+grade);
	}

}
