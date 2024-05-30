using System.Net;
using Microsoft.AspNetCore.Mvc;
using WeatherAPI.Model;
using WeatherAPI.Service;

namespace WeatherAPI.Controller;

[ApiController]
[Route("/api/v1/reports")]
public class WeatherController : ControllerBase
{
  private readonly IWeatherService weatherService;

  public WeatherController(IWeatherService WeatherService)
  {
    weatherService = WeatherService;
  }

  [HttpGet]
  public async Task<ActionResult<IEnumerable<WeatherReportModel>>> GetLatest()
  {
    var result = await weatherService.GetLatestReports();
    return result.ToArray();
  }

  [HttpGet("current")]
  public async Task<ActionResult<WeatherReportModel>> GetCurrent()
  {
    try
    {
      var result = await weatherService.GetCurrentReport();
      return result;
    }
    catch (System.Exception ex)
    {
      Console.WriteLine(ex);
      return NotFound();
    }
  }
}
