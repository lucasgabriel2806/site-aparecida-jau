using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api_aparecida_jau.Models
{
    [Table("boletinsInfos")]
    public class BoletimInfo
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Título é um campo obrigatório")]
        public string Titulo { get; set; }
        [Required(ErrorMessage = "Data é um campo obrigatório")]
        public string Data { get; set; } // "2025-03"
        [Required(ErrorMessage = "Imagem é um campo obrigatório")]
        public string Img { get; set; }
        [Required(ErrorMessage = "Pdf é um campo obrigatório")]
        public string Pdf { get; set; }     
    }
}