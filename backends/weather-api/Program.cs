// Get builder
using WeatherAPI.Repository;
using WeatherAPI.Service;

var builder = WebApplication.CreateBuilder(args);

// Register services
builder.Services.AddControllers();
builder.Services.AddSingleton<IWeatherRepository, WeatherRepositoryInMemory>();
builder.Services.AddScoped<IWeatherService, WeatherService>();

// Construct application
var app = builder.Build();

// Setup Routes
app.UseHttpsRedirection();
app.MapControllers();

// Start application
app.Run();
