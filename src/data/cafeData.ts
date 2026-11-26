export type MenuCategory = 'all' | 'cafe_manha' | 'matabicho' | 'lanches_rapidos';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'all'>;
  categoryLabel: string;
  price?: string;
  availability: string;
  description: string;
  image?: string;
}

export interface LineupArtist {
  order: string;
  name: string;
  role: string;
  note: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'bar_de_rua' | 'equipa_marca' | 'pratos_lanches';
  categoryLabel: string;
  caption: string;
  dateOrTag: string;
}

export interface UpcomingEventPoster {
  id: string;
  title: string;
  edition: string;
  dateLabel: string;
  timeLabel: string;
  locationLabel: string;
  entryTerms: string;
  image: string;
  highlights: string[];
  isFeatured?: boolean;
}

export const WHATSAPP_BASE = 'https://wa.me/244931946295';

export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const BRAND_INFO = {
  name: 'O Café da Banda',
  city: 'Soyo',
  tagline: 'Restauração rápida, café quente, matabicho cedo e tardes de Bar de Rua.',
  addressPrimary: 'Rua do Hotel Bravo',
  addressReference: 'Junto ao Campo 11 / Quintal da Dona Esperança da Rádio Soyo',
  plusCode: 'V989+JVV, Soyo',
  phoneDisplay: '931 946 295',
  phoneHref: 'tel:+244931946295',
  socialName: 'O café da banda',
  images: {
    hero: '/src/assets/images/hero_cafe_matabicho_1795713710009.jpg',
    matabicho: '/src/assets/images/menu_matabicho_coffee_1795713710916.jpg',
    fastfood: '/src/assets/images/menu_fastfood_gourmet_1795713711707.jpg',
    barDeRua: '/src/assets/images/event_bar_de_rua_soyo_1795713725639.jpg',
    magogaReal: '/assets/aistudio/Screenshot_22_3b4522da.png',
    cachorroPromo: '/assets/aistudio/Screenshot_25_0f7d2c84.png',
    cafeGrao: '/assets/aistudio/Screenshot_26_d0a039b5.png',
    menuPoster: '/assets/aistudio/Screenshot_24_e2adf028.png',
    equipaPolo: '/assets/aistudio/Screenshot_28_92263def.png',
    identidadeCafe: '/assets/aistudio/Screenshot_31_6b43fb5d.png',
  },
} as const;

