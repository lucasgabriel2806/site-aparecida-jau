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
        public async Task<IActionResult> AddBoletimInfo([FromBody] BoletimInfo boletiminfo)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _appDbContext.BoletinsInfos.Add(boletiminfo);
            await _appDbContext.SaveChangesAsync();

            return Created("Boletim Informativo adicionado com sucesso!", boletiminfo);
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