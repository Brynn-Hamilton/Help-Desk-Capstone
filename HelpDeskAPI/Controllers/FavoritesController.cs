using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelpDeskAPI.Controllers
{
    [Route("favorites")]
    [ApiController]
    public class FavoritesController : ControllerBase
    {
        public IEnumerable<Favorites> GetAll()
        {
            List<Favorites> Favorites = DAL.GetAllFavorites();
            return Favorites;
        }

        [HttpPost]
        public Favorites Add(Favorites fav)
        {
            return DAL.AddFavorite(fav);
        }

        [HttpDelete("{id}")]
        public void Delete(int ticket_id, int user_id)
        {
            DAL.DeleteFavorite(ticket_id, user_id);
        }
    }
}