export const MENU_ITEMS: MenuItem[] = [
  // Café da Manhã
  {
    id: 'cafe-expresso',
    name: 'Café do Grão à Chávena',
    category: 'cafe_manha',
    categoryLabel: 'Café da Manhã',
    availability: 'Desde cedo · Balcão e esplanada',
    description:
      'Café preto autêntico e aromático, servido bem quente logo nas primeiras horas da manhã no Soyo.',
    image: '/assets/aistudio/Screenshot_26_d0a039b5.png',
  },
  {
    id: 'galao-cremoso',
    name: 'Galão & Meia de Leite',
    category: 'cafe_manha',
    categoryLabel: 'Café da Manhã',
    availability: 'Manhã e tarde',
    description:
      'Café torrado combinado com leite quente vaporizado em chávena ou copo alto.',
  },
  {
    id: 'gasosa-garrafa',
    name: 'Gasosa em Garrafa',
    category: 'cafe_manha',
    categoryLabel: 'Café da Manhã',
    price: '500 kzs',
    availability: 'Todo o dia · Bem gelada',
    description:
      'Refrigerante em garrafa servido fresco para acompanhar lanches ou tardes na esplanada.',
  },
  {
    id: 'agua-mineral',
    name: 'Água Mineral',
    category: 'cafe_manha',
    categoryLabel: 'Café da Manhã',
    price: '500 kzs',
    availability: 'Todo o dia',
    description:
      'Água mineral fresca disponível ao balcão ou à mesa.',
  },

  // Matabicho
  {
    id: 'sandes-normal',
    name: 'Sandes Normal',
    category: 'matabicho',
    categoryLabel: 'Matabicho',
    price: '1.700 kzs',
    availability: 'Manhã · Saída rápida',
    description:
      'Pão fresco preparado no momento com recheio clássico para quem começa o dia cedo.',
  },
  {
    id: 'sandes-composto',
    name: 'Sandes Composto',
    category: 'matabicho',
    categoryLabel: 'Matabicho',
    price: '2.500 kzs',
    availability: 'Manhã e tarde',
    description:
      'Sandes reforçada com ingredientes frescos e combinação completa para o matabicho.',
  },
  {
    id: 'caldo-quente',
    name: 'Caldo da Casa',
    category: 'matabicho',
    categoryLabel: 'Matabicho',
    price: '2.500 kzs',
    availability: 'Manhã e fim de tarde',
    description:
      'Caldo quente e reconfortante preparado diariamente na cozinha do Café da Banda.',
  },
  {
    id: 'sopa-dia',
    name: 'Sopa Quente',
    category: 'matabicho',
    categoryLabel: 'Matabicho',
    price: '2.000 kzs',
    availability: 'Diário · Cozinha da casa',
    description:
      'Sopa caseira leve e bem temperada, ideal para uma refeição rápida.',
  },

  // Lanches Rápidos
  {
    id: 'hamburguer-normal',
    name: 'Hambúrguer Normal',
    category: 'lanches_rapidos',
    categoryLabel: 'Lanches Rápidos',
    price: '3.000 kzs',
    availability: 'Todo o dia',
    description:
      'Hambúrguer grelhado em pão macio com salada fresca e molhos da casa.',
  },
  {
    id: 'hamburguer-composto',
    name: 'Hambúrguer Composto',
    category: 'lanches_rapidos',
    categoryLabel: 'Lanches Rápidos',
    price: '3.500 kzs',
    availability: 'Todo o dia',
    description:
      'Carne grelhada, queijo, ovo e acompanhamentos frescos em pão tostado.',
  },
  {
    id: 'hamburguer-bacon',
    name: 'Hambúrguer Composto + Bacon',
    category: 'lanches_rapidos',
    categoryLabel: 'Lanches Rápidos',
    price: '4.000 kzs',
    availability: 'Todo o dia',
    description:
      'Versão completa acrescida de fatias crocantes de bacon grelhado.',
  },
  {
    id: 'hamburguer-duplo-batata',
    name: 'Hambúrguer com Ovo + 2 Carnes + Batata',
    category: 'lanches_rapidos',
    categoryLabel: 'Lanches Rápidos',
    price: '6.000 kzs',
    availability: 'Almoço e noite',
    description:
      'Dupla carne suculenta com ovo estrelado, queijo derretido e dose de batata frita.',
  },
  {
    id: 'cachorro-quente',
    name: 'Cachorro-Quente',
    category: 'lanches_rapidos',
    categoryLabel: 'Lanches Rápidos',
    price: '2.000 kzs',
    availability: 'Balcão e esplanada',
    description:
      'Salsicha grelhada no pão tostado com molhos especiais e cebola.',
    image: '/assets/aistudio/Screenshot_25_0f7d2c84.png',
  },
  {
    id: 'magoga-normal',
    name: 'Magoga Normal',
    category: 'lanches_rapidos',
    categoryLabel: 'Lanches Rápidos',
    price: '2.500 kzs',
    availability: 'Todo o dia',
    description:
      'Especialidade prensada e dourada na chapa, servida quente e crocante.',
    image: '/assets/aistudio/Screenshot_22_3b4522da.png',
  },
  {
    id: 'magoga-composta',
    name: 'Magoga Composta',
    category: 'lanches_rapidos',
    categoryLabel: 'Lanches Rápidos',
    price: '3.500 kzs',
    availability: 'Mais pedido · Todo o dia',
    description:
      'Magoga recheada com carne, queijo derretido e acompanhamentos tostados na chapa.',
    image: '/assets/aistudio/Screenshot_22_3b4522da.png',
  },
  {
    id: 'baguete',
    name: 'Baguete',
    category: 'lanches_rapidos',
    categoryLabel: 'Lanches Rápidos',
    price: '3.500 kzs',
    availability: 'Todo o dia',
    description:
      'Baguete estaladiça bem recheada e preparada na hora para comer no espaço ou levar.',
  },
  {
    id: 'fahita',
    name: 'Fahita',
    category: 'lanches_rapidos',
    categoryLabel: 'Lanches Rápidos',
    price: '3.000 kzs',
    availability: 'Todo o dia',
    description:
      'Tortilha grelhada enrolada com recheio temperado e vegetais frescos.',
  },
  {
    id: 'frango-panado',
    name: 'Frango Panado + Dose de Batata',
    category: 'lanches_rapidos',
    categoryLabel: 'Lanches Rápidos',
    price: '5.000 kzs',
    availability: 'Almoço e jantar',
    description:
      'Peitos de frango panados estaladiços acompanhados de dose generosa de batata frita.',
  },
  {
    id: 'tabua-mista',
    name: 'Tábua Mista (Partilha)',
    category: 'lanches_rapidos',
    categoryLabel: 'Lanches Rápidos',
    price: '18.000 kzs',
    availability: 'Ideal para grupos e Bar de Rua',
    description:
      'Seleção variada de carnes, petiscos e batatas fritas pensada para partilhar na esplanada.',
  },
];

