using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using album_collection;
using album_collection.Models;

namespace album_collection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistController : ControllerBase
    {
        private AlbumCollectionDbContext _db;

        public ArtistController(AlbumCollectionDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IEnumerable<Artist> GetArtists()
        {
            return _db.Artists.ToList();
        }

        [HttpGet("{id}")]
        public Artist GetArtistById(int id)
        {
            return _db.Artists.Find(id);
        }

        

    }
}
