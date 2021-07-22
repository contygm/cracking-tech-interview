using System;

// TODO: 1.1 Is Unique
// TODO: 1.2 Check Permutations
public class ChapterOne
{
	private static string Urlify(string str, int trueLength)
	{
		// TODO trim first 
		// string[] splitStr = str.Split(' ');
		// int spaceCount = splitStr.Length;
		// truelength += spaceCount * 2; 
		// TODO join them all 

		for (int i = 0; i < trueLength; i++)
		{
			if (str[i] == ' ')
			{
				trueLength = trueLength+2;
				string secondHalf = str.Substring(i);
				str = str.Insert(i, "%20");
				
			}
			
		}
		//str.Remove(trueLength)
		return str;
	}
    public static void Main(string[] args)
    {
		string result = Urlify("Kit tys", 6);
		Console.WriteLine ($"Result: {result}");
		bool correct = (result == "Kit%20ty");
        Console.WriteLine ($"Pass: {correct}");
    }
}