package com.syntax.class03;

public class ShorthandOperatorsRecap {
	public static void main(String[] args) {
		
		int num=200;
		num=num+300;
		System.out.println(num);//500
		num=num-100;//reassigned the value
		System.out.println(num);//400
		
		//compund shorthand  assignment operators
		
		num-=100;// short way to do it // num=num-100;   long way to do it!
		System.out.println(num);//300
		
		num+=50;//num=num+50
		System.out.println(num);//350
		num/=7;
		System.out.println(num);//50
		num*=10;
		System.out.println(num);//500
	    num%=5;
	    System.out.println(num);//0
	}
	

	
}
