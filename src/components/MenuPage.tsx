import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Check,
  Eye,
  MessageCircle,
  Plus,
  X,
} from 'lucide-react';
import {
  BRAND_INFO,
  buildWhatsAppUrl,
  MENU_ITEMS,
  MenuCategory,
  MenuItem,
} from '../data/cafeData';
import { ResilientImage } from './ResilientImage';

interface MenuPageProps {
  selectedItemIds: string[];
  onToggleItem: (id: string) => void;
  onBackHome: () => void;
}

const CATEGORY_SECTIONS: {
  id: Exclude<MenuCategory, 'all'>;
  title: string;
  subtitle: string;
}[] = [
  {
    id: 'cafe_manha',
    title: '01. Café da Manhã & Bebidas',
    subtitle: 'Do grão à chávena, café quente e bebidas frescas para o dia inteiro.',
  },
  {
    id: 'matabicho',
    title: '02. Matabicho & Cozinha Quente',
    subtitle: 'Sandes, caldos e sopas preparados na hora para quem começa cedo.',
  },
  {
    id: 'lanches_rapidos',
    title: '03. Lanches Rápidos & Partilha',
    subtitle: 'Hambúrgueres, magogas, cachorros, baguetes, fahitas e tábuas mistas.',
  },
];

const FILTER_TABS: { id: MenuCategory; label: string }[] = [
  { id: 'all', label: 'Todo o Cardápio' },
  { id: 'cafe_manha', label: 'Café da Manhã' },
  { id: 'matabicho', label: 'Matabicho' },
  { id: 'lanches_rapidos', label: 'Lanches Rápidos' },
];

