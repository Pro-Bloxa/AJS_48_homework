export default function showLevel(obj) {
  if (obj.health >= 50) {
    return 'healthy';
  }
  if (obj.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
