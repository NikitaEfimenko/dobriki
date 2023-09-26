export function calcDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  var deg2rad = Math.PI / 180;
  lat1 *= deg2rad;
  lon1 *= deg2rad;
  lat2 *= deg2rad;
  lon2 *= deg2rad;
  var diam = 12742; // Diameter of the earth in km (2 * 6371)
  var dLat = lat2 - lat1;
  var dLon = lon2 - lon1;
  var a = (
    (1 - Math.cos(dLat)) +
    (1 - Math.cos(dLon)) * Math.cos(lat1) * Math.cos(lat2)
  ) / 2;

  return diam * Math.asin(Math.sqrt(a));
}

export const handleAccelerometerReading = (x: number, y: number, z:number, handler: (value: any) => void) => {
  const threshold = 10;
  if (
    Math.abs(x) > threshold ||
    Math.abs(y) > threshold ||
    Math.abs(z) > threshold
  ) {
    handler((prevCount: number) => prevCount + 1);
  }
};