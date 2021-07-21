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
    public class SongController : ControllerBase
    {
        private AlbumCollectionDbContext _db;
        public SongController(AlbumCollectionDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public IEnumerable<Song> GetSongs()
        {
            return _db.Songs.ToList();
        }
        [HttpGet("{id}")]
        public Song GetSongById(int id)
        {
            return _db.Songs.Find(id);
        }
        
    }
}
