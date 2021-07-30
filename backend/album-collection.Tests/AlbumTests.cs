using album_collection.Models;
using System;
using Xunit;

namespace album_collection.Tests
{
    public class AlbumTests
    {
        Album sut;

        [Fact]
        public void AlbumConstructor_Sets_Id_On_Album()
        {
            sut = new Album() { Id = 1};

            Assert.Equal(1, sut.Id);
        }

        [Fact]
        public void AlbumConstructor_Sets_Title_On_Album()
        {
            sut = new Album() { Title = "Test" };

            Assert.Equal("Test", sut.Title);
        }

        [Fact]
        public void AlbumConstructor_Sets_Image_On_Album()
        {
            sut = new Album() { Image = "Image Test" };

            Assert.Equal("Image Test", sut.Image);
        }

        [Fact]
        public void AlbumConstructor_Sets_Record_Label_On_Album()
        {
            sut = new Album() { RecordLabel = "Record Label Test" };

            Assert.Equal("Record Label Test", sut.RecordLabel);
        }

        [Fact]
        public void AlbumConstructor_Sets_Category_On_Album()
        {
            sut = new Album() { Category = "Category Test" };

            Assert.Equal("Category Test", sut.Category);
        }
    }
}
