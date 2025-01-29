using Microsoft.AspNetCore.Mvc;

namespace ChatRoom.Controllers
{
    public class ChatController : Controller
    {
        public IActionResult Index()
        {



            return View();
        }
    }
}
