using WeatherAPI.Model;
using WeatherAPI.Repository;

namespace WeatherAPI.Service;

// The concrete implementation
public class WeatherService : IWeatherService
{
  private readonly IWeatherRepository reports;

  public WeatherService(IWeatherRepository Reports)
  {
    reports = Reports;
  }

  public async Task<IEnumerable<WeatherReportModel>> GetLatestReports()
  {
    var currentReports = await reports.GetReports();
    return currentReports.TakeLast(5);
  }

  public async Task<WeatherReportModel> GetCurrentReport()
  {
    var currentReports = await reports.GetReports();

    return currentReports.Last();
  }
}
