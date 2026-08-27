'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!email || !password) {
      setError('이메일과 비밀번호를 입력해주세요.')
      setLoading(false)
      return
    }

    try {
      console.log('Login attempt:', { email, password })
      setTimeout(() => {
        setLoading(false)
        router.push('/dashboard')
      }, 1000)
    } catch (err) {
      setError('로그인에 실패했습니다.')
      setLoading(false)
    }
  }

  const handleRobloxLogin = () => {
    console.log('Roblox login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">J</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Jangbogo</h1>
          <p className="text-blue-100 mt-2">Roblox 로그인 플랫폼</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">로그인</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <button onClick={handleRobloxLogin} className="w-full py-3 px-4 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition mb-4 flex items-center justify-center gap-2">
            🎮 Roblox로 로그인
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">또는</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <button type="submit" disabled={loading} className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed">
              {loading ? '로그인 중...' : '로그인'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm">
            <p className="text-gray-600 mb-2">계정이 없으신가요? <Link href="/signup" className="text-blue-500 hover:text-blue-600 font-semibold">가입하기</Link></p>
            <Link href="/" className="text-gray-500 hover:text-gray-700">← 홈으로 돌아가기</Link>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-blue-100">
          <p>🔒 안전한 SSL 연결로 보호됩니다</p>
        </div>
      </div>
    </div>
  )
}