package com.syntax.class05;

public class logicalOperators {

	public static void main(String[] args) {
		/* we have total 7 days in a week
		 * if day is 2,3---sdlc class
		 * if day 6,7  --java c class
		 * if day 1,5 ---off day
		 * if day 4====review class
		 * 
		 */
		int day=1;
	if(day==2 && day==3){
	System.out.println("today is sdlc class");	
		//to compare strings we use equals....very important
	}else if(day==6 &&day ==7) {
		System.out.println("today is Java class");
	}else if(day==1 && day==5) {
		}else if(day==4) {
		System.out.println("today is a review class with elion");
		}else if(day==5) {
			System.out.println("we are off");
		}	else {
		System.out.println("invalid day");
	}
	}

}
