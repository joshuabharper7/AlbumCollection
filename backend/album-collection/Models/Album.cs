using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
	public class Album
	{
		public int Id { get; set; }
		public string Title { get; set; }
		[DataType(DataType.Upload)]
		[Display(Name = "Album Image")]
		[Required(ErrorMessage = "Please Choose File To Upload")]
		public string Image { get; set; }
		public virtual List<Song> Songs { get; set; }
		public virtual List<Review> Reviews { get; set; }
		public virtual Artist Artist { get; set; }
		[Display(Name = "Record Label")]
		public string RecordLabel { get; set; }
		public string Category { get; set; }

		public Album()
		{

		}

		public Album(int id, string title, string image, string recordLabel, string category)
		{
			Id = id;
			Title = title;
			Image = image;
			RecordLabel = recordLabel;
			Category = category;
			Songs = new List<Song>();
			Reviews = new List<Review>();
		}

		public void AddSong(Song mySong)
		{
			Songs.Add(mySong);
		}

		public void AddReview(Review myReview)
		{
			Reviews.Add(myReview);
		}
	}
}
