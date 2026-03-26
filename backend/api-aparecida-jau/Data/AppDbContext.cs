using api_aparecida_jau.Models;
using Microsoft.EntityFrameworkCore;

namespace api_aparecida_jau.Data
{
    public class AppDbContext : DbContext
    {   
        public AppDbContext(DbContextOptions options) : base(options) {}

        public DbSet<BoletimInfo> BoletinsInfos { get; set; }

        public DbSet<Usuario> Usuarios { get; set; }
    }
}