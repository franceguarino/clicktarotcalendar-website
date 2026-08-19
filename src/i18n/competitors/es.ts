import type { CompetitorDictionary } from './types';

const es: CompetitorDictionary = {
	calendly: {
		eyebrow: 'Comparativa',
		title: 'clickTarot Calendar vs Calendly',
		subtitle:
			'Calendly es una gran herramienta genérica para reuniones de todo tipo. clickTarot Calendar está construido específicamente para quienes venden consultas de pago.',
		colFeature: 'Función',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Calendly',
		rows: [
			{ feature: 'Recogida de datos de facturación (NIF/IVA, dirección)', clicktarot: 'Automática, integrada en el formulario', competitor: 'No disponible' },
			{ feature: 'Paquetes prepagados multisesión', clicktarot: 'Incluido', competitor: 'No disponible' },
			{ feature: 'Color y marca del formulario', clicktarot: 'Personalizable en un clic', competitor: 'Limitado a los planes más caros' },
			{ feature: 'Pensado para', clicktarot: 'Un único profesional de consultas', competitor: 'Equipos y empresas de cualquier sector' },
			{ feature: 'Dónde funciona', clicktarot: 'En tu propio sitio WordPress, tus datos siguen siendo tuyos', competitor: 'Plataforma externa' },
			{ feature: 'Modelo de precios', clicktarot: 'Licencia única, sin coste por usuario', competitor: 'Suscripción mensual, a menudo por plaza' },
		],
		painPointsTitle: 'Con qué se encuentran quienes trabajan solos en Calendly',
		painPointsIntro: 'Calendly es una herramienta sólida; simplemente no está pensada para alguien que vende consultas de pago como profesional individual.',
		painPoints: [
			'Los planes gratuito y Standard limitan a pocos tipos de evento y mantienen la marca de Calendly en tu página de reserva; quitarla implica pasar a un plan pensado para equipos, no para profesionales individuales.',
			'No existe un campo nativo para NIF, número de IVA o dirección de facturación, ni forma de generar una factura desde una reserva; necesitarías una herramienta de facturación aparte y copiar los datos a mano.',
			'Vender un bono de varias sesiones con un único pago no está soportado: cada reserva es una transacción independiente, así que un cliente habitual paga (y tú facturas) una cita cada vez.',
		],
		ctaTitle: '¿Listo para probar algo hecho justo para ti?',
		ctaBody: 'Instala clickTarot Calendar en tu sitio WordPress en pocos minutos, sin conocimientos técnicos.',
		faq: [
			{
				q: '¿clickTarot Calendar es realmente más económico que Calendly para un consultor individual?',
				a: 'clickTarot Calendar es un único plan con todas las funciones incluidas, sea cual sea la forma de pago que elijas: mensual, anual o una compra única de por vida. Los planes de pago de Calendly se facturan mensualmente y dejan funciones como la marca personalizada tras planes más caros, así que para un solo profesional el coste suele acabar sumando más con el tiempo que el plan anual o de por vida de clickTarot Calendar.',
			},
			{
				q: '¿Puedo recoger el NIF o número de IVA del cliente al reservar, como con clickTarot Calendar?',
				a: 'No de forma nativa. Calendly no tiene un campo de facturación integrado, así que necesitarías un formulario aparte o un seguimiento manual para recoger esos datos antes de poder emitir una factura.',
			},
		],
		otherComparisonsTitle: 'Descubre cómo nos comparamos con otras herramientas de reservas',
	},
	acuity: {
		eyebrow: 'Comparativa',
		title: 'clickTarot Calendar vs Acuity Scheduling',
		subtitle:
			'Acuity Scheduling es una herramienta de reservas pulida y bien valorada. clickTarot Calendar está construido para un único profesional de consultas, a un precio fijo único.',
		colFeature: 'Función',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Acuity Scheduling',
		rows: [
			{ feature: 'Recogida de datos de facturación (NIF/IVA, dirección)', clicktarot: 'Automática, integrada en el formulario', competitor: 'Sin campo dedicado; tendrías que construirte un formulario genérico tú mismo' },
			{ feature: 'Paquetes prepagados multisesión', clicktarot: 'Incluido', competitor: 'Requiere el plan Standard (unos 27$/mes con facturación anual) o superior' },
			{ feature: 'Color y marca del formulario', clicktarot: 'Personalizable en un clic', competitor: 'La marca de Acuity permanece hasta llegar al plan Premium (unos 49$/mes con facturación anual)' },
			{ feature: 'Pensado para', clicktarot: 'Un único profesional de consultas', competitor: 'De profesionales individuales a negocios con varias sedes, según el número de calendarios' },
			{ feature: 'Dónde funciona', clicktarot: 'En tu propio sitio WordPress, tus datos siguen siendo tuyos', competitor: 'Plataforma externa' },
			{ feature: 'Modelo de precios', clicktarot: 'Licencia única, sin coste por usuario', competitor: 'Suscripción mensual, el plan de precio determina qué funciones obtienes' },
		],
		painPointsTitle: 'Con qué se encuentran quienes trabajan solos en Acuity Scheduling',
		painPointsIntro: 'Acuity es una herramienta genuinamente bien construida y con buenas valoraciones en general, pero conviene saber algunas cosas antes de elegir plan.',
		painPoints: [
			'Para tener paquetes multisesión hace falta el plan Standard, unos 27$/mes con facturación anual; el plan de entrada Starter no los incluye.',
			'Quitar la marca de Acuity de tu página de reserva requiere el plan superior Premium, unos 49$/mes con facturación anual.',
			'Las valoraciones en Capterra y G2 son altas en general para Acuity (4,7-4,8/5), pero reseñas recurrentes con menos estrellas señalan una curva de aprendizaje pronunciada y "técnica", y un soporte que no siempre está a la altura del producto.',
			'En Trustpilot el panorama cambia de forma notable: alrededor de 1,5/5, con reseñas que describen errores en la reserva y códigos de paquete que no respetan correctamente los límites de sesiones. Es una diferencia que conviene conocer antes de decidirse, aunque por sí sola no cuenta toda la historia.',
		],
		ctaTitle: '¿Listo para probar algo hecho justo para ti?',
		ctaBody: 'Instala clickTarot Calendar en tu sitio WordPress en pocos minutos, sin conocimientos técnicos.',
		faq: [
			{
				q: '¿Acuity Scheduling permite vender paquetes prepagados en su plan más económico?',
				a: 'No, los paquetes multisesión solo están disponibles desde el plan Standard, unos 27$/mes con facturación anual. clickTarot Calendar incluye los paquetes prepagados en la licencia única, sin necesidad de actualizar de plan.',
			},
			{
				q: '¿Por qué las reseñas de Acuity en Trustpilot son tan distintas a las de G2 o Capterra?',
				a: 'Acuity tiene puntuaciones altas en G2 (unos 4,7/5) y Capterra (unos 4,8/5), pero se queda en torno a 1,5/5 en Trustpilot, donde las reseñas señalan errores de reserva y códigos de paquete que no respetan correctamente los límites. Vale la pena leer algunas reseñas en cada plataforma antes de decidir; mejor formarte tu propia opinión que fiarte solo de la nuestra.',
			},
		],
		otherComparisonsTitle: 'Descubre cómo nos comparamos con otras herramientas de reservas',
	},
	simplybook: {
		eyebrow: 'Comparativa',
		title: 'clickTarot Calendar vs SimplyBook.me',
		subtitle:
			'SimplyBook.me cubre muchos tipos de negocio a través de un mercado de complementos de pago. clickTarot Calendar incluye exactamente lo que necesitas, desde el primer día.',
		colFeature: 'Función',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'SimplyBook.me',
		rows: [
			{ feature: 'Recogida de datos de facturación (NIF/IVA, dirección)', clicktarot: 'Automática, integrada en el formulario', competitor: 'No nativa; usaría una de tus plazas limitadas de "funciones personalizadas" de pago para un formulario genérico' },
			{ feature: 'Paquetes prepagados multisesión', clicktarot: 'Incluido', competitor: 'Una de un número limitado de "funciones personalizadas" de pago por plan; compite con otras funciones por esa plaza' },
			{ feature: 'Color y marca del formulario', clicktarot: 'Personalizable en un clic', competitor: 'La marca blanca completa está reservada al plan Premium (unos 50€/mes) o superior' },
			{ feature: 'Pensado para', clicktarot: 'Un único profesional de consultas', competitor: 'Reservas genéricas para muchos tipos de negocio, construido alrededor de un mercado de funciones' },
			{ feature: 'Dónde funciona', clicktarot: 'En tu propio sitio WordPress, tus datos siguen siendo tuyos', competitor: 'Plataforma externa' },
			{ feature: 'Modelo de precios', clicktarot: 'Licencia única, sin coste por usuario', competitor: 'Plan mensual calculado por reservas, proveedores y número de complementos de pago activos' },
		],
		painPointsTitle: 'Con qué se encuentran quienes trabajan solos en SimplyBook.me',
		painPointsIntro: 'SimplyBook.me ofrece muchísimo a través de su mercado de complementos; la contrapartida es que casi nada viene incluido por defecto.',
		painPoints: [
			'Casi todas las funciones que importan para una consulta profesional (campos personalizados, paquetes, cupones) no están incluidas por defecto: son "funciones personalizadas" de un mercado de decenas de complementos de pago, y cada plan limita cuántas puedes activar a la vez (solo 1 en el plan gratuito, 3 en el Basic).',
			'Eso significa que en los planes de entrada a menudo tienes que elegir entre tener paquetes o tener cupones, no ambos, una contrapartida que clickTarot Calendar no impone, ya que paquetes y cupones están incluidos desde el primer día.',
			'Las reseñas en G2 y Capterra (incluida una de una persona con más de 15 años de experiencia en UX/desarrollo) describen la configuración inicial como confusa precisamente porque es difícil saber cuáles de las muchas funciones adicionales están realmente activas.',
			'La marca blanca completa (quitar el nombre de SimplyBook.me) está limitada al plan Premium y superiores, unos 50€/mes con facturación anual.',
		],
		ctaTitle: '¿Listo para probar algo hecho justo para ti?',
		ctaBody: 'Instala clickTarot Calendar en tu sitio WordPress en pocos minutos, sin conocimientos técnicos.',
		faq: [
			{
				q: '¿Puedo usar el plan gratuito de SimplyBook.me para vender paquetes prepagados y ofrecer cupones de descuento a la vez?',
				a: 'No fácilmente, el plan gratuito permite solo 1 "función personalizada" activa, y tanto los paquetes como los cupones son complementos de pago independientes, así que normalmente tendrías que elegir uno. clickTarot Calendar incluye ambos en la licencia única.',
			},
			{
				q: '¿Es fácil prever de antemano el precio de SimplyBook.me?',
				a: 'No del todo, el coste mensual depende de tu volumen de reservas, del número de proveedores y de cuántos complementos de pago actives, así que el precio final puede acabar siendo más alto que la cifra de partida anunciada. clickTarot Calendar es un único plan fijo (mensual, anual o de por vida) al mismo precio sin importar cuántas reservas recibas.',
			},
		],
		otherComparisonsTitle: 'Descubre cómo nos comparamos con otras herramientas de reservas',
	},
	tidycal: {
		eyebrow: 'Comparativa',
		title: 'clickTarot Calendar vs TidyCal',
		subtitle:
			'TidyCal es una herramienta de reservas genuinamente asequible y bien valorada. clickTarot Calendar está construido específicamente para un único profesional de consultas, integrado en tu propio sitio WordPress.',
		colFeature: 'Función',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'TidyCal',
		rows: [
			{ feature: 'Recogida de datos de facturación (NIF/IVA, dirección)', clicktarot: 'Automática, integrada en el formulario', competitor: 'Sin campo dedicado; generar una factura requiere una integración aparte' },
			{ feature: 'Paquetes prepagados multisesión', clicktarot: 'Incluido', competitor: 'Incluido también en el plan gratuito' },
			{ feature: 'Marca del formulario', clicktarot: 'Personalizable en un clic', competitor: 'La marca de TidyCal permanece visible en tu página incluso en los planes de pago' },
			{ feature: 'Soporte multidivisa', clicktarot: 'Los campos de facturación se adaptan automáticamente por país', competitor: 'Solo una divisa activa a la vez' },
			{ feature: 'Pensado para', clicktarot: 'Un único profesional de consultas', competitor: 'Reservas genéricas; los planes de equipo/agencia no escalan como se anuncia, según las reseñas' },
			{ feature: 'Dónde funciona', clicktarot: 'En tu propio sitio WordPress, tus datos siguen siendo tuyos', competitor: 'Plataforma externa' },
			{ feature: 'Modelo de precios', clicktarot: 'Licencia única, sin coste por usuario', competitor: 'Planes de pago único de por vida o suscripción mensual; cada miembro adicional del equipo necesitaría su propia licencia de pago, según las reseñas' },
		],
		painPointsTitle: 'Con qué se encuentran quienes trabajan solos en TidyCal',
		painPointsIntro: 'TidyCal tiene un precio justo y no escatima en pagos ni paquetes como hacen otras herramientas, pero hay algunas limitaciones reales que conviene conocer antes de decidirse.',
		painPoints: [
			'No existe un campo dedicado para NIF, número de IVA o dirección de facturación, ni una forma integrada de generar una factura; necesitarías una integración aparte para ese paso.',
			'La marca de TidyCal permanece visible en tu página de reserva incluso en los planes de pago; las reseñas en Capterra señalan específicamente que el logo permanece y, a veces, estorba en la interfaz.',
			'Solo hay una divisa activa a la vez, algo que las reseñas marcan como una limitación real si recibes reservas de clientes que pagan en divisas distintas.',
			'El nombre del plan "Agency" sugiere que está pensado para equipos, pero las reseñas indican que cada miembro adicional del equipo necesita su propia licencia de pago independiente, un coste que no resulta obvio hasta que ya lo estás usando.',
		],
		ctaTitle: '¿Listo para probar algo hecho justo para ti?',
		ctaBody: 'Instala clickTarot Calendar en tu sitio WordPress en pocos minutos, sin conocimientos técnicos.',
		faq: [
			{
				q: '¿TidyCal es realmente un pago único en lugar de una suscripción, a diferencia de clickTarot Calendar?',
				a: 'En realidad, clickTarot Calendar también ofrece una opción de por vida de pago único, además de la facturación mensual y anual, así que no estás limitado a una suscripción en ninguno de los dos casos. La verdadera diferencia está en lo que incluye: clickTarot Calendar tiene la recogida automática de NIF/IVA y datos de facturación integrada desde el primer día, en todos los planes, algo que TidyCal no tiene de forma nativa.',
			},
			{
				q: '¿TidyCal recoge el NIF o número de IVA del cliente al reservar, como hace clickTarot Calendar?',
				a: 'No, TidyCal no tiene un campo de facturación/fiscal integrado, así que tendrías que conectar una herramienta de facturación aparte y recoger esos datos manualmente antes de poder facturar correctamente.',
			},
		],
		otherComparisonsTitle: 'Descubre cómo nos comparamos con otras herramientas de reservas',
	},
	booknetic: {
		eyebrow: 'Comparativa',
		title: 'clickTarot Calendar vs Booknetic',
		subtitle:
			'Booknetic es un plugin de reservas de WordPress genérico usado por salones, clínicas y agencias. clickTarot Calendar está construido específicamente en torno al flujo de trabajo de un único profesional de consultas.',
		colFeature: 'Función',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Booknetic',
		rows: [
			{ feature: 'Recogida de datos de facturación (NIF/IVA, dirección)', clicktarot: 'Automática, incluida en la licencia única', competitor: 'Solo en el plan Premium (149$/año o 599$ de por vida), no en los planes Basic o Standard' },
			{ feature: 'Cupones de descuento', clicktarot: 'Incluido', competitor: 'También limitados al plan Premium, ausentes en los planes más económicos' },
			{ feature: 'Pensado para', clicktarot: 'Un único profesional de consultas', competitor: 'Uso genérico, multisector (salones, clínicas, agencias)' },
			{ feature: 'Dónde funciona', clicktarot: 'En tu propio sitio WordPress', competitor: 'También en tu propio sitio WordPress, mismo modelo de alojamiento que clickTarot Calendar' },
			{ feature: 'Modelo de precios', clicktarot: 'Un solo plan, todas las funciones incluidas: mensual, anual o de por vida', competitor: 'Precios por niveles, los planes más económicos (45-99$/año) excluyen funciones que probablemente necesites' },
			{ feature: 'Soporte', clicktarot: 'Incluido con la licencia', competitor: '6-12 meses incluidos según el canal de compra, después renovación de pago' },
		],
		painPointsTitle: 'Con qué se encuentran quienes trabajan solos en Booknetic',
		painPointsIntro: 'Booknetic se vende bien y tiene buena puntuación en su propio listado de marketplace, pero hay algunas cosas que conviene saber antes de elegir plan.',
		painPoints: [
			'Los campos de facturación/fiscales y los cupones de descuento no están incluidos en los planes más económicos; están bloqueados tras el plan Premium (149$/año o 599$ de por vida), así que el precio de entrada anunciado de 45-99$/año no incluye lo que probablemente necesita una consulta profesional.',
			'Una reseña en Capterra de un negocio de spa indica que el sistema aceptó reservas dobles pagadas y solapadas para el mismo recurso en un sitio en producción, con un soporte lento y genérico incluso tras marcar el problema como urgente.',
			'Las reseñas describen la necesidad de "numerosos complementos caros para la funcionalidad completa", una persona reportó un gasto total de más de 520$ y calificó la relación calidad-precio de "pobre".',
			'El soporte está incluido de 6 a 12 meses según el canal de compra, después pasa a ser una renovación de pago, un modelo distinto al de una licencia con soporte y actualizaciones continuos.',
		],
		ctaTitle: '¿Listo para probar algo hecho justo para ti?',
		ctaBody: 'Instala clickTarot Calendar en tu sitio WordPress en pocos minutos, sin conocimientos técnicos.',
		faq: [
			{
				q: '¿Booknetic incluye facturación y recogida de datos fiscales como hace clickTarot Calendar?',
				a: 'Solo en su plan Premium (149$/año o 599$ de por vida), los planes más económicos Basic y Standard no lo incluyen. clickTarot Calendar incluye la recogida automática de NIF/IVA y dirección en la licencia única, sin necesidad de actualizar de plan.',
			},
			{
				q: '¿Booknetic está pensado específicamente para profesionales de consultas como clickTarot Calendar?',
				a: 'No, Booknetic es un plugin de reservas genérico dirigido a salones, clínicas, agencias y muchos otros tipos de negocio. clickTarot Calendar está construido específicamente en torno al flujo de trabajo de un único profesional de consultas: tarotistas, astrólogos, consejeros.',
			},
		],
		otherComparisonsTitle: 'Descubre cómo nos comparamos con otras herramientas de reservas',
	},
};

