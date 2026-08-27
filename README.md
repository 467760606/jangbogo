# 🎮 Jangbogo Project

Roblox와 Discord를 연동한 강력한 관리 시스템입니다.

## 🌐 홈페이지
- **홈페이지**: https://jangbogo.vercel.app
- **로그인**: https://jangbogo.vercel.app/login
- **관리자**: https://jangbogo.vercel.app/admin

## ✨ 주요 기능

- 🏠 **홈페이지** - 모던한 인터페이스
- 🎮 **Roblox 로그인** - 안전한 Roblox 계정 연동
- 🔐 **관리자 시스템** - 강력한 관리 도구
- 💬 **Discord 연동** - Discord 커뮤니티 관리
- 📱 **모바일 반응형** - 모든 기기 지원
- ⚡ **빠른 성능** - 최적화된 로딩 속도

## 🛠️ 기술 스택

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Node.js (예정)
- **Database**: MongoDB (예정)
- **Authentication**: OAuth 2.0, JWT
- **Deployment**: Vercel

## 📦 설치

### 필수 요구사항
- Node.js 18 이상
- npm 또는 yarn

### 로컬 실행

```bash
# 저장소 클론
git clone https://github.com/467760606/jangbogo.git
cd jangbogo

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 브라우저에서 열기
# http://localhost:3000
```

### 배포

```bash
# 빌드
npm run build

# 프로덕션 실행
npm start
```

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── page.jsx          # 홈페이지
│   ├── login/
│   │   └── page.jsx      # 로그인 페이지
│   ├── admin/            # 관리자 시스템
│   ├── layout.jsx        # 레이아웃
│   └── globals.css       # 전역 스타일
├── components/
│   ├── Navbar.jsx        # 네비게이션 바
│   ├── Hero.jsx          # 히어로 섹션
│   ├── Features.jsx      # 기능 섹션
│   └── Footer.jsx        # 푸터
├── lib/                  # 유틸리티
└── public/               # 정적 파일
```

## 🚀 배포 방법

### Vercel로 배포 (추천)

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 자동 배포 설정

## 🔒 환경 변수

`.env.local` 파일 생성:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_ROBLOX_CLIENT_ID=your_roblox_client_id
NEXT_PUBLIC_DISCORD_CLIENT_ID=your_discord_client_id
```

## 🤝 커뮤니티

- **Discord**: [NSB9hVuawk](https://discord.gg/NSB9hVuawk)
- **Roblox**: [Jangbogo Group](https://www.roblox.com)

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

---

**Made with ❤️ by Jangbogo Team**