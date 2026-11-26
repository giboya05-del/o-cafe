import { BRAND_INFO, buildWhatsAppUrl } from '../data/cafeData';
import { AppView } from './Navbar';

interface FooterProps {
  onNavigate: (view: AppView, sectionId?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#EFECE6] border-t border-[#171412]/10 py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <button
            type="button"
            onClick={() => onNavigate('home', 'inicio')}
            className="font-display text-lg font-bold text-[#171412] cursor-pointer"
          >
            {BRAND_INFO.name}
          </button>
          <p className="text-xs text-[#574F49] mt-1">
            {BRAND_INFO.addressPrimary} ({BRAND_INFO.addressReference}) ·{' '}
            <span className="font-mono tabular-nums">{BRAND_INFO.plusCode}</span>
          </p>
        </div>

        <nav
          aria-label="Navegação de rodapé"
          className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#574F49]"
        >
          <button
            type="button"
            onClick={() => onNavigate('menu')}
            className="hover:text-[#171412] transition-colors cursor-pointer"
          >
            Cardápio
          </button>
          <button
            type="button"
            onClick={() => onNavigate('home', 'galeria')}
            className="hover:text-[#171412] transition-colors cursor-pointer"
          >
            Galeria
          </button>
          <button
            type="button"
            onClick={() => onNavigate('home', 'bar-de-rua')}
            className="hover:text-[#171412] transition-colors cursor-pointer"
          >
            Bar de Rua
          </button>
          <button
            type="button"
            onClick={() => onNavigate('home', 'localizacao')}
            className="hover:text-[#171412] transition-colors cursor-pointer"
          >
            Localização
          </button>
          <a
            href={buildWhatsAppUrl(
              'Olá O Café da Banda! Gostaria de reservar uma mesa.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono tabular-nums text-[#171412] hover:text-[#C87A19] transition-colors"
          >
            WhatsApp: {BRAND_INFO.phoneDisplay}
          </a>
        </nav>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-6 pt-6 border-t border-[#171412]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#574F49]">
        <p>© 2026 {BRAND_INFO.name} — Soyo, Angola.</p>
        <p>Página oficial: {BRAND_INFO.socialName}</p>
      </div>
    </footer>
  );
}
