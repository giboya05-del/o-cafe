/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { BarDeRuaSection } from './components/BarDeRuaSection';
import { ClientesSection } from './components/ClientesSection';
import { Footer } from './components/Footer';
import { GaleriaSection } from './components/GaleriaSection';
import { HeroSection } from './components/HeroSection';
import {
  BookingPurpose,
  LocationBookingSection,
} from './components/LocationBookingSection';
import { MenuPage } from './components/MenuPage';
import { MenuSection } from './components/MenuSection';
import { AppView, Navbar } from './components/Navbar';
import { TeamSection } from './components/TeamSection';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
  const [bookingPurpose, setBookingPurpose] =
    useState<BookingPurpose>('barderua');

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const handleNavigate = (view: AppView, sectionId?: string) => {
    setCurrentView(view);
    if (view === 'menu') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId) {
      scrollToSection(sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleItem = (id: string) => {
    setSelectedItemIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleReserveClick = (purpose?: BookingPurpose) => {
    if (purpose) {
      setBookingPurpose(purpose);
    }
    setCurrentView('home');
    scrollToSection('reservas');
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#171412]">
        <Navbar currentView={currentView} onNavigate={handleNavigate} />

        <main className="flex-1">
          {currentView === 'menu' ? (
            <MenuPage
              selectedItemIds={selectedItemIds}
              onToggleItem={handleToggleItem}
              onBackHome={() => handleNavigate('home', 'inicio')}
            />
          ) : (
            <>
              <HeroSection
                onOpenMenuPage={() => handleNavigate('menu')}
                onExploreEvent={() => scrollToSection('bar-de-rua')}
              />

              <MenuSection
                selectedItemIds={selectedItemIds}
                onToggleItem={handleToggleItem}
                onOpenFullMenu={() => handleNavigate('menu')}
              />

              <GaleriaSection />

              <TeamSection />

              <ClientesSection />

              <BarDeRuaSection
                onReserveForEvent={() => handleReserveClick('barderua')}
              />

              <LocationBookingSection
                selectedItemIds={selectedItemIds}
                onRemoveSelectedItem={handleToggleItem}
                onClearSelectedItems={() => setSelectedItemIds([])}
                bookingPurpose={bookingPurpose}
                onPurposeChange={setBookingPurpose}
              />
            </>
          )}
        </main>

        <Footer onNavigate={handleNavigate} />
      </div>
    </MotionConfig>
  );
}
