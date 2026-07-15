import './Discovery.css'

function Discovery() {
  return (
    <div className="disc">
      <div className="disc-header">
        <h2 className="disc-title">异常发现 — 跨维信息渗透</h2>
        <div className="disc-status">状态: 活跃监测中</div>
      </div>

      <div className="disc-card">
        <div className="disc-card-title">跨维信息渗透测试 α-7</div>
        <div className="disc-card-meta">发起: 2024/03/20 · 执行部门: 回声分析中心 · 授权: 林██</div>
        <div className="disc-card-body">
          <p>中央枢纽于 2024年3月20日启动 α-7 测试，旨在验证两个世界之间的信息通道是否具备双向数据传输能力。</p>
          <p>测试结果表明，目标世界的互联网基础设施中已出现多个与 BCMA 设施相对应的通信端点。初步判断为克伦威尔协议第7条所述之"现实渗透"现象。</p>
        </div>
      </div>

      <div className="disc-card highlight">
        <div className="disc-card-title">测试文件部署</div>
        <div className="disc-card-meta">加密等级: AES-256 · 测试签名: ECH0-T3ST-077</div>
        <div className="disc-card-body">
          <p>为验证跨维信息传输的稳定性，已向目标世界互联网部署测试文件。</p>
          <p>文件包含主动频谱信号编码，可在目标世界标准音频分析工具中验证。</p>
          <div className="disc-code-block">
            <div className="disc-code-label">端点编码 [AES-256]:</div>
            <div className="disc-code-value">aHR0cHM6Ly9wYW4ucXVhcmsuY24vcy9iY21hLXRlc3Q=</div>
          </div>
          <p className="disc-warning">⚠ 测试文件包含主动频谱信号。仅限授权人员访问。目标世界个体若解码此信息将构成跨维安全事件。</p>
        </div>
      </div>

      <div className="disc-card dim">
        <div className="disc-card-title">后续观测计划</div>
        <div className="disc-card-body">
          <p>• 持续监测目标世界对测试文件的响应</p>
          <p>• 评估信号在跨维传输中的衰减模式</p>
          <p>• 第7号观测站维持 ALPHA-3 监测级别</p>
          <p>• 如检测到目标世界个体响应，立即上报中央枢纽</p>
        </div>
      </div>
    </div>
  )
}

export default Discovery
