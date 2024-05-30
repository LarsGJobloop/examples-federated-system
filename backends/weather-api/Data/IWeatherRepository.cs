using WeatherAPI.Model;

namespace WeatherAPI.Repository;

public interface IWeatherRepository
{
  public Task<IEnumerable<WeatherReportModel>> GetReports();
}
