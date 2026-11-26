import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Expand, MapPin, MessageCircle, Ticket, X } from 'lucide-react';
import {
  buildWhatsAppUrl,
  GALLERY_ITEMS,
  GalleryItem,
  UPCOMING_POSTERS,
} from '../data/cafeData';
import { ResilientImage } from './ResilientImage';

type GalleryFilter = 'all' | 'bar_de_rua' | 'equipa_marca' | 'pratos_lanches';

const GALLERY_TABS: { id: GalleryFilter; label: string }[] = [
  { id: 'all', label: 'Toda a Galeria' },
  { id: 'bar_de_rua', label: 'Bar de Rua & Ambiente' },
  { id: 'equipa_marca', label: 'Equipa & Marca' },
  { id: 'pratos_lanches', label: 'Pratos & Lanches' },
];

export function GaleriaSection() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [selectedPosterId, setSelectedPosterId] = useState<string>(
    UPCOMING_POSTERS[0].id
  );

  const visibleItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const activePoster =
    UPCOMING_POSTERS.find((p) => p.id === selectedPosterId) ||
    UPCOMING_POSTERS[0];

  return (
    <section
      id="galeria"
      className="py-16 lg:py-24 bg-[#F8F7F4] border-b border-[#171412]/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#C87A19] mb-2">
              02. Galeria & Agenda Visual
            </p>
            <h2
              className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171412]"
              style={{ textWrap: 'balance' }}
            >
              Momentos do Bar de Rua, equipa da casa e cozinha no Soyo.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar fotos da galeria"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EFECE6] rounded-lg border border-[#171412]/10 self-start lg:self-auto"
          >
            {GALLERY_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#171412] text-[#F8F7F4]'
                      : 'text-[#574F49] hover:text-[#171412]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {visibleItems.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.3,
                delay: Math.min(idx * 0.04, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setLightboxItem(item)}
              className="group text-left bg-[#EFECE6] rounded-xl overflow-hidden border border-[#171412]/10 hover:border-[#C87A19] transition-colors duration-150 flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C87A19]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E4DFD5]">
                <ResilientImage
                  src={item.src}
                  alt={item.alt}
                  fallbackLabel={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-end p-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[#F8F7F4] bg-[#171412]/85 rounded-md">
                    <Expand className="w-3.5 h-3.5" />
                    <span>Ampliar</span>
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#574F49] mb-1">
                    {item.categoryLabel} · {item.dateOrTag}
                  </p>
                  <h3 className="font-display text-base font-bold text-[#171412] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#574F49] leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Destaque de Eventos Futuros & Visualizador de Cartazes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12 border-t border-[#171412]/10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-medium text-[#C87A19] mb-1.5">
                Eventos Futuros & Cartazes
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171412]">
                Consulte os próximos cartazes e datas no Soyo.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#574F49]">
              Selecione um cartaz para ver detalhes de data, horário e reservas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Poster selector list */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {UPCOMING_POSTERS.map((poster) => {
                const isSelected = poster.id === activePoster.id;
                return (
                  <button
                    key={poster.id}
                    type="button"
                    onClick={() => setSelectedPosterId(poster.id)}
                    className={`text-left p-5 rounded-xl border transition-colors duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-[#171412] text-[#F8F7F4] border-[#171412]'
                        : 'bg-[#EFECE6] text-[#171412] border-[#171412]/10 hover:border-[#C87A19]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`text-xs font-medium ${
                          isSelected ? 'text-[#E39B3B]' : 'text-[#C87A19]'
                        }`}
                      >
                        {poster.edition}
                      </span>
                      <span
                        className={`text-xs font-mono tabular-nums ${
                          isSelected ? 'text-[#D6CEC2]' : 'text-[#574F49]'
                        }`}
                      >
                        {poster.timeLabel}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-bold mb-1">
                      {poster.title}
                    </h4>
                    <p
                      className={`text-xs ${
                        isSelected ? 'text-[#D6CEC2]' : 'text-[#574F49]'
                      }`}
                    >
                      {poster.dateLabel} · {poster.locationLabel}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Poster Showcase */}
            <div className="lg:col-span-7 bg-[#171412] text-[#F8F7F4] rounded-xl overflow-hidden border border-[#171412]/15 grid grid-cols-1 sm:grid-cols-12">
              <div className="sm:col-span-5 relative min-h-[240px] bg-[#241E1A]">
                <ResilientImage
                  src={activePoster.image}
                  alt={`Cartaz ${activePoster.title}`}
                  fallbackLabel={activePoster.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="sm:col-span-7 p-6 flex flex-col justify-between gap-6">
                <div>
                  <p className="text-xs font-medium text-[#E39B3B] mb-1.5">
                    {activePoster.edition}
                  </p>
                  <h4 className="font-display text-2xl font-bold text-[#F8F7F4] mb-4">
                    {activePoster.title}
                  </h4>

                  <div className="space-y-2.5 text-sm text-[#D6CEC2] mb-5">
                    <div className="flex items-start gap-2.5">
                      <Calendar className="w-4 h-4 text-[#E39B3B] mt-0.5 shrink-0" />
                      <span>{activePoster.dateLabel}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#E39B3B] mt-0.5 shrink-0" />
                      <span className="font-mono tabular-nums">
                        {activePoster.timeLabel}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#E39B3B] mt-0.5 shrink-0" />
                      <span>{activePoster.locationLabel}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Ticket className="w-4 h-4 text-[#E39B3B] mt-0.5 shrink-0" />
                      <span>{activePoster.entryTerms}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#F8F7F4]/15">
                    <p className="text-xs text-[#A89F96] mb-1.5">
                      Destaques anunciados:
                    </p>
                    <p className="text-sm font-semibold text-[#F8F7F4]">
                      {activePoster.highlights.join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={buildWhatsAppUrl(
                      `Olá O Café da Banda! Gostaria de reservar mesa ou obter informações sobre: ${activePoster.title} (${activePoster.dateLabel}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#171412] bg-[#E39B3B] rounded-lg hover:bg-[#F0AD52] transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Reservar Mesa (WhatsApp)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for Gallery Inspection */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-[#14110F]/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full bg-[#F8F7F4] rounded-xl overflow-hidden border border-[#171412]/20"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#171412]/10">
              <div>
                <p className="text-xs text-[#574F49]">
                  {lightboxItem.categoryLabel} · {lightboxItem.dateOrTag}
                </p>
                <h3 className="font-display text-lg font-bold text-[#171412]">
                  {lightboxItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label="Fechar imagem"
                className="w-10 h-10 rounded-lg border border-[#171412]/15 flex items-center justify-center text-[#171412] hover:bg-[#EFECE6] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-[#14110F] max-h-[70vh] flex items-center justify-center overflow-hidden">
              <ResilientImage
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                fallbackLabel={lightboxItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-sm text-[#574F49]">{lightboxItem.caption}</p>
              <a
                href={buildWhatsAppUrl(
                  `Olá O Café da Banda! Vi "${lightboxItem.title}" na galeria e gostaria de mais informações.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#F8F7F4] bg-[#171412] rounded-lg hover:bg-[#C87A19] transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
