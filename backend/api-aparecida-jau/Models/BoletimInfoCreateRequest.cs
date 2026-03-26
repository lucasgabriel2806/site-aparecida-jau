using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace api_aparecida_jau.Models
{    
    public class BoletimInfoCreateRequest
    {
        public string Titulo { get; set; }
        public string Data { get; set; }

        public IFormFile Img { get; set; }
        public IFormFile Pdf { get; set; }
    }
}