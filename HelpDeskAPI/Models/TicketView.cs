using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace HelpDeskAPI
{
    public class TicketView
    {
        [Key]
        public int ticket_id { get; set; }
        public int requester_id { get; set; }
        public string requester_name { get; set; }
        public string requester_email { get; set; }
        public int assignee_id { get; set; }
        public string assignee_name { get; set; }
        public string assignee_email { get; set; }
        public string subject_title { get; set; }
        public string ticket_status { get; set; }
        public string ticket_details { get; set; }
        public int resolvedby_id { get; set; }
        public string resolvedby_name { get; set; }
        public string ticket_resolution { get; set; }
    }
}
