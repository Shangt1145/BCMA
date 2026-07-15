import './Communications.css'

interface Message {
  id: string
  from: string
  to: string
  subject: string
  date: string
  body: string[]
}

const messages: Message[] = [
  {
    id: 'COM-0047',
    from: '林██',
    to: '陈██ · 中央枢纽',
    subject: '关于第7号观测站物资异常',
    date: '2024/04/30',
    body: [
      '陈主任：',
      '',
      '我复查了HQ-LOG-2024-0317后勤部调拨记录中关于第7号观测站的数据。该站在3月至5月期间的锚定定位器维护套件申请量是同期其他观测站的4.2倍。',
      '',
      '更值得注意的是序列004（BM-8814 跨维通讯中继器校准模块）的调拨来源被涂黑。按照标准流程，此类高敏感设备必须标注审批部门。涂黑操作本身违反了操作条例。',
      '',
      '我建议启动内部审计。请批复。',
      '',
      '林██',
    ],
  },
  {
    id: 'COM-0052',
    from: '陈██',
    to: '林██ · 回声分析中心',
    subject: 'Re: 关于第7号观测站物资异常',
    date: '2024/05/02',
    body: [
      '林博士：',
      '',
      '审计申请已批准。但请务必通过安全渠道进行，不要在系统内留下完整记录。',
      '',
      '另外——你注意到序列010了吗？3月28日，整条记录被覆盖。我用恢复工具尝试了三次，全部失败。这不是普通的文件损坏。',
      '',
      '我不确定我们应该继续挖下去。',
      '',
      '陈██',
    ],
  },
  {
    id: 'COM-0059',
    from: '王██',
    to: '林██ · 回声分析中心',
    subject: 'alpha-7 测试端点响应',
    date: '2024/05/06',
    body: [
      '林博士：',
      '',
      'α-7 测试有了新的进展。我们部署到外部端点的测试文件已被访问。',
      '',
      '访问源的特征码与BCMA已知的任何内部系统都不匹配。这不是我们自己人。',
      '',
      '来源IP分析正在进行中，但初步结果显示……信号来自我们的维度之外。',
      '',
      '是否继续监测？这个决定需要你的签名。',
      '',
      '王██',
    ],
  },
  {
    id: 'COM-0063',
    from: '林██',
    to: '王██ · 通信技术部',
    subject: 'Re: alpha-7 测试端点响应',
    date: '2024/05/07',
    body: [
      '继续监测。',
      '',
      '另：测试端点是否仍维持在激活状态？对方在访问文件后是否尝试了反向搜索？如果是，我们需要知道他们找到了什么。',
      '',
      '还有一件事——镜像界面稳定器的实验数据你那边有备份吗？中央枢纽最近在封锁部分研究档案。',
      '',
      '林██',
    ],
  },
]

function Communications() {
  return (
    <div className="comm">
      <div className="comm-header">
        <h2 className="comm-title">内部通讯</h2>
        <span className="comm-count">{messages.length} 条消息</span>
      </div>

      <div className="comm-list">
        {messages.map(m => (
          <div key={m.id} className="comm-item">
            <div className="comm-item-header">
              <span className="comm-item-id">{m.id}</span>
              <span className="comm-item-subject">{m.subject}</span>
              <span className="comm-item-date">{m.date}</span>
            </div>
            <div className="comm-item-meta">
              发件: {m.from} → 收件: {m.to}
            </div>
            <div className="comm-item-body">
              {m.body.map((line, i) => (
                <p key={i} className="comm-item-line">{line || '\u00A0'}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Communications
