import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, MessageCircle, Plus } from 'lucide-react';
import {
  BRAND_INFO,
  buildWhatsAppUrl,
  MENU_ITEMS,
  MenuCategory,
} from '../data/cafeData';
import { ResilientImage } from './ResilientImage';

interface MenuSectionProps {
  selectedItemIds: string[];
  onToggleItem: (id: string) => void;
  onOpenFullMenu: () => void;
}

const FILTER_TABS: { id: MenuCategory; label: string }[] = [
  { id: 'all', label: 'Destaques' },
  { id: 'cafe_manha', label: 'Café da Manhã' },
  { id: 'matabicho', label: 'Matabicho' },
  { id: 'lanches_rapidos', label: 'Lanches Rápidos' },
];

export function MenuSection({
  selectedItemIds,
  onToggleItem,
  onOpenFullMenu,
}: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS.slice(0, 6)
      : MENU_ITEMS.filter((item) => item.category === activeCategory).slice(0, 6);

  const selectedItems = MENU_ITEMS.filter((item) =>
    selectedItemIds.includes(item.id)
  );

  const whatsAppConsultUrl = buildWhatsAppUrl(
    selectedItems.length > 0
      ? `Olá O Café da Banda! Gostaria de encomendar / consultar:\n${selectedItems
          .map((i) => `- ${i.name}${i.price ? ` (${i.price})` : ''}`)
          .join('\n')}`
      : 'Olá O Café da Banda! Gostaria de consultar o cardápio e fazer um pedido.'
  );

  return (
    <section
      id="ementa"
      className="py-16 lg:py-24 border-b border-[#171412]/10 bg-[#F8F7F4]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#C87A19] mb-2">
              01. Cardápio & Oferta Diária
            </p>
            <h2
              className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171412]"
              style={{ textWrap: 'balance' }}
            >
              Para quem começa cedo e para quem fica pela tarde.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar destaques do cardápio"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EFECE6] rounded-lg border border-[#171412]/10 self-start lg:self-auto"
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
        </motion.div>

        {/* Two culinary photography spotlights using real uploaded assets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          <article className="bg-[#EFECE6] rounded-xl overflow-hidden border border-[#171412]/10">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <ResilientImage
                src={BRAND_INFO.images.matabicho}
                alt="Café quente e matabicho completo do Café da Banda"
                fallbackLabel="Café da Manhã & Matabicho"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-[#574F49] mb-1.5">
                Café da Manhã & Matabicho · Desde cedo
              </p>
              <h3 className="font-display text-xl font-bold text-[#171412] mb-2">
                Café Quente, Sandes, Caldo & Sopa
              </h3>
              <p className="text-sm text-[#574F49] leading-relaxed">
                Café do grão à chávena, sandes normal ou composto, caldo da casa e sopa quente para começar a manhã no Soyo com energia.
              </p>
            </div>
          </article>

          <article className="bg-[#EFECE6] rounded-xl overflow-hidden border border-[#171412]/10">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <ResilientImage
                src={BRAND_INFO.images.magogaReal}
                alt="Magoga composta e batatas fritas douradas de O Café da Banda"
                fallbackLabel="Magoga Composta & Lanches Rápidos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-[#574F49] mb-1.5">
                Lanches Rápidos & Partilha · Balcão ou esplanada
              </p>
              <h3 className="font-display text-xl font-bold text-[#171412] mb-2">
                Magogas, Hambúrgueres, Cachorro & Tábua Mista
              </h3>
              <p className="text-sm text-[#574F49] leading-relaxed">
                Preparados na hora com preços acessíveis em Kwanzas — do cachorro-quente e fahita ao frango panado e tábua mista de partilha.
              </p>
            </div>
          </article>
        </div>

        {/* Highlighted Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => {
            const isSelected = selectedItemIds.includes(item.id);
            return (
              <div
                key={item.id}
                className={`flex flex-col justify-between p-5 rounded-xl border transition-colors duration-150 ${
                  isSelected
                    ? 'bg-[#EFECE6] border-[#C87A19]'
                    : 'bg-[#F8F7F4] border-[#171412]/10 hover:border-[#171412]/25'
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <span className="text-xs text-[#574F49]">
                      {item.categoryLabel}
                    </span>
                    {item.price && (
                      <span className="text-sm font-bold font-mono tabular-nums text-[#C87A19]">
                        {item.price}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#171412] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#574F49] leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onToggleItem(item.id)}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors duration-150 self-start whitespace-nowrap shrink-0 cursor-pointer ${
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
                      <span>Selecionar Item</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer CTA Bar to Full Menu Page & WhatsApp Consultation */}
        <div className="mt-10 p-6 rounded-xl bg-[#EFECE6] border border-[#171412]/10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <p className="font-display text-lg font-bold text-[#171412]">
              {selectedItems.length > 0
                ? `${selectedItems.length} ${
                    selectedItems.length === 1 ? 'item selecionado' : 'itens selecionados'
                  } para consulta ou pedido`
                : 'Quer ver todos os 19 itens com preços atualizados?'}
            </p>
            <p className="text-sm text-[#574F49] mt-0.5">
              Aceda à página completa do cardápio por categorias ou fale diretamente pelo WhatsApp ({BRAND_INFO.phoneDisplay}).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenFullMenu}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#F8F7F4] bg-[#171412] rounded-lg hover:bg-[#C87A19] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Abrir Página de Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsAppConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#171412] bg-[#F8F7F4] border border-[#171412]/20 rounded-lg hover:border-[#C87A19] transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#C87A19]" />
              <span>Consultar Cardápio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
