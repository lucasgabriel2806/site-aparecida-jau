using Microsoft.AspNetCore.Http;

namespace api_aparecida_jau.Models
{
    public class NoticiaRequest
    {
        public string Titulo { get; set; }
        public string Subtitulo { get; set; }
        public string Autor { get; set; }

        public string Conteudo { get; set; }

        public IFormFile ImagemCapa { get; set; }
    }
}