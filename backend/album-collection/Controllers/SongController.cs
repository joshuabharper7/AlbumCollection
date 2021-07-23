using album_collection.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public async Task<ActionResult<IEnumerable<Song>>> GetSongs()
        {
            return await  _db.Songs.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Song>> GetSongById(int id)
        {
            var song = await _db.Songs.FindAsync(id);

            if(song == null)
            {
                return NotFound();
            }

            return song;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutSong(int id, [FromBody] Song song)
        {
            if (id != song.Id)
            {
                return BadRequest();
            }

            _db.Entry(song).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SongExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Song>> PostSong([FromBody] Song song)
        {
            _db.Songs.Add(song);
            await _db.SaveChangesAsync();

            return CreatedAtAction("GetSong", new { id = song.Id }, song);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSong(int id)
        {
            var song = await _db.Songs.FindAsync(id);
            if (song == null)
            {
                return NotFound();
            }

            _db.Songs.Remove(song);
            await _db.SaveChangesAsync();

            return NoContent();
        }

        private bool SongExists(int id)
        {
            return _db.Songs.Any(e => e.Id == id);
        }
        
    }
}
