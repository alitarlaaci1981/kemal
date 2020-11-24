package com.syntax.class09;

public class ArraysTask {
public static void main(String[] args) {
	char[] letters= new char[6];
	letters[0]='A';
	letters[1]='B';
	letters[2]='C';
	letters[3]='D';
	letters[4]='E';
	letters[5]='F';
	System.out.println(letters[1]);
	
	System.out.println();

 char[]letter={'A','B','C','D','E','F'};
 //getting all elements
 for(int i=0; i<letters.length; i++)
System.out.print(letter[i]+" ");

System.out.println("== printing using advanced for loop===");
for(char grade:letter) {//grade is just the variable name
	System.out.print(grade+" ");
	System.out.println();
}//create an array of fruits and retrive all elements
String[] fruits= {"banana","kivi","apple","mango"};
//if fruit is apple==> that is your favorite food
//advanced for loop, enhanced for loop,for each loop
for(String fruit:fruits) {
	if(fruit.equals("apple")) {///instead of equals,we can also use "==".
		System.out.println(fruit+" is your favorite fruite");
	}else {
		System.out.println(fruit);
	}
	System.out.println(fruit+" ");
	
}
System.out.println("===================");
//fruits.lenght=number of element
//doing the same thing above with regular for loop
for(int i=0; i<fruits.length;i++) {
	System.out.println(fruits[i]);
}
}
}
