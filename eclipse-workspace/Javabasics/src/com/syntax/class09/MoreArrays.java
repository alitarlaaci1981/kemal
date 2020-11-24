package com.syntax.class09;

public class MoreArrays {

	public static void main(String[] args) {
		String[]student=new String[3];//arrays are fixed in size
		//if we add more values then we declared--> array index out of bound
		student[0]="Hasna";
		student[1]="Faisal";
		student[2]="Kemal";
		//student[3]="Aaron";--->during run time java will give array out of bond exception error
		
//System.out.println(student[3]);//compiler is gonna give error. because w
		String[]inClassStudents=new String[5];
		inClassStudents[0]="Hichem";
	   inClassStudents[1]="Tetteh";
	  // System.out.println(inClassStudents[2]);//this will give you"null"output because it is out of boundry
	   System.out.println(inClassStudents[1]);
	   System.out.println(inClassStudents[0]);
	   //System.out.println(inClassStudents[3]); this will give you an error as well"null
	   
	}
}
