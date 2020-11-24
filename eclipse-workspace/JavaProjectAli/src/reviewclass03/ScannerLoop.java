package reviewclass03;

import java.util.Scanner;

public class ScannerLoop {

	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		 
	        int num;
	        int total=0;
	        scan=new Scanner(System.in);
	        
	        do {
	        System.out.println("Enter number.To stop enter -1.");
	        num=scan.nextInt();
	        total=total+num;
	        
	        System.out.println("Total numbers are "+total);
	        
	        
	        } while (num>0);
	        

			
		}
	}


