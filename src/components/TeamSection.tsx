import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { BRAND_INFO, buildWhatsAppUrl, TEAM_MEMBERS } from '../data/cafeData';
import { ResilientImage } from './ResilientImage';

export function TeamSection() {
  return (
    <section
      id="equipa"
      className="py-16 lg:py-24 bg-[#EFECE6] border-b border-[#171412]/10"
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
              Equipa & Atendimento · O Café da Banda
            </p>
            <h2
              className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171412]"
              style={{ textWrap: 'balance' }}
            >
              Os rostos que preparam o seu café e recebem o Soyo todos os dias.
            </h2>
          </div>

          <p className="text-sm text-[#574F49] max-w-sm leading-relaxed">
            Do balcão da manhã à cozinha de lanches rápidos e tardes de Bar de Rua, cada pedido é acompanhado de perto pela nossa equipa.
          </p>
        </motion.div>

        {/* Responsive 5-member staff showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.35,
                delay: Math.min(idx * 0.05, 0.25),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#F8F7F4] rounded-xl overflow-hidden border border-[#171412]/10 flex flex-col"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#E4DFD5]">
                <ResilientImage
                  src={member.image}
                  alt={member.alt}
                  fallbackLabel={member.role}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#C87A19] font-medium mb-1">
                    {member.area}
                  </p>
                  <h3 className="font-display text-base font-bold text-[#171412] mb-1.5">
                    {member.role}
                  </h3>
                  <p className="text-xs text-[#574F49] leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Brand Identity Banner with Team Presence */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 p-6 sm:p-8 rounded-xl bg-[#171412] text-[#F8F7F4] flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="max-w-xl">
            <p className="text-xs font-medium text-[#E39B3B] mb-1.5">
              Um café autêntico, com identidade própria
            </p>
            <p className="font-display text-xl sm:text-2xl font-bold text-[#F8F7F4]">
              Prontos para receber o seu grupo na Rua do Hotel Bravo.
            </p>
            <p className="text-sm text-[#D6CEC2] mt-1">
              Fale com a equipa de atendimento pelo WhatsApp {BRAND_INFO.phoneDisplay} para encomendas rápidas ou reservas.
            </p>
          </div>

          <a
            href={buildWhatsAppUrl(
              'Olá equipa de O Café da Banda! Gostaria de falar com o atendimento.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#171412] bg-[#E39B3B] rounded-lg hover:bg-[#F0AD52] transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a Equipa</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
