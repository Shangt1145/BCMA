import { useState, type FormEvent } from 'react'
import { useAuth } from '../context/AuthContext'
import './LoginModal.css'

interface Props {
  onClose: () => void
}

function LoginModal({ onClose }: Props) {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (login(username, password)) {
      onClose()
    } else {
      setError(true)
    }
  }

  return (
    <div className="login-overlay" onClick={onClose}>
      <form className="login-box" onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
        <div className="login-header">BCMA 身份验证</div>
        <div className="login-subtitle">Integrated Management System</div>

        <label className="login-label">用户 ID</label>
        <input
          className="login-input"
          value={username}
          onChange={e => { setUsername(e.target.value); setError(false) }}
          placeholder="输入用户ID"
          autoFocus
        />

        <label className="login-label">验证码</label>
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={e => { setPassword(e.target.value); setError(false) }}
          placeholder="输入验证码"
        />

        {error && <div className="login-error">验证失败 — 用户ID或验证码不正确</div>}

        <button className="login-btn" type="submit">验证</button>
        <button className="login-cancel" type="button" onClick={onClose}>取消</button>
      </form>
    </div>
  )
}

export default LoginModal
