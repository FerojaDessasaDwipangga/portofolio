export function calculateBottleneck(materialInput, outputActual) {
  if (!materialInput || materialInput === 0) {
    return { bottleneckIndex: 0, efficiencyPercent: 0, status: 'optimal' };
  }

  const efficiencyPercent = (outputActual / materialInput) * 100;
  const bottleneckIndex = Math.max(0, (1 - outputActual / materialInput) * 100);

  let status = 'optimal';
  if (bottleneckIndex > 70) {
    status = 'critical';
  } else if (bottleneckIndex > 30) {
    status = 'warning';
  }

  return { bottleneckIndex, efficiencyPercent, status };
}
