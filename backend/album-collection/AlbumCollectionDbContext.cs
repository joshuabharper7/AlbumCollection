using album_collection.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection
{
    public class AlbumCollectionDbContext : DbContext
    {
        public DbSet<Album> Albums { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Song> Songs { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=AlbumCollectionDB;Trusted_Connection=True;";
            
            optionsBuilder.UseSqlServer(connectionString).UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Album>().HasData(
                new Album()
                {
                    Id = 1,
                    Title = "Black Album",
                    Image = "BlackAlbum.png",
                    ArtistId = 1,
                    RecordLabel = "Rocafella",
                    Category = "Hip-Hop",
                },
                new Album()
                {
                    Id = 2,
                    Title = "Brothers",
                    Image = "brothers.png",
                    ArtistId = 2,
                    RecordLabel = "Fat Possum Records",
                    Category = "Alternative"
                }
            );

            modelBuilder.Entity<Artist>().HasData(
                new Artist()
                {
                    Id = 1,
                    Name = "Jay-Z",
                    Image = "JayZ.jpg",
                    Age = 1,
                    RecordLabel = "Rocafella",
                    HomeTown = "New York"
                },
                 new Artist()
                 {
                     Id = 2,
                     Name = "Black Keys",
                     Image = "BlackKeys.jpg",
                     Age = 2,
                     RecordLabel = "Fat Possum Records",
                     HomeTown = "Akron"
                 }
            );

            modelBuilder.Entity<Review>().HasData(
                new Review()
                {
                    Id = 1,
                    Content = "This is Da Bomb",
                    Reviewername = "Deed",
                    AlbumId = 1
                },
                 new Review()
                 {
                     Id = 2,
                     Content = "It's a classic!",
                     Reviewername = "Jamal",
                     AlbumId = 2
                 }
            );

            modelBuilder.Entity<Song>().HasData(
                new Song()
                {
                    Id = 1,
                    Title = "Change Clothes",
                    Duration = 4.3,
                    AlbumId = 1
                },
                 new Song()
                 {
                     Id = 2,
                     Title = "Ten Cent Pistol",
                     Duration = 4.5,
                     AlbumId = 2
                 }
            );

        }

    }
}
