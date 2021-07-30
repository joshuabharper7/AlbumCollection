using album_collection.Models;
using System;
using Xunit;

namespace album_collection.Tests
{
    public class ArtistTests
    {
        Artist sut;

        [Fact]
        public void ArtistConstructor_Sets_Id_On_Artist()
        {
            sut = new Artist() { Id = 1 };

            Assert.Equal(1, sut.Id);
        }

        [Fact]
        public void ArtistConstructor_Sets_Name_On_Artist()
        {
            sut = new Artist() { Name = "Test" };

            Assert.Equal("Test", sut.Name);
        }

        [Fact]
        public void ArtistConstructor_Sets_Image_On_Artist()
        {
            sut = new Artist() { Image = "Image Test" };

            Assert.Equal("Image Test", sut.Image);
        }

        [Fact]
        public void ArtistConstructor_Sets_Age_On_Artist()
        {
            sut = new Artist() { Age = 1 };

            Assert.Equal(1, sut.Age);
        }

        [Fact]
        public void ArtistConstructor_Sets_Record_Label_On_Artist()
        {
            sut = new Artist() { RecordLabel = "Record Label Test" };

            Assert.Equal("Record Label Test", sut.RecordLabel);
        }

        [Fact]
        public void ArtistConstructor_Sets_HomeTown_On_Artist()
        {
            sut = new Artist() { HomeTown = "HomeTown Test" };

            Assert.Equal("HomeTown Test", sut.HomeTown);
        }
    }
}
