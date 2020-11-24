package com.syntax.class08;

public class LoopsRepl {
public static void main(String[] args) {
	

int time =10;
if (time<12) {
	System.out.println("good morning");
}System.out.println("================WHILE LOOP==========================");
while (time>12) {
	System.out.println("good morning");
	time++;
}System.out.println("==================================");
int num=1;
while(num<=50) {//how to print numbers from 1 to 50?
	System.out.println(num);
	num++;
}//how to print number from 20 to 30?
System.out.println("=====================================================");
int i=20;
while(i<=30) {
	System.out.println(i);
	i++;
}System.out.println("========================================================");
//how to print number from 5 to 15 al in 1 line
int num1=5;
while(num1<=15) {
	System.out.print(num1+" ");
	num1++;
	}//how to print values from 10 to 1?

int num2=10;
while(num2>1) {
	System.out.println(num2);
	num2--;
}//how to print 50 to 1
System.out.println("======================================");
int num3=50;
while(num3>=1) {
	System.out.println(num3);
	num3--;
}System.out.println("======================================");
//how to print odd numbers from 1 to 20
int num4=1;//first way to do it
while(num4<=20) {
	
		System.out.println(num4);
		num4+=2;
}System.out.println("==============================================================");

//second way to do odd number from 1 to 20
 
   int num5=1;
    while(num5<=20) {
    if(num5%2!=0) {
	System.out.println(num5);
	
} num5++;

}
    System.out.println("======================================================");
//third way to do odd numbers from1 to 10
int num6=1;
while(num6<=20) {
	System.out.println(num6++);
	num6++;
}


}
}