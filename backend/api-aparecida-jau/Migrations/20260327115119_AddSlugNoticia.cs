using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api_aparecida_jau.Migrations
{
    /// <inheritdoc />
    public partial class AddSlugNoticia : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DataPublicacao",
                table: "Noticias",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Slug",
                table: "Noticias",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DataPublicacao",
                table: "Noticias");

            migrationBuilder.DropColumn(
                name: "Slug",
                table: "Noticias");
        }
    }
}
