package com.reviewali01;

public class ArraysJava {

	public static void main(String[] args) {
	String[] Cars= {"Honda","Toyota","HaciMurat"};
	System.out.println(Cars[0]);
	System.out.println("============================================");
	for(String araba:Cars) {
		System.out.println(araba);
	}
	System.out.println("==============================================");
	for(int x=0; x<3; x++) {   //  second way     for(int x=0; x,numbers.length; x++)
		System.out.println(Cars[x]+" ");
	}
	}

}
