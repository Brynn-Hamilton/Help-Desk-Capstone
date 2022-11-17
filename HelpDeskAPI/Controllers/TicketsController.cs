using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelpDeskAPI.Controllers
{
    [Route("tickets")]
    [ApiController]
    public class TicketsController : ControllerBase
    {
        public IEnumerable<TicketView> GetAll()
        {
             List<Tickets> tickets = DAL.GetAllTickets();
             List<Users> users = DAL.GetAllUsers();
             List<TicketView> ticketViews = new List<TicketView>();
            foreach(Tickets ticket in tickets)
            {
                TicketView finalTicketView = new TicketView(
                    ticket, 
                    users.First(x => x.user_id == ticket.requester_id), 
                    users.First(x => x.user_id == ticket.assignee_id), 
                    users.FirstOrDefault(x => x.user_id == ticket.resolvedby_id));
                ticketViews.Add(finalTicketView);
            }
            return ticketViews;
        }

        [HttpPost]
        public Tickets Add(Tickets ticket)
        {
            return DAL.AddTicket(ticket);
        }

        [HttpDelete("{ticket_id}")]
        public void Delete(int id)
        {
            DAL.DeleteTicket(id);
        }

        [HttpPut]
        public void Update(Tickets ticket)
        {
            DAL.UpdateTicket(ticket);
        }
    }
}
