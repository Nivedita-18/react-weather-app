export function getBackground(condition) {
  switch (condition) {
    case "Clear":
      return "sunny";

    case "Clouds":
      return "cloudy";

    case "Rain":
      return "rainy";

    case "Snow":
      return "snow";

    default:
      return "default";
  }
}