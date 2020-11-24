package com.reviewali01;

public class TypeConversion {

	public static void main(String[] args) {
	
	int numberint=19;
	byte numberbyte=(byte)numberint;
	System.out.println("the byte value is "+numberbyte);
	
	numberbyte=80;
	numberint=(byte)numberbyte;
	System.out.println("the int value is "+numberint);
	}

}
