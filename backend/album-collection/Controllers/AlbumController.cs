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
    public class AlbumController : ControllerBase
    {
        private AlbumCollectionDbContext _db;
        public AlbumController(AlbumCollectionDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public IEnumerable<Album> GetAlbums()
        {
            return _db.Albums.ToList();
        }
        [HttpGet("{id}")]
        public Album GetAlbumById(int id)
        {
            return _db.Albums.Find(id);
        }
        


    }
}
