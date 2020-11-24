package com.syntax.class03;

public class IfCondition {
	public static void main(String[] args){
	//declare a number and compare if number is larger than 100
		//if number is larger than 100--> my number is large
		System.out.println("start coding");
		int num=178;
		if(num>1000) {
			System.out.println("my number is large");
		}
		System.out.println("end of the programming");
		
		
		System.out.println("----------------------------");
		int expectedHours=15;
		int actualHours=15;
		//if actual is more than expected--> you will love Java
		if(actualHours>expectedHours) {//if true,go inside if block
			System.out.println("you will love Java");
		}
		else {//otherwise(if false)--> go inside else block
			System.out.println("you will not like Java");
		}
		System.out.println("---------------------->");
		//using if we are doing verification and selective execution
		double Budget=100000;
		double carPrice=120000;
		if (Budget>carPrice) {
			System.out.println("I will buy this car today");
		}
		else {//be very carefull to opening and closing the blocks:  {opening and closing}
			System.out.println("I will not buy this car today"
					+"I will learn java");
			System.out.println("I will be motivated");
			}
		System.out.println("I am code after if condition");
		
		
		//if is used to perform verification and using if we are doing selective execution
		//if(boolean expression){block of code}-----else{block of code}
		System.out.println("-------------------------------------->>>>");
		
	double num1=300;
	double num2=300;
	if(num1>num2) { 
		System.out.println("number one is larger than number 2");
		}else if(num1<num2)  { 
		System.out.println("number one is smaller than number 2");
	}else {
		System.out.println("numbers are equal");
		
	}
	int  temp= 31;
	int freezeTemperature=32;
	if(temp<32) {
		System.out.println("water will freeze with temperature "+temp);
	}else {
		System.out.println(" water will not freeze with temperature"+temp);
	}
	boolean flag=true;
	if(flag) {//if flag is true
		System.out.println("hello");
	}else {
		System.out.println("bye");
		System.out.println(flag);
		System.out.println("-------------------------------------------");
		//declare a variable for a day and then based on the value we will provide outout
		int day=1;
		if(day==1) {
			System.out.println(" it is monday,no class today");
		}else if(day==2) {
			System.out.println("it is tuesday,we have sdlc class");
		}else if(day==3) {
			System.out.println(" it is wednesday,we have sdlc class");
		}else if(day==4) {
			System.out.println("it s thursday,we have reviev class");
		}else if(day==5) {
			System.out.println("it s friday,no class");
		}else if(day==6) {
			System.out.println("its saturday,we have java class");
		}else {
			System.out.println("it s sunday,we have java class");
		}
	}
	
	
	}
	
	



	}
	
	

		

