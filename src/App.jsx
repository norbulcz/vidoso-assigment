import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { SearchProvider } from "./components/SearchContext"
import SearchInput from "./components/SearchInput"
import Tabs from "./components/Tabs"
import styled from "styled-components"
import UsersPage from "./pages/UsersPage"
import PostsPage from "./pages/PostsPage"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  background-color: #4C8CE1;
  display: flex;
  flex-direction: column;
  width: 100vw;
  top: 0;
  margin: 0 auto;
  align-items: center;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`;

function App() {

  return (
    <SearchProvider>
      <AppContainer>
        <Router>
          <HeaderContainer>
            <SearchInput />
            <Tabs />
          </HeaderContainer>
          <PageContainer>
            <Routes>
              <Route path="/users" element={<UsersPage />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="*" element={<Navigate to={"/users"} />} />
            </Routes>
          </PageContainer>
        </Router>
      </AppContainer>
    </SearchProvider>
  )
}

export default App
