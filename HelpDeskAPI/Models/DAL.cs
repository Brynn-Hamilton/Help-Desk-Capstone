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
        public static Tickets GetOne(int id)
        {
            return DB.Get<Tickets>(id);
        }

        public static Tickets AddTicket(Tickets ticket)
        {
            DB.Insert(ticket);
            return ticket;
        }

        public static void DeleteTicket(int id)
        {
            DB.Delete(new Tickets() { ticket_id = id });
        }

        public static void UpdateTicket(Tickets ticket)
        {
            DB.Update(ticket);
        }

        // ----------------Users------------------------
        public static List<Users> GetAllUsers()
        {
            return DB.GetAll<Users>().ToList();
        }
        public static Users AddUser(Users user)
        {
            DB.Insert(user);
            return user;
        }

        public static void DeleteUser(int user_id)
        {
            DB.Delete(new Users() { user_id = user_id });
        }

        public static void UpdateUser(Users user)
        {
            DB.Update(user);
        }

        // ----------------Favorites------------------------
        public static List<Favorites> GetAllFavorites()
        {
            return DB.GetAll<Favorites>().ToList();
        }
        public static Favorites AddFavorite(Favorites fav)
        {
            DB.Insert(fav);
            return fav;
        }

        public static void DeleteFavorite(int ticket_id, int user_id)
        {
            DB.Delete(new Favorites() { ticket_id = ticket_id, user_id = user_id });
        }
    }
}
