import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BAR_DE_RUA_EVENT, BRAND_INFO, buildWhatsAppUrl } from '../data/cafeData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onOpenMenuPage: () => void;
  onExploreEvent: () => void;
}

const WHATSAPP_MENU_URL = buildWhatsAppUrl(
  'Olá O Café da Banda! Gostaria de consultar o cardápio e fazer um pedido.'
);

export function HeroSection({
  onOpenMenuPage,
  onExploreEvent,
}: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#14110F] text-[#F8F7F4] border-b border-[#171412]/15"
    >
      {/* Full-bleed atmospheric photographic backdrop with measured contrast scrim */}
      <div className="absolute inset-0 pointer-events-none">
        <ResilientImage
          src={BRAND_INFO.images.hero}
          alt=""
          className="w-full h-full object-cover opacity-50 scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14110F]/95 via-[#14110F]/82 to-[#14110F]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110F] via-transparent to-[#14110F]/50" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between py-2"
          >
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#E39B3B] mb-4">
                Soyo · Rua do Hotel Bravo · Junto ao Campo 11
              </p>

              <h1
                className="font-display font-bold tracking-tight text-[#F8F7F4] leading-[1.07] mb-5"
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3.75rem)',
                  textWrap: 'balance',
                }}
              >
                Café quente de manhã, energia de rua ao fim da tarde.
              </h1>

              <p className="text-base sm:text-lg text-[#D6CEC2] leading-relaxed max-w-[54ch] mb-8">
                O Café da Banda reúne restauração rápida, matabicho cedo e café servido do grão à chávena, transformando a esplanada no ponto de encontro para música e Bar de Rua no Soyo.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                type="button"
                onClick={onOpenMenuPage}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#14110F] bg-[#E39B3B] rounded-lg hover:bg-[#F0AD52] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F4]"
              >
                <span>Ver Cardápio Completo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={WHATSAPP_MENU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#F8F7F4] bg-[#F8F7F4]/10 border border-[#F8F7F4]/25 rounded-lg hover:bg-[#F8F7F4]/20 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#E39B3B]" />
                <span>Consultar no WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onExploreEvent}
                className="text-sm font-medium text-[#D6CEC2] underline underline-offset-4 decoration-[#E39B3B]/60 hover:text-[#F8F7F4] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Bar de Rua · 28 Nov
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] rounded-xl overflow-hidden border border-[#F8F7F4]/15 bg-[#1F1A17]">
              <ResilientImage
                src={BRAND_INFO.images.cafeGrao}
                alt="Café da Banda — Do grão à chávena no Soyo"
                fallbackLabel="O Café da Banda — Do grão à chávena"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Full-width 4-column informational strip below the hero split */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 pt-8 border-t border-[#F8F7F4]/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <div>
            <p className="text-xs font-medium text-[#A89F96] mb-1">Oferta Diária</p>
            <p className="text-sm font-semibold text-[#F8F7F4]">
              Café, Matabicho e Lanches
            </p>
            <p className="text-xs text-[#D6CEC2] mt-0.5">
              Para quem começa o dia cedo
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-[#A89F96] mb-1">Localização</p>
            <p className="text-sm font-semibold text-[#F8F7F4]">
              {BRAND_INFO.addressPrimary}
            </p>
            <p className="text-xs text-[#D6CEC2] mt-0.5">
              Junto ao Campo 11 · {BRAND_INFO.plusCode}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-[#A89F96] mb-1">Próximo Evento</p>
            <p className="text-sm font-semibold text-[#F8F7F4]">
              {BAR_DE_RUA_EVENT.dateLabel}
            </p>
            <p className="text-xs text-[#E39B3B] font-mono tabular-nums mt-0.5">
              {BAR_DE_RUA_EVENT.timeLabel} · Acesso livre
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-[#A89F96] mb-1">WhatsApp & Telefone</p>
            <a
              href={BRAND_INFO.phoneHref}
              className="text-sm font-semibold font-mono tabular-nums text-[#F8F7F4] hover:text-[#E39B3B] transition-colors"
            >
              {BRAND_INFO.phoneDisplay}
            </a>
            <p className="text-xs text-[#D6CEC2] mt-0.5">
              Página oficial: {BRAND_INFO.socialName}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
