import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, MapPin, MessageCircle, Phone, Share2, X } from 'lucide-react';
import {
  BAR_DE_RUA_EVENT,
  BRAND_INFO,
  buildWhatsAppUrl,
  MENU_ITEMS,
} from '../data/cafeData';

export type BookingPurpose = 'matabicho' | 'fastfood' | 'barderua';

interface LocationBookingSectionProps {
  selectedItemIds: string[];
  onRemoveSelectedItem: (id: string) => void;
  onClearSelectedItems: () => void;
  bookingPurpose: BookingPurpose;
  onPurposeChange: (purpose: BookingPurpose) => void;
}

interface BookingReceipt {
  reference: string;
  customerName: string;
  phone: string;
  purposeLabel: string;
  guests: string;
  itemsSummary: string[];
}

const PURPOSE_OPTIONS: { id: BookingPurpose; label: string }[] = [
  { id: 'barderua', label: 'Bar de Rua · 28 Nov (15h00)' },
  { id: 'matabicho', label: 'Matabicho & Café da Manhã' },
  { id: 'fastfood', label: 'Encomenda Fast Food / Mesa' },
];

export function LocationBookingSection({
  selectedItemIds,
  onRemoveSelectedItem,
  onClearSelectedItems,
  bookingPurpose,
  onPurposeChange,
}: LocationBookingSectionProps) {
  const [copiedField, setCopiedField] = useState<'pluscode' | 'phone' | null>(
    null
  );
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [guests, setGuests] = useState('2 pessoas');
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [receipt, setReceipt] = useState<BookingReceipt | null>(null);

  const selectedItems = MENU_ITEMS.filter((item) =>
    selectedItemIds.includes(item.id)
  );

  const handleCopy = async (value: string, field: 'pluscode' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2200);
    } catch {
      setCopiedField(null);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = customerName.trim();
    const cleanedPhone = customerPhone.replace(/\s+/g, '');

    if (trimmedName.length < 2) {
      setErrorMessage('Indique o seu nome para registarmos o pedido ou reserva.');
      return;
    }

    if (!/^[+\d]{9,14}$/.test(cleanedPhone)) {
      setErrorMessage(
        'Introduza um número de telefone válido (ex.: 931 946 295).'
      );
      return;
    }

    setErrorMessage('');
    const purposeObj = PURPOSE_OPTIONS.find((p) => p.id === bookingPurpose);
    const code = `CB-${Math.floor(1000 + Math.random() * 9000)}`;

    setReceipt({
      reference: code,
      customerName: trimmedName,
      phone: customerPhone.trim(),
      purposeLabel: purposeObj ? purposeObj.label : 'Reserva de Mesa',
      guests,
      itemsSummary: selectedItems.map((item) => item.name),
    });

    onClearSelectedItems();
  };

  const buildDirectWhatsAppBookingMessage = () => {
    const purposeObj = PURPOSE_OPTIONS.find((p) => p.id === bookingPurpose);
    const itemsText =
      selectedItems.length > 0
        ? `\nItens: ${selectedItems.map((i) => i.name).join(', ')}`
        : '';
    const notesText = notes.trim() ? `\nObs: ${notes.trim()}` : '';
    return `Olá O Café da Banda! Gostaria de reservar/consultar (${
      purposeObj ? purposeObj.label : 'Reserva'
    }) para ${guests}.${itemsText}${notesText}`;
  };

  return (
    <section id="ambiente" className="py-16 lg:py-24 bg-[#F8F7F4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-14 mb-14 border-b border-[#171412]/10"
        >
          <div>
            <p className="text-xs font-medium text-[#C87A19] mb-2">
              04. O Espaço no Soyo
            </p>
            <h2
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171412]"
              style={{ textWrap: 'balance' }}
            >
              Da primeira chávena da manhã ao som da tarde.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#574F49] leading-relaxed">
            Localizado na Rua do Hotel Bravo, junto ao Campo 11 e ao Quintal da Dona Esperança da Rádio Soyo, O Café da Banda acompanha o ritmo da cidade desde cedo com café quente e matabicho rápido.
          </p>
          <p className="text-sm sm:text-base text-[#574F49] leading-relaxed">
            Ao cair da tarde, a esplanada ganha outro ritmo com petiscos, bebidas frescas, música selecionada e edições especiais do Bar de Rua para reunir amigos ao ar livre.
          </p>
        </motion.div>

        <div
          id="localizacao"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Left Column: Location & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-medium text-[#C87A19] mb-2">
                05. Localização & Contacto
              </p>
              <h3 className="font-display text-2xl font-bold text-[#171412] mb-2">
                Visite-nos no Soyo
              </h3>
              <p className="text-sm text-[#574F49]">
                Ponto de referência fácil junto ao Campo 11 na Rua do Hotel Bravo.
              </p>
            </div>

            <div className="bg-[#EFECE6] rounded-xl p-6 border border-[#171412]/10 space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin
                  className="w-5 h-5 text-[#C87A19] mt-0.5 shrink-0"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="text-xs font-medium text-[#574F49]">
                    Morada & Referência
                  </p>
                  <p className="text-sm font-semibold text-[#171412] mt-0.5">
                    {BRAND_INFO.addressPrimary}
                  </p>
                  <p className="text-sm text-[#574F49]">
                    {BRAND_INFO.addressReference}, {BRAND_INFO.city}
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono tabular-nums text-[#171412]">
                      Código Plus: {BRAND_INFO.plusCode}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(BRAND_INFO.plusCode, 'pluscode')
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C87A19] hover:text-[#171412] transition-colors cursor-pointer"
                    >
                      {copiedField === 'pluscode' ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar morada</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#171412]/10 flex items-start gap-3.5">
                <Phone
                  className="w-5 h-5 text-[#C87A19] mt-0.5 shrink-0"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="text-xs font-medium text-[#574F49]">
                    Telefone & WhatsApp Direto
                  </p>
                  <a
                    href={BRAND_INFO.phoneHref}
                    className="inline-block text-base font-bold font-mono tabular-nums text-[#171412] hover:text-[#C87A19] transition-colors mt-0.5"
                  >
                    {BRAND_INFO.phoneDisplay}
                  </a>
                  <div className="mt-2 flex flex-wrap items-center gap-4">
                    <a
                      href={buildWhatsAppUrl(
                        'Olá O Café da Banda! Gostaria de falar com a equipa.'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C87A19] hover:text-[#171412] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Abrir WhatsApp</span>
                    </a>
                    <a
                      href={BRAND_INFO.phoneHref}
                      className="text-xs font-semibold text-[#171412] underline underline-offset-4 decoration-[#C87A19]"
                    >
                      Ligar agora
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(BRAND_INFO.phoneDisplay, 'phone')
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#574F49] hover:text-[#171412] transition-colors cursor-pointer"
                    >
                      {copiedField === 'phone' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#C87A19]" />
                          <span>Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#171412]/10 flex items-start gap-3.5">
                <Share2
                  className="w-5 h-5 text-[#C87A19] mt-0.5 shrink-0"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="text-xs font-medium text-[#574F49]">
                    Redes Sociais & Novidades
                  </p>
                  <p className="text-sm font-semibold text-[#171412] mt-0.5">
                    Página oficial: {BRAND_INFO.socialName}
                  </p>
                  <p className="text-xs text-[#574F49] mt-1">
                    Acompanhe as publicações de anúncio do {BAR_DE_RUA_EVENT.title} e as novidades diárias da casa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Reservation & Quick WhatsApp Form */}
          <div id="reservas" className="lg:col-span-7">
            <div className="bg-[#F8F7F4] rounded-xl p-6 sm:p-8 border border-[#171412]/15">
              {receipt ? (
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-mono tabular-nums text-[#C87A19] mb-1">
                      Referência {receipt.reference}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-[#171412]">
                      Pedido de Reserva Registado
                    </h3>
                    <p className="text-sm text-[#574F49] mt-1">
                      Os seus dados estão prontos. Envie por WhatsApp ou ligue para {BRAND_INFO.phoneDisplay} para confirmação imediata.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-[#EFECE6] border border-[#171412]/10 space-y-2 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-[#574F49]">Nome</span>
                      <span className="font-semibold text-[#171412]">
                        {receipt.customerName}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-[#574F49]">Telefone</span>
                      <span className="font-semibold font-mono tabular-nums text-[#171412]">
                        {receipt.phone}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-[#574F49]">Serviço</span>
                      <span className="font-semibold text-[#171412]">
                        {receipt.purposeLabel}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-[#574F49]">Grupo</span>
                      <span className="font-semibold text-[#171412]">
                        {receipt.guests}
                      </span>
                    </div>
                    {receipt.itemsSummary.length > 0 && (
                      <div className="pt-2 border-t border-[#171412]/10">
                        <p className="text-xs text-[#574F49] mb-1">
                          Itens pré-selecionados:
                        </p>
                        <p className="text-sm font-medium text-[#171412]">
                          {receipt.itemsSummary.join(' · ')}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={buildWhatsAppUrl(
                        `Olá O Café da Banda! Confirmação de reserva ${receipt.reference} em nome de ${receipt.customerName} (${receipt.purposeLabel}, ${receipt.guests}).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#F8F7F4] bg-[#C87A19] rounded-lg hover:bg-[#AE6812] transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirmar no WhatsApp ({BRAND_INFO.phoneDisplay})</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setReceipt(null);
                        setCustomerName('');
                        setCustomerPhone('');
                        setNotes('');
                      }}
                      className="px-4 py-3 text-sm font-semibold text-[#171412] border border-[#171412]/20 rounded-lg hover:bg-[#EFECE6] transition-colors cursor-pointer"
                    >
                      Fazer Novo Pedido
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#171412]">
                      Reservar Mesa ou Encomenda Rápida
                    </h3>
                    <p className="text-sm text-[#574F49] mt-1">
                      Marque o seu matabicho de manhã, pedido de lanches rápidos ou mesa para o Bar de Rua de 28 de novembro.
                    </p>
                  </div>

                  {selectedItems.length > 0 && (
                    <div className="p-4 rounded-lg bg-[#EFECE6] border border-[#171412]/10">
                      <p className="text-xs font-medium text-[#574F49] mb-2">
                        Itens selecionados do cardápio:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedItems.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => onRemoveSelectedItem(item.id)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-[#F8F7F4] text-[#171412] border border-[#171412]/15 rounded-md hover:border-[#C87A19] transition-colors cursor-pointer"
                          >
                            <span>{item.name}</span>
                            <X className="w-3.5 h-3.5 text-[#574F49]" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-[#171412] mb-2">
                      Finalidade
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {PURPOSE_OPTIONS.map((option) => {
                        const isSelected = bookingPurpose === option.id;
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => onPurposeChange(option.id)}
                            className={`px-3 py-2.5 text-xs font-semibold rounded-lg border text-left transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-[#171412] text-[#F8F7F4] border-[#171412]'
                                : 'bg-[#F8F7F4] text-[#574F49] border-[#171412]/15 hover:border-[#171412]/40'
                            }`}
                          >
                            {option.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="booking-name"
                        className="block text-xs font-semibold text-[#171412] mb-1.5"
                      >
                        Nome completo
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Ex.: Mateus Domingos"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#171412]/20 rounded-lg text-[#171412] placeholder:text-[#8A8178] focus:outline-none focus:border-[#C87A19]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block text-xs font-semibold text-[#171412] mb-1.5"
                      >
                        Telefone (Angola)
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="931 946 295"
                        className="w-full px-3.5 py-2.5 text-sm font-mono tabular-nums bg-white border border-[#171412]/20 rounded-lg text-[#171412] placeholder:text-[#8A8178] focus:outline-none focus:border-[#C87A19]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="booking-guests"
                        className="block text-xs font-semibold text-[#171412] mb-1.5"
                      >
                        Número de pessoas
                      </label>
                      <select
                        id="booking-guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#171412]/20 rounded-lg text-[#171412] focus:outline-none focus:border-[#C87A19]"
                      >
                        <option value="1 pessoa">1 pessoa (Balcão)</option>
                        <option value="2 pessoas">2 pessoas</option>
                        <option value="4 pessoas">Mesa para 4 pessoas</option>
                        <option value="6+ pessoas">Grupo (6+ pessoas)</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="booking-notes"
                        className="block text-xs font-semibold text-[#171412] mb-1.5"
                      >
                        Hora prevista ou observação
                      </label>
                      <input
                        id="booking-notes"
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Ex.: Chegada às 15h30 na esplanada"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#171412]/20 rounded-lg text-[#171412] placeholder:text-[#8A8178] focus:outline-none focus:border-[#C87A19]"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <p
                      role="alert"
                      className="text-xs font-medium text-[#991B1B] bg-[#FEE2E2] border border-[#991B1B]/20 px-3.5 py-2.5 rounded-lg"
                    >
                      {errorMessage}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <a
                      href={buildWhatsAppUrl(buildDirectWhatsAppBookingMessage())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#171412] bg-[#EFECE6] border border-[#171412]/15 rounded-lg hover:border-[#C87A19] transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C87A19]" />
                      <span>Reservar Direto no WhatsApp</span>
                    </a>

                    <button
                      type="submit"
                      className="px-6 py-3 text-sm font-semibold text-[#F8F7F4] bg-[#171412] rounded-lg hover:bg-[#C87A19] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Registar Pedido de Reserva
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
