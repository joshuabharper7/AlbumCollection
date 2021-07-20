using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public string Reviewername { get; set; }
        public virtual Album Album { get; set; }
        public int AlbumId { get; set; }

        public Review(int id, int albumId, string reviewername, string content)
        {
            Id = id;
            AlbumId = albumId;
            Reviewername = reviewername;
            Content = content;
        }

        public Review()
        {

        }
    }
}