export const BAR_DE_RUA_EVENT = {
  title: 'Bar de Rua do Café da Banda',
  dateLabel: 'Sábado, 28 de novembro de 2026',
  timeLabel: 'A partir das 15h00',
  locationLabel: 'Rua do Hotel Bravo (junto ao Campo 11)',
  entryTerms: 'Acesso livre com consumo obrigatório',
  summary:
    'Tarde aberta de música, convívio e bar de rua no Soyo com cinco convidados em cartaz. Chegue cedo para garantir mesa na esplanada.',
  lineup: [
    {
      order: '01',
      name: 'Whiteras',
      role: 'Cartaz Oficial',
      note: 'Abertura de pista e ritmos quentes de fim de tarde na Rua do Hotel Bravo.',
    },
    {
      order: '02',
      name: 'Vado Faya',
      role: 'Cartaz Oficial',
      note: 'Energia urbana e seleção de sonoridades para animar a esplanada junto ao Campo 11.',
    },
    {
      order: '03',
      name: 'Igor Mix',
      role: 'Cartaz Oficial',
      note: 'Transições dinâmicas e mistura contínua durante o pôr do sol no Soyo.',
    },
    {
      order: '04',
      name: 'Caio Lopes',
      role: 'Cartaz Oficial',
      note: 'Set dedicado ao convívio de rua com clássicos atuais e batidas envolventes.',
    },
    {
      order: '05',
      name: 'Chandinho',
      role: 'Cartaz Oficial',
      note: 'Encerramento da tarde com pista cheia e ambiente vibrante no Bar de Rua.',
    },
  ] as LineupArtist[],
} as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-bar-soyo',
    src: BRAND_INFO.images.barDeRua,
    alt: 'Edição do Bar de Rua do Café da Banda no Soyo ao pôr do sol',
    title: 'Tarde de Bar de Rua no Soyo',
    category: 'bar_de_rua',
    categoryLabel: 'Bar de Rua & Ambiente',
    caption: 'Esplanada cheia, mesa de DJ e música ao ar livre na Rua do Hotel Bravo.',
    dateOrTag: 'Ambiente · Edições Bar de Rua',
  },
  {
    id: 'gal-magoga',
    src: BRAND_INFO.images.magogaReal,
    alt: 'Magoga composta tostada na chapa com batatas fritas do Café da Banda',
    title: 'Magoga Composta na Chapa',
    category: 'pratos_lanches',
    categoryLabel: 'Pratos & Lanches',
    caption: 'Preparada na hora com queijo derretido e dose de batatas fritas douradas.',
    dateOrTag: 'Cozinha · 3.500 kzs',
  },
  {
    id: 'gal-equipa-1',
    src: BRAND_INFO.images.equipaPolo,
    alt: 'Membro da equipa O Café da Banda com fardamento oficial castanho',
    title: 'Atendimento & Equipa da Casa',
    category: 'equipa_marca',
    categoryLabel: 'Equipa & Marca',
    caption: 'Identidade própria e atendimento próximo desde a abertura matinal.',
    dateOrTag: 'Equipa Oficial · Soyo',
  },
  {
    id: 'gal-cachorro',
    src: BRAND_INFO.images.cachorroPromo,
    alt: 'Campanha criativa do Cachorro-Quente do Café da Banda',
    title: 'Especial Cachorro-Quente da Banda',
    category: 'pratos_lanches',
    categoryLabel: 'Pratos & Lanches',
    caption: 'Destaque das tardes e noites de restauração rápida na esplanada.',
    dateOrTag: 'Fast Food · 2.000 kzs',
  },
  {
    id: 'gal-cafe-grao',
    src: BRAND_INFO.images.cafeGrao,
    alt: 'Do grão à chávena — Café da Banda',
    title: 'Do Grão à Chávena',
    category: 'equipa_marca',
    categoryLabel: 'Equipa & Marca',
    caption: 'O cuidado diário com o café quente para quem inicia o dia cedo no Soyo.',
    dateOrTag: 'Identidade · Café da Banda',
  },
  {
    id: 'gal-identidade',
    src: BRAND_INFO.images.identidadeCafe,
    alt: 'Um café autêntico, com identidade própria — O Café da Banda',
    title: 'Café Autêntico no Soyo',
    category: 'equipa_marca',
    categoryLabel: 'Equipa & Marca',
    caption: 'A presença simpática que recebe moradores, trabalhadores e amigos todos os dias.',
    dateOrTag: 'Comunidade · Soyo',
  },
  {
    id: 'gal-esplanada-manha',
    src: BRAND_INFO.images.hero,
    alt: 'Esplanada matinal de O Café da Banda com café quente e matabicho',
    title: 'Manhãs na Rua do Hotel Bravo',
    category: 'bar_de_rua',
    categoryLabel: 'Bar de Rua & Ambiente',
    caption: 'Mesa posta ao ar livre junto ao Campo 11 antes do movimento da tarde.',
    dateOrTag: 'Esplanada · Matabicho',
  },
  {
    id: 'gal-menu-oficial',
    src: BRAND_INFO.images.menuPoster,
    alt: 'Cartaz oficial de preços e opções do Menu do Café da Banda',
    title: 'Cartaz Oficial do Cardápio',
    category: 'pratos_lanches',
    categoryLabel: 'Pratos & Lanches',
    caption: 'Tabela completa de hambúrgueres, magogas, sandes, caldo, sopa e tábua mista.',
    dateOrTag: 'Cardápio · Soyo',
  },
  {
    id: 'gal-equipa-balcao',
    src: '/assets/aistudio/Screenshot_29_20df6c0c.png',
    alt: 'Colaboradora de atendimento O Café da Banda com boné e polo oficial',
    title: 'Hospitalidade no Balcão',
    category: 'equipa_marca',
    categoryLabel: 'Equipa & Marca',
    caption: 'Receção simpática e atendimento rápido para quem começa o dia no Soyo.',
    dateOrTag: 'Equipa Oficial · Soyo',
  },
  {
    id: 'gal-barista-prova',
    src: '/assets/aistudio/Screenshot_33_01cbff52.png',
    alt: 'Barista de O Café da Banda com avental e chapéu oficial provando café quente',
    title: 'Controlo & Preparação de Café',
    category: 'equipa_marca',
    categoryLabel: 'Equipa & Marca',
    caption: 'Atenção diária à qualidade de cada chávena servida na casa.',
    dateOrTag: 'Barista · Café da Banda',
  },
  {
    id: 'gal-cozinha-equipa',
    src: '/assets/aistudio/Screenshot_30_28883a7b.png',
    alt: 'Cozinheiro de O Café da Banda com avental e chapéu de chef oficial',
    title: 'Cozinha & Lanches na Hora',
    category: 'equipa_marca',
    categoryLabel: 'Equipa & Marca',
    caption: 'Equipa dedicada à preparação de magogas, hambúrgueres, caldos e tábuas.',
    dateOrTag: 'Cozinha · Soyo',
  },
];

