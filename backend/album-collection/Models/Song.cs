using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
    public class Song
    {
        public int Id { get; set; }
        public virtual Artist Artist { get; set; }
        public int ArtistId { get; set; }
        public string Title { get; set; }
        public int Duration { get; set; }
        public virtual Album Album { get; set; }
        public int AlbumId { get; set; }
        public Song()
        {

        }
        
        public Song(int id, string title, int duration,int artistId,int albumid)
        {
            Id = id;
            Title = title;
            Duration = duration;
            ArtistId = artistId;
            AlbumId = albumid;
        }


    }
}
