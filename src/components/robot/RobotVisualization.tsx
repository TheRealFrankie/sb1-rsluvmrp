import { RobotScene } from './RobotScene';
import { DataFlowVisualization } from './DataFlowVisualization';

export function RobotVisualization() {
  return (
    <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-1">
      <div className="w-full h-full rounded-lg bg-black/50 backdrop-blur-xl p-8 relative overflow-hidden">
        <DataFlowVisualization />
        <RobotScene />
      </div>
    </div>
  );
}