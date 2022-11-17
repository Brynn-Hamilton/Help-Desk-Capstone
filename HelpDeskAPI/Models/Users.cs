using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace HelpDeskAPI
{
    public class Users
    {
        [Key]
        public int user_id { get; set; }
        public string user_name { get; set; }
        public string user_email { get; set; }
    }
}
