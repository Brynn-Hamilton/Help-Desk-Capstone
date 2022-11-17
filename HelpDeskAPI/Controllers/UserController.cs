using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelpDeskAPI.Controllers
{
    [Route("user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public IEnumerable<Users> GetAll()
        {
            List<Users> users = DAL.GetAllUsers();
            return users;
        }

        [HttpPost]
        public Users Add(Users user)
        {
            return DAL.AddUser(user);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            DAL.DeleteUser(id);
        }

        [HttpPut]
        public void Update(Users user)
        {
            DAL.UpdateUser(user);
        }
    }
}
