using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RabbitMQ.Client;

namespace Send
{
    class Program
    {
        static void Main(string[] args)
        {
            // Building the connection factory, contains default username, password and localhost
            var factory = new ConnectionFactory() 
            { 
                UserName = "guest",
                Password= "guest",
                HostName = "localhost" 
            };

            using(var connection = factory.CreateConnection())
            using(var channel = connection.CreateModel())
            {
                channel.QueueDeclare(queue:"stockqueue", durable: false, exclusive: false, autoDelete: false, arguments: null);
                string message = "hello";
                var body = Encoding.UTF8.GetBytes(message);
                channel.BasicPublish(exchange:"", routingKey:"stockqueue", basicProperties:null, body:body);
                Console.WriteLine("Sent {0}", message);
            }
            Console.WriteLine("Press [enter] to exit");
            Console.ReadLine();
        }
    }
}
