package com.syntax.class05;

import java.util.Scanner;

public class ScannerandLogicalOperators {

	public static void main(String[] args) {
		//take age input from a user and then based on the age print output
		//if age is from 0-3--you are a baby 4-5---you are a kid
		//if age is from 6-12--you are a child
		//if age from 13-19--you are a teeanger
		//if age is from 20-64 --you are an adult
		//if age is more than or equal to 65--you are a senior
		/*lets declare variables
		 * import we use ;ctrl+shift+0
		 */
		//1 lets declare all variables
		int age;
		//2. capture values
Scanner scan=new Scanner(System.in);
System.out.println(" please enter your age");
age=scan.nextInt();
//3. perform verification
if(age>0&&age<3) {
	System.out.println("you are a baby");
}else if(age >=3&&age<=5) {
	System.out.println("you are a child");	
	}else if(age>-6&&age<12) {
	System.out.println("you are a kid");	
	}else if(age>13&&age<19) {
		System.out.println("you are a teenager");
	}else if(age>=20&&age<=65) {
	System.out.println("you are an adult");	
	}
}
	}


