import './Dashboard.css'

function Dashboard() {
  const alerts = [
    { id: 'ALT-7742', text: '第7号观测站异常信号强度上升 17%', level: 'orange', time: '2024/05/17 14:22' },
    { id: 'ALT-7743', text: '克伦威尔极限事件预警: 第13号采集站', level: 'red', time: '2024/05/17 09:41' },
    { id: 'ALT-7738', text: '回声分析中心检测到目标世界新端点', level: 'blue', time: '2024/05/16 22:07' },
  ]

  const stations = [
    { id: '1-6', status: 'online' },
    { id: '7', status: 'warning' },
    { id: '8-12', status: 'online' },
    { id: '13', status: 'critical' },
    { id: '14', status: 'offline' },
  ]

  return (
    <div className="dash">
      <div className="dash-section">
        <div className="dash-section-title">系统总览</div>
        <div className="dash-cards">
          <div className="dash-card green">
            <div className="dash-card-value">12/14</div>
            <div className="dash-card-label">观测站在线</div>
          </div>
          <div className="dash-card blue">
            <div className="dash-card-value">3</div>
            <div className="dash-card-label">活跃研究项目</div>
          </div>
          <div className="dash-card orange">
            <div className="dash-card-value">2</div>
            <div className="dash-card-label">待处理预警</div>
          </div>
          <div className="dash-card dim">
            <div className="dash-card-value">2174天</div>
            <div className="dash-card-label">系统运行时间</div>
          </div>
        </div>
      </div>

      <div className="dash-section">
        <div className="dash-section-title">实时预警</div>
        {alerts.map(a => (
          <div key={a.id} className={`dash-alert dash-alert-${a.level}`}>
            <span className="dash-alert-id">[{a.id}]</span>
            <span className="dash-alert-text">{a.text}</span>
            <span className="dash-alert-time">{a.time}</span>
          </div>
        ))}
      </div>

      <div className="dash-section">
        <div className="dash-section-title">观测站状态</div>
        <div className="dash-stations">
          {stations.map(s => (
            <div key={s.id} className={`dash-station st-${s.status}`}>
              <span className="dash-station-circle" />
              <span>观测站 {s.id}</span>
              <span className="dash-station-label">{s.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
