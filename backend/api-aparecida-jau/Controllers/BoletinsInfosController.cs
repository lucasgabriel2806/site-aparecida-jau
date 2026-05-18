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

            var partesData = request.Data.Split("-");
            var ano = partesData[0];
            var mes = partesData[1];

            var imgFolder = Path.Combine("wwwroot/boletim-info/img", ano);
            var pdfFolder = Path.Combine("wwwroot/boletim-info/pdf", ano);

            Directory.CreateDirectory(imgFolder);
            Directory.CreateDirectory(pdfFolder);

            var imgPath = Path.Combine(imgFolder, request.Img.FileName);
            var pdfPath = Path.Combine(pdfFolder, request.Pdf.FileName);

            using (var stream = new FileStream(imgPath, FileMode.Create))
            {
                await request.Img.CopyToAsync(stream);
            }

            using (var stream = new FileStream(pdfPath, FileMode.Create))
            {
                await request.Pdf.CopyToAsync(stream);
            }

            var boletiminfo = new BoletimInfo
            {
                Titulo = request.Titulo,
                Data = request.Data,
                Img = $"/boletim-info/img/{ano}/{request.Img.FileName}",
                Pdf = $"/boletim-info/pdf/{ano}/{request.Pdf.FileName}"
            };

            _appDbContext.BoletinsInfos.Add(boletiminfo);
            await _appDbContext.SaveChangesAsync();

            return Ok(boletiminfo);
        }

        [HttpGet]
    public async Task<ActionResult<IEnumerable<BoletimInfo>>> GetBoletinsInfos()
    {
        var boletinsInfos = await _appDbContext.BoletinsInfos
            .OrderByDescending(b => b.Data)
            .ToListAsync();

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