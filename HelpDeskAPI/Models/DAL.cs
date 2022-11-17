using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace HelpDeskAPI
{
    public class DAL
    {
        public static MySqlConnection DB;

        public static List<Tickets> GetAllTickets()
        {
            return DB.GetAll<Tickets>().ToList();
        }

        public static Tickets AddTicket(Tickets ticket)
        {
            DB.Insert(ticket);
            return ticket;
        }

        public static void Delete(int ticket_id)
        {
            DB.Delete(new Tickets() { ticket_id = ticket_id });
        }

        public static void Update(Tickets ticket)
        {
            DB.Update(ticket);
        }
    }
}
