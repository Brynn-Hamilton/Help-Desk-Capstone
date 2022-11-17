using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace HelpDeskAPI
{
    public class DAL
    {
        public static MySqlConnection DB;

        // ----------------Raw tickets------------------------
        public static List<Tickets> GetAllTickets()
        {
            return DB.GetAll<Tickets>().ToList();
        }

        //should this reference ticketview
        public static Tickets AddTicket(Tickets ticket)
        {
            DB.Insert(ticket);
            return ticket;
        }

        public static void DeleteTicket(int ticket_id)
        {
            DB.Delete(new Tickets() { ticket_id = ticket_id });
        }

        //should this reference ticketview
        public static void UpdateTicket(Tickets ticket)
        {
            DB.Update(ticket);
        }

        // ----------------Users------------------------
        public static List<Users> GetAllUsers()
        {
            return DB.GetAll<Users>().ToList();
        }

        //should this reference ticketview
        public static Users AddUser(Users user)
        {
            DB.Insert(user);
            return user;
        }

        public static void DeleteUser(int user_id)
        {
            DB.Delete(new Users() { user_id = user_id });
        }

        //should this reference ticketview
        public static void UpdateUser(Users user)
        {
            DB.Update(user);
        }

        // ----------------Ticket View------------------------
        public static List<TicketView> GetAll()
        {
            return DB.GetAll<TicketView>().ToList();
        }
    }
}
