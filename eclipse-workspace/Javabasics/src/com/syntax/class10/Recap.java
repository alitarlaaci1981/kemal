package com.syntax.class10;

public class Recap {

	public static void main(String[] args) {
		int[] grades=new int[4];
		grades[0]=90;//what is the avarage grades
		grades[1]=67;
		grades[2]=89;
		grades[3]=78;
		int avarages=(grades[0]+grades[1]+grades[2]+grades[3])/4;
		System.out.println("avarage grade is "+avarages);
		
		//creating an array of cities
		String[] cities= {"washington","paris","newyork","miami","los angeles","dallas","chantilly"};
		System.out.println("i live in "+cities[2]);
		//
		int x=1;
		System.out.println(cities[x]);
		x+=3;
		System.out.println("i moved to "+cities[x]);
		//how many elements stored inside an array
		int arraySize=cities.length;//7
		System.out.println("total elements "+arraySize);
		//how can we acces last element from an array
		System.out.println(cities[arraySize-1]);// we have to put 0 because index starts at"0";
		//acces all elements from an array
		//instead of reaching all element one by one if we already know how many elements in an array
		for(int i=0; i<arraySize; i++) {
			System.out.println(cities[i]);
		}
	}

}
