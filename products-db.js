/**
 * Le Perlé — Base de datos de productos
 * Para añadir un nuevo producto, añadir una nueva entrada a este objeto.
 * El ID debe coincidir con el parámetro ?id= de la URL de product.html
 */

const PRODUCTS = {

  "serum-eclat-30ml": {
    id: "serum-eclat-30ml",
    name: "Sérum Éclat",
    eyebrow: "Sérum facial",
    tagline: "El sérum que activa tu brillo natural, unifica el tono y aporta luminosidad duradera.",
    variant: "Sérum · 30ml",
    price: 80,
    category: "serums",
    categoryLabel: "Sérums",
    categoryUrl: "serums.html",
    image: "SerumEclat.jpeg",
    images: [
      "SerumEclat.jpeg"
    ],
    description: [
      "Sérum Éclat es un concentrado de luminosidad que despierta la belleza natural de tu piel con un acabado fresco y sedoso.",
      "Una fórmula ligera que unifica el tono, matifica suavemente y aporta un glow interior sin sensación grasa.",
      "Su acción equilibrante revela una piel uniforme, fresca y con un resplandor saludable que perdura día tras día."
    ],
    effect: "Una piel naturalmente iluminada y equilibrada desde la primera aplicación. El serum trabaja en profundidad para ofrecer hidratación, confort y un brillo saludable que se siente ligero y elegante.",
    benefits: [
      "Luminosidad inmediata y uniforme",
      "Textura suave y refinada",
      "Hidratación profunda sin sensación grasa"
    ],
    howToUse: [
      "Aplicar 3-4 gotas sobre piel limpia y seca.",
      "Masajear con movimientos ascendentes hasta su completa absorción.",
      "Continuar con hidratante y protección solar en la rutina matinal."
    ],
    activeIngredients: [
      "Niacinamida para un tono más uniforme",
      "Ácido hialurónico para hidratación profunda",
      "Centella asiática para calma y frescura inmediata"
    ],
    recommendedFor: [
      "Piel apagada",
      "Piel desigual",
      "Todas las pieles que buscan un glow natural"
    ],
    reviews: [
      { stars: 5, name: "Martina", comment: "Mi piel nunca había lucido tan fresca y uniforme. Textura ligera pero eficaz." },
      { stars: 5, name: "Lucía", comment: "Sensación de piel saludable y un glow natural que dura todo el día." },
      { stars: 4, name: "Ana", comment: "Ideal para mi rutina minimalista. Rostro más luminoso y calmado." }
    ],
    ingredients: "Aqua, Niacinamide, Glycerin, Pentylene Glycol, Zinc PCA, Sodium Hyaluronate, Panthenol, Allantoin, Adenosine, Centella Asiatica Extract, Saccharide Isomerate, Bifida Ferment Lysate, Lactobacillus Ferment, Ceramide NP, Phytosphingosine, Cholesterol, Tocopherol, Camellia Sinensis Leaf Extract.",
    ingredientsNote: "*Ingredientes de origen natural certificado. Sin parabenos, sin silicona, sin fragancia artificial.",
    applicationSteps: [
      "Aplicar sobre la piel limpia y seca. Distribuir 3-4 gotas por el rostro con movimientos suaves ascendentes.",
      "Masajear suavemente con la yema de los dedos hasta su completa absorción, prestando especial atención a las zonas de mayor brillo.",
      "Continuar con tu hidratante habitual y, por la mañana, aplicar siempre protección solar. Usar mañana y noche."
    ],
    beforeAfter: {
      labelBefore: "Sin aplicar",
      labelAfter: "Con Sérum Éclat",
      imageBefore: "IMAGEN PÁGINA PRODUCTO SÉRUM ÉCLAT (BEFORE).jpg",
      imageAfter: "IMAGEN PÁGINA PRODUCTO SÉRUM ÉCLAT (AFTER).jpg",
      title: "El efecto"
    },
    relatedProducts: ["soft-cloud-cleaner-100ml", "serum-intense-eclat-30ml", "recarga-serum-eclat-30ml"]
  },

  "serum-intense-eclat-30ml": {
    id: "serum-intense-eclat-30ml",
    name: "Sérum Intense Éclat",
    eyebrow: "Sérum facial intensivo",
    tagline: "Fórmula concentrada para una luminosidad excepcional y resultados visibles desde la primera noche.",
    variant: "Sérum intensivo · 30ml",
    price: 80,
    category: "serums",
    categoryLabel: "Sérums",
    categoryUrl: "serums.html",
    image: "SerumIntenseEclat.jpeg",
    images: [
      "SerumIntenseEclat.jpeg"
    ],
    description: [
      "Sérum Intense Éclat concentra activos premium para una piel visiblemente más luminosa, homogénea y tersa.",
      "Su textura sedosa penetra con rapidez, dejando una sensación de hidratación inmediata y un acabado radiante de glow sofisticado.",
      "Diseñado para pieles que buscan un resultado profesional: más claridad, firmeza y una luminosidad refinada."
    ],
    effect: "Una piel más suave, luminosa y con una sensación de bienestar cutáneo al instante. El tratamiento refina el tono mientras aporta hidratación profunda.",
    benefits: [
      "Glow intenso y natural",
      "Textura refinada y fresca",
      "Piel más uniforme y radiante"
    ],
    howToUse: [
      "Aplicar 3-4 gotas sobre piel limpia, preferentemente de noche.",
      "Extender por rostro y cuello con movimientos ascendentes.",
      "Finalizar con una crema nutritiva para sellar la hidratación."
    ],
    activeIngredients: [
      "Niacinamida concentrada para mayor uniformidad",
      "Ácido tranexámico para luminosidad intensa",
      "Hialuronato de sodio para confort inmediato"
    ],
    recommendedFor: [
      "Piel cansada",
      "Piel con tono desigual",
      "Quienes buscan resultados visibles rápido"
    ],
    reviews: [
      { stars: 5, name: "Carmen", comment: "Piel con más vida y un brillo muy natural. Un producto premium para mi ritual nocturno." },
      { stars: 5, name: "Sofía", comment: "Perfecto para cuando mi piel necesita luminosidad sin peso." },
      { stars: 5, name: "Paula", comment: "Lo siento como un tratamiento de spa cada noche." }
    ],
    ingredients: "Aqua, Niacinamide (10%), Glycerin, Pentylene Glycol, Zinc PCA, Sodium Hyaluronate, Alpha-Arbutin, Tranexamic Acid, Panthenol, Allantoin, Adenosine, Centella Asiatica Extract, Saccharide Isomerate, Bifida Ferment Lysate, Lactobacillus Ferment, Ceramide NP, Tocopherol, Camellia Sinensis Leaf Extract.",
    ingredientsNote: "*Fórmula de alta concentración. Sin parabenos, sin silicona, sin fragancia artificial.",
    applicationSteps: [
      "Aplicar 3-4 gotas sobre la piel limpia y seca, por la noche preferentemente.",
      "Extender suavemente por el rostro y cuello con movimientos ascendentes hasta su absorción completa.",
      "Para potenciar los resultados, usar después de la rutina de limpieza y antes de la crema hidratante."
    ],
    relatedProducts: ["serum-eclat-30ml", "recarga-serum-intense-eclat-30ml", "soft-cloud-cleaner-100ml"]
  },

  "soft-cloud-cleaner-100ml": {
    id: "soft-cloud-cleaner-100ml",
    name: "Soft Cloud Cleaner",
    eyebrow: "Limpiador facial",
    tagline: "Limpieza profunda con textura nube. Elimina impurezas sin agredir la barrera cutánea.",
    variant: "Limpiador suave · 100ml",
    price: 53,
    category: "limpiadores",
    categoryLabel: "Limpiadores",
    categoryUrl: "limpiadores.html",
    image: "SoftCloudCleanse.jpeg",
    images: [
      "SoftCloudCleanse.jpeg"
    ],
    description: [
      "Soft Cloud Cleaner ofrece una limpieza delicada con una textura aireada que transforma la piel sin alterar su equilibrio natural.",
      "Su fórmula calmante elimina impurezas y maquillaje, dejando la piel suave, fresca y lista para recibir el tratamiento siguiente.",
      "Ideal para rutinas de piel sensible: limpia en profundidad, respeta la barrera y aporta una sensación de confort inmediato."
    ],
    effect: "Un rostro limpio, luminoso y equilibrado. El limpiador deja la piel preparada y fresca, con una experiencia sensorial suave y reconfortante.",
    benefits: [
      "Limpieza suave y efectiva",
      "Calma la piel sensible",
      "Textura fresca y ligera"
    ],
    howToUse: [
      "Aplicar sobre rostro húmedo.",
      "Masajear suavemente con movimientos circulares.",
      "Enjuagar con agua tibia y secar con toques suaves."
    ],
    activeIngredients: [
      "Glicerina hidratante",
      "Niacinamida calmante",
      "Ceramidas reparadoras"
    ],
    recommendedFor: [
      "Piel sensible",
      "Piel reactiva",
      "Piel que busca confort y limpieza pura"
    ],
    reviews: [
      { stars: 5, name: "Nuria", comment: "La textura es increíble y mi piel queda suave sin tirantez." },
      { stars: 4, name: "Isabel", comment: "Un limpiador delicado que realmente calma mi piel." },
      { stars: 5, name: "María", comment: "Perfecto para la mañana y la noche, el rostro se siente protegido." }
    ],
    ingredients: "Aqua, Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Glycerin, Panthenol, Allantoin, Centella Asiatica Extract, Sodium Hyaluronate, Ceramide NP, Niacinamide, Citric Acid, Sodium Benzoate, Potassium Sorbate.",
    ingredientsNote: "*Sin sulfatos agresivos, sin parabenos, sin fragancia artificial. Testado dermatológicamente.",
    applicationSteps: [
      "Aplicar una pequeña cantidad sobre el rostro húmedo. Masajear suavemente con movimientos circulares durante 30-60 segundos.",
      "Enjuagar abundantemente con agua tibia. No frotar con la toalla: dar pequeños toquecitos para secar.",
      "Usar mañana y noche como primer paso de la rutina facial. Continuar con sérum y crema hidratante."
    ],
    relatedProducts: ["serum-eclat-30ml", "serum-intense-eclat-30ml", "triple-ritual-cleanser-150ml"]
  },

  "triple-ritual-cleanser-150ml": {
    id: "triple-ritual-cleanser-150ml",
    name: "Triple Ritual Cleanser",
    eyebrow: "Limpiador facial 3 en 1",
    tagline: "Triple acción: limpia, exfolia y prepara la piel en un solo paso.",
    variant: "Limpiador facial · 150ml",
    price: 40,
    category: "limpiadores",
    categoryLabel: "Limpiadores",
    categoryUrl: "limpiadores.html",
    image: "TripleRitualCleanser.jpeg",
    images: [
      "TripleRitualCleanser.jpeg"
    ],
    description: [
      "Triple Ritual Cleanser combina limpieza profunda y exfoliación suave en un solo gesto, dejando la piel lisa y lista para el tratamiento.",
      "Su fórmula experta elimina impurezas sin resecar, mejorando la textura y el tono para una sensación de rostro renovado.",
      "Ideal para rutinas minimalistas con resultados profesionales: piel más uniforme, luminosa y con poros menos visibles."
    ],
    effect: "Una piel más refinada, fresca y con un aspecto saludable. El perfecto balance entre limpieza y suavidad redefine la textura del rostro.",
    benefits: [
      "Limpieza profunda y suave",
      "Textura de la piel más lisa",
      "Poros menos visibles y más claridad"
    ],
    howToUse: [
      "Aplicar sobre rostro húmedo y masajear en círculos.",
      "Dejar actuar 30 segundos para una exfoliación suave.",
      "Enjuagar con agua fría y continuar con el tratamiento habitual."
    ],
    activeIngredients: [
      "PHA y AHA para suavizar la piel",
      "Niacinamida para claridad",
      "Hialuronato de sodio para hidratación"
    ],
    recommendedFor: [
      "Piel con textura irregular",
      "Piel con poros visibles",
      "Quienes buscan luminosidad renovada"
    ],
    reviews: [
      { stars: 5, name: "Elena", comment: "Siento mi piel más suave y refinada desde la primera vez." },
      { stars: 5, name: "Marta", comment: "No reseca y deja un aspecto muy limpio y natural." },
      { stars: 4, name: "Laura", comment: "Perfecto para alternar con mi rutina nocturna." }
    ],
    ingredients: "Aqua, Sodium Cocoamphoacetate, Glycerin, Gluconolactone, Lactic Acid, Panthenol, Sodium Hyaluronate, Allantoin, Centella Asiatica Extract, Zinc PCA, Niacinamide, Camellia Sinensis Leaf Extract, Citric Acid, Sodium Benzoate.",
    ingredientsNote: "*Exfoliación suave con PHA y AHA. Sin microplásticos. Testado dermatológicamente.",
    applicationSteps: [
      "Aplicar sobre el rostro húmedo y masajear con movimientos circulares suaves durante 1 minuto.",
      "Dejar actuar 30 segundos para que los ácidos de exfoliación realicen su función.",
      "Enjuagar con agua fría para cerrar el poro. Usar 3-4 veces por semana, preferentemente por la noche."
    ],
    relatedProducts: ["soft-cloud-cleaner-100ml", "serum-eclat-30ml", "serum-intense-eclat-30ml"]
  },

  "recarga-serum-eclat-30ml": {
    id: "recarga-serum-eclat-30ml",
    name: "Recarga Sérum Éclat",
    eyebrow: "Recarga · Sérum facial",
    tagline: "Recarga sostenible para tu Sérum Éclat. Misma fórmula, menor impacto ambiental.",
    variant: "Recarga · 30ml",
    price: 68,
    category: "serums",
    categoryLabel: "Sérums",
    categoryUrl: "serums.html",
    image: "SerumEclatVeige.jpeg",
    images: [
      "SerumEclatVeige.jpeg"
    ],
    description: [
      "La Recarga Sérum Éclat conserva la misma fórmula premium en un formato pensado para la sostenibilidad y el ritual diario.",
      "Un gesto eco-consciente que mantiene la luminosidad y el confort sin renunciar a la calidad del producto original.",
      "Perfecta para quienes desean una piel uniforme, hidratada y un acabado de glow natural con menor impacto ambiental."
    ],
    effect: "La recarga prolonga la experiencia de luminosidad del sérum original: piel hidratada, uniforme y con un brillo saludable que se mantiene más allá del primer uso.",
    benefits: [
      "Misma fórmula premium",
      "Menor impacto ambiental",
      "Glow natural y duradero"
    ],
    howToUse: [
      "Verter el contenido en el frasco Sérum Éclat vacío y limpio.",
      "Cerrar bien y agitar suavemente si queda producto previo.",
      "Seguir con tu rutina habitual de cuidado facial."
    ],
    activeIngredients: [
      "Niacinamida para tono uniforme",
      "Ácido hialurónico para hidratación",
      "Centella asiática para frescura"
    ],
    recommendedFor: [
      "Amantes de la sostenibilidad",
      "Piel apagada",
      "Todos los tipos de piel"
    ],
    reviews: [
      { stars: 5, name: "Clara", comment: "Me encanta la idea y la piel lo nota igual de luminoso que el original." },
      { stars: 5, name: "Sara", comment: "Es fácil de usar y mi sérum mantiene su rendimiento." },
      { stars: 4, name: "Paula", comment: "Sustentable sin perder eficacia." }
    ],
    ingredients: "Aqua, Niacinamide, Glycerin, Pentylene Glycol, Zinc PCA, Sodium Hyaluronate, Panthenol, Allantoin, Adenosine, Centella Asiatica Extract, Saccharide Isomerate, Bifida Ferment Lysate, Lactobacillus Ferment, Ceramide NP, Phytosphingosine, Cholesterol, Tocopherol, Camellia Sinensis Leaf Extract.",
    ingredientsNote: "*Idéntica fórmula al Sérum Éclat original. Sin parabenos, sin silicona, sin fragancia artificial.",
    applicationSteps: [
      "Verter el contenido de la recarga directamente en tu frasco Sérum Éclat vacío y limpio.",
      "Cerrar bien el frasco y agitar suavemente para mezclar si quedara producto previo.",
      "Continuar con tu rutina habitual de aplicación."
    ],
    relatedProducts: ["serum-eclat-30ml", "serum-intense-eclat-30ml", "recarga-serum-intense-eclat-30ml"]
  },

  "recarga-serum-intense-eclat-30ml": {
    id: "recarga-serum-intense-eclat-30ml",
    name: "Recarga Sérum Intense Éclat",
    eyebrow: "Recarga · Sérum facial intensivo",
    tagline: "Recarga sostenible para tu Sérum Intense Éclat. Compromiso con la piel y con el planeta.",
    variant: "Recarga · 30ml",
    price: 68,
    category: "serums",
    categoryLabel: "Sérums",
    categoryUrl: "serums.html",
    image: "SerumIntenseEclatNaranja.jpeg",
    images: [
      "SerumIntenseEclatNaranja.jpeg"
    ],
    description: [
      "La Recarga Sérum Intense Éclat ofrece la misma concentración de activos premium en un formato sostenible y refinado.",
      "Perfecta para mantener tu tratamiento intensivo sin comprometer la eficacia ni la experiencia sensorial.",
      "Con cada aplicación, la piel se siente hidratada, más uniforme y con un brillo saludable y natural."
    ],
    effect: "Piel más luminosa, hidratada y homogénea al instante. Esta recarga prolonga la experiencia de tratamiento intensivo sin renunciar a la pureza del producto original.",
    benefits: [
      "Glow intenso y duradero",
      "Piel más uniforme",
      "Sostenibilidad premium"
    ],
    howToUse: [
      "Verter el contenido en el frasco Sérum Intense Éclat vacío y limpio.",
      "Cerrar bien y agitar suavemente.",
      "Seguir con la rutina habitual nocturna para mejores resultados." 
    ],
    activeIngredients: [
      "Niacinamida concentrada",
      "Tranexámico para luminosidad",
      "Hialuronato de sodio para hidratación intensa"
    ],
    recommendedFor: [
      "Piel opaca",
      "Piel con falta de uniformidad",
      "Quienes buscan un boost visible"
    ],
    reviews: [
      { stars: 5, name: "Verónica", comment: "Mi piel despertó con un brillo más parejo y una textura más suave." },
      { stars: 5, name: "Ariadna", comment: "Es ideal para ciclos intensivos sin sensación pesada." },
      { stars: 4, name: "Berta", comment: "La recarga es cómoda y mantiene el rendimiento del original." }
    ],
    ingredients: "Aqua, Niacinamide (10%), Glycerin, Pentylene Glycol, Zinc PCA, Sodium Hyaluronate, Alpha-Arbutin, Tranexamic Acid, Panthenol, Allantoin, Adenosine, Centella Asiatica Extract, Saccharide Isomerate, Bifida Ferment Lysate, Lactobacillus Ferment, Ceramide NP, Tocopherol, Camellia Sinensis Leaf Extract.",
    ingredientsNote: "*Idéntica fórmula al Sérum Intense Éclat original. Sin parabenos, sin silicona, sin fragancia artificial.",
    applicationSteps: [
      "Verter el contenido de la recarga directamente en tu frasco Sérum Intense Éclat vacío y limpio.",
      "Cerrar bien el frasco y agitar suavemente.",
      "Continuar con tu rutina habitual de aplicación nocturna."
    ],
    relatedProducts: ["serum-intense-eclat-30ml", "serum-eclat-30ml", "recarga-serum-eclat-30ml"]
  },

  "recarga-solar-veil-spf50-50ml": {
    id: "recarga-solar-veil-spf50-50ml",
    name: "Recarga Solar Veil SPF 50",
    eyebrow: "Recarga · Protección solar",
    tagline: "Recarga para tu Solar Veil SPF 50. Máxima protección, mínimo residuo.",
    variant: "Recarga · 50ml",
    price: 68,
    category: "serums",
    categoryLabel: "Tratamientos",
    categoryUrl: "products.html",
    image: "SolarVeilSPF50.jpeg",
    images: [
      "SolarVeilSPF50.jpeg"
    ],
    description: [
      "La Recarga Solar Veil SPF 50 ofrece la misma protección premium en un formato más sostenible y ligero.",
      "Su textura invisible calma e hidrata la piel mientras protege de los daños solares con un acabado sofisticado.",
      "Perfecta para la rutina diaria: protege, unifica y mantiene la piel fresca con una sensación ligera y sin residuos."
    ],
    effect: "Un acabado invisible y luminoso que protege la piel y realza su aspecto saludable. Protección y confort en cada aplicación.",
    benefits: [
      "Protección SPF 50 amplia",
      "Textura invisible y ligera",
      "Hidratación ligera sin efecto blanco"
    ],
    howToUse: [
      "Verter el contenido en el frasco Solar Veil SPF 50 vacío.",
      "Aplicar como último paso de la rutina matutina.",
      "Reaplicar cada 2 horas durante exposición solar directa."
    ],
    activeIngredients: [
      "Filtros UVA/UVB de amplio espectro",
      "Niacinamida calmante",
      "Hialuronato de sodio hidratante"
    ],
    recommendedFor: [
      "Piel sensible al sol",
      "Piel mixta o grasa",
      "Quienes buscan protección invisible"
    ],
    reviews: [
      { stars: 5, name: "Andrea", comment: "No deja residuo y mi piel se siente protegida todo el día." },
      { stars: 5, name: "Mireia", comment: "Perfecto para usar bajo maquillaje sin brillo." },
      { stars: 4, name: "Raquel", comment: "Muy ligera y confortable para pieles mixtas." }
    ],
    ingredients: "Aqua, Homosalate, Ethylhexyl Salicylate, Butyl Methoxydibenzoylmethane, Octocrylene, Glycerin, Niacinamide, Sodium Hyaluronate, Tocopherol, Panthenol, Allantoin, Camellia Sinensis Leaf Extract, Bisabolol.",
    ingredientsNote: "*SPF 50 de amplio espectro UVA/UVB. Sin fragancia. Testado dermatológicamente.",
    applicationSteps: [
      "Verter el contenido en tu frasco Solar Veil SPF 50 vacío.",
      "Aplicar como último paso de la rutina matutina, después del sérum y la hidratante.",
      "Aplicar generosamente sobre el rostro y cuello. Reaplicar cada 2 horas en exposición solar directa."
    ],
    relatedProducts: ["serum-eclat-30ml", "soft-cloud-cleaner-100ml", "serum-intense-eclat-30ml"]
  },

  "overnight-mask-50ml": {
    id: "overnight-mask-50ml",
    name: "Overnight Mask",
    eyebrow: "Mascarilla nocturna",
    tagline: "Mascarilla facial nocturna de nueva generación. Despierta con la piel renovada, luminosa y rellena.",
    variant: "Mascarilla · 50ml",
    price: 78,
    category: "tratamiento-nocturno",
    categoryLabel: "Tratamiento nocturno",
    categoryUrl: "tratamiento-nocturno.html",
    image: "OvernightMask.jpeg",
    images: [
      "OvernightMask.jpeg",
      "OverNightMask2.jpeg",
      "GrupoProductosBlancos.jpeg"
    ],
    description: [
      "Overnight Mask es el tratamiento nocturno que despierta una piel renovada, rellena y luminosa al amanecer.",
      "Sus activos reparadores trabajan mientras duermes, transformando la textura y aportando hidratación profunda sin sensación pesada.",
      "La piel amanece con un glow natural, visiblemente más fresca y con un confort saludable."
    ],
    effect: "Dormir con esta mascarilla es despertar con una piel más suave, rellena y con un aspecto luminoso y sano. La experiencia sensorial es rica y reconfortante.",
    benefits: [
      "Hidratación reparadora durante la noche",
      "Piel más suave y rellena",
      "Acabado luminoso al despertar"
    ],
    howToUse: [
      "Aplicar como último paso de la rutina nocturna.",
      "Extender una capa uniforme sobre rostro y cuello.",
      "No aclarar. Dejar actuar mientras duermes." 
    ],
    activeIngredients: [
      "Retinol encapsulado para renovación",
      "Bakuchiol calmante",
      "Hialuronato de sodio para hidratación profunda"
    ],
    recommendedFor: [
      "Piel madura",
      "Piel apagada",
      "Quienes desean regeneración nocturna"
    ],
    reviews: [
      { stars: 5, name: "Rocío", comment: "Me encanta la textura y despierto con la piel mucho más suave." },
      { stars: 5, name: "Patricia", comment: "Mi piel se ve descansada y con un brillo natural al día siguiente." },
      { stars: 4, name: "Claudia", comment: "Un tratamiento nocturno muy agradable para mi piel seca." }
    ],
    ingredients: "Aqua, Glycerin, Niacinamide, Sodium Hyaluronate, Retinol (0.03%), Bakuchiol, Panthenol, Allantoin, Adenosine, Centella Asiatica Extract, Ceramide NP, Phytosphingosine, Cholesterol, Bifida Ferment Lysate, Peptides Complex, Tocopherol.",
    ingredientsNote: "*Con retinol y bakuchiol encapsulado. Sin fragancia artificial. Apto para uso nocturno.",
    applicationSteps: [
      "Aplicar como último paso de la rutina nocturna, después del sérum y la crema hidratante.",
      "Extender una capa generosa por el rostro y cuello con movimientos suaves ascendentes.",
      "No aclarar. Dejar actuar toda la noche. Por la mañana, continuar con la rutina habitual."
    ],
    relatedProducts: ["serum-eclat-30ml", "serum-intense-eclat-30ml", "soft-cloud-cleaner-100ml"]
  },

  "eclat-skin-tint-30ml": {
    id: "eclat-skin-tint-30ml",
    name: "Éclat Skin Tint",
    eyebrow: "Tratamiento con color",
    tagline: "Tratamiento con color que unifica el tono aportando un glow natural.",
    variant: "Tratamiento · 30ml",
    price: 72,
    category: "serums",
    categoryLabel: "Tratamientos",
    categoryUrl: "products.html",
    image: "EclatSkinTint.jpeg",
    images: [
      "EclatSkinTint.jpeg",
      "EclatSkinTint2.jpeg",
      "GotaBlanca.jpeg"
    ],
    description: [
      "Éclat Skin Tint es un tratamiento con color que unifica el tono y aporta un glow natural, cuidando la piel simultáneamente.",
      "Su textura ligera se funde al instante, dejando un acabado radiante y de aspecto saludable sin sensación de maquillaje pesado.",
      "Hidrata, ilumina y perfecciona la piel, convirtiéndose en el último paso ideal de una rutina facial premium."
    ],
    effect: "Piel uniforme, fresca y con un brillo natural inmediato. Éclat Skin Tint realza tu piel con un resultado luminoso y saludable.",
    benefits: [
      "Unifica el tono con acabado natural",
      "Aporta luminosidad sin efecto máscara",
      "Hidrata y protege la piel"
    ],
    howToUse: [
      "Aplicar 2-3 gotas en el centro del rostro.",
      "Difuminar hacia afuera con los dedos o una esponja húmeda.",
      "Usar como último paso de la rutina diaria o bajo protección solar." 
    ],
    activeIngredients: [
      "Niacinamida para uniformizar",
      "Hialuronato de sodio para hidratación",
      "Pigmentos minerales para acabado natural"
    ],
    recommendedFor: [
      "Piel con tono desigual",
      "Piel seca o normal",
      "Quienes buscan un glow natural"
    ],
    reviews: [
      { stars: 5, name: "Celia", comment: "Un acabado muy natural y fresco. Ideal para días sin base pesada." },
      { stars: 5, name: "Inés", comment: "Se ve como piel, pero mejor." },
      { stars: 4, name: "Mónica", comment: "Perfecto para una cobertura ligera y luminosa." }
    ],
    ingredients: "Aqua, Cyclopentasiloxane, Glycerin, Niacinamide, Iron Oxides, Titanium Dioxide, Sodium Hyaluronate, Tocopherol, Panthenol, Allantoin, Centella Asiatica Extract, Adenosine, Ceramide NP.",
    ingredientsNote: "*Con pigmentos minerales. Sin fragancia artificial. Testado dermatológicamente.",
    applicationSteps: [
      "Aplicar 2-3 gotas en el centro del rostro y difuminar hacia afuera con los dedos o una esponja húmeda.",
      "Mezclar con hidratante para una cobertura más ligera, o aplicar solo para un acabado más uniforme.",
      "Usar por la mañana como último paso de la rutina. Se puede llevar solo o bajo protección solar."
    ],
    relatedProducts: ["serum-eclat-30ml", "serum-intense-eclat-30ml", "soft-cloud-cleaner-100ml"]
  }

};

