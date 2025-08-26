export interface WaveParams {
  width: number;
  height: number;
  time: number;
}

export interface ReflectionParams extends WaveParams {}

export interface BubbleParams extends WaveParams {}

export interface OceanAnimationProps {
  width: number;
  height: number;
}