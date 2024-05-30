using WeatherAPI.Model;

namespace WeatherAPI.Repository;

public class WeatherRepositoryInMemory : IWeatherRepository
{
  private readonly List<WeatherReportModel> reports;

  public WeatherRepositoryInMemory()
  {
    reports =
    [
      new("Sunny", 25),
      new("Cloudy", 20),
      new("Rainy", 15),
      new("Stormy", 10),
      new("Snowy", 0),
      new("Windy", 18),
      new("Foggy", 12),
      new("Hail", 5)
    ];
  }

  public Task<IEnumerable<WeatherReportModel>> GetReports()
  {
    return Task.FromResult((IEnumerable<WeatherReportModel>)reports);
  }
}
