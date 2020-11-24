package com.sysntax.repl;

public class NestedLoops69 {

	public static void main(String[] args) {
		for (int i = 7; i >= 1; i--){
            int num = 1;
            for (int j = 0; j < i; j++)
            {
                System.out.print((int) (num + j) + " ");
            }
            System.out.println();
        }
        for (int i = 1; i < 7; i++)
        {
            int num = 1;
            for (int j = 0; j <= i; j++)
            {
                System.out.print((int)(num + j) + " ");
            }
            System.out.println();
        }
	}

}
