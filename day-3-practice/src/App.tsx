import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Welcome from './components/Welcome/Welcome.tsx';
import HelloWorld from './components/HelloWorld/HelloWorld.tsx';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import PrimaryButton from './components/PrimaryButton/PrimaryButton.tsx';
import SecondaryButton from './components/SecondaryButton/SecondaryButton.tsx';
import DangerButton from './components/DangerButton/DangerButton.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import MainContent from './components/MainContent/MainContent.tsx';
import StaticCard from './components/StaticCard/StaticCard.tsx';
import Gallery from './components/Gallery/Gallery.tsx';
import ProfileCard from './components/Profile/ProfileCard.tsx';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.tsx';
import FeatureList from './components/FeatureList/FeatureList.tsx';
import StaticArticle from './components/StaticArticle/StaticArticle.tsx';
import DashboardLayout from './components/DashboardLayout/DashboardLayout.tsx';

const ShowcasePage = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main
          style={{
            flex: 1,
            padding: '24px',
            backgroundColor: '#ffffff',
            color: '#000',
            overflowY: 'auto',
          }}
        >
          <Welcome />
          <HelloWorld />
          <LoadingSpinner />

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', margin: '24px 0' }}>
            <PrimaryButton />
            <SecondaryButton />
            <DangerButton />
          </div>

          <MainContent />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginTop: '40px',
            }}
          >
            <StaticCard />
            <StaticCard />
            <StaticCard />
            <StaticCard />
            <StaticCard />
            <StaticCard />
          </div>

          <Gallery />
          <ProfileCard />
          <FeatureList />
          <StaticArticle />
        </main>
      </div>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShowcasePage />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </div>
  );
};

export default App;
