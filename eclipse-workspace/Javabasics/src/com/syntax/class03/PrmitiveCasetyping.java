package com.syntax.class03;

public class PrmitiveCasetyping {
	public static void main(String[] args) {
		
		
		//widenin ,happens implicitly
		//byte -128 to 127
		
		double d=10;
		System.out.println(d);
		//int i=10.99--- compile time error
		
		
		int i=(int)10.99;
		System.out.println(i);
		
	    byte b= (byte)1284;
		System.out.println(b);
		
		 double x=500.4444;
	       long L =(long)x;
	       
		    System.out.println(L);
		    
		
		
		    
		
		
	}
	
	                                       

}
