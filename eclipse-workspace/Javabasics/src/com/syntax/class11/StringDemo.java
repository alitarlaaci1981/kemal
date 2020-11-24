package com.syntax.class11;

public class StringDemo {

	public static void main(String[] args) {
		String school="syntax ";
		String str=new String("HELLO");
		String str1=" this is String 57484564";
		
		//how many characters String hass
		System.out.println("====LENGTH FUNCTION");
		System.out.println(school.length());
		int size=str.length();
		System.out.println("String length is "+size);
		//convert String to lowercase or upper case
		
		System.out.println("TO uPPER CASE/LOWER CASE");
		System.out.println(school.toUpperCase());
		System.out.println(str.toLowerCase());
		str=str.toLowerCase();
		System.out.println(str);
		//concatine 2 strings
		
		System.out.println("CONCATINATE");
		String newString=str+school;
		System.out.println(newString);
		
	}

}
