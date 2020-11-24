package com.syntax.class04;

import java.util.Scanner;

public class NestedIfAssignment {

	public static void main(String[] args) {
		Scanner scan;
		boolean loan;
		int score;
		String eligibility;
		
		scan=new Scanner(System.in);
	    System.out.println("Do you need a loan?");
		loan=scan.nextBoolean();
		
		
			
			if(loan) {
			System.out.println("What is your credit score?");
			score=scan.nextInt();
				if(score<600) {
				eligibility="Not eligible";
				}else if(score>=600&&score<=700) {
					eligibility="maybe eligible";
				}else if(score>=701&&score<=800) {
				eligibility="Eligible";
			}else {
				eligibility="Definitely Eligible";
			}
			}else {
			    eligibility="Unknown";	
			}
			System.out.println("The eligibility is "+eligibility);
			
			}	
		}
		