package com.sysntax.repl;

public class NestedLoopsRepl68 {

	public static void main(String[] args) {
		int row=4;
		for(int i=1; i<=row; i++) {
				for(int j=1; j<=row; j++) {
					if(i==1 || i==row || j==1 || j==row) {
					System.out.print("$");	
					}else {
						System.out.print(" ");
					}		
		}System.out.println();
	  }
}
}