using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelpDeskAPI.Controllers
{
    [Route("tickets")]
    [ApiController]
    public class TicketsController : ControllerBase
    {
        public IEnumerable<Tickets> GetAll()
        {
            return DAL.GetAllTickets();
        }

        [HttpPost]
        public Tickets Add(Tickets ticket)
        {
            return DAL.AddTicket(ticket);
        }

        [HttpDelete("{ticket_id}")]
        public void Delete(int id)
        {
            DAL.Delete(id);
        }

        [HttpPut]
        public void Update(Tickets ticket)
        {
            DAL.Update(ticket);
        }
    }
}
