using System;
using System.ComponentModel.DataAnnotations;

public class Album
{
	public int Id { get; set; }
	public string Title { get; set; }
	[DataType(DataType.Upload)]
	[Display(Name = "Album Image")]
	[Required(ErrorMessage = "Please Choose File To Upload")]
	public string Image { get; set; }
	public virtual List<Song> Songs { get; set; }
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
    }

	public void AddSong(Song song)
    {
		Songs.Add(song);
    }
}
