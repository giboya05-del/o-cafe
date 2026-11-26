import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/cafeData';

export type AppView = 'home' | 'menu';

interface NavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView, sectionId?: string) => void;
}

const WHATSAPP_RESERVE_URL = buildWhatsAppUrl(
  'Olá O Café da Banda! Gostaria de reservar uma mesa.'
);

export function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (view: AppView, sectionId?: string) => {
    setMobileOpen(false);
    onNavigate(view, sectionId);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F4]/95 backdrop-blur-sm border-b border-[#171412]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <button
          type="button"
          onClick={() => handleNav('home', 'inicio')}
          className="font-display text-lg font-bold tracking-tight text-[#171412] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C87A19]"
        >
          O Café da Banda
        </button>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#574F49]"
        >
          <button
            type="button"
            onClick={() => handleNav('menu')}
            className={`whitespace-nowrap shrink-0 hover:text-[#171412] hover:underline underline-offset-4 decoration-[#C87A19] transition-colors duration-150 cursor-pointer ${
              currentView === 'menu'
                ? 'text-[#171412] underline underline-offset-4 decoration-[#C87A19]'
                : ''
            }`}
          >
            Cardápio
          </button>
          <button
            type="button"
            onClick={() => handleNav('home', 'galeria')}
            className="whitespace-nowrap shrink-0 hover:text-[#171412] hover:underline underline-offset-4 decoration-[#C87A19] transition-colors duration-150 cursor-pointer"
          >
            Galeria
          </button>
          <button
            type="button"
            onClick={() => handleNav('home', 'equipa')}
            className="whitespace-nowrap shrink-0 hover:text-[#171412] hover:underline underline-offset-4 decoration-[#C87A19] transition-colors duration-150 cursor-pointer"
          >
            Equipa
          </button>
          <button
            type="button"
            onClick={() => handleNav('home', 'bar-de-rua')}
            className="whitespace-nowrap shrink-0 hover:text-[#171412] hover:underline underline-offset-4 decoration-[#C87A19] transition-colors duration-150 cursor-pointer"
          >
            Bar de Rua
          </button>
          <button
            type="button"
            onClick={() => handleNav('home', 'localizacao')}
            className="whitespace-nowrap shrink-0 hover:text-[#171412] hover:underline underline-offset-4 decoration-[#C87A19] transition-colors duration-150 cursor-pointer"
          >
            Localização
          </button>
        </nav>

        {/* Zone 3: 1 primary action (WhatsApp automatic reservation) + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={WHATSAPP_RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-[#F8F7F4] bg-[#171412] rounded-lg hover:bg-[#C87A19] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C87A19]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Reservar Mesa</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#171412]/15 text-[#171412] hover:bg-[#EFECE6] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#171412]/10 bg-[#F8F7F4] px-4 py-4 space-y-2">
          <nav aria-label="Navegação móvel" className="flex flex-col space-y-1">
            <button
              type="button"
              onClick={() => handleNav('home', 'inicio')}
              className="text-left px-3 py-2.5 text-base font-medium text-[#171412] rounded-lg hover:bg-[#EFECE6] transition-colors cursor-pointer"
            >
              Início
            </button>
            <button
              type="button"
              onClick={() => handleNav('menu')}
              className="text-left px-3 py-2.5 text-base font-medium text-[#171412] rounded-lg hover:bg-[#EFECE6] transition-colors cursor-pointer"
            >
              Cardápio Completo
            </button>
            <button
              type="button"
              onClick={() => handleNav('home', 'galeria')}
              className="text-left px-3 py-2.5 text-base font-medium text-[#171412] rounded-lg hover:bg-[#EFECE6] transition-colors cursor-pointer"
            >
              Galeria & Cartazes
            </button>
            <button
              type="button"
              onClick={() => handleNav('home', 'equipa')}
              className="text-left px-3 py-2.5 text-base font-medium text-[#171412] rounded-lg hover:bg-[#EFECE6] transition-colors cursor-pointer"
            >
              Equipa
            </button>
            <button
              type="button"
              onClick={() => handleNav('home', 'bar-de-rua')}
              className="text-left px-3 py-2.5 text-base font-medium text-[#171412] rounded-lg hover:bg-[#EFECE6] transition-colors cursor-pointer"
            >
              Bar de Rua
            </button>
            <button
              type="button"
              onClick={() => handleNav('home', 'localizacao')}
              className="text-left px-3 py-2.5 text-base font-medium text-[#171412] rounded-lg hover:bg-[#EFECE6] transition-colors cursor-pointer"
            >
              Localização
            </button>
          </nav>

          <a
            href={WHATSAPP_RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="w-full py-3 px-4 text-sm font-semibold text-[#F8F7F4] bg-[#171412] rounded-lg hover:bg-[#C87A19] transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Reservar Mesa (WhatsApp)</span>
          </a>
        </div>
      )}
    </header>
  );
}