export interface TeamMember {
  id: string;
  role: string;
  area: string;
  description: string;
  image: string;
  alt: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'func-atendimento-1',
    role: 'Atendimento & Esplanada',
    area: 'Salão e Balcão',
    description:
      'Receção acolhedora desde as primeiras horas da manhã, atendimento de pedidos rápidos e acompanhamento de mesas.',
    image: '/assets/aistudio/Screenshot_29_20df6c0c.png',
    alt: 'Funcionária de atendimento de O Café da Banda com boné e polo castanho oficial',
  },
  {
    id: 'func-barista',
    role: 'Barista & Bebidas',
    area: 'Extração e Café Quente',
    description:
      'Preparação diária do café do grão à chávena, bebidas quentes de matabicho e serviço contínuo de balcão.',
    image: '/assets/aistudio/Screenshot_33_01cbff52.png',
    alt: 'Barista de O Café da Banda com chapéu e avental provando café',
  },
  {
    id: 'func-cozinha-1',
    role: 'Cozinha & Chapa',
    area: 'Matabicho e Lanches Rápidos',
    description:
      'Confeção na hora de hambúrgueres compostos, magogas tostadas, sandes e pratos quentes da casa.',
    image: '/assets/aistudio/Screenshot_32_5b8aaca3.png',
    alt: 'Cozinheiro de O Café da Banda com avental e chapéu preto oficial',
  },
  {
    id: 'func-cozinha-2',
    role: 'Grelha & Tábuas',
    area: 'Restauração Rápida e Eventos',
    description:
      'Preparação de frango panado, fahitas, cachorros-quentes e tábuas mistas para partilha nas tardes de Bar de Rua.',
    image: '/assets/aistudio/Screenshot_30_28883a7b.png',
    alt: 'Chef de cozinha de O Café da Banda de braços cruzados com fardamento oficial',
  },
  {
    id: 'func-balcao-2',
    role: 'Serviço & Apoio Operacional',
    area: 'Balcão e Encomendas',
    description:
      'Organização de pedidos para levar, apoio nas tardes musicais e contacto direto com clientes no Soyo.',
    image: '/assets/aistudio/Screenshot_28_92263def.png',
    alt: 'Colaborador de O Café da Banda com polo castanho e boné oficial',
  },
];

