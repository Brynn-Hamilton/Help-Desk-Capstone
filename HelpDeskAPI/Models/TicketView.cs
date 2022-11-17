using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace HelpDeskAPI
{
    public class TicketView
    {
        public int id { get; set; }
        public int requester_id { get; set; }
        public string requester_name { get; set; }
        public string requester_email { get; set; }
        public int assignee_id { get; set; }
        public string assignee_name { get; set; }
        public string assignee_email { get; set; }
        public string title { get; set; }
        public string status { get; set; }
        public string details { get; set; }
        public int? resolvedby_id { get; set; }
        public string? resolvedby_name { get; set; }
        public string resolution { get; set; }

        public TicketView(Tickets ticket, Users requester, Users assignee, Users? resolvedby)
        {
            id = ticket.ticket_id;
            requester_id = requester.user_id;
            requester_name = requester.user_name;
            requester_email = requester.user_email;
            assignee_id = assignee.user_id;
            assignee_name = assignee.user_name;
            assignee_email = assignee.user_email;
            resolvedby_id = resolvedby?.user_id ;
            resolvedby_name = resolvedby?.user_name;
            title = ticket.subject_title;
            status = ticket.ticket_status;
            details = ticket.ticket_details;
            resolution = ticket.ticket_resolution;
        }
    }
}
