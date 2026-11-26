import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Disc3, MapPin, MessageCircle, Ticket } from 'lucide-react';
import { BAR_DE_RUA_EVENT, BRAND_INFO, buildWhatsAppUrl } from '../data/cafeData';
import { ResilientImage } from './ResilientImage';

interface BarDeRuaSectionProps {
  onReserveForEvent: () => void;
}

export function BarDeRuaSection({ onReserveForEvent }: BarDeRuaSectionProps) {
  const [selectedArtistOrder, setSelectedArtistOrder] = useState<string>(
    BAR_DE_RUA_EVENT.lineup[0].order
  );

  const activeArtist =
    BAR_DE_RUA_EVENT.lineup.find(
      (artist) => artist.order === selectedArtistOrder
    ) || BAR_DE_RUA_EVENT.lineup[0];

  return (
    <section
      id="bar-de-rua"
      className="relative overflow-hidden py-16 lg:py-24 bg-[#161311] text-[#F8F7F4] border-b border-[#F8F7F4]/10"
    >
      {/* Subtle atmospheric background image with deep dark scrim */}
      <div className="absolute inset-0 pointer-events-none">
        <ResilientImage
          src={BRAND_INFO.images.barDeRua}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#161311]/95 via-[#161311]/88 to-[#161311]/95" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-medium text-[#E39B3B] mb-3">
                03. Próximo Evento · Publicação Oficial
              </p>
              <h2
                className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F7F4] leading-[1.08] mb-5"
                style={{ textWrap: 'balance' }}
              >
                {BAR_DE_RUA_EVENT.title}
              </h2>
              <p className="text-base text-[#D6CEC2] leading-relaxed max-w-[52ch] mb-8">
                {BAR_DE_RUA_EVENT.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-[#F8F7F4]/15 mb-8">
              <div className="flex items-start gap-3">
                <Calendar
                  className="w-4 h-4 text-[#E39B3B] mt-0.5 shrink-0"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="text-xs text-[#A89F96]">Data</p>
                  <p className="text-sm font-semibold text-[#F8F7F4]">
                    {BAR_DE_RUA_EVENT.dateLabel}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock
                  className="w-4 h-4 text-[#E39B3B] mt-0.5 shrink-0"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="text-xs text-[#A89F96]">Horário</p>
                  <p className="text-sm font-semibold font-mono tabular-nums text-[#F8F7F4]">
                    {BAR_DE_RUA_EVENT.timeLabel}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 text-[#E39B3B] mt-0.5 shrink-0"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="text-xs text-[#A89F96]">Local</p>
                  <p className="text-sm font-semibold text-[#F8F7F4]">
                    {BAR_DE_RUA_EVENT.locationLabel}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Ticket
                  className="w-4 h-4 text-[#E39B3B] mt-0.5 shrink-0"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="text-xs text-[#A89F96]">Condições de Entrada</p>
                  <p className="text-sm font-semibold text-[#F8F7F4]">
                    {BAR_DE_RUA_EVENT.entryTerms}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={buildWhatsAppUrl(
                  'Olá O Café da Banda! Gostaria de reservar uma mesa para o Bar de Rua no Sábado, 28 de novembro de 2026.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#161311] bg-[#E39B3B] rounded-lg hover:bg-[#F0AD52] transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reservar Mesa (WhatsApp)</span>
              </a>
              <button
                type="button"
                onClick={onReserveForEvent}
                className="text-sm font-medium text-[#F8F7F4] underline underline-offset-4 decoration-[#F8F7F4]/30 hover:decoration-[#E39B3B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Preencher Formulário de Mesa
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[300px] sm:min-h-[380px] rounded-xl overflow-hidden border border-[#F8F7F4]/15 bg-[#221D19]">
              <ResilientImage
                src={BRAND_INFO.images.barDeRua}
                alt="Ambiente do Bar de Rua do Café da Banda no Soyo ao pôr do sol com DJ e esplanada animada"
                fallbackLabel="Bar de Rua do Café da Banda — Sábado, 28 de Novembro de 2026"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Interactive Official Lineup (Cartaz Anunciado) */}
        <div className="pt-8 border-t border-[#F8F7F4]/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F8F7F4]">
                Cartaz Anunciado
              </h3>
              <p className="text-xs sm:text-sm text-[#A89F96]">
                Selecione um artista para consultar o alinhamento anunciado da tarde.
              </p>
            </div>
            <p className="text-xs font-mono tabular-nums text-[#E39B3B]">
              5 artistas confirmados · 28/11/2026
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
            {BAR_DE_RUA_EVENT.lineup.map((artist) => {
              const isSelected = artist.order === activeArtist.order;
              return (
                <button
                  key={artist.order}
                  type="button"
                  onClick={() => setSelectedArtistOrder(artist.order)}
                  className={`text-left p-4 rounded-xl border transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#241E1A] border-[#E39B3B]'
                      : 'bg-[#1D1815]/90 border-[#F8F7F4]/10 hover:border-[#F8F7F4]/30'
                  }`}
                >
                  <p className="text-xs font-mono tabular-nums text-[#E39B3B] mb-1">
                    {artist.order}
                  </p>
                  <p className="font-display text-base sm:text-lg font-bold text-[#F8F7F4] truncate">
                    {artist.name}
                  </p>
                  <p className="text-xs text-[#A89F96] mt-0.5 truncate">
                    {artist.role}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="p-5 rounded-xl bg-[#1D1815]/90 border border-[#F8F7F4]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#2A221C] border border-[#E39B3B]/30 flex items-center justify-center shrink-0">
                <Disc3 className="w-5 h-5 text-[#E39B3B]" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs text-[#A89F96]">
                  {activeArtist.order}. {activeArtist.role} · Bar de Rua
                </p>
                <p className="font-display text-lg font-bold text-[#F8F7F4]">
                  {activeArtist.name}
                </p>
                <p className="text-sm text-[#D6CEC2] mt-0.5">
                  {activeArtist.note}
                </p>
              </div>
            </div>
            <p className="text-xs font-mono tabular-nums text-[#E39B3B] shrink-0">
              Início às 15h00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
