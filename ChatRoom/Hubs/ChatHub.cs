using ChatRoom.Context;
using ChatRoom.Models;
using Microsoft.AspNetCore.SignalR;

namespace ChatRoom.Hubs
{
    public class ChatHub : Hub
    {
        private readonly ApplicationDbContext _context;
        public ChatHub(ApplicationDbContext context)
        {
            _context = context;
        }
        public void sendMessage(string userName, string message)
        {
            //Save in DB
            Chat chat = new Chat()
            {
                textMessage = message,
                userName = userName
            };
            _context.Chat.Add(chat);
            _context.SaveChanges();

            //broadcast to all clients is online
            Clients.All.SendAsync("newMessage", userName, message);
        }
    }
}
