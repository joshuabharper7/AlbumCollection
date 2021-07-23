using album_collection.Models;
using System;
using Xunit;

namespace album_collection.Tests
{
    public class SongTests
    {
        Song sut;

        [Fact]
        public void SongConstructor_Sets_Id_On_Song()
        {
            sut = new Song() { Id = 1 };

            Assert.Equal(1, sut.Id);
        }

        [Fact]
        public void SongConstructor_Sets_Title_On_Song()
        {
            sut = new Song() { Title = "Test" };

            Assert.Equal("Test", sut.Title);
        }

        [Fact]
        public void SongConstructor_Sets_Duration_On_Song()
        {
            sut = new Song() { Duration = 2 };

            Assert.Equal(2, sut.Duration);
        }

        [Fact]
        public void SongConstructor_Sets_AlbumId_On_Song()
        {
            sut = new Song() { AlbumId = 3 };

            Assert.Equal(3, sut.AlbumId);
        }
    }
}
