
public class Badcode {

	 // Print the average and the sum of an array of integers 

	//-this method could be implemented as a static method, this would void the necessity to create a class for it, and then have to instantiate 
	//said class to be able to use the method.
	//-The class has not defined its own constructor
	//-Is it necessary for the method to be private ? This could restrict access to this method within the class.
	//-By the convention I was taught, the method name should be printSumandAverage()
	   private int PRINTsumandAVERAGE(int x[]) { 
	     int sum; 
	     int average; // average and sum need to be initialized
	     //also were these variables planned to be used outside of the method/class ?     
	 
	 
	     for (int i = 0; i < x.length; i++) { //given an array of size zero this will not get executed and cause further problems because average could be divided by 0
	       average += x[i];  //this bit of code should normally be used for the sum
	     } 
	 	 
	     sum = average / x.length;  // where as this line would be used to calculate the average
	     //what if  average and lenght are equal to zero ?
	 
	 
	     System.out.println("Sum: " + sum); 
	     System.out.println("Average: " + average); 
	 
	 
	     return 0; // rather than return a useless value, it could be better to put the return type of the method to void.
	   } 	
	
	
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 // Some testing data 
	     int array[] = {1, 2, 3}; 	// the object could be named something else, there is an actual class array. 
	 
	     Badcode bc = new Badcode(); // could be avoided with a static method.
	     bc.PRINTsumandAVERAGE(array); 
	}

}
