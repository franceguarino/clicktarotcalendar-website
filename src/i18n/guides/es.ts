import type { GuideDictionary, GuideUiText } from './types';

export const guideUi: GuideUiText = {
	eyebrow: 'Guía',
	otherGuidesTitle: 'Más guías',
	backToHome: 'Volver al inicio',
	comparisonsTitle: 'Todas las comparativas, una por una',
};

const es: GuideDictionary = {
	setupBookings: {
		title: 'Cómo Configurar Reservas Online para Consultas de Tarot en WordPress',
		tagline: 'Una guía paso a paso, sin tocar una línea de código.',
		metaDescription:
			'Guía paso a paso para configurar un calendario de reservas online para consultas de tarot en tu sitio WordPress, desde elegir un plugin hasta cobrar el primer pago.',
		intro:
			'Si tus clientes todavía reservan consultas por DM, email o un enlace a un calendario compartido, estás dedicando tiempo a la organización que podría ir a las consultas en sí. Aquí tienes exactamente cómo configurar un calendario de reservas en tu propio sitio WordPress, desde la instalación hasta la primera cita pagada.',
		sections: [
			{
				heading: '1. Asegúrate de tener un sitio WordPress, no solo Instagram',
				body: 'Un calendario de reservas necesita un sitio donde vivir. Si hoy solo tienes un perfil de Instagram o TikTok, un sitio WordPress no necesita ser elaborado: una sola página que describa tus consultas, más el propio calendario de reservas, es suficiente para empezar. Si ya tienes un sitio WordPress, puedes añadir reservas a cualquier página existente.',
			},
			{
				heading: '2. Elige un plugin de reservas pensado para consultas, no un programador genérico',
				body: 'Las herramientas de programación genéricas suelen estar pensadas para equipos, salones o clínicas. Busca una con tres cosas que una consulta individual realmente necesita: una forma de cobrar la sesión en el momento de la reserva, campos para recoger datos de facturación/NIF, y la posibilidad de vender bonos de varias sesiones. clickTarot Calendar está construido específicamente para este flujo de trabajo y se instala gratis desde el directorio de plugins de WordPress.',
			},
			{
				heading: '3. Instala y activa el plugin',
				body: 'Desde tu panel de WordPress, ve a Plugins → Añadir nuevo, busca el plugin por nombre, haz clic en Instalar y luego en Activar. Sin FTP, sin tocar código.',
			},
			{
				heading: '4. Crea tu primer calendario',
				body: 'Define la duración y el precio de la sesión, tus días y horas de trabajo, y cuánto margen necesitas antes de una reserva. Si ofreces más de un tipo de sesión, por ejemplo una tirada rápida y una consulta de una hora completa, crea un calendario separado para cada una para que el precio y la duración queden claros.',
			},
			{
				heading: '5. Conecta un método de pago',
				body: 'Conecta PayPal (incluido en la versión gratuita) para que los clientes paguen en el momento de reservar, no después. Esto por sí solo elimina la mayor parte de la incomodidad de pedir el pago después de una consulta.',
			},
			{
				heading: '6. Publica el enlace de reserva',
				body: 'Coloca el shortcode o el enlace dedicado de reserva en tu sitio, y el mismo enlace en tu bio de Instagram o TikTok. A partir de aquí, cada mensaje "¿estás libre el jueves?" puede recibir simplemente un enlace en lugar de un ida y vuelta.',
			},
			{
				heading: '7. Pruébalo tú misma antes de enviar clientes',
				body: 'Reserva una sesión de prueba como si fueras una clienta, usando una dirección de email distinta, para ver exactamente lo que ellos verán: el calendario, el email de confirmación, el paso de pago. Es la forma más rápida de detectar algo confuso antes de que lo haga un cliente real.',
			},
		],
		ctaTitle: '¿Lista para configurarlo en tu propio sitio?',
		ctaBody: 'clickTarot Calendar se instala gratis desde WordPress.org y te guía paso a paso en la configuración del calendario.',
	},
	bestPlugins: {
		title: 'Los Mejores Plugins de Reservas de WordPress para Tarotistas y Astrólogos (2026)',
		tagline: 'Lo que realmente importa al elegir, y cómo se comparan las opciones reales.',
		metaDescription:
			'Una comparativa práctica de plugins de reservas de WordPress para tarotistas, astrólogos y psíquicos: qué comprobar de verdad, y cómo se posicionan las principales opciones.',
		intro:
			'La mayoría de las listas de "mejores plugins de reservas" están escritas para salones, clínicas o pequeños negocios genéricos, y se saltan lo que realmente importa para quien vende consultas de pago: cobrar en el momento de la reserva, recoger los datos de facturación correctos, vender bonos de varias sesiones. Esto es lo que hay que comprobar de verdad, y cómo se comparan las opciones reales.',
		sections: [
			{
				heading: 'Qué buscar antes de elegir uno',
				body: 'Cuatro cosas importan más que la interfaz exacta: si el cliente puede pagar al reservar, no después; si recoge automáticamente el NIF/IVA y la dirección de facturación, para que puedas facturar de verdad; si puedes vender un bono de varias sesiones con un solo pago en lugar de facturar cada visita por separado; y si está pensado para un único profesional, para que no pagues funciones de equipo que nunca usarás.',
			},
			{
				heading: 'Herramientas de programación genéricas vs. herramientas construidas para consultas',
				body: 'Calendly, Acuity Scheduling, SimplyBook.me y TidyCal son herramientas sólidas y conocidas, pero ninguna se construyó pensando en vender consultas de pago con un único profesional: los campos de facturación y los bonos prepagados faltan o están bloqueados tras planes de equipo más caros. Los plugins de reservas de WordPress genéricos como Booknetic tienen el mismo problema: funciones amplias pensadas para salones y agencias, con lo que un consultor individual necesita a menudo encerrado tras un plan premium.',
			},
			{
				heading: 'Herramientas pensadas específicamente para tarotistas y astrólogos',
				body: 'Dos plugins apuntan directamente a este nicho: Daily Tarot, principalmente una herramienta para publicar contenido y tiradas de tarot, con las reservas como una función más y todavía en fase inicial; y Ozapp (antes Book Appointment Online PRO), un sistema de citas genérico y multiempleado vendido en CodeCanyon con una landing dirigida a este nicho, construido primero para equipos más que para un profesional individual. clickTarot Calendar es el que está construido de principio a fin en torno al flujo de trabajo de un único profesional de consultas, con una versión gratuita real en WordPress.org.',
			},
		],
		ctaTitle: 'Ver todas las comparativas directas, una por una',
		ctaBody: 'Cada opción de arriba tiene una comparativa detallada, función por función, con clickTarot Calendar.',
		showComparisons: true,
	},
};

export default es;
