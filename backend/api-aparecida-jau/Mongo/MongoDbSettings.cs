namespace api_aparecida_jau.Mongo
{
    public class MongoDbSettings
    {
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string AlbunsCollectionName { get; set; } = null!;
    }
}