public class Noticia
{
    public int Id { get; set; }
    public string Titulo { get; set; }
    public string Conteudo { get; set; } // HTML
    public string ImagemCapa { get; set; }
    public DateTime Data { get; set; }
    public string Slug { get; set; }
    public DateTime DataPublicacao { get; set; } 
}