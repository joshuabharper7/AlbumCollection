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
        public async Task<ActionResult<IEnumerable<Artist>>> GetArtists()
        {
            return await _db.Artists.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Artist>> GetArtistById(int id)
        {
            var artist = await _db.Artists.FindAsync(id);

            if(artist == null)
            {
                return NotFound();
            }

            return artist;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutArtist(int id, [FromBody] Artist artist)
        {
            if (id != artist.Id)
            {
                return BadRequest();
            }

            _db.Entry(artist).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArtistExists(id))
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
        public async Task<ActionResult<IEnumerable<Artist>>> PostArtist([FromBody] Artist artist)
        {
            _db.Artists.Add(artist);
            await _db.SaveChangesAsync();

            return _db.Artists.ToList();

            //return CreatedAtAction("GetArtist", new { id = artist.Id }, artist);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArtist(int id)
        {
            var artist = await _db.Artists.FindAsync(id);
            if (artist == null)
            {
                return NotFound();
            }

            _db.Artists.Remove(artist);
            await _db.SaveChangesAsync();

            return NoContent();
        }

        private bool ArtistExists(int id)
        {
            return _db.Artists.Any(e => e.Id == id);
        }

        

    }
}
