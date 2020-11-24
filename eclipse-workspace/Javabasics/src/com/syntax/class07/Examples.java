package com.syntax.class07;

import java.util.Scanner;

public class Examples {
//asel best solution to teh task
	//  //we are playing a lottery and a luck number is 17
    //ask user any number 1-20 until he guess our number---->
	

	public static void main(String[] args) {
	Scanner scan=new Scanner(System.in);
	
		int number;
		int LuckyNumber=17;
		do {
		System.out.println("please enter any number");	
		number=scan.nextInt();
		
		}while(number!=LuckyNumber);
		System.out.println("you got it");
		
		}
	}

