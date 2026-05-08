using api_aparecida_jau.Models;
using api_aparecida_jau.Services;
using Microsoft.AspNetCore.Mvc;

namespace api_aparecida_jau.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlbunsController : ControllerBase
    {
        private readonly AlbumService _albumService;

        public AlbunsController(AlbumService albumService)
        {
            _albumService = albumService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Album>>> Get()
        {
            var albuns = await _albumService.GetAsync();

            return Ok(albuns);
        }

        [HttpGet("{slug}")]
        public async Task<ActionResult<Album>> GetBySlug(string slug)
        {
            var album = await _albumService.GetBySlugAsync(slug);

            if (album == null)
            {
                return NotFound("Álbum não encontrado");
            }

            return Ok(album);
        }

        [HttpPost]
        public async Task<IActionResult> Create(
            [FromForm] string titulo,
            [FromForm] string descricao,
            [FromForm] List<IFormFile> imagens)
        {
            if (imagens == null || imagens.Count == 0)
            {
                return BadRequest("Nenhuma imagem enviada");
            }

            var slug = titulo
                .ToLower()
                .Replace(" ", "-")
                .Replace("ã", "a")
                .Replace("á", "a")
                .Replace("é", "e")
                .Replace("í", "i")
                .Replace("ó", "o")
                .Replace("ú", "u")
                .Replace("ç", "c");

            var pastaAlbum = Path.Combine(
                "wwwroot",
                "albuns",
                slug
            );

            Directory.CreateDirectory(pastaAlbum);

            List<string> imagensSalvas = new();

            foreach (var imagem in imagens)
            {
                var nomeArquivo = Guid.NewGuid() + Path.GetExtension(imagem.FileName);

                var caminhoArquivo = Path.Combine(
                    pastaAlbum,
                    nomeArquivo
                );

                using (var stream = new FileStream(caminhoArquivo, FileMode.Create))
                {
                    await imagem.CopyToAsync(stream);
                }

                imagensSalvas.Add(
                    $"/albuns/{slug}/{nomeArquivo}"
                );
            }

            var album = new Album
            {
                Titulo = titulo,
                Descricao = descricao,
                Slug = slug,
                Capa = imagensSalvas[0],
                Fotos = imagensSalvas,
                Data = DateTime.Now
            };

            await _albumService.CreateAsync(album);

            return Ok(album);
        }
    }
}