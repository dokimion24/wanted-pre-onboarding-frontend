

## wanted-pre-onboarding-frontend

### 지원자의 성명
이찬영

### 프로젝트의 실행 방법
```
git clone https://github.com/dokimion24/wanted-pre-onboarding-frontend.git
npm install
npm start
```

### 데모 영상
- [배포링크](https://wanted-pre-onboarding-frontend-tan-nine.vercel.app/)



1. 로그인 / 회원가입
![auth](https://github.com/dokimion24/wanted-pre-onboarding-frontend/assets/92348492/a4439696-2b87-46fe-bb52-cc43fde0607b)



2. TODO LIST
- todo
![todo](https://github.com/dokimion24/wanted-pre-onboarding-frontend/assets/92348492/0d43c7f0-5b2f-4b8b-aa7c-0196dbf37a1d)


- redirect
![redirect](https://github.com/dokimion24/wanted-pre-onboarding-frontend/assets/92348492/43899758-4ebb-46f2-a460-06de13efac6a)


### 디렉터리 구조
📦src
 ┣ 📂apis
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜axiosInstance.js
 ┃ ┗ 📜todo.js
 ┣ 📂components
 ┃ ┣ 📂Common
 ┃ ┃ ┣ 📂Layout
 ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┗ 📜style.jsx
 ┃ ┃ ┗ 📂Loading
 ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┗ 📜style.jsx
 ┃ ┣ 📂SignForm
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.jsx
 ┃ ┣ 📂TodoHeader
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.jsx
 ┃ ┣ 📂TodoItem
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.jsx
 ┃ ┗ 📂TodoList
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useRedirect.js
 ┃ ┣ 📜useTodos.js
 ┃ ┗ 📜useValidteInput.js
 ┣ 📂page
 ┃ ┣ 📂HomePage
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.jsx
 ┃ ┣ 📂NotFoundPage
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.jsx
 ┃ ┣ 📂SigninPage
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂SignupPage
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┗ 📂TodoPage
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜style.jsx
 ┣ 📂routes
 ┃ ┣ 📜PrivateRoute.jsx
 ┃ ┗ 📜Router.jsx
 ┣ 📂styles
 ┃ ┣ 📜common.jsx
 ┃ ┗ 📜global.jsx
 ┣ 📜App.js
 ┗ 📜index.js

 - 컴포넌트 폴더 안에 style.jsx index.jsx
 - 페이지 컴포넌트는 src/page에서 관리하고 페이지에서 필요한 컴포넌트는 src/component에서 관리하도록 설계


### 리다이렉트
```jsx

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
}


import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

function PrivateRoute() {
  const { pathname } = useLocation();
  const accessToken = localStorage.getItem('accessToken');

  if (pathname === '/todo') {
    return accessToken ? <Outlet /> : <Navigate to="/signin" replace />;
  } else {
    return accessToken ? <Navigate to="/todo" replace /> : <Outlet />;
  }
}

export default PrivateRoute;

```
- 사용자가 /todo로 접근했을 때 토큰이 없으면 /sigin 리다이렉트
- /signup, /signin으로 접근했을 때 토큰이 있으면 /todo 리다이렉트
