package com.syntax.class12;

public class StyringManipulations {

	public static void main(String[] args) {
		 String str="Good Morning Students!";
	        
	        System.out.println("----- charAt() FUNCTION -----");
	        char letter1=str.charAt(0);
	        System.out.println(letter1);
	        
	        char letter5=str.charAt(4);
	        System.out.println("Letter at index 4 is "+letter5+".");
	        
//	      char someLetter=str.charAt(55);// RunTime Exception --> StringIndexOutOfBoundsException
//	      System.out.println(someLetter);
	        
	        //get all characters 1 by 1 from a String?
	        char letter;
	        for(int i=0; i<str.length(); i++) {
	            
	            letter=str.charAt(i);
	            System.out.print(letter+" ");
	        }
	        System.out.println();
	        
	        System.out.println("----- indexOf() FUNCTION -----");
	        
	        String name="Syntax Technologies";
	        int index=name.indexOf("y");
	        System.out.println(index);  
	        
	        index=name.indexOf(" ");
	        System.out.println(index);
	        
	        index=name.indexOf("Syntax");
	        System.out.println(index);
	        
	        index=name.indexOf("!");
	        System.out.println("Index of not existing character="+index);
	        
	        index=name.indexOf("Technologies");
	        System.out.println("Index of substring Technologies="+index);
	        
	        index=name.indexOf("o");
	        System.out.println("Index of first o="+index);
	        
	        index=name.lastIndexOf("o");
	        System.out.println("Index of second o="+index);


	}

}
