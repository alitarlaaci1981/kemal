package com.sysntax.repl;

public class Arrays2dRepl85 {

	
		public static void main(String[] args) {
		
			int[][] a = {
				{1,1,2}, //sum = 4
				{3,1,2}, //sum = 6
				{3,5,3}, //sum = 11
				{0,1,2}  //sum = 3
				
			};
			for(int i=0; i<a.length; i++){
			    int sumRow=0;
			    for(int j=0; j<a[0].length; j++){
			        sumRow=sumRow+a[i][j];
			    }
			    System.out.println(sumRow);
			}
			
			
			
			
		
		}

	}


