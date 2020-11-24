package com.syntax.class03;

public class AdditionVsConcatenation {
	public static void main(String[] args) {
		int a=10;
		int b=20;
		
		String x="hello";
		String y="bye";
		
		System.out.println(a+b+x+y);
		
		System.out.println(a+x+b+y);
		
		System.out.println(x+y+a+b);	
		
		System.out.println(x+y+(a+b));
		
		System.out.println(a+""+b+x+y);
		
		
		
		
		
		
	}

}
