package com.syntax.class07;

public class PostAndPreIncrement {

	public static void main(String[] args) {
		boolean workDay=true;
	    int day=1;
	    
	    if (workDay) {
	        System.out.println("I need a day off");
	        
	        while(day<6) {
	            day++;
	            System.out.println(day);
	        }System.out.println("I dont need day off any more");

	}
	}
}
