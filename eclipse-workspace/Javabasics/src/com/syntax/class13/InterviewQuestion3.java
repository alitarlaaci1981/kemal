package com.syntax.class13;

public class InterviewQuestion3 {

	public static void main(String[] args) {
	//fibonacci number    0+1=1, 1+1=2, 2+3=5, 3+5=8,8+13=21,
		//write a programm to print first 10 fibonacci numbers
int a,b,c;
a=0;
b=1;
for(int i=1; i<=10; i++) {
	System.out.print(a+" ");
	c=a+b;
	a=b;
	b=c;
}
	}

}