export const bookneticSaasClarification = {
	eyebrow: 'No es una comparativa directa',
	title: '¿Booknetic SaaS es como Calendly? No exactamente',
	subtitle:
		'Booknetic SaaS resuelve un problema distinto al de clickTarot Calendar. Esto es lo que realmente es, y dónde mirar si estás comparando herramientas de reservas para tu propia consulta.',
	whatItIsTitle: 'Qué es realmente Booknetic SaaS',
	whatItIsBody:
		'Booknetic SaaS no es una herramienta para gestionar tus propias citas; es una plataforma de marca blanca para construir y revender un negocio de software de reservas a otras empresas. Lo instalas y luego das de alta a otras empresas como clientes de pago ("tenants"), cada una con su propio sistema de reservas bajo tu marca. Está pensado para emprendedores que lanzan un producto SaaS, no para tarotistas, astrólogos o consultores que reciben reservas de sus propios clientes.',
	whyNotFitTitle: 'Por qué no forzamos una comparativa de funciones',
	whyNotFitBody:
		'Si estás comparando herramientas para gestionar las citas de tus propios clientes, Booknetic SaaS resuelve un problema completamente distinto, y tiene un precio diferente, con planes pensados para gestionar un negocio de reventa multi-tenant, no una consulta individual. Una tabla función por función frente a clickTarot Calendar no sería una comparativa honesta, así que no vamos a inventar una.',
	realComparisonLabel: 'Consulta nuestra comparativa real con el plugin de WordPress de Booknetic',
	ctaTitle: 'clickTarot Calendar está pensado exactamente para esto: gestionar tus propias reservas',
	ctaBody: 'Un solo plugin, en tu propio sitio WordPress, con un precio pensado para una consulta individual, no para un negocio de reventa.',
};

export default es;
