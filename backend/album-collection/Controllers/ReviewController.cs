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
    public class ReviewController : ControllerBase
    {
        private AlbumCollectionDbContext _db;
        public ReviewController(AlbumCollectionDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Review>>> GetReviews()
        {
            return await _db.Reviews.ToListAsync();
        }
        [HttpGet("(id)")]
        public async Task<ActionResult<Review>> GetReview(int id)
        {
            var review = await _db.Reviews.FindAsync(id);

            if (review == null)
            {
                return NotFound();
            }

            return review;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutReview(int id, [FromBody] Review review)
        {
            if (id != review.Id)
            {
                return BadRequest();
            }

            _db.Entry(review).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReviewExists(id))
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
        public async Task<ActionResult<Review>> PostReview([FromBody] Review review)
        {
            _db.Reviews.Add(review);
            await _db.SaveChangesAsync();

            return CreatedAtAction("GetReview", new { id = review.Id }, review);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReview(int id)
        {
            var review = await _db.Reviews.FindAsync(id);
            if (review == null)
            {
                return NotFound();
            }

            _db.Reviews.Remove(review);
            await _db.SaveChangesAsync();

            return NoContent();
        }

        private bool ReviewExists(int id)
        {
            return _db.Reviews.Any(e => e.Id == id);
        }

    }
}
