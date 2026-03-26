using api_aparecida_jau.Data;
using api_aparecida_jau.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api_aparecida_jau.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BoletinsInfosController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public BoletinsInfosController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> AddBoletimInfo([FromForm] BoletimInfoCreateRequest request)
        {
            if (request.Img == null || request.Pdf == null)
            {
                return BadRequest("Arquivos não enviados");
            }

            // PEGAR ANO E MÊS (formato: 2025-03)
            var partesData = request.Data.Split("-");
            var ano = partesData[0];
            var mes = partesData[1];

            // CRIAR PASTAS DINÂMICAS
            var imgFolder = Path.Combine("wwwroot/img", ano);
            var pdfFolder = Path.Combine("wwwroot/pdf", ano);

            Directory.CreateDirectory(imgFolder);
            Directory.CreateDirectory(pdfFolder);

            // CAMINHOS DOS ARQUIVOS
            var imgPath = Path.Combine(imgFolder, request.Img.FileName);
            var pdfPath = Path.Combine(pdfFolder, request.Pdf.FileName);

            // SALVAR IMAGEM
            using (var stream = new FileStream(imgPath, FileMode.Create))
            {
                await request.Img.CopyToAsync(stream);
            }

            // SALVAR PDF
            using (var stream = new FileStream(pdfPath, FileMode.Create))
            {
                await request.Pdf.CopyToAsync(stream);
            }

            // SALVAR NO BANCO
            var boletiminfo = new BoletimInfo
            {
                Titulo = request.Titulo,
                Data = request.Data,
                Img = $"/img/{ano}/{request.Img.FileName}",
                Pdf = $"/pdf/{ano}/{request.Pdf.FileName}"
            };

            _appDbContext.BoletinsInfos.Add(boletiminfo);
            await _appDbContext.SaveChangesAsync();

            return Ok(boletiminfo);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BoletimInfo>>> GetBoletinsInfos()
        {
            var boletinsInfos = await _appDbContext.BoletinsInfos.ToListAsync();

            return Ok(boletinsInfos);            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<BoletimInfo>>> GetBoletimInfo(int id)
        {
            var boletimInfo = await _appDbContext.BoletinsInfos.FindAsync(id);

            if(boletimInfo == null)
            {
                return NotFound("Boletim Informativo não encontrado!");;
            }

            return Ok(boletimInfo);            
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBoletimInfo(int id, [FromBody] BoletimInfo boletimInfoAtualizado) 
        {
            var boletimInfoExistente = await _appDbContext.BoletinsInfos.FindAsync(id);

            if(boletimInfoExistente == null)
            {
                return NotFound("Boletim Informativo não encontrado!");;
            }

            _appDbContext.Entry(boletimInfoExistente).CurrentValues.SetValues(boletimInfoAtualizado);

            await _appDbContext.SaveChangesAsync();

            return StatusCode(201, boletimInfoExistente);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBoletimInfo(int id) 
        {
            var boletimInfo = await _appDbContext.BoletinsInfos.FindAsync(id);

            if(boletimInfo == null)
            {
                return NotFound("Boletim Informativo não encontrado!");;
            }

            _appDbContext.BoletinsInfos.Remove(boletimInfo);

            await _appDbContext.SaveChangesAsync();

            return Ok("Boletim Informativo deletado com sucesso!");
        }
    }
}