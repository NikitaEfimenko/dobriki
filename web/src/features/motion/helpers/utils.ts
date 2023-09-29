
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

export const calcPersonSpecific = () => {
  return {
    stepLength: 0.77,
    specificCalories: 40
  }
}

export function calculateCalories(steps: number, stepLength: number, specificCalories: number): number {
  const stepLengthKm = stepLength * 1000
  const distanceInKilometers = steps / stepLengthKm;
  const caloriesBurned = distanceInKilometers * specificCalories;
  return caloriesBurned;
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

export function calculateSteps(
  horizontalDistance: number,
  stepLength: number = 1
) {
  // Рассчитываем горизонтальное расстояние между двумя точками в метрах
  const steps = horizontalDistance / stepLength;
  return steps
}

// Функция для расчета горизонтального расстояния между двумя точками
export function calculateHorizontalDistance(
  lat1: number,
  lon1: number,
  alt1: number,
  lat2: number,
  lon2: number,
  alt2: number,
): number {
  const threshold = 2
  const radius = 6371000;
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;

  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const verticalDistance = Math.abs(alt2 - alt1); // вертикальное расстояние

  // Горизонтальное расстояние с учетом вертикального перемещения
  // const horizontalDistance = Math.sqrt(c * c * radius * radius + verticalDistance * verticalDistance);
  const horizontalDistance = Math.sqrt(c * c * radius * radius + verticalDistance * verticalDistance);
  return horizontalDistance > threshold ? horizontalDistance : 0;
}
