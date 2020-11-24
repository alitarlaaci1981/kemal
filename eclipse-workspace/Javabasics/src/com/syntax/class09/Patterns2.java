package com.syntax.class09;

public class Patterns2 {

	public static void main(String[] args) {
		//for (int i=1; i<=5; i++) {
			//for(int j=1; j<=5; j++) {
				//System.out.print(i);// (i) prints outer loop, (j) prints inner loop
			//}
			//System.out.println();              //printing 123456789 5 times
			//for(int i1=1; i1<=5; i1++) {
			//for(int j=1; j<=9; j++) {
			//	System.out.print(j);
			//}System.out.println();
			
			//}
	       //  for(int i=5; i>0; i--) {                     //print paters of 54321  5 times
			//	for(int j=5; j>0; j--) {
				//	System.out.print(j);
				//}System.out.println();
			//}System.out.println();
	     //    for(int i=5; i>0; i--) {                           // 55555
	       // 	 for(int j=5; j>0; j--) {                        //44444
	      //  		 System.out.print(j);                        //33333
	      //  	 }System.out.println();                          //22222
	 //        }                                                   //11111
		for(int i=1; i<=4; i++) {
			for (int k=1; k<=i; k++) {                  //creating a triangle
				System.out.print("*");
			}System.out.println();
		}
			
	for(int i=1; i<=5; i++) {
		for (int k=1; k<=i; k++) {                  //creating a triangle of numbers
			System.out.print(k);
		}System.out.println();
	}
	}			
}	
			

	


