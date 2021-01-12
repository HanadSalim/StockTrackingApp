using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Producer
{
    class ProducerAPICaller
    {
        private static HttpClient _httpClient = new HttpClient();
        public ProducerAPICaller()
        {
            _httpClient.BaseAddress = new Uri("https://localhost:44399/"); //base address
            _httpClient.Timeout = new TimeSpan(0, 0, 30); // 30s timeout limit
        }
        
        public async Task<string> SendStockValue(string a)
        {
            var request = new HttpRequestMessage(HttpMethod.Post, _httpClient.BaseAddress+$"api/SendValue/{a}");
            var response = await _httpClient.SendAsync(request);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsStringAsync();
        }

        public async Task<string> TestConn()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, _httpClient.BaseAddress + $"api");
            var response = await _httpClient.SendAsync(request);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsStringAsync();
        }
    }
}
