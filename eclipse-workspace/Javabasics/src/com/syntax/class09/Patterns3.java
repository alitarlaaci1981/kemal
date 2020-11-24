package com.syntax.class09;

public class Patterns3 {

	public static void main(String[] args) {
		for(int i=1; i<=5; i++) {
			for(int j=1; j<=i; j++) {
				System.out.print("*"+" ");                      ///creating a pyrmid
			}System.out.println();
		}
		for(int i=4; i>=1; i--) {
			for(int j=1; j<=i;j++) {
				System.out.print("*"+" ");
			}System.out.println();
		}

	}

}
