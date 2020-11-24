package com.reviewali01;

public class VariableDemo {
	public static void main(String[] args) {
		//String is a non primitive
		       //declare variable; assign a value
		String firstName;
		firstName="john";
		
		String LastName="Smith";
		int age=28;
		System.out.println(firstName+" "+LastName+" is "+age+" years old ");
		//re-assign a new value by using the same variable(lastname)
		LastName="Brown";
		age=32;
		LastName= "brad";// re assigned the value of the last name
		System.out.println(firstName+" "+LastName+" is "+age+" years old ");

		int num1=4;
	    int num2=2;
	    int result1=num1*num2;
	    int result2=num1+num2;
	    int result3=num1-num2;
	    int result4=num1/num2;
	    System.out.println(num1+num2);
	    System.out.println(num1*num2);
	    System.out.println(num1-num2);
	    System.out.println(num1/num2);
}      
	

}
