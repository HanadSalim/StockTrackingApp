using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System.Text;


namespace Receive
{
    class Program
    {
        static void Main(string[] args)
        {
            // Building the connection factory, contains default username, password and localhost
            var factory = new ConnectionFactory()
            {
                UserName = "guest",
                Password = "guest",
                HostName = "localhost"
            };

            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                channel.QueueDeclare(queue: "stockqueue", durable: false, exclusive: false, autoDelete: false, arguments: null);
                var consumer = new EventingBasicConsumer(channel);

                // Method to consume and handle messages
                consumer.Received += (model, ea) =>
                  {
                      var body = ea.Body.ToArray();
                      var message = Encoding.UTF8.GetString(body);
                      Console.WriteLine("Received: {0}", message);
                  };
                channel.BasicConsume("stockqueue", autoAck:true, consumer:consumer);
                Console.WriteLine("Press [enter] to exit");
                Console.ReadLine();
            }  
        }
    }
}
