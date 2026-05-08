using api_aparecida_jau.Models;
using api_aparecida_jau.Mongo;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace api_aparecida_jau.Services
{
    public class AlbumService
    {
        private readonly IMongoCollection<Album> _albunsCollection;

        public AlbumService(IOptions<MongoDbSettings> mongoDbSettings)
        {
            var mongoClient = new MongoClient(
                mongoDbSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                mongoDbSettings.Value.DatabaseName);

            _albunsCollection = mongoDatabase.GetCollection<Album>(
                mongoDbSettings.Value.AlbunsCollectionName);
        }

        public async Task<List<Album>> GetAsync() =>
            await _albunsCollection.Find(_ => true).ToListAsync();

        public async Task<Album?> GetBySlugAsync(string slug) =>
            await _albunsCollection.Find(x => x.Slug == slug).FirstOrDefaultAsync();

        public async Task CreateAsync(Album album) =>
            await _albunsCollection.InsertOneAsync(album);
    }
}