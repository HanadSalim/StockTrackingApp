using System;
using System.Threading.Tasks;

namespace Producer
{
    class Program
    {
        static void Main(string[] args)
        {
            ProducerAPICaller prod = new ProducerAPICaller();
            while (true)
            {
                Console.WriteLine("Please enter a value to send");
                string value = Console.ReadLine().Trim();
                if (value.ToLower().Equals("q"))
                {
                    break;
                }
                Task.Run(() =>SendAPIRequest(prod, value));
            }
        }

        static async Task SendAPIRequest(ProducerAPICaller prod, string val)
        {
            await prod.SendStockValue(val);
        }

        static async Task<string> CheckConn(ProducerAPICaller prod)
        {
            return await prod.TestConn();
        }
    }
}
