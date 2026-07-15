import './EmailTranscript.css'

function EmailTranscript() {
  return (
    <div className="email-page">
      <div className="email-header">
        <h2 className="email-title">外部通讯监控记录</h2>
        <div className="email-meta">归档编号: ECM-0078-0081 · 归档日期: 2024/06/18 · 来源: 截获</div>
      </div>

      <div className="email-thread">

        <div className="email-msg">
          <div className="email-msg-header">
            <div className="email-field">
              <span className="email-label">发件人:</span>
              <span className="email-value redacted">████████████</span>
            </div>
            <div className="email-field">
              <span className="email-label">收件人:</span>
              <span className="email-value">卢克 · 通信技术部</span>
            </div>
            <div className="email-field">
              <span className="email-label">通过:</span>
              <span className="email-value redacted">██████████@███.███</span>
            </div>
            <div className="email-field">
              <span className="email-label">主题:</span>
              <span className="email-value">关于 α-7 测试端点的异常访问</span>
            </div>
            <div className="email-field">
              <span className="email-label">日期:</span>
              <span className="email-value">2024年6月14日 16:32</span>
            </div>
          </div>
          <div className="email-body">
            <p>卢克，</p>
            <p>你需要看一下 α-7 测试端点的最新日志。那个外部的目标地址在过去的72小时内被访问了四次，最近一次的访问源特征码我们已经解析出了一部分——跟中央枢纽网络的任何已知节点都没有关联。</p>
            <p>这不符合任何已知的通讯协议标准。我已经把完整的日志转存到了一份离线副本里。我建议你也做一份。</p>
            <p>另外——内部通讯系统最近不太稳定。四次访问中的第二次发生的时候，整个第7号观测站的监控系统同时离线了三分钟。我不认为这是巧合。</p>
            <p>考虑用外部渠道进行后续联系。这件事需要小心处理。</p>
            <p className="email-sign">— ███</p>
          </div>
        </div>

        <div className="email-msg reply">
          <div className="email-msg-header">
            <div className="email-field">
              <span className="email-label">发件人:</span>
              <span className="email-value">卢克</span>
            </div>
            <div className="email-field">
              <span className="email-label">收件人:</span>
              <span className="email-value redacted">████████████</span>
            </div>
            <div className="email-field">
              <span className="email-label">通过:</span>
              <span className="email-value">bcma-ops@outlook.com</span>
            </div>
            <div className="email-field">
              <span className="email-label">主题:</span>
              <span className="email-value">回复: 关于 α-7 测试端点的异常访问</span>
            </div>
            <div className="email-field">
              <span className="email-label">日期:</span>
              <span className="email-value">2024年6月14日 22:07</span>
            </div>
          </div>
          <div className="email-body">
            <p>收到了。</p>
            <p>系统最近的异常日志比我上个月统计的总数多了将近三倍——而且全是第7号观测站覆盖范围的事件。三天前我已经申请了对 α-7 端点的主动监控权限，批复文件被卡在中央枢纽，没有给任何理由。</p>
            <p>陈主任最近的态度有点奇怪。他回避了我的两次汇报请求。</p>
            <p>继续用这个地址联系——<strong>bcma-ops@outlook.com</strong>。</p>
            <p>别在内网留任何关于这件事的记录了。</p>
            <p className="email-sign">— 卢克</p>
          </div>
        </div>

        <div className="email-msg">
          <div className="email-msg-header">
            <div className="email-field">
              <span className="email-label">发件人:</span>
              <span className="email-value redacted">████████████</span>
            </div>
            <div className="email-field">
              <span className="email-label">收件人:</span>
              <span className="email-value">卢克 &lt;bcma-ops@outlook.com&gt;</span>
            </div>
            <div className="email-field">
              <span className="email-label">通过:</span>
              <span className="email-value redacted">██████████@███.███</span>
            </div>
            <div className="email-field">
              <span className="email-label">主题:</span>
              <span className="email-value">回复: 关于 α-7 测试端点的异常访问</span>
            </div>
            <div className="email-field">
              <span className="email-label">日期:</span>
              <span className="email-value">2024年6月17日 01:15</span>
            </div>
          </div>
          <div className="email-body">
            <p>卢克——</p>
            <p>那个访问者又来了。</p>
            <p>就在两个小时之前。他们不仅访问了端点，还下载了测试文件。文件是我们部署到那个地址的主动频谱信号编码。</p>
            <p>更关键的是：<strong>他们尝试了响应。</strong></p>
            <p>这不是自动流量。这不是系统扫描。另一边有人在操作，卢克。有人找到了那个端点，发现了测试文件，而且——他们在试图向我们发回东西。</p>
            <p>我已经把新的分析报告发到了你的外部邮箱。但里面有一件事你需要亲自看：</p>
            <p>对方的响应数据里包含的报头信息，跟我们内部网络里一个三个月前就被标记为“已注销”的节点特征码高度吻合。</p>
            <p>那个节点不存在了，卢克。至少在我们的系统里，它不应该存在。</p>
            <p>但它确实在回应我们。</p>
            <p className="email-sign">— ███</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EmailTranscript
