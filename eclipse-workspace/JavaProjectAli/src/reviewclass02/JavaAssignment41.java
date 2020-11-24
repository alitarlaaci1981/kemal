package reviewclass02;

import java.util.Scanner;

public class JavaAssignment41 {

	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		int age;
		System.out.println("enter the age of the Child ");
		age=scan.nextInt();
		String status;
		status=scan.nextLine();
		switch(age) {
		
		case 1:
		status="You can crawl";
		break;
		case 2:
		status="You can talk";
		break;
		case 3:
	    status="You can dance";
	    break;
		case 4:
		status="You can get trouble";
		break;
		default:
		status="I dont know how old you are";
		
		}System.out.println(status);
	}

}
