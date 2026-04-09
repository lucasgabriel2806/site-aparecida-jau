using api_aparecida_jau.Data;
using api_aparecida_jau.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api_aparecida_jau.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NoticiasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public NoticiasController(AppDbContext context)
        {
            _context = context;
        }

        private string GerarSlug(string titulo)
        {
            return titulo
                .ToLower()
                .Replace(" ", "-")
                .Replace("ã", "a")
                .Replace("á", "a")
                .Replace("é", "e")
                .Replace("í", "i")
                .Replace("ó", "o")
                .Replace("ú", "u");
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromForm] NoticiaRequest request)
        {
            if (request.ImagemCapa == null)
                return BadRequest("Imagem obrigatória");

            var ano = DateTime.Now.Year.ToString();

            var folder = Path.Combine("wwwroot/img", ano);
            Directory.CreateDirectory(folder);

            var fileName = $"{Guid.NewGuid()}{Path.GetExtension(request.ImagemCapa.FileName)}";
            var path = Path.Combine(folder, fileName);

            using (var stream = new FileStream(path, FileMode.Create))
            {
                await request.ImagemCapa.CopyToAsync(stream);
            }

            var noticia = new Noticia
            {
                Titulo = request.Titulo,
                Subtitulo = request.Subtitulo,
                Autor = request.Autor,
                Conteudo = request.Conteudo,
                ImagemCapa = $"/img/{ano}/{fileName}",
                Data = DateTime.Now,
                Slug = GerarSlug(request.Titulo)
            };

            _context.Noticias.Add(noticia);
            await _context.SaveChangesAsync();

            return Ok(noticia);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var noticias = await _context.Noticias
                .OrderByDescending(n => n.Data)
                .ToListAsync();

            return Ok(noticias);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var noticia = await _context.Noticias.FindAsync(id);

            if (noticia == null)
                return NotFound();

            return Ok(noticia);
        }
        
        [HttpGet("slug/{slug}")]
        public async Task<IActionResult> GetBySlug(string slug)
        {
            var noticia = await _context.Noticias
                .FirstOrDefaultAsync(n => n.Slug == slug);

            if (noticia == null)
                return NotFound();

            return Ok(noticia);
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadImagem(IFormFile file)
        {
            if (file == null)
                return BadRequest("Arquivo não enviado");

            var folder = Path.Combine("wwwroot/img/noticias");
            Directory.CreateDirectory(folder);

            var fileName = $"{Guid.NewGuid()}{Path.GetExtension(file.FileName)}";
            var path = Path.Combine(folder, fileName);

            using (var stream = new FileStream(path, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return Ok(new { url = $"/img/noticias/{fileName}" });
        }
    }
}