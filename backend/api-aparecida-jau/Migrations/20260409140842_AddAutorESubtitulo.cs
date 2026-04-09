using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api_aparecida_jau.Migrations
{
    /// <inheritdoc />
    public partial class AddAutorESubtitulo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DataPublicacao",
                table: "Noticias");

            migrationBuilder.AddColumn<string>(
                name: "Autor",
                table: "Noticias",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Subtitulo",
                table: "Noticias",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Autor",
                table: "Noticias");

            migrationBuilder.DropColumn(
                name: "Subtitulo",
                table: "Noticias");

            migrationBuilder.AddColumn<DateTime>(
                name: "DataPublicacao",
                table: "Noticias",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
