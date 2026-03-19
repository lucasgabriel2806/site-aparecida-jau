using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api_aparecida_jau.Migrations
{
    /// <inheritdoc />
    public partial class FixTableName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_DB_APARECIDA_JAU",
                table: "DB_APARECIDA_JAU");

            migrationBuilder.RenameTable(
                name: "DB_APARECIDA_JAU",
                newName: "boletinsInfos");

            migrationBuilder.AddPrimaryKey(
                name: "PK_boletinsInfos",
                table: "boletinsInfos",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_boletinsInfos",
                table: "boletinsInfos");

            migrationBuilder.RenameTable(
                name: "boletinsInfos",
                newName: "DB_APARECIDA_JAU");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DB_APARECIDA_JAU",
                table: "DB_APARECIDA_JAU",
                column: "Id");
        }
    }
}
