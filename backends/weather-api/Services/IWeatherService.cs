using WeatherAPI.Model;

namespace WeatherAPI.Service;

// The service contract
public interface IWeatherService
{
  public Task<IEnumerable<WeatherReportModel>> GetLatestReports();
  public Task<WeatherReportModel> GetCurrentReport();
}
