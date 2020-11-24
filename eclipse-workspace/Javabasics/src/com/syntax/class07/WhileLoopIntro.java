package com.syntax.class07;

public class WhileLoopIntro {

	public static void main(String[] args) {
		int num1=20;
		while(num1<=30) {
			System.out.println(num1);
			num1++;
		}System.out.println("*************************************");
		int num2=5;
		while(num2<=15) {
			System.out.print(num2+" ");
			num2++;
		}//how to print values from 10 to 1
		int num3=10;
		while(num3>=1) {
			System.out.println(num3);
			num3--;
			
		}int num4=50;
		while(num4>=1) {
			System.out.println(num4);
			num4--;
		
		}System.out.println("*************");
		//how to print odds numbers from 1 -20
		//1 way icrementing 
		int num5=1;
		while(num5<10) {
		System.out.println(num5);
		num5+=2;
	   
		}//second way
		int num6=1;
		while(num5<20) {
			System.out.println(num6++);
			num6++;
			
		}
}
}