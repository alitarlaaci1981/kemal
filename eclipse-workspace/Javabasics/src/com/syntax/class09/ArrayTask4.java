package com.syntax.class09;

public class ArrayTask4 {

	public static void main(String[] args) {
	String[] animals= {"Horse","Bee","dog","cat","lion","bird"};
	System.out.println(animals[0]+" "+animals[1]+" "+animals[2]+" "+animals[3]+" "+animals[4]+" "+animals[5]);

		for(String animal:animals) {
			System.out.print(animal+" ");
			
		}
		System.out.println();
		
		int[]numbers= {1,2,3,4,5};
		int total=0;
		for(int i=0; i<numbers.length; i++) {
        total+=numbers[i];

			//	int [] nums= {1, 2, 3, 4, 5, 6, 7, 8, 9};   ///finish this
			//int total=0;
//			for (int i=0; i<nums.length; i++) {
//				total += nums[i];
//			}
//			System.out.println(total);
        
		}System.out.println(total);
	}
	
	}


