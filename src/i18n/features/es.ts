import type { FeatureDetailDictionary, FeatureUiText } from './types';

export const featureUi: FeatureUiText = {
	eyebrow: 'Función',
	painPointLabel: 'El problema',
	howItWorksLabel: 'Cómo funciona',
	benefitLabel: 'Por qué importa',
	otherFeaturesTitle: 'Descubre las demás funciones',
	ctaTitle: '¿Listo para dejar de perder tiempo con mensajes de ida y vuelta para reservar?',
	ctaBody: 'Una sola licencia, todas las funciones incluidas, sin coste por puesto adicional.',
	backToHome: 'Volver al inicio',
};

const es: FeatureDetailDictionary = {
	calendar: {
		title: 'Calendario Visual Mensual',
		tagline: 'Deja de intercambiar mensajes solo para encontrar una hora libre.',
		painPoint:
			'Reservar por DM o email significa una decena de mensajes de ida y vuelta antes de que alguien acuerde un horario — y la mitad preguntan "¿tienes algo libre la semana que viene?" después de que ya se lo has dicho dos veces.',
		howItWorks:
			'El cliente ve tu disponibilidad real, en tiempo real, mostrada como un calendario de verdad: días que trabajas, días que no, horarios ya ocupados. Elige un día, elige una hora, y queda reservado. Sin idas y vueltas, sin dobles reservas, sin comprobaciones manuales por tu parte.',
		benefit:
			'Cada hora que no pasas respondiendo "¿estás libre el martes?" es una hora que puedes dedicar a las consultas — o a nada. Ese es el verdadero retorno de una herramienta de reservas: tiempo recuperado, no solo un formulario más bonito.',
	},
	payments: {
		title: 'Pagos Integrados',
		tagline: 'Cobra antes de la sesión, no después.',
		painPoint:
			'Perseguir un pago después de una consulta es incómodo para ambas partes. Y enviar manualmente un enlace de pago por cada reserva es un paso más que puede olvidarse — o ignorarse.',
		howItWorks:
			'PayPal y Stripe se conectan directamente a tu propia cuenta. El cliente paga en el momento de reservar, desde el mismo formulario — sin factura aparte, sin enlace aparte, sin ningún paso extra.',
		benefit:
			'El dinero llega a tu cuenta, no a la del plugin — clickTarot nunca toca ni retiene ni un céntimo. Cobras a tiempo, siempre, sin tener que pedirlo.',
	},
	invoicing: {
		title: 'Datos de Facturación Automáticos',
		tagline: 'Los datos fiscales que necesitas ya están en tu panel.',
		painPoint:
			'Emitir una factura suele significar escribir al cliente después para pedirle el NIF y la dirección de facturación — y esperar la respuesta antes de poder facturar de verdad.',
		howItWorks:
			'El NIF (o número de IVA fuera de Italia) y la dirección de facturación son campos obligatorios en el propio formulario de reserva. Cuando la cita queda confirmada, todo lo que necesitas para facturar ya está registrado junto a la reserva.',
		benefit:
			'Sin idas y vueltas para el papeleo. Si lo llevas como un negocio de verdad — y si pagas por un software probablemente sea así — facturar correctamente no debería ser la parte que te frena.',
	},
	packages: {
		title: 'Bonos Prepagados',
		tagline: 'Vende tres sesiones hoy, deja que reserve la tercera en marzo.',
		painPoint:
			'Los clientes habituales son los mejores clientes — pero sin un sistema de bonos, cada visita repetida significa pasar de nuevo por el checkout, sin una forma sencilla de premiar a quien reserva por adelantado.',
		howItWorks:
			'Crea un bono — por ejemplo, 3 sesiones con descuento frente a pagarlas por separado. El cliente paga una vez y su crédito queda ligado a su email: la próxima vez que reserve, el plugin lo reconoce y salta el pago automáticamente.',
		benefit:
			'Los bonos convierten clientes puntuales en ingresos recurrentes que ya has cobrado, y dan a tus clientes más fieles un motivo para volver contigo en vez de probar a otra persona la próxima vez.',
	},
	coupons: {
		title: 'Cupones de Descuento',
		tagline: 'Lanza una promoción real sin hacer cálculos mentales en el checkout.',
		painPoint:
			'Los descuentos manuales significan ajustar un precio a mano, o confiar en tu memoria para recordar quién tiene el 20% y quién no — no es precisamente algo que quieras llevar en un cuaderno.',
		howItWorks:
			'Crea un código — porcentaje o importe fijo — con fecha de caducidad y límite de uso opcionales. El cliente lo introduce en el formulario de reserva y ve el nuevo precio al instante, antes de pagar.',
		benefit:
			'Los cupones son una de las formas más baratas de convertir seguidores de redes sociales en clientes de pago. Tenerlos integrados significa que una promo en Instagram se prepara en cinco minutos, no en una tarde.',
	},
	reschedule: {
		title: 'Reprogramación y Cancelación Autónoma',
		tagline: 'Deja que los clientes muevan su propia cita — no eres su asistente de calendario.',
		painPoint:
			'"¿Podemos mover el martes al jueves?" es una petición normal y razonable — y también el quinto mensaje del día que no tiene nada que ver con una consulta real.',
		howItWorks:
			'Cada email de confirmación y recordatorio incluye un enlace de gestión. Los clientes pueden reprogramar a otro horario libre o cancelar por su cuenta, hasta el margen mínimo de aviso que hayas configurado — pasado ese margen, se les pide que contacten contigo directamente.',
		benefit:
			'Las peticiones que antes interrumpían tu día ahora se resuelven solas. Mantienes plena visibilidad y control — simplemente dejas de ser quien tiene que actuar ante cada pequeño cambio.',
	},
	international: {
		title: 'Facturación para Clientes Internacionales',
		tagline: 'Un solo formulario, correcto tanto para un cliente en Roma como en Berlín.',
		painPoint:
			'Los campos de facturación pensados solo para un país — NIF italiano, formato de código postal italiano — o no funcionan para un cliente en el extranjero, o recogen silenciosamente datos erróneos o inutilizables.',
		howItWorks:
			'Un selector de país en el formulario de reserva adapta los campos automáticamente: para Italia se mantienen los campos estándar de NIF, código postal y provincia; para cualquier otro país cambia a NIF/IVA opcional, código postal en formato libre y provincia o región en texto libre.',
		benefit:
			'Puedes decir sí a un cliente en cualquier parte, sin soluciones improvisadas. Si estás construyendo una clientela internacional — o ya la tienes — esta es la diferencia entre un formulario que funciona para todos y uno que silenciosamente rechaza a quien está fuera de Italia.',
	},
	multilingual: {
		title: 'Plugin Multilingüe',
		tagline: 'Tu formulario de reserva habla el idioma de tu cliente — literalmente.',
		painPoint:
			'Un formulario de reserva en un idioma que el cliente no lee genera fricción justo en el momento en que quieres cero fricción: justo antes de que pague.',
		howItWorks:
			'El formulario de reserva, los emails de confirmación y tu propio panel de administración están todos traducidos — inglés, español, alemán e italiano — y cambian automáticamente según el idioma configurado en tu sitio.',
		benefit:
			'No necesitas un sitio aparte, un plugin de traducción ni un desarrollador para atender a clientes en más de un idioma. Ya está todo listo.',
	},
};

export default es;
