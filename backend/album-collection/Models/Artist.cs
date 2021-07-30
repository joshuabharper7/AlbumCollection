using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
    public class Artist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [DataType(DataType.Upload)]
        [Display(Name = "Artist Image")]
        [Required(ErrorMessage = "Please Choose File To Upload")]
        public string Image { get; set; }
        public virtual List<Album> Albums { get; set; }
        public int Age { get; set; }
        [Display(Name = "Record Label")]
        public string RecordLabel { get; set; }
        [Display(Name = "Home Town")]
        public string HomeTown { get; set; }

        public Artist()
        {

        }

        public void AddAlbum(Album myAlbum)
        {
            Albums.Add(myAlbum);
        }


    }
}
