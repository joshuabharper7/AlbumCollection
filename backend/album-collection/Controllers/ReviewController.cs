using album_collection.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private AlbumCollectionDbContext _db;
        public ReviewController(AlbumCollectionDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public IEnumerable<Review> GetReviews()
        {
            return _db.Reviews.ToList();
        }
        [HttpGet("(id)")]
        public Review GetReviewById(int id)
        {
            return _db.Reviews.Find(id);
        }
        
    }
}
