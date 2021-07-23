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
    public class AlbumController : ControllerBase
    {
        private AlbumCollectionDbContext _db;
        public AlbumController(AlbumCollectionDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Album>>> GetAlbums()
        {
            return await _db.Albums.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Album>> GetAlbumById(int id)
        {
            var album = await _db.Albums.FindAsync(id);

            if(album == null)
            {
                return NotFound();
            }

            return album;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAlbum(int id, [FromBody] Album album)
        {
            if(id != album.Id)
            {
                return BadRequest();
            }

            _db.Entry(album).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlbumExists(id))
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
        public async Task<ActionResult<Album>> PostAlbum([FromBody] Album album)
        {
            _db.Albums.Add(album);
            await _db.SaveChangesAsync();

            return CreatedAtAction("GetAlbum", new { id = album.Id }, album);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAlbum(int id)
        {
            var album = await _db.Albums.FindAsync(id);
            if(album == null)
            {
                return NotFound();
            }

            _db.Albums.Remove(album);

            await _db.SaveChangesAsync();

            return NoContent();
        }

        private bool AlbumExists(int id)
        {
            return _db.Albums.Any(e => e.Id == id);
        }

    }
}
