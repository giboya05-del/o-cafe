import { useState } from 'react';
import { motion } from 'motion/react';
import { Expand, MessageCircle, X } from 'lucide-react';
import {
  BRAND_INFO,
  buildWhatsAppUrl,
  CustomerMoment,
  HAPPY_CUSTOMERS,
} from '../data/cafeData';
import { ResilientImage } from './ResilientImage';

export function ClientesSection() {
  const [activeMoment, setActiveMoment] = useState<CustomerMoment | null>(null);

  return (
    <section
      id="clientes"
      className="py-16 lg:py-24 bg-[#F8F7F4] border-b border-[#171412]/10"
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
              Clientes Satisfeitos · Soyo
            </p>
            <h2
              className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171412]"
              style={{ textWrap: 'balance' }}
            >
              Quem passa pelo balcão leva sabor, rapidez e bom ambiente.
            </h2>
          </div>

          <a
            href={buildWhatsAppUrl(
              'Olá O Café da Banda! Gostaria de fazer uma encomenda para levar.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#F8F7F4] bg-[#171412] rounded-lg hover:bg-[#C87A19] transition-colors self-start lg:self-auto whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Encomendar para Levar ({BRAND_INFO.phoneDisplay})</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {HAPPY_CUSTOMERS.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.35,
                delay: Math.min(idx * 0.05, 0.25),
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setActiveMoment(item)}
              className="group text-left bg-[#EFECE6] rounded-xl overflow-hidden border border-[#171412]/10 hover:border-[#C87A19] transition-colors duration-150 flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C87A19]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E4DFD5]">
                <ResilientImage
                  src={item.image}
                  alt={item.alt}
                  fallbackLabel={item.label}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-end p-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[#F8F7F4] bg-[#171412]/85 rounded-md">
                    <Expand className="w-3.5 h-3.5" />
                    <span>Ver foto</span>
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1">
                <p className="text-xs font-medium text-[#C87A19] mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-[#574F49] leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {activeMoment && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeMoment.label}
          onClick={() => setActiveMoment(null)}
          className="fixed inset-0 z-50 bg-[#14110F]/85 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full bg-[#F8F7F4] rounded-xl overflow-hidden border border-[#171412]/20"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#171412]/10">
              <div>
                <p className="text-xs text-[#C87A19] font-medium">
                  Clientes Satisfeitos · O Café da Banda
                </p>
                <h3 className="font-display text-lg font-bold text-[#171412]">
                  {activeMoment.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveMoment(null)}
                aria-label="Fechar foto"
                className="w-9 h-9 rounded-lg border border-[#171412]/15 flex items-center justify-center text-[#171412] hover:bg-[#EFECE6] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-[#14110F] flex items-center justify-center">
              <ResilientImage
                src={activeMoment.image}
                alt={activeMoment.alt}
                fallbackLabel={activeMoment.label}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="px-5 py-4 flex items-center justify-between gap-4">
              <p className="text-sm text-[#574F49]">{activeMoment.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
