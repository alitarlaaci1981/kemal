package com.syntax.class13;
class Student{
	String name;
	int age=0;
	int roll;
	char grad;
	
	void speak() {
		System.out.println(" my name is "+name+ " my age is "+age+" my roll "+roll+"my grade is "+grad);
	}
	
	
	 void grade(int avarage){
		 if(avarage>70 && (avarage<=100)) {
			  grad='A';
			  }else if((avarage>50)&&(avarage<=70)){
				 grad='B'; 
			  }else {
				   grad='F';
				  
			  }System.out.println(grad);
		
		 }
	}
public class TestClassMethod {

	public static void main(String[] args) {
		Student s1=new Student();
		Student s2=new Student();
		
		s1.name="ali";
		s1.roll=101;
		s2.name="servet";
		s2.age=38;
		s2.roll=102;
	    s1.grade(45);
	    s2.grade(90);
	    s1.speak();
	    s2.speak();
	}
	
	}
	


