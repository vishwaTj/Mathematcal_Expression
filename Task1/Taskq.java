package fundamentals;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Map;
import java.util.*;
public class hello_world {

	public static void main(String[] args) {
	   HashMap<String,Integer> map = new HashMap<>();
	   Scanner sc = new Scanner(System.in);
	   BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	   System.out.println("Enter the number of inputs");
	   try {
	     String s=br.readLine();
	     int T=Integer.parseInt(s);
	     int n=T;
	     int value=0;
	     
	     // loop to take occurences of each value
	     while(T-->0) {
		     System.out.print("Enter the value : ");
		     String str=br.readLine();
		     System.out.print("Enter number of occurences: ");
		     int k=Integer.parseInt(br.readLine());
		     value+=k;
		   
		     map.put(str,k);
	      }
	   
	      // predicting pobability a random occurence using math.rand function
	      int k=(int)(Math.random()*T);
	      
	      // taking the index of the particular occurence 
	      //since map dont have indexes just traversing till counter becomes 0
	      
	      for (String key: map.keySet()) {
	    	  if(k==0) {
	    		System.out.print("Random element picked : ");
	    		//calculating and giving out probability
	    	    System.out.print(key + " with a Probability of "+ (n) + "/" + (map.get(key)) );
	    	  }
	    	  k--;
	    	}
	   }
	   catch(IOException e) {
		   System.out.print(e);
	   }
	   
	}

}