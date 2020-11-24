package reviewclass02;

import java.util.Scanner;

public class JavaAsssignments {
public static void main(String[] args) {
	Scanner scan=new Scanner(System.in);
			int mark;
			String grade;
			System.out.println("Please enter your mark ");
			mark=scan.nextInt();
			if(mark>=1&&mark<=25) {
				grade="F";
			}else if(mark>=25&&mark<=45) {
				grade="E";
			}else if(mark>=45&&mark<=50) {
				grade="D";
			}else if(mark>=50&&mark<=60) {
				grade="C";
			}else if(mark>=60&&mark<=80) {
				grade="B";
			}else if(mark>80) {
				grade="A";
			}if(mark<=0) {
				
				System.out.println("please enter valid mark");
				
			}
			
				
			}
	
			}


