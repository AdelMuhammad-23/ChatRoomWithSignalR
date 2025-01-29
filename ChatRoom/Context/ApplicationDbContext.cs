using ChatRoom.Models;
using Microsoft.EntityFrameworkCore;

namespace ChatRoom.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Chat> Chat { get; set; }
    }
}
