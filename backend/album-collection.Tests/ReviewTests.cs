using album_collection.Models;
using System;
using Xunit;

namespace album_collection.Tests
{
    public class ReviewTests
    {
        Review sut;

        [Fact]
        public void ReviewConstructor_Sets_Id_On_Review()
        {
            sut = new Review() { Id = 1 };

            Assert.Equal(1, sut.Id);
        }

        [Fact]
        public void ReviewConstructor_Sets_Content_On_Review()
        {
            sut = new Review() { Content = "Test" };

            Assert.Equal("Test", sut.Content);
        }

        [Fact]
        public void ReviewConstructor_Sets_ReviewerName_On_Review()
        {
            sut = new Review() { Reviewername = "Reviewer Name Test" };

            Assert.Equal("Reviewer Name Test", sut.Reviewername);
        }

        [Fact]
        public void ReviewConstructor_Sets_AlbumId_On_Review()
        {
            sut = new Review() { AlbumId = 1 };

            Assert.Equal(1, sut.AlbumId);
        }
    }
}

