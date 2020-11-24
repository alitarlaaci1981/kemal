package com.syntax.class08;

public class PostAndPreIncrement {

	public static void main(String[] args) {
		//++,--
		//preincrement++y,or postincrement y++
		int z;
		int y=10;
		z=y++;//postincrement=first use the variable and then increment
		System.out.println(y);
		
		int w;
		int x=10;
		w=++x;//first increment and then use it and assign it
		System.out.println(x);
	int num=1;
	while(num<5) {
	
	System.out.println(++num);
	}
	System.out.println("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
	int num1=1;
	while(num1<5) {
	System.out.println(num1++);
	}
	int variableDay=1;//create a boolean variable workDay and assign true create int variable day and
	//assign it to 1
	// as long as it is workDay,print"i need a day off" and increase day.
	//once day is 6, print"i do not need a day off anymore"
	boolean workDay=true;
	while(workDay) {
		if(variableDay<6) {
			System.out.println("i need a day off");
		}else {
			System.out.println("i dont need a day off anymore");
			workDay=false;
		}variableDay++;
		
	}
}
}
