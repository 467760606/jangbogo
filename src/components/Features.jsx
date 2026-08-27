'use client'

export default function Features() {
  const features = [
    { icon: '🏠', title: '홈페이지', description: '모던한 인터페이스로 프로젝트를 소개합니다' },
    { icon: '🎮', title: 'Roblox 로그인', description: 'Roblox 계정으로 안전하게 로그인' },
    { icon: '🔐', title: '관리자 시스템', description: '강력한 관리 도구로 프로젝트 관리' },
    { icon: '💬', title: 'Discord 연동', description: 'Discord와 연동된 커뮤니티 관리' },
    { icon: '📱', title: '모바일 반응형', description: '모든 기기에서 완벽하게 작동' },
    { icon: '⚡', title: '빠른 성능', description: '최적화된 성능으로 빠른 로딩' },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">주요 기능</h2>
          <p className="text-lg text-gray-600">Jangbogo가 제공하는 모든 기능을 살펴보세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}