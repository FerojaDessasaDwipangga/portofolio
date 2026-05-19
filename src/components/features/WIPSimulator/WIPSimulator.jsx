import useWIPSimulator from '../../../hooks/useWIPSimulator';

export default function WIPSimulator() {
  const { inputs, setters, metrics } = useWIPSimulator();

  return (
    <div className="card bg-base-200 shadow-xl border border-base-300 overflow-hidden">
      <div className="card-body p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="card-title text-2xl font-black tracking-tight text-accent">
              Simulator Logika WIP
            </h2>
            <p className="text-sm opacity-60">Demo Interaktif Efisiensi Produksi</p>
          </div>
          <div className={`badge badge-lg font-bold uppercase tracking-widest ${
            metrics.status === 'optimal' ? 'badge-success' : 
            metrics.status === 'warning' ? 'badge-warning' : 'badge-error'
          }`}>
            {metrics.status === 'optimal' ? 'OPTIMAL' : 
             metrics.status === 'warning' ? 'PERINGATAN' : 'KRITIS'}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs Section */}
          <div className="space-y-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold opacity-70">Material Masuk (Input)</span>
                <span className="label-text-alt text-accent font-mono">{inputs.materialIn} unit</span>
              </label>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={inputs.materialIn}
                onChange={(e) => setters.setMaterialIn(Number(e.target.value))}
                className="range range-accent range-sm"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold opacity-70">Output Aktual</span>
                <span className="label-text-alt text-accent font-mono">{inputs.actualOutput} unit</span>
              </label>
              <input
                type="range"
                min="0"
                max={inputs.materialIn}
                step="10"
                value={inputs.actualOutput}
                onChange={(e) => setters.setActualOutput(Number(e.target.value))}
                className="range range-success range-sm"
              />
            </div>

            <div className="bg-base-300/30 rounded-2xl p-4 border border-base-300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase opacity-50 tracking-tighter">Indeks Hambatan</span>
                <span className="text-xs font-mono font-bold text-accent">{metrics.bottleneckIndex}%</span>
              </div>
              <progress 
                className={`progress w-full h-3 ${metrics.progressClass}`} 
                value={metrics.bottleneckIndex} 
                max="100"
              ></progress>
              <p className="text-[10px] mt-2 opacity-40 leading-tight">
                Tingkat hambatan produksi berdasarkan deviasi output dari kapasitas maksimal material.
              </p>
            </div>
          </div>

          {/* Visualization Section */}
          <div className="flex flex-col items-center justify-center bg-base-100 rounded-3xl p-8 border border-base-300 shadow-inner">
            <div 
              className={`radial-progress ${metrics.colorClass} border-8 border-base-200 shadow-lg`} 
              style={{ 
                "--value": metrics.efficiency, 
                "--size": "12rem", 
                "--thickness": "1rem" 
              }} 
              role="progressbar"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl font-black tracking-tighter text-base-content">
                  {metrics.efficiency}%
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Efisiensi</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full mt-12">
              <div className="text-center p-3 rounded-xl bg-base-200 border border-base-300">
                <div className="text-[10px] font-bold uppercase opacity-40 mb-1">Tingkat Loss</div>
                <div className="text-lg font-mono font-bold text-orange-500">
                  {100 - metrics.efficiency}%
                </div>
              </div>
              <div className="text-center p-3 rounded-xl bg-base-200 border border-base-300">
                <div className="text-[10px] font-bold uppercase opacity-40 mb-1">Pemulihan</div>
                <div className="text-lg font-mono font-bold text-success">
                  {inputs.actualOutput}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
