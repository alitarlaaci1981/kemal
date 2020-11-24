package com.syntax.class03;

public class PrimitiveCastingRecapClassNotes {
	public static void main(String[] args0) {
		
		//casting in java is changing  value of one type to another type
		
		//casting is applicaple for  primitive types(numeric values) and  non primitive types
		//two types of casting.
		
		// first way of casting is widening(implicit,automatically) and second one is narrowing(explicit,manually)
		
		//byte->short->int->long->float->double( widening,implicitly,automatically)
		
		//double->float->long=>int->short->byte(narrowing,downcasting)
		double d=10;// widening
		
		System.out.println(d);//10.0
		
		int i=(int)10.99;//narrowing,explicitly implementing
		System.out.println(i);
		byte b=(byte)1284;
		System.out.println(b);
		
	}

}
