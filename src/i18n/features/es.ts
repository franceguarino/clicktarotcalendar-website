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
		tagline: 'Deja de intercambiar mensajes solo para encontrar <span class="ct-accent">una hora libre</span>.',
		metaDescription:
			'Descubre cómo el calendario visual mensual de clickTarot Calendar deja que los clientes reserven solos, sin mensajes de ida y vuelta.',
		painPoint:
			'Reservar por DM o email significa una decena de mensajes de ida y vuelta antes de que alguien acuerde un horario, y la mitad preguntan "¿tienes algo libre la semana que viene?" después de que ya se lo has dicho dos veces.',
		howItWorks:
			'El cliente ve tu disponibilidad real, en tiempo real, mostrada como un calendario de verdad: días que trabajas, días que no, horarios ya ocupados. Elige un día, elige una hora, y queda reservado. Sin idas y vueltas, sin dobles reservas, sin comprobaciones manuales por tu parte.',
		benefit:
			'Cada hora que no pasas respondiendo "¿estás libre el martes?" es una hora que puedes dedicar a las consultas, o a nada. Ese es el verdadero retorno de una herramienta de reservas: tiempo recuperado, no solo un formulario más bonito.',
	},
	payments: {
		title: 'Pagos Integrados',
		tagline: 'Cobra <span class="ct-accent">antes</span> de la sesión, no después.',
		metaDescription:
			'Pagos con PayPal y Stripe integrados en clickTarot Calendar: el cliente paga al reservar, el dinero llega a tu cuenta.',
		painPoint:
			'Perseguir un pago después de una consulta es incómodo para ambas partes. Y enviar manualmente un enlace de pago por cada reserva es un paso más que puede olvidarse, o ignorarse.',
		howItWorks:
			'PayPal y Stripe se conectan directamente a tu propia cuenta. El cliente paga en el momento de reservar, desde el mismo formulario: sin factura aparte, sin enlace aparte, sin ningún paso extra.',
		benefit:
			'El dinero llega a tu cuenta, no a la del plugin; clickTarot nunca toca ni retiene ni un céntimo. Cobras a tiempo, siempre, sin tener que pedirlo.',
	},
	invoicing: {
		title: 'Datos de Facturación Automáticos',
		tagline: 'Los datos fiscales que necesitas <span class="ct-accent">ya</span> están en tu panel.',
		metaDescription:
			'clickTarot Calendar recoge NIF/IVA y dirección automáticamente al reservar, para facturar sin trabajo extra.',
		painPoint:
			'Emitir una factura suele significar escribir al cliente después para pedirle el NIF y la dirección de facturación, y esperar la respuesta antes de poder facturar de verdad.',
		howItWorks:
			'El NIF/número de IVA y la dirección de facturación son campos obligatorios en el propio formulario de reserva, adaptados automáticamente al país de tu cliente. Cuando la cita queda confirmada, todo lo que necesitas para facturar ya está registrado junto a la reserva.',
		benefit:
			'Sin idas y vueltas para el papeleo. Si lo llevas como un negocio de verdad (y si pagas por un software probablemente sea así) facturar correctamente no debería ser la parte que te frena.',
	},
	packages: {
		title: 'Bonos Prepagados',
		tagline: 'Vende tres sesiones <span class="ct-accent">hoy</span>, deja que reserve la tercera en marzo.',
		metaDescription:
			'Vende bonos prepagados multisesión con clickTarot Calendar: un pago, el cliente reserva sus sesiones cuando quiera.',
		painPoint:
			'Los clientes habituales son los mejores clientes, pero sin un sistema de bonos, cada visita repetida significa pasar de nuevo por el checkout, sin una forma sencilla de premiar a quien reserva por adelantado.',
		howItWorks:
			'Crea un bono: por ejemplo, 3 sesiones con descuento frente a pagarlas por separado. El cliente paga una vez y su crédito queda ligado a su email: la próxima vez que reserve, el plugin lo reconoce y salta el pago automáticamente.',
		benefit:
			'Los bonos convierten clientes puntuales en ingresos recurrentes que ya has cobrado, y dan a tus clientes más fieles un motivo para volver contigo en vez de probar a otra persona la próxima vez.',
	},
	coupons: {
		title: 'Cupones de Descuento',
		tagline: 'Lanza una promoción <span class="ct-accent">real</span> sin hacer cálculos mentales en el checkout.',
		metaDescription:
			'Crea cupones de descuento porcentuales o fijos en clickTarot Calendar, listos para tu próxima promo en redes sociales.',
		painPoint:
			'Los descuentos manuales significan ajustar un precio a mano, o confiar en tu memoria para recordar quién tiene el 20% y quién no, no es precisamente algo que quieras llevar en un cuaderno.',
		howItWorks:
			'Crea un código (porcentaje o importe fijo) con fecha de caducidad y límite de uso opcionales. El cliente lo introduce en el formulario de reserva y ve el nuevo precio al instante, antes de pagar.',
		benefit:
			'Los cupones son una de las formas más baratas de convertir seguidores de redes sociales en clientes de pago. Tenerlos integrados significa que una promo en Instagram se prepara en cinco minutos, no en una tarde.',
	},
	reschedule: {
		title: 'Reprogramación y Cancelación Autónoma',
		tagline: 'Deja que los clientes muevan su <span class="ct-accent">propia</span> cita, no eres su asistente de calendario.',
		metaDescription:
			'Deja que los clientes reprogramen o cancelen su cita desde el email de confirmación, sin escribirte.',
		painPoint:
			'"¿Podemos mover el martes al jueves?" es una petición normal y razonable, y también el quinto mensaje del día que no tiene nada que ver con una consulta real.',
		howItWorks:
			'Cada email de confirmación y recordatorio incluye un enlace de gestión. Los clientes pueden reprogramar a otro horario libre o cancelar por su cuenta, hasta el margen mínimo de aviso que hayas configurado; pasado ese margen, se les pide que contacten contigo directamente.',
		benefit:
			'Las peticiones que antes interrumpían tu día ahora se resuelven solas. Mantienes plena visibilidad y control; simplemente dejas de ser quien tiene que actuar ante cada pequeño cambio.',
	},
	international: {
		title: 'Facturación para Clientes Internacionales',
		tagline: '<span class="ct-accent">Un solo formulario</span>, correcto tanto para un cliente en Roma como en Berlín.',
		metaDescription:
			'clickTarot Calendar adapta los campos de facturación automáticamente al país de tu cliente: NIF/IVA, formato de código postal y más, venga de donde venga.',
		painPoint:
			'Los campos de facturación pensados solo para un país (NIF italiano, formato de código postal italiano) o no funcionan para un cliente en el extranjero, o recogen silenciosamente datos erróneos o inutilizables.',
		howItWorks:
			'Un selector de país en el formulario de reserva muestra automáticamente los campos correctos para el país de tu cliente: NIF/IVA, código postal y provincia o región, ajustados a lo que ese país realmente exige. Italia es la única excepción, con un formato propio más estricto (Código Fiscal, código postal y provincia fijos), y el formulario también lo gestiona solo.',
		benefit:
			'Puedes decir sí a un cliente en cualquier parte, sin soluciones improvisadas. Si estás construyendo una clientela internacional (o ya la tienes) esta es la diferencia entre un formulario que funciona de verdad para todos y uno que silenciosamente rechaza a quien viene de un país para el que no fue pensado.',
	},
	multilingual: {
		title: 'Plugin Multilingüe',
		tagline: 'Tu formulario de reserva habla el idioma de tu cliente. <span class="ct-accent">Literalmente.</span>',
		metaDescription:
			'El formulario de reserva, los emails y el panel de clickTarot Calendar están traducidos a inglés, español, alemán e italiano.',
		painPoint:
			'Un formulario de reserva en un idioma que el cliente no lee genera fricción justo en el momento en que quieres cero fricción: justo antes de que pague.',
		howItWorks:
			'El formulario de reserva, los emails de confirmación y tu propio panel de administración están todos traducidos: inglés, español, alemán e italiano, y cambian automáticamente según el idioma configurado en tu sitio.',
		benefit:
			'No necesitas un sitio aparte, un plugin de traducción ni un desarrollador para atender a clientes en más de un idioma. Ya está todo listo.',
	},
	availability: {
		title: 'Disponibilidad Flexible',
		tagline: 'Bloquea días completos o franjas horarias sueltas <span class="ct-accent">cuando lo necesites</span>.',
		metaDescription:
			'clickTarot Calendar te permite bloquear días completos o franjas horarias sueltas en segundos, para que tu calendario refleje siempre tu disponibilidad real.',
		painPoint:
			'Tu disponibilidad no es igual cada semana: un retiro, una urgencia familiar, un martes ya completo. Una herramienta de reservas que solo permite horarios semanales fijos te obliga a rechazar reservas que no puedes cumplir, o a escribir a mano a los clientes para cancelar.',
		howItWorks:
			'Configuras una vez tus horarios de trabajo semanales habituales, y luego bloqueas cualquier día o franja horaria cuando algo cambia: una cita médica, un taller al que asistes, una semana libre. El tiempo bloqueado simplemente desaparece de lo que los clientes pueden reservar, sin necesidad de cancelaciones aparte.',
		benefit:
			'Sigues teniendo el control de tu propio tiempo, sin convertirte en la administradora a tiempo completo de tu calendario. Bloqueas lo que necesitas, en unos clics, y vuelves a tu trabajo de verdad.',
	},
	notifications: {
		title: 'Emails Automáticos Personalizables',
		tagline: 'Correos de confirmación y recordatorio enviados en automático, con texto <span class="ct-accent">totalmente personalizable</span>.',
		metaDescription:
			'clickTarot Calendar envía emails de confirmación y recordatorio de forma automática, con texto que escribes tú: nada de mensajes genéricos y robóticos.',
		painPoint:
			'Los clientes olvidan las citas. Sin un recordatorio, una reserva olvidada significa una franja horaria perdida y una conversación incómoda sobre si cobrarla o no. Pero la mayoría de las herramientas de reservas o se saltan los recordatorios por completo, o envían correos tan genéricos que no suenan a ti.',
		howItWorks:
			'Cada reserva activa automáticamente un email de confirmación al cliente y una notificación para ti, y puedes activar un recordatorio enviado un número configurable de horas antes de la cita. Los tres son totalmente editables; los escribes con tus propias palabras, no con una plantilla.',
		benefit:
			'Menos ausencias, menos mensajes de última hora del tipo "¿a qué hora era mi cita?", y cada email que recibe el cliente suena de verdad a ti, no a un software.',
	},
	socialLink: {
		title: 'Enlace de Reserva Dedicado',
		tagline: 'Un enlace público de reserva listo para tu bio de Instagram o TikTok, <span class="ct-accent">sin crear ninguna página</span>.',
		metaDescription:
			'Cada servicio de clickTarot Calendar tiene su propio enlace público de reserva, listo para poner directamente en tu bio de Instagram o TikTok.',
		painPoint:
			'Probablemente la mayoría de tus reservas empiezan en redes sociales, no en la portada de tu web. Pero mandar a quien te sigue a una página de contacto genérica (donde luego tiene que encontrar el servicio correcto, hacer scroll y averiguar qué hacer) hace que pierdas personas que habrían reservado en el momento.',
		howItWorks:
			'Cada calendario que creas obtiene automáticamente su propio enlace público dedicado, sin ninguna página que diseñar ni publicar aparte. Seguirás teniendo tu shortcode para insertar el calendario en las páginas y entradas de tu propio sitio, pero además obtienes de inmediato un enlace independiente. Lo pones directamente en tu bio de Instagram o TikTok, o lo compartes en un DM, y la persona llega exactamente al formulario de reserva de ese servicio concreto.',
		benefit:
			'El paso entre "alguien ve tu contenido" y "alguien reserva una sesión" se hace lo más corto posible, justo en el momento en que el interés es más alto, justo después de descubrirte.',
	},
	statistics: {
		title: 'Estadísticas de Ingresos',
		tagline: 'Consulta cuánto ganas cada mes y qué servicio funciona mejor, <span class="ct-accent">directamente en el panel</span>.',
		metaDescription:
			'Controla los ingresos mensuales, las reservas confirmadas y qué servicio rinde más, directamente en el panel de clickTarot Calendar.',
		painPoint:
			'Si llevas las consultas como un negocio de verdad, necesitas saber si realmente está funcionando: qué servicio merece tu tiempo, si este mes fue mejor que el anterior, si una campaña de cupones dio resultado. Sacar eso de una hoja de cálculo que hay que actualizar a mano es una tarea que la mayoría de la gente simplemente... no hace.',
		howItWorks:
			'Cada reserva confirmada y cada pago se registran automáticamente. Tu panel muestra los ingresos totales, ingresos por sesiones sueltas frente a bonos, reservas confirmadas, tu tasa de cancelación, una tendencia mes a mes y un desglose por cada calendario, sin contabilidad manual.',
		benefit:
			'Puedes tomar decisiones reales (subir un precio, retirar un servicio que no rinde, apostar por lo que funciona) basándote en números reales en vez de una intuición. Eso vale más de lo que cuesta el plugin por sí solo.',
	},
};

export default es;
