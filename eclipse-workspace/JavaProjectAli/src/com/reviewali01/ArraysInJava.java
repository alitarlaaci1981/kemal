package com.reviewali01;

public class ArraysInJava {
public static void main(String[] args) {

	int[] numbers;
	numbers=new int[4];
	numbers[0]=1;
	numbers[1]=3;
	numbers[2]=5;
	numbers[3]=7;
	
	System.out.println(numbers[1]+numbers[2]);
  for(int x:numbers){
	System.out.println(x+" ");
	for(int a=0; a<4; a++) {
		System.out.println(numbers[a]);
	}System.out.println("=====================================");
	for(int y=0; y<7; y++ ) {
	System.out.print(numbers[y]+" ");
	
	}
}
}
}
