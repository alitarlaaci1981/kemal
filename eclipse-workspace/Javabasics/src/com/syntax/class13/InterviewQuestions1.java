package com.syntax.class13;

public class InterviewQuestions1 {

	public static void main(String[] args) {
	//write a program to swap 2 numbers without a temporary variable. swap 2 strings without a temporay code
		
		
		
		int a=10;
		int b=20;
		a=a+b;//30
		b=a-b;//30-20=10
		a=a-b;
		System.out.println("the value of a="+a);
		System.out.println("the value of b="+b);
		
		String str1="Day";
		String str2="dight";
		str1=str1+str2;//DayNight---index is 8
		str2=str1.substring(0,str1.length()-str2.length());//Day
		str1=str1.substring(str2.length());//Night
		System.out.println("the value of str1="+str1);
		System.out.println("the value of str1="+str2);
		
		//another way
		String s1="Hello";
		String s2="Bye";
		String shorterstr1=s1+s2;
		s2=s1.replace(s2, "");
		
	}
	}


