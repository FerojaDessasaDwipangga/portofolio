import { useState, useMemo } from 'react';

/**
 * Hook for calculating WIP (Work In Progress) metrics for a factory simulation.
 * @returns {object} WIP state and calculation functions.
 */
export default function useWIPSimulator() {
  const [materialIn, setMaterialIn] = useState(1000);
  const [actualOutput, setActualOutput] = useState(850);
  const [targetOutput, setTargetOutput] = useState(1000);

  const metrics = useMemo(() => {
    const efficiency = materialIn > 0 ? (actualOutput / materialIn) * 100 : 0;
    const bottleneckIndex = targetOutput > 0 ? Math.max(0, (1 - actualOutput / targetOutput) * 100) : 0;

    let status = 'optimal';
    let colorClass = 'text-accent-emerald';
    let progressClass = 'progress-success';

    if (efficiency < 70) {
      status = 'critical';
      colorClass = 'text-orange-500';
      progressClass = 'progress-error';
    } else if (efficiency < 90) {
      status = 'warning';
      colorClass = 'text-accent-amber';
      progressClass = 'progress-warning';
    }

    return {
      efficiency: Math.round(efficiency),
      bottleneckIndex: Math.round(bottleneckIndex),
      status,
      colorClass,
      progressClass,
    };
  }, [materialIn, actualOutput, targetOutput]);

  return {
    inputs: {
      materialIn,
      actualOutput,
      targetOutput,
    },
    setters: {
      setMaterialIn,
      setActualOutput,
      setTargetOutput,
    },
    metrics,
  };
}
