import type { Dictionary } from './types';

const es: Dictionary = {
	meta: {
		title: 'Plugin de Reservas WordPress, Alternativa a Calendly | clickTarot Calendar',
		description:
			'Plugin de reservas para WordPress pensado para tarotistas, astrólogos y consultores. Pagos, facturación y bonos incluidos — una alternativa real a Calendly.',
	},
	nav: {
		home: 'Inicio',
		pricing: 'Precios',
		faq: 'FAQ',
		about: 'Sobre mí',
	},
	hero: {
		eyebrow: 'Plugin de WordPress para profesionales del bienestar',
		title: 'El calendario de reservas hecho a medida para tu consulta',
		subtitle:
			'Convierte tu sitio en un estudio siempre abierto: los clientes reservan y pagan por su cuenta, tú solo recibes las notificaciones. Se acabaron los mensajes interminables.',
		ctaSecondary: 'Comparar con Calendly',
	},
	features: {
		title: 'Todo lo que necesitas, nada de más',
		items: [
			{
				title: 'Calendario visual con vista mensual',
				description: 'El cliente elige fecha y hora por su cuenta, sin ida y vuelta de mensajes.',
			},
			{
				title: 'Pagos integrados',
				description: 'PayPal y tarjeta de crédito (Stripe), conectados directamente a tu propia cuenta. El dinero llega a ti.',
			},
			{
				title: 'Datos de facturación automáticos',
				description: 'NIF/DNI y dirección recogidos automáticamente al reservar: todo lo que necesitas para emitir factura.',
			},
			{
				title: 'Paquetes prepagados',
				description: 'Vende bloques de varias sesiones a un precio con descuento: el cliente paga una vez, reserva cuando quiera.',
			},
			{
				title: 'Cupones de descuento',
				description: 'Códigos promocionales con caducidad y límite de usos, listos para tus campañas en redes sociales.',
			},
			{
				title: 'Reprogramación de autoservicio',
				description: 'El cliente cambia o cancela la cita por su cuenta desde el enlace del correo, sin escribirte.',
			},
			{
				title: 'Facturación también para clientes internacionales',
				description: 'Selector de país en el formulario: NIF/IVA, código postal y provincia/estado se adaptan fuera de Italia.',
			},
			{
				title: 'Plugin multilingüe',
				description: 'Formulario, correos y panel de administración disponibles en español, inglés, alemán e italiano.',
			},
		],
	},
	screenshots: {
		title: 'Cómo funciona, en la práctica',
		items: [
			{ src: '/screenshots/screenshot-1.png', alt: 'Calendario de reservas público con vista mensual y franjas horarias' },
			{ src: '/screenshots/screenshot-2.png', alt: 'Panel Calendarios para crear y personalizar tus servicios' },
			{ src: '/screenshots/screenshot-3.png', alt: 'Panel Estadísticas con ingresos y evolución mensual' },
		],
	},
	audience: {
		title: 'Pensado para consultas, no para oficinas de empresa',
		body:
			'Tarotistas, astrólogos, counselors holísticos y profesionales del crecimiento personal: clickTarot Calendar gestiona exactamente el flujo que necesitas como profesional individual que atiende clientes online o presencialmente, sin la complejidad de una herramienta pensada para equipos de empresa.',
	},
	pricing: {
		eyebrow: 'Precio sencillo',
		title: 'Un precio, todas las funciones',
		subtitle: 'Sin planes ocultos, sin coste por usuario adicional: pagas por tu consulta, no por un puesto de trabajo extra que no tienes.',
		planName: 'clickTarot Calendar',
		priceNote: 'Licencia anual, actualizaciones y soporte incluidos',
		ctaLabel: 'Comprar ahora',
		included: [
			'Calendarios ilimitados para servicios distintos',
			'Pagos con PayPal y Stripe',
			'Paquetes prepagados y cupones de descuento',
			'Facturación automática, también para clientes internacionales',
			'Correos automáticos personalizables',
			'Plugin traducido a 4 idiomas',
			'Actualizaciones y soporte incluidos',
		],
		guarantee: 'Garantía de devolución gestionada directamente por Freemius en el checkout.',
	},
	faq: {
		title: 'Preguntas frecuentes',
		items: [
			{
				q: '¿Necesito saber programar para usarlo?',
				a: 'No, la instalación y la configuración están pensadas para quien no tiene conocimientos técnicos: bastan unos pocos clics.',
			},
			{
				q: '¿Puedo ofrecer varios servicios con precios diferentes?',
				a: 'Sí, puedes crear un calendario para cada servicio, cada uno con su propia duración, precio y horario laboral.',
			},
			{
				q: '¿Cómo se gestionan los pagos de mis clientes?',
				a: 'A través de PayPal y/o Stripe, conectados directamente a tu propia cuenta: el dinero llega a ti, el plugin nunca lo toca ni lo retiene.',
			},
			{
				q: '¿Puedo vender paquetes de varias sesiones?',
				a: 'Sí, puedes crear paquetes prepagados multisesión: el cliente paga una vez y reserva sus sesiones cuando quiera.',
			},
			{
				q: '¿Funciona también para clientes fuera de Italia?',
				a: 'Sí: el formulario se adapta automáticamente para clientes internacionales (NIF/IVA en lugar de Código Fiscal italiano, código postal en formato libre), y todo el plugin está disponible en español, inglés, alemán e italiano.',
			},
			{
				q: '¿Mis datos y los de mis clientes están seguros?',
				a: 'Sí: todo queda guardado únicamente en tu propio sitio WordPress, y nunca se comparte con terceros.',
			},
		],
	},
	footer: {
		tagline: 'El calendario de reservas para profesionales de la consulta.',
		contactLabel: 'Contacto',
		privacy: 'Privacidad',
		terms: 'Términos',
		rights: 'Todos los derechos reservados.',
	},
	legal: {
		privacyTitle: 'Política de privacidad',
		privacyIntro:
			'Esta página describe cómo clicktarotcalendar.com trata los datos durante la visita a este sitio de presentación. No cubre el tratamiento de datos que realiza el plugin clickTarot Calendar en tu propio sitio WordPress, del cual sigues siendo responsable como comprador e instalador.',
		privacyBody: [
			{
				heading: 'Hosting y datos técnicos',
				body: 'Este sitio está alojado en Cloudflare Pages. Cloudflare puede recopilar registros técnicos estándar (dirección IP, user agent) con fines de seguridad y funcionamiento del servicio.',
			},
			{
				heading: 'Estadísticas',
				body: 'Usamos Cloudflare Web Analytics, un servicio de estadísticas sin cookies y sin seguimiento individual del visitante: no requiere un banner de consentimiento.',
			},
			{
				heading: 'Pagos',
				body: 'La compra de la licencia se realiza íntegramente en la plataforma de Freemius, que actúa como revendedor oficial (merchant of record) y gestiona de forma independiente los datos de pago según su propia política de privacidad.',
			},
			{
				heading: 'Contacto',
				body: 'Si nos escribes por correo, usaremos tu dirección únicamente para responderte.',
			},
		],
		termsTitle: 'Términos de uso',
		termsIntro: 'Al utilizar clicktarotcalendar.com aceptas los términos descritos en esta página.',
		termsBody: [
			{
				heading: 'El sitio',
				body: 'clicktarotcalendar.com es el sitio de presentación del plugin de WordPress clickTarot Calendar. Su contenido tiene fines informativos y comerciales.',
			},
			{
				heading: 'Compra de la licencia',
				body: 'La compra, renovación y facturación de la licencia del plugin son gestionadas por Freemius según sus propios términos de venta, mostrados durante el checkout.',
			},
			{
				heading: 'Propiedad intelectual',
				body: 'Los nombres, marcas y contenidos de este sitio pertenecen a sus respectivos propietarios. Los nombres de productos de terceros mencionados (p. ej. Calendly) se usan con fines descriptivos/comparativos.',
			},
			{
				heading: 'Limitación de responsabilidad',
				body: 'Este sitio se ofrece "tal cual". Para soporte técnico sobre el plugin, consulta los canales indicados en el panel de Freemius tras la compra.',
			},
		],
	},
	about: {
		eyebrow: 'Sobre mí',
		title: 'No un equipo de desarrolladores. Un tarotista que usa esta herramienta cada día.',
		subtitle: 'clickTarot Calendar no lo construyó una empresa de software. Nació de un problema real — el mío — y de un trabajo que hago cada día.',
		bioTitle: 'Quién soy',
		bioBody: [
			'Me llamo Francesco Guarino. Soy conferenciante, estudioso de psicología social y llevo años trabajando para construir un puente entre ciencia y espiritualidad. Antes de todo esto, estudié directamente con los Maestros Cartistas la tradición de fabricación de cartas.',
			'Fundé Scuola TdM, el principal centro de formación en Tarot de Marsella de Italia, y creé el Método TdM, un modelo de estudio e interacción con el Tarot de Marsella que enseño desde 2011 entre Europa y Asia, y desde 2017 también en América.',
			'Soy el webmaster de tarocchi.blog, considerado el mejor blog de tarot de Italia, y creé clickTarot, una comunidad pensada para ser lo más inclusiva posible. A través de mis sitios llego a un millón y medio de estudiosos, aficionados y amantes del tarot cada año. También he producido el documental "Oltre il Tarot" y escribo regularmente libros de psicología y espiritualidad.',
		],
		searchTitle: 'Por qué creé clickTarot Calendar',
		searchBody: [
			'Durante años busqué una herramienta de reservas adecuada para mi trabajo: consultas de pago, una a una, con clientes que vuelven con el tiempo. Nunca la encontré.',
			'Probé Booknetic: no tenía las funciones que realmente necesitaba. Pasé a Booknetic SaaS, pero estaba lleno de errores — y como sus desarrolladores ganan dinero vendiendo complementos de pago, parecían más interesados en sacar nuevos que en arreglar los que ya existían. Incluso me uní a su comunidad de Discord esperando encontrar ayuda: era un cementerio de quejas, sin respuestas.',
			'Probé TidyCal: me daba errores 404 en mis calendarios, y el servicio de atención al cliente era prácticamente inexistente — la misma historia que todos los productos de la "familia Sumo". Si usas SendFox para tus emails, sabes exactamente de qué hablo.',
			'También había usado durante mucho tiempo un plugin del equipo de CodePeople. Funcionaba, hasta que entró en conflicto con otros plugins importantes de WordPress. Me prepararon una versión personalizada, que nunca volvió a actualizarse — hasta que una actualización de WordPress la dejó definitivamente inutilizable.',
			'En ese momento reuní a mi equipo y lo construí yo mismo. Después decidí abrirlo también a quienes, como yo, nunca habían encontrado la herramienta adecuada.',
		],
		whyTitle: 'Por qué sé que funciona',
		whyBody: [
			'No porque haya detrás un equipo de desarrolladores profesionales — no lo hay, y no voy a fingir que sí. clickTarot Calendar funciona porque es la misma herramienta que uso yo, cada día, para gestionar las consultas de mi propio negocio.',
			'Por eso el foco principal está en las actualizaciones y la mejora constante: no es un producto que simplemente vendemos y olvidamos. Es la herramienta de la que depende mi trabajo diario, así que tiene que funcionar. Siempre.',
		],
		linksTitle: 'Más información',
		bookneticLinkLabel: 'Nuestra comparativa con Booknetic',
		tidycalLinkLabel: 'Nuestra comparativa con TidyCal',
		ctaTitle: 'Pruébalo tú también',
		ctaBody: 'La misma herramienta que uso cada día para mi trabajo, ahora disponible también para el tuyo.',
	},
};

export default es;
