package com.syntax.class06;

public class RecapLogical {

	public static void main(String[] args) {
		/*if hour between1-11   it s morning
		 * if hour between12-15  its noon
		 * if hour is between 16-20 its evening
		 * if hour between 20- -24 night
		 * 
		 */
int hour=21;
String time;
if(hour>=1&& hour<=11){
	time="morning";
}else if(hour>=12&&hour<15) {
	time="afternoon";
}else if(hour>=16&&hour<=20) {
	time="evening";
}else if(hour>=21&&hour<=24) {
	time="night";
}else {
	time="unkno;wn";
	
}		
System.out.println("right now is "+time);
	
}
	}