export interface CustomerMoment {
  id: string;
  image: string;
  alt: string;
  label: string;
  caption: string;
}

export const HAPPY_CUSTOMERS: CustomerMoment[] = [
  {
    id: 'cli-1',
    image: '/assets/aistudio/Screenshot_38_d568dddd.png',
    alt: 'Cliente satisfeito segurando encomenda embalada com o selo O Café da Banda à noite',
    label: 'Take-away Noturno',
    caption: 'Pedido embalado e selado na hora no balcão da Rua do Hotel Bravo.',
  },
  {
    id: 'cli-2',
    image: '/assets/aistudio/Screenshot_35_ac354f84.png',
    alt: 'Cliente saboreando lanche acabado de sair junto ao balcão de O Café da Banda',
    label: 'Servido na Hora',
    caption: 'Lanche quente acabado de preparar e atendimento próximo ao balcão.',
  },
  {
    id: 'cli-3',
    image: '/assets/aistudio/Screenshot_39_1b00dc7b.png',
    alt: 'Cliente satisfeita com saco de encomenda selado de O Café da Banda',
    label: 'Encomenda Rápida',
    caption: 'Saco selado O Café da Banda pronto para levar com rapidez.',
  },
  {
    id: 'cli-4',
    image: '/assets/aistudio/Screenshot_37_93b9a8e0.png',
    alt: 'Cliente no balcão de rua de O Café da Banda com pedido para levar',
    label: 'Ponto de Encontro',
    caption: 'Presença habitual de clientes durante o movimento da noite no Soyo.',
  },
  {
    id: 'cli-5',
    image: '/assets/aistudio/Screenshot_36_0e5da7d4.png',
    alt: 'Cliente sorridente com pedido embalado de O Café da Banda ao balcão',
    label: 'Comunidade do Soyo',
    caption: 'Satisfação em cada levantamento ao balcão na Rua do Hotel Bravo.',
  },
];

export const UPCOMING_POSTERS: UpcomingEventPoster[] = [
  {
    id: 'poster-bar-28-nov',
    title: 'Bar de Rua do Café da Banda',
    edition: 'Edição Oficial · Novembro 2026',
    dateLabel: 'Sábado, 28 de novembro de 2026',
    timeLabel: 'A partir das 15h00',
    locationLabel: 'Rua do Hotel Bravo (junto ao Campo 11)',
    entryTerms: 'Acesso livre com consumo obrigatório',
    image: BRAND_INFO.images.barDeRua,
    highlights: ['Whiteras', 'Vado Faya', 'Igor Mix', 'Caio Lopes', 'Chandinho'],
    isFeatured: true,
  },
  {
    id: 'poster-matabicho-semanal',
    title: 'Manhãs de Matabicho & Café Quente',
    edition: 'Programação Diária',
    dateLabel: 'Segunda a Domingo',
    timeLabel: 'Desde as primeiras horas da manhã',
    locationLabel: 'Rua do Hotel Bravo (Quintal da Dona Esperança da Rádio Soyo)',
    entryTerms: 'Serviço ao balcão, esplanada e encomenda rápida',
    image: BRAND_INFO.images.cafeGrao,
    highlights: ['Café do Grão à Chávena', 'Sandes & Magoga', 'Caldo & Sopa'],
  },
  {
    id: 'poster-tardes-dezembro',
    title: 'Próximas Tardes de Bar de Rua',
    edition: 'Agenda em Atualização',
    dateLabel: 'Novas datas em breve · Página Oficial',
    timeLabel: 'Fins de tarde no Soyo',
    locationLabel: 'Rua do Hotel Bravo (junto ao Campo 11)',
    entryTerms: 'Consulte o cartaz atualizado pelo WhatsApp 931 946 295',
    image: BRAND_INFO.images.identidadeCafe,
    highlights: ['DJs Convidados', 'Tábua Mista de Partilha', 'Ambiente ao Ar Livre'],
  },
];
