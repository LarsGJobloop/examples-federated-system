namespace WeatherAPI.Model;

public class WeatherReportModel
{
  public Guid Id { get; } = Guid.NewGuid();
  public DateOnly Date { get; } = DateOnly.FromDateTime(DateTime.Now);
  public string Summary { get; set; }
  public int TemperatureC { get; set; }

  public WeatherReportModel(string summary, int temperatureC)
  {
    if (string.IsNullOrWhiteSpace(summary))
    {
      throw new ArgumentException("Summary cannot be null or empty", nameof(summary));
    }

    Summary = summary;
    TemperatureC = temperatureC;
  }
}
