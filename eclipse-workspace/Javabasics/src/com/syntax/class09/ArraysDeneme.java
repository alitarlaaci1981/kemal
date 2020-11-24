package com.syntax.class09;

import java.util.Scanner;

public class ArraysDeneme {
public static void main(String[] ags) {
	Scanner scan=new Scanner(System.in);
	int[] array=new int[10];
	int sum=0;
	System.out.println("Enter the elements");
	for(int i=0; i<10; i++) {
		array[i]=scan.nextInt();
		
	}for(int num:array) {
		sum=sum+num;
		
	}System.out.println("summary of array elements is : "+sum);
}
}
