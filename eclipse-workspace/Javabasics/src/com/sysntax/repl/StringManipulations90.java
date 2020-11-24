package com.sysntax.repl;

public class StringManipulations90 {

	public static void main(String[] args) {
		// 0 1  1 2 3 5 8 13 21
				int n1=0;
				int n2=1;
				int sum;
				System.out.print(n1+" "+n2);
				for(int i=0;i<10;i++) {
					sum=n1+n2;
					n1=n2;
					n2=sum;
					System.out.print(sum+" ");
				}
			}

	}


