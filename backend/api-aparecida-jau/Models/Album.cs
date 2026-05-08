using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api_aparecida_jau.Models
{
    public class Album
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string Titulo { get; set; } = null!;

        public string Slug { get; set; } = null!;

        public string Descricao { get; set; } = null!;

        public string Capa { get; set; } = null!;

        public List<string> Fotos { get; set; } = new();

        public DateTime Data { get; set; }
    }
}