using Microsoft.EntityFrameworkCore.Migrations;

namespace album_collection.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Category", "Image", "RecordLabel", "Title" },
                values: new object[] { "Hip-Hop", "BlackAlbum.png", "Rocafella", "Black Album" });

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Category", "Image", "RecordLabel", "Title" },
                values: new object[] { "Alternative", "brothers.png", "Fat Possum Records", "Brothers" });

            migrationBuilder.UpdateData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "HomeTown", "Image", "Name", "RecordLabel" },
                values: new object[] { "New York", "JayZ.jpg", "Jay-Z", "Rocafella" });

            migrationBuilder.UpdateData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "HomeTown", "Image", "Name", "RecordLabel" },
                values: new object[] { "Akron", "BlackKeys.jpg", "Black Keys", "Fat Possum Records" });

            migrationBuilder.UpdateData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Content", "Reviewername" },
                values: new object[] { "This is Da Bomb", "Deed" });

            migrationBuilder.UpdateData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Content", "Reviewername" },
                values: new object[] { "It's a classic!", "Jamal" });

            migrationBuilder.UpdateData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Duration", "Title" },
                values: new object[] { 4.2999999999999998, "Change Clothes" });

            migrationBuilder.UpdateData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Duration", "Title" },
                values: new object[] { 4.5, "Ten Cent Pistol" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Category", "Image", "RecordLabel", "Title" },
                values: new object[] { "", "", "", "" });

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Category", "Image", "RecordLabel", "Title" },
                values: new object[] { "", "", "", "" });

            migrationBuilder.UpdateData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "HomeTown", "Image", "Name", "RecordLabel" },
                values: new object[] { "", "", "", "" });

            migrationBuilder.UpdateData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "HomeTown", "Image", "Name", "RecordLabel" },
                values: new object[] { "", "", "", "" });

            migrationBuilder.UpdateData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Content", "Reviewername" },
                values: new object[] { "", "" });

            migrationBuilder.UpdateData(
                table: "Reviews",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Content", "Reviewername" },
                values: new object[] { "", "" });

            migrationBuilder.UpdateData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Duration", "Title" },
                values: new object[] { 1.0, "" });

            migrationBuilder.UpdateData(
                table: "Songs",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Duration", "Title" },
                values: new object[] { 2.0, "" });
        }
    }
}
