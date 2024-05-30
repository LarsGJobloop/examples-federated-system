// Get builder
using WeatherAPI.Repository;
using WeatherAPI.Service;
using Microsoft.AspNetCore.Cors;

var builder = WebApplication.CreateBuilder(args);

// Register services
builder.Services.AddControllers();
builder.Services.AddSingleton<IWeatherRepository, WeatherRepositoryInMemory>();
builder.Services.AddScoped<IWeatherService, WeatherService>();
builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(policy =>
  {
    policy.AllowAnyOrigin();
  });
});

// Construct application
var app = builder.Build();

// Setup Routes
app.UseHttpsRedirection();
app.MapControllers();
app.UseCors();

// Start application
app.Run();