export function MenuPage({
  selectedItemIds,
  onToggleItem,
  onBackHome,
}: MenuPageProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [showPosterModal, setShowPosterModal] = useState(false);

  const selectedItems = MENU_ITEMS.filter((item) =>
    selectedItemIds.includes(item.id)
  );

  const whatsAppOrderMessage =
    selectedItems.length > 0
      ? `Olá O Café da Banda! Gostaria de encomendar / consultar:\n${selectedItems
          .map((i) => `- ${i.name}${i.price ? ` (${i.price})` : ''}`)
          .join('\n')}`
      : 'Olá O Café da Banda! Gostaria de consultar o cardápio completo e fazer um pedido.';

  const whatsAppReserveUrl = buildWhatsAppUrl(
    'Olá O Café da Banda! Gostaria de reservar uma mesa.'
  );

  const sectionsToRender =
    activeCategory === 'all'
      ? CATEGORY_SECTIONS
      : CATEGORY_SECTIONS.filter((sec) => sec.id === activeCategory);

  const renderMenuCard = (item: MenuItem) => {
    const isSelected = selectedItemIds.includes(item.id);
    return (
      <div
        key={item.id}
        className={`flex flex-col justify-between p-5 rounded-xl border transition-colors duration-150 ${
          isSelected
            ? 'bg-[#EFECE6] border-[#C87A19]'
            : 'bg-[#F8F7F4] border-[#171412]/10 hover:border-[#171412]/30'
        }`}
      >
        <div>
          <div className="flex items-baseline justify-between gap-3 mb-2">
            <p className="text-xs text-[#574F49]">{item.availability}</p>
            {item.price && (
              <span className="text-sm font-bold font-mono tabular-nums text-[#C87A19] whitespace-nowrap shrink-0">
                {item.price}
              </span>
            )}
          </div>
          <h3 className="font-display text-lg font-bold text-[#171412] mb-1.5">
            {item.name}
          </h3>
          <p className="text-sm text-[#574F49] leading-relaxed mb-5">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#171412]/10">
          <button
            type="button"
            onClick={() => onToggleItem(item.id)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              isSelected
                ? 'bg-[#171412] text-[#F8F7F4] border-[#171412]'
                : 'bg-transparent text-[#171412] border-[#171412]/20 hover:border-[#171412]'
            }`}
          >
            {isSelected ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#E39B3B]" />
                <span>No Pedido</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Adicionar</span>
              </>
            )}
          </button>

          <a
            href={buildWhatsAppUrl(
              `Olá O Café da Banda! Gostaria de pedir: ${item.name}${
                item.price ? ` (${item.price})` : ''
              }.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#574F49] hover:text-[#171412] underline underline-offset-4 decoration-[#C87A19] whitespace-nowrap shrink-0"
          >
            Pedir via WhatsApp
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      {/* Atmospheric Hero Banner with Background Image */}
      <section className="relative overflow-hidden bg-[#14110F] text-[#F8F7F4] border-b border-[#171412]/15">
        <div className="absolute inset-0 pointer-events-none">
          <ResilientImage
            src={BRAND_INFO.images.cafeGrao}
            alt=""
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14110F]/95 via-[#14110F]/85 to-[#14110F]/70" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#D6CEC2] hover:text-[#F8F7F4] mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar à Página Inicial</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#E39B3B] mb-2">
                Cardápio Oficial · O Café da Banda · Soyo
              </p>
              <h1
                className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F7F4] mb-4"
                style={{ textWrap: 'balance' }}
              >
                Café da manhã, matabicho e lanches rápidos feitos na hora.
              </h1>
              <p className="text-base text-[#D6CEC2] leading-relaxed">
                Consulte os preços atualizados em Kwanzas, selecione os seus itens favoritos ou fale diretamente no WhatsApp para encomendar ou reservar mesa.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={buildWhatsAppUrl(whatsAppOrderMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#14110F] bg-[#E39B3B] rounded-lg hover:bg-[#F0AD52] transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar Cardápio (WhatsApp)</span>
              </a>

              <a
                href={whatsAppReserveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#F8F7F4] border border-[#F8F7F4]/25 rounded-lg hover:bg-[#F8F7F4]/10 transition-colors whitespace-nowrap shrink-0"
              >
                <span>Reservar Mesa</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar & Official Menu Poster Button */}
      <section className="py-10 lg:py-14">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-10 border-b border-[#171412]/10">
            <div
              role="tablist"
              aria-label="Categorias do cardápio"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EFECE6] rounded-lg border border-[#171412]/10 self-start"
            >
              {FILTER_TABS.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(tab.id)}
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

            <button
              type="button"
              onClick={() => setShowPosterModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#171412] bg-[#EFECE6] border border-[#171412]/15 rounded-lg hover:border-[#C87A19] transition-colors self-start md:self-auto cursor-pointer whitespace-nowrap shrink-0"
            >
              <Eye className="w-4 h-4 text-[#C87A19]" />
              <span>Ver Cartaz Original de Preços</span>
            </button>
          </div>

          {/* Selected Items WhatsApp Summary Bar */}
          {selectedItems.length > 0 && (
            <div className="mb-10 p-5 rounded-xl bg-[#171412] text-[#F8F7F4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold font-mono tabular-nums">
                  {selectedItems.length}{' '}
                  {selectedItems.length === 1
                    ? 'item adicionado ao pedido'
                    : 'itens adicionados ao pedido'}
                </p>
                <p className="text-xs text-[#D6CEC2] mt-1">
                  {selectedItems.map((i) => i.name).join(' · ')}
                </p>
              </div>
              <a
                href={buildWhatsAppUrl(whatsAppOrderMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#171412] bg-[#E39B3B] rounded-lg hover:bg-[#F0AD52] transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar Pedido por WhatsApp</span>
              </a>
            </div>
          )}

          {/* Structured Category Sections */}
          <div className="space-y-14">
            {sectionsToRender.map((section) => {
              const items = MENU_ITEMS.filter((i) => i.category === section.id);
              return (
                <div key={section.id}>
                  <div className="mb-6">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#171412]">
                      {section.title}
                    </h2>
                    <p className="text-sm text-[#574F49] mt-1">
                      {section.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map(renderMenuCard)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Official Menu Graphic Modal */}
      {showPosterModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Cartaz Oficial do Menu do Café da Banda"
          onClick={() => setShowPosterModal(false)}
          className="fixed inset-0 z-50 bg-[#14110F]/85 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full bg-[#F8F7F4] rounded-xl overflow-hidden border border-[#171412]/20"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#171412]/10">
              <h3 className="font-display text-lg font-bold text-[#171412]">
                Menu Oficial · O Café da Banda
              </h3>
              <button
                type="button"
                onClick={() => setShowPosterModal(false)}
                aria-label="Fechar cartaz"
                className="w-9 h-9 rounded-lg border border-[#171412]/15 flex items-center justify-center text-[#171412] hover:bg-[#EFECE6] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-[#14110F] flex items-center justify-center p-3">
              <ResilientImage
                src={BRAND_INFO.images.menuPoster}
                alt="Cartaz oficial do menu com preços em Kwanzas"
                fallbackLabel="Menu Oficial"
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
