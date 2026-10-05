export const getCssVariable = (variable: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

export const adjustColorOpacity = (hex: string, opacity: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const chartAreaGradient = (ctx: CanvasRenderingContext2D, chartArea: any, colorStops: any[]) => {
  if (!ctx || !chartArea) return null;
  const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  colorStops.forEach(({ stop, color }) => {
    gradient.addColorStop(stop, color);
  });
  return gradient;
};
