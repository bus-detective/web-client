// Modified Java String.hashCode() algorithm
function stringToNumHash(str) {
  var hash = 0;

  if (str.length === 0) {
    return hash;
  }

  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i) * 123; // 123 added for larger spread for close values
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

export default function stringToHue(string) {
  // Only allow positive numbers from 0 to 359;
  return Math.abs(stringToNumHash(string)) % 360;
}
