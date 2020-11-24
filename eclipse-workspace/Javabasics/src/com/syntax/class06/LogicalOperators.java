package com.syntax.class06;

public class LogicalOperators {
	public static void main(String[] args) {
/* we have total 7 days in a week
 * if day is 2,3----sdlc class
 * if day 6,7 --java class
 * if day 1,5 off day
 * if day 4---review class
 * 
 */
		//to compare 2 number,we use equality operator(==)
		int day=7;
		day=7;
		if(day==2||day==3) {
			System.out.println("today is sdlc class");
		}else if(day==6||day==7){
			System.out.println("today is Java class");
		}else if(day==1||day==5) {
			System.out.println("today is off day");
		}else if(day==4) {
			System.out.println("we have review class");
		}else {
			System.out.println("invalid day");
			
		}
	System.out.println("--------------------------------------------------");
	//using String in logical operators
	//to compare string,we use equals
	String day1="wednesday";
	if(day1.equals("tuesday")|| day1.equals("wednesday")){
		System.out.println("today is sdlc class");
	}else if(day1.equals("saturday")||day1.equals("sunday")) {
		System.out.println("today is java class");
	}else if(day1.equals("monday")||day1.equals("friday")){
		System.out.println("today is off day");
	}else if(day1.equals("thursday")) {
		System.out.println("today is review class");
	}else {
		System.out.println("invalid day");
	}
	}
	
	 
	
	
	}
	


