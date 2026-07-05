// flashcards.js
const initialFlashcards = [
  // --- LÍNEA 1: BOMBAS INDUSTRIALES (Tarjetas 1-15) ---
  {
    id: 1,
    category: "Bombas Industriales",
    question: "¿Cuál es el principio de funcionamiento de una bomba centrífuga en Delpin?",
    answer: "Transformar la energía cinética de un impulsor rotativo en energía de presión para desplazar fluidos fluidos de baja viscosidad."
  },
  {
    id: 2,
    category: "Bombas Industriales",
    question: "¿Qué significa el término NPSH (Net Positive Suction Head)?",
    answer: "Carga de Succión Neta Positiva. Es la presión mínima requerida en la succión de la bomba para evitar el fenómeno destructivo de la cavitación."
  },
  {
    id: 3,
    category: "Bombas Industriales",
    question: "¿Cuándo se recomienda utilizar una bomba de desplazamiento positivo en lugar de una centrífuga?",
    answer: "Cuando se manejan fluidos altamente viscosos, lodos, o cuando se requieren caudales constantes a presiones variables extremas."
  },
  {
    id: 4,
    category: "Bombas Industriales",
    question: "¿Qué es la cavitación y cómo afecta a un equipo de bombeo industrial?",
    answer: "Es la formación y colapso súbito de burbujas de vapor dentro de la bomba. Provoca picaduras en el impulsor, vibración severa y pérdida drástica de eficiencia."
  },
  {
    id: 5,
    category: "Bombas Industriales",
    question: "¿Cuál es la función principal de un sello mecánico en una bomba?",
    answer: "Evitar la fuga del fluido bombeado hacia el exterior a lo largo del eje rotativo, reemplazando a las antiguas prensaestopas."
  },
  {
    id: 6,
    category: "Bombas Industriales",
    question: "¿Qué es una bomba autocebante y cuál es su ventaja operativa?",
    answer: "Es una bomba diseñada para purgar el aire de la línea de succión por sí misma, permitiendo arrancar sin necesidad de llenar manualmente la tubería."
  },
  {
    id: 7,
    category: "Bombas Industriales",
    question: "¿Qué características definen a las bombas sumergibles para pozos profundos?",
    answer: "Poseen motores eléctricos sellados herméticamente acoplados al cuerpo de la bomba, optimizados para empujar el agua hacia arriba desde grandes profundidades."
  },
  {
    id: 8,
    category: "Bombas Industriales",
    question: "¿Cómo influye la gravedad específica (densidad) de un fluido en la selección del motor de la bomba?",
    answer: "A mayor gravedad específica del fluido, mayor es la potencia (HP/kW) requerida por el motor para mover el mismo volumen."
  },
  {
    id: 9,
    category: "Bombas Industriales",
    question: "¿Qué es el 'punto de máxima eficiencia' (BEP) en una curva de rendimiento de bomba?",
    answer: "Best Efficiency Point. Es el punto de operación (caudal y presión) donde la bomba opera con el menor desgaste mecánico y máximo ahorro energético."
  },
  {
    id: 10,
    category: "Bombas Industriales",
    question: "¿Qué define a una bomba multietapa?",
    answer: "Es una bomba que dispone de dos o más impulsores en serie dentro de la misma carcasa para elevar progresivamente la presión a grandes alturas."
  },
  {
    id: 11,
    category: "Bombas Industriales",
    question: "¿Qué materiales se prefieren para bombear químicos corrosivos?",
    answer: "Materiales termoplásticos avanzados (PVDF, PTFE) o aleaciones metálicas especiales como el Acero Inoxidable 316 o Hastelloy."
  },
  {
    id: 12,
    category: "Bombas Industriales",
    question: "¿Qué es una bomba de diafragma accionada por aire (AODD)?",
    answer: "Una bomba neumática de desplazamiento positivo que usa aire comprimido para alternar dos diafragmas, ideal para transferir lodos y productos sensibles al cizallamiento."
  },
  {
    id: 13,
    category: "Bombas Industriales",
    question: "¿Qué indica un aumento repentino en el consumo de amperaje de un motor de bomba?",
    answer: "Puede indicar un aumento en la densidad del fluido, restricciones mecánicas (roces internos) o que la bomba está operando fuera de su curva hacia caudales muy altos."
  },
  {
    id: 14,
    category: "Bombas Industriales",
    question: "¿Cuál es el propósito de un desgaste de anillo (wear ring) en una bomba centrífuga?",
    answer: "Reducir la recirculación interna de fluido desde la descarga hacia la succión, protegiendo los componentes principales de fricciones directas."
  },
  {
    id: 15,
    category: "Bombas Industriales",
    question: "¿Qué papel juega el alineamiento láser entre la bomba y el motor?",
    answer: "Garantizar que los ejes de transmisión estén perfectamente centrados, minimizando vibraciones, fallas en rodamientos y roturas de sellos mecánicos."
  },

  // --- LÍNEA 2: TUBERÍAS Y ACCESORIOS (Tarjetas 16-30) ---
  {
    id: 16,
    category: "Tuberías y accesorios",
    question: "¿Qué diferencia fundamental hay entre una tubería 'Pipe' y un tubo 'Tube'?",
    answer: "El Pipe se clasifica por su diámetro nominal (NPS) y espesor (Schedule), mientras que el Tube se mide por su diámetro exterior real (OD) y espesor de pared exacto."
  },
  {
    id: 17,
    category: "Tuberías y accesorios",
    question: "¿Qué indica el número de 'Schedule' (ej. Cédula 40 u 80) en una tubería metálica o plástica?",
    answer: "Indica el grosor de la pared de la tubería. A mayor número de Schedule, más gruesa es la pared y mayor presión de trabajo puede soportar."
  },
  {
    id: 18,
    category: "Tuberías y accesorios",
    question: "¿Qué es una junta de expansión en un sistema de tuberías?",
    answer: "Un componente flexible diseñado para absorber las contracciones y expansiones térmicas mecánicas, evitando fracturas por esfuerzos estructurales."
  },
  {
    id: 19,
    category: "Tuberías y accesorios",
    question: "¿Por qué se prefiere el acero inoxidable en industrias alimentarias o farmacéuticas?",
    answer: "Por su alta resistencia a la corrosión, facilidad de limpieza/sanitización y porque evita la contaminación o desprendimiento de partículas en el producto."
  },
  {
    id: 20,
    category: "Tuberías y accesorios",
    question: "¿Qué función cumple un accesorio tipo 'Brida' (Flange)?",
    answer: "Permitir la unión desmontable de tramos de tuberías, válvulas o equipos mediante pernos y empaquetaduras, facilitando mantenimientos rápidos."
  },
  {
    id: 21,
    category: "Tuberías y accesorios",
    question: "¿Cuál es la ventaja de utilizar tuberías de HDPE (Polietileno de Alta Densidad) en redes de agua?",
    answer: "Excelente flexibilidad, resistencia química al suelo, ligereza en transporte y uniones por termofusión que eliminan las fugas por completo."
  },
  {
    id: 22,
    category: "Tuberías y accesorios",
    question: "¿Qué es un reductor excéntrico y dónde es crítico utilizarlo?",
    answer: "Es un accesorio de transición con un lado plano. Es crítico utilizarlo en la succión horizontal de las bombas para evitar la acumulación de bolsas de aire."
  },
  {
    id: 23,
    category: "Tuberías y accesorios",
    question: "¿Para qué sirve un Reductor Concéntrico?",
    answer: "Para cambiar el diámetro de la tubería compartiendo el mismo eje central, utilizado típicamente en tramos verticales o líneas de descarga."
  },
  {
    id: 24,
    category: "Tuberías y accesorios",
    question: "¿Qué es el 'Golpe de Ariete' en sistemas de tuberías?",
    answer: "Un choque de presión violento causado por un cambio rápido en la velocidad del fluido (como el cierre súbito de una válvula), capaz de romper tuberías y codos."
  },
  {
    id: 25,
    category: "Tuberías y accesorios",
    question: "¿Qué material de empaquetadura flangeada se recomienda para químicos agresivos?",
    answer: "El PTFE (Teflón) expandido o estructurado por su inercia química casi total."
  },
  {
    id: 26,
    category: "Tuberías y accesorios",
    question: "¿Cuál es el propósito de un accesorio tipo Tee (T)?",
    answer: "Dividir un flujo único en dos ramales separados o combinar dos flujos entrantes en una sola línea a 90 grados."
  },
  {
    id: 27,
    category: "Tuberías y accesorios",
    question: "¿Qué significa que un accesorio sea 'Roscado NPT'?",
    answer: "National Pipe Tapered. Significa que tiene una rosca cónica americana estandarizada que sella por interferencia de hilos usando sellantes."
  },
  {
    id: 28,
    category: "Tuberías y accesorios",
    question: "¿Qué es un acople rápido tipo Camlock?",
    answer: "Un sistema de conexión y desconexión rápida de mangueras e instalaciones mediante palancas laterales, sin requerir herramientas."
  },
  {
    id: 29,
    category: "Tuberías y accesorios",
    question: "¿Por qué se realiza el soporteado adecuado con abrazaderas y colgantes?",
    answer: "Para distribuir el peso propio del fluido y de la tubería, evitando desviaciones, pandeos o esfuerzos excesivos en las conexiones de las máquinas."
  },
  {
    id: 30,
    category: "Tuberías y accesorios",
    question: "¿Qué es el estándar ANSI/ASME en tuberías?",
    answer: "El marco normativo que define dimensiones, tolerancias, presiones y composiciones de materiales para tuberías y conexiones de ingeniería."
  },

  // --- LÍNEA 3: VAPOR (Tarjetas 31-45) ---
  {
    id: 31,
    category: "Vapor",
    question: "¿Cuál es la función crítica de una trampa de vapor en una línea de distribución?",
    answer: "Descargar automáticamente el condensado, aire y gases incondensables del sistema sin permitir que se escape el vapor vivo."
  },
  {
    id: 32,
    category: "Vapor",
    question: "¿Qué diferencia al vapor saturado del vapor sobrecalentado?",
    answer: "El vapor saturado está en equilibrio con el agua líquida a su temperatura de ebullición; el sobrecalentado se calienta a mayores temperaturas sin aumentar la presión, usado en turbinas."
  },
  {
    id: 33,
    category: "Vapor",
    question: "¿Cómo funciona una trampa de vapor de tipo Cubeta Invertida?",
    answer: "Opera mediante el principio de flotabilidad. El vapor llena la cubeta haciéndola flotar para cerrar la válvula; cuando se llena de condensado, se hunde y abre la descarga."
  },
  {
    id: 34,
    category: "Vapor",
    question: "¿Qué es un cabezal de distribución de vapor (Steam Header)?",
    answer: "Un depósito cilíndrico colector que recibe el vapor directo de la caldera y lo distribuye uniformemente a las diferentes líneas de proceso de la planta."
  },
  {
    id: 35,
    category: "Vapor",
    question: "¿Por qué el condensado debe recuperarse y enviarse de vuelta a la caldera?",
    answer: "Porque conserva un alto valor energético (calor sensible) y es agua ya tratada químicamente, lo que reduce costos operativos de combustible y aditivos."
  },
  {
    id: 36,
    category: "Vapor",
    question: "¿Qué peligro representa el condensado atrapado si es arrastrado por el vapor a alta velocidad?",
    answer: "Provoca 'golpes de ariete de condensado', los cuales impactan los accesorios a velocidades de bala destruyendo tuberías, válvulas e instrumentación."
  },
  {
    id: 37,
    category: "Vapor",
    question: "¿Qué es una Válvula Reductora de Presión de Vapor (PRV)?",
    answer: "Un dispositivo automático encargado de disminuir la alta presión de distribución de la caldera a una presión de proceso más baja, segura y eficiente."
  },
  {
    id: 38,
    category: "Vapor",
    question: "¿Cómo funciona una trampa de vapor Termodinámica (tipo Disco)?",
    answer: "Utiliza la diferencia de velocidad y presión entre el condensado frío (baja velocidad) y el condensado caliente/vapor (alta velocidad) para operar un disco móvil."
  },
  {
    id: 39,
    category: "Vapor",
    question: "¿Qué función tiene un separador de humedad en líneas de vapor?",
    answer: "Remover mecánicamente las gotas de agua suspendidas en el flujo de vapor mediante fuerza centrífuga o bafles, asegurando la llegada de un vapor seco a los procesos."
  },
  {
    id: 40,
    category: "Vapor",
    question: "¿Qué es un desaireador térmico en un sistema de calderas?",
    answer: "Un equipo que precalienta el agua de alimentación y elimina los gases disueltos (principalmente Oxígeno y CO2) para prevenir la corrosión interna de la caldera."
  },
  {
    id: 41,
    category: "Vapor",
    question: "¿Qué es el 'Vapor Flash' (Vapor de Revaporización)?",
    answer: "El vapor formado instantáneamente cuando el condensado a alta presión y temperatura se descarga hacia una zona de menor presión."
  },
  {
    id: 42,
    category: "Vapor",
    question: "¿Por qué las líneas de vapor requieren un aislamiento térmico estricto?",
    answer: "Para minimizar las pérdidas térmicas hacia el ambiente, reduciendo la condensación prematura dentro de las tuberías y optimizando el consumo de combustible."
  },
  {
    id: 43,
    category: "Vapor",
    question: "¿Para qué sirve una pata de condensado (Drip Leg)?",
    answer: "Un tramo vertical inferior de tubería diseñado para recolectar el condensado por gravedad antes de que entre a la trampa de vapor."
  },
  {
    id: 44,
    category: "Vapor",
    question: "¿Qué es una trampa de vapor de Flotador y Termostática (F&T)?",
    answer: "Una trampa mecánica donde un flotador modula la salida continua de condensado y una cápsula termostática evacúa grandes volúmenes de aire al arranque."
  },
  {
    id: 45,
    category: "Vapor",
    question: "¿Qué problemas causa el aire atrapado en los intercambiadores de calor a vapor?",
    answer: "Actúa como un aislante térmico excelente en las paredes de intercambio, reduciendo drásticamente la transferencia de calor y el rendimiento del proceso."
  },

  // --- LÍNEA 4: VÁLVULAS (Tarjetas 46-60) ---
  {
    id: 46,
    category: "Válvulas",
    question: "¿Para qué aplicaciones está diseñada principalmente una válvula de bola (Ball Valve)?",
    answer: "Para servicios de corte on/off rápidos (un cuarto de vuelta), ofreciendo un sello hermético y un paso sin restricciones en posición abierta."
  },
  {
    id: 47,
    category: "Válvulas",
    question: "¿Cuál es el diseño y uso principal de una válvula de globo (Globe Valve)?",
    answer: "Tiene un cuerpo globular interno ideal para la regulación y estrangulación precisa de flujos fluidos, a costa de una mayor pérdida de carga."
  },
  {
    id: 48,
    category: "Válvulas",
    question: "¿Cómo opera una válvula de retención (Check Valve)?",
    answer: "Funciona de manera unidireccional por diferencial de presión, permitiendo el flujo en un sentido y cerrando automáticamente para evitar el contrasentido (retorno)."
  },
  {
    id: 49,
    category: "Válvulas",
    question: "¿Qué ventaja ofrece una válvula de mariposa (Butterfly Valve) en líneas de gran diámetro?",
    answer: "Diseño compacto, peso reducido, bajo costo comparativo y facilidad de instalación en espacios reducidos operando con un giro de 90 grados."
  },
  {
    id: 50,
    category: "Válvulas",
    question: "¿Qué es una válvula de compuerta (Gate Valve) y cuándo debe usarse?",
    answer: "Es una válvula de aislamiento total que abre levantando una compuerta. Debe usarse completamente abierta o cerrada; nunca para regular flujo."
  },
  {
    id: 51,
    category: "Válvulas",
    question: "¿Qué diferencia hay entre una válvula de seguridad (Safety Valve) y una de alivio (Relief Valve)?",
    answer: "La de seguridad abre de forma rápida/súbita (pop) con gases o vapores; la de alivio abre proporcionalmente al aumento de presión con líquidos."
  },
  {
    id: 52,
    category: "Válvulas",
    question: "¿Qué significa que una válvula cuente con un actuador neumático?",
    answer: "Que utiliza la fuerza del aire comprimido para abrir, cerrar o posicionar la válvula de manera automática y remota desde un panel de control."
  },
  {
    id: 53,
    category: "Válvulas",
    question: "¿Qué es el coeficiente de flujo Cv de una válvula?",
    answer: "La cantidad de galones por minuto de agua a 60°F que pasarán a través de la válvula con una caída de presión de 1 psi."
  },
  {
    id: 54,
    category: "Válvulas",
    question: "¿Qué es una válvula solenoide?",
    answer: "Una válvula electromecánica controlada por una corriente eléctrica a través de una bobina, ideal para automatizar aperturas en tuberías pequeñas."
  },
  {
    id: 55,
    category: "Válvulas",
    question: "¿Cuál es el beneficio de una válvula de cuchilla (Knife Gate)?",
    answer: "Su compuerta afilada corta flujos con alta concentración de sólidos, como pulpas, lodos pesados, papel o aguas residuales."
  },
  {
    id: 56,
    category: "Válvulas",
    question: "¿Qué función cumple un posicionador en una válvula de control de proceso?",
    answer: "Ajustar con extrema precisión la apertura física de la válvula comparando la señal de control recibida con la posición real del vástago."
  },
  {
    id: 57,
    category: "Válvulas",
    question: "¿Qué es una válvula de diafragma industrial?",
    answer: "Una válvula que utiliza un compresor lineal para presionar un diafragma flexible contra un asiento, aislando el fluido de los mecanismos de operación."
  },
  {
    id: 58,
    category: "Válvulas",
    question: "¿Qué significa el término 'Válvula de Paso Total' (Full Bore)?",
    answer: "Que el diámetro interno del orificio de la válvula es idéntico al diámetro interno de la tubería, minimizando la caída de presión."
  },
  {
    id: 59,
    category: "Válvulas",
    question: "¿Qué es una falla segura 'Fail-Open' vs. 'Fail-Close' en automatización?",
    answer: "Fail-Open asegura que la válvula se abra si se pierde la energía/aire; Fail-Close asegura que se cierre por completo para proteger el proceso."
  },
  {
    id: 60,
    category: "Válvulas",
    question: "¿Para qué sirve un filtro tipo 'Y' instalado antes de una válvula crítica?",
    answer: "Para retener mecánicamente partículas, rebabas o incrustaciones que puedan dañar los asientos internos de las válvulas o taponar instrumentos."
  },

  // --- LÍNEA 5: AIRE COMPRIMIDO (Tarjetas 61-75) ---
  {
    id: 61,
    category: "Aire comprimido",
    question: "¿Cuál es la función básica de un compresor de tornillo rotativo?",
    answer: "Atrapar el aire entre dos rotores entrelazados que giran en sentidos opuestos, reduciendo el volumen del espacio para elevar la presión de forma continua."
  },
  {
    id: 62,
    category: "Aire comprimido",
    question: "¿Por qué es indispensable un secador de aire refrigerativo en la red industrial?",
    answer: "Para enfriar el aire comprimido, condensar el vapor de agua suspendido y eliminar la humedad antes de que dañe herramientas o contamine el producto."
  },
  {
    id: 63,
    category: "Aire comprimido",
    question: "¿Qué tareas realiza una unidad FRL?",
    answer: "Filtra impurezas y agua libre, Regula la presión al nivel óptimo de trabajo y Lubrica las herramientas neumáticas aguas abajo."
  },
  {
    id: 64,
    category: "Aire comprimido",
    question: "¿Qué es un secador desecante (o de absorción) y cuándo se utiliza?",
    answer: "Un secador que usa materiales químicos (alúmina/sílice) para alcanzar puntos de rocío extremadamente bajos (-40°F), ideal para industrias farmacéuticas o electrónicas."
  },
  {
    id: 65,
    category: "Aire comprimido",
    question: "¿Cuál es el propósito principal del tanque pulmón (Air Receiver Tank)?",
    answer: "Almacenar aire comprimido para absorber picos de demanda, estabilizar la presión de la red y permitir que el compresor trabaje en ciclos eficientes."
  },
  {
    id: 66,
    category: "Aire comprimido",
    question: "¿Qué diferencia hay entre un compresor lubricado y uno 'Oil-Free' (Libre de Aceite)?",
    answer: "El lubricado usa aceite en la cámara para sellar y enfriar; el Oil-Free no usa lubricante en la cámara de compresión, asegurando pureza total del aire."
  },
  {
    id: 67,
    category: "Aire comprimido",
    question: "¿Qué es un filtro coalescente?",
    answer: "Un filtro especializado diseñado para unir microgotas de aceite y agua suspendidas en forma de aerosol en el aire comprimido para drenarlas en gotas grandes."
  },
  {
    id: 68,
    category: "Aire comprimido",
    question: "¿Qué indica un 'punto de rocío bajo presión' (PDP) en auditorías de aire?",
    answer: "La temperatura a la cual el vapor de agua presente en el aire comprimido comenzará a condensarse en agua líquida a la presión operativa actual."
  },
  {
    id: 69,
    category: "Aire comprimido",
    question: "¿Cómo afectan las fugas de aire comprimido a los costos de la planta?",
    answer: "Representan un desperdicio energético masivo directo, ya que obligan a los compresores a trabajar más tiempo consumiendo electricidad inútilmente."
  },
  {
    id: 70,
    category: "Aire comprimido",
    question: "¿Para qué sirve un drenaje automático de condensados?",
    answer: "Para evacuar de forma periódica el agua y aceite acumulados en las bases de tanques, filtros y secadores sin requerir intervención humana ni perder aire."
  },
  {
    id: 71,
    category: "Aire comprimido",
    question: "¿Qué es el ciclo de Carga/Alivio (Load/Unload) en un compresor?",
    answer: "Carga es cuando el compresor comprime aire activamente hacia el sistema; Alivio es cuando el motor sigue girando pero la válvula de entrada está cerrada para ahorrar energía."
  },
  {
    id: 72,
    category: "Aire comprimido",
    question: "¿Qué función cumple el postenfriador (Aftercooler) integrado en un compresor?",
    answer: "Bajar la alta temperatura del aire inmediatamente a la salida del bloque de compresión, condensando hasta el 70% del vapor de agua inicial."
  },
  {
    id: 73,
    category: "Aire comprimido",
    question: "¿Por qué las redes principales de tuberías de aire se diseñan en forma de circuito cerrado o 'Anillo'?",
    answer: "Para equilibrar las caídas de presión en toda la planta y permitir que el aire fluya desde dos direcciones hacia los puntos de mayor consumo."
  },
  {
    id: 74,
    category: "Aire comprimido",
    question: "¿Por qué las tomas secundarias de aire (bajadas) deben salir desde la parte superior de la tubería principal?",
    answer: "Para evitar que el condensado remanente que viaja por el fondo de la tubería principal caiga por gravedad hacia los equipos de consumo."
  },
  {
    id: 75,
    category: "Aire comprimido",
    question: "¿Qué es un compresor de velocidad variable (VSD)?",
    answer: "Un compresor que ajusta electrónicamente la velocidad del motor para que coincida exactamente con la demanda en tiempo real, maximizando el ahorro eléctrico."
  },

  // --- LÍNEA 6: MOTORES Y TRANSMISIÓN DE POTENCIA (Tarjetas 76-90) ---
  {
    id: 76,
    category: "Motores y transmisión de potencia",
    question: "¿Qué es un motor eléctrico de inducción jaula de ardilla?",
    answer: "El motor de corriente alterna más utilizado industrialmente por su alta robustez, simplicidad de diseño mecánico y bajo costo de mantenimiento."
  },
  {
    id: 77,
    category: "Motores y transmisión de potencia",
    question: "¿Cuál es la función principal de un Reductor de Velocidad (Gearbox)?",
    answer: "Disminuir las altas revoluciones por minuto (RPM) de un motor eléctrico para incrementar proporcionalmente el torque mecánico de salida."
  },
  {
    id: 78,
    category: "Motores y transmisión de potencia",
    question: "¿Qué significan las clases de eficiencia IE3 e IE4 en motores industriales?",
    answer: "Normas globales de eficiencia energética. IE3 indica Eficiencia Premium e IE4 representa Eficiencia Súper Premium, consumiendo menos kilovatios."
  },
  {
    id: 79,
    category: "Motores y transmisión de potencia",
    question: "¿Qué es un variador de frecuencia (VFD) y cómo optimiza un motor?",
    answer: "Un dispositivo electrónico que controla las RPM y el torque del motor regulando la frecuencia y el voltaje de la alimentación eléctrica."
  },
  {
    id: 80,
    category: "Motores y transmisión de potencia",
    question: "¿Para qué sirve un acoplamiento flexible entre ejes?",
    answer: "Conectar mecánicamente el eje del motor con el equipo conducido absorbiendo desalineaciones menores y amortiguando choques de torque."
  },
  {
    id: 81,
    category: "Motores y transmisión de potencia",
    question: "¿Qué función tienen las bandas o correas de transmisión en V?",
    answer: "Transmitir la potencia mecánica entre poleas mediante fricción lateral, protegiendo al sistema contra sobrecargas repentinas al deslizarse."
  },
  {
    id: 82,
    category: "Motores y transmisión de potencia",
    question: "¿Qué indica el 'Factor de Servicio' (SF) en la placa de un motor eléctrico?",
    answer: "El porcentaje de sobrecarga continua que el motor puede soportar de manera segura bajo condiciones de operación nominales (ej. 1.15 = 15% extra)."
  },
  {
    id: 83,
    category: "Motores y transmisión de potencia",
    question: "¿Cuál es el diseño básico de un reductor de corona y sinfín?",
    answer: "Un mecanismo de transmisión por ejes ortogonales (a 90 grados) que ofrece altas relaciones de reducción en espacios compactos con capacidad de autobloqueo."
  },
  {
    id: 84,
    category: "Motores y transmisión de potencia",
    question: "¿Qué función cumple un Rodamiento (Cojinete) en un eje rotativo?",
    answer: "Soportar y guiar los ejes giratorios reduciendo significativamente la fricción mecánica mediante esferas o rodillos internos."
  },
  {
    id: 85,
    category: "Motores y transmisión de potencia",
    question: "¿Qué problemas causa el desequilibrio de fases eléctricas en un motor de planta?",
    answer: "Genera altas temperaturas internas en los devanados, vibración destructiva, pérdida de torque y una reducción drástica de la vida útil del motor."
  },
  {
    id: 86,
    category: "Motores y transmisión de potencia",
    question: "¿Qué es un arrancador suave (Soft Starter)?",
    answer: "Un equipo electrónico que limita la corriente de arranque reduciendo el voltaje inicial, permitiendo aceleraciones suaves sin picos mecánicos ni eléctricos."
  },
  {
    id: 87,
    category: "Motores y transmisión de potencia",
    question: "¿Qué ventajas ofrecen los reductores planetarios en aplicaciones pesadas?",
    answer: "Distribuyen la carga mecánica entre múltiples engranajes satélites, logrando torques extremadamente altos en tamaños muy compactos."
  },
  {
    id: 88,
    category: "Motores y transmisión de potencia",
    question: "¿Qué es el aislamiento clase F o H en motores eléctricos?",
    answer: "La clasificación de temperatura máxima que los materiales aislantes del motor pueden soportar sin degradarse (Clase F=155°C, Clase H=180°C)."
  },
  {
    id: 89,
    category: "Motores y transmisión de potencia",
    question: "¿Para qué sirve un piñón y una cadena de rodillos en transmisión?",
    answer: "Para transmitir potencia a distancias cortas/medianas sin deslizamientos mecánicos, asegurando una relación de velocidad constante e idéntica."
  },
  {
    id: 90,
    category: "Motores y transmisión de potencia",
    question: "¿Por qué el monitoreo de temperatura en las cajas reductoras es vital?",
    answer: "Un aumento drástico indica fallas de lubricación, sobrecargas o fallas inminentes en los dientes de los engranajes o rodamientos."
  },

  // --- LÍNEA 7: INSTRUMENTACIÓN (Tarjetas 91-100) ---
  {
    id: 91,
    category: "Instrumentación",
    question: "¿Qué diferencia hay entre un instrumento indicador y un transmisor industrial?",
    answer: "El indicador muestra el valor localmente (ej: manómetro); el transmisor mide la variable y envía una señal eléctrica (ej: 4-20 mA) a un sistema central PLC."
  },
  {
    id: 92,
    category: "Instrumentación",
    question: "¿Por qué la señal de 4-20 mA es el estándar más usado en la industria?",
    answer: "Porque al ser una señal de corriente es inmune a las caídas de voltaje de largas distancias y el valor de 4 mA permite detectar fallas de cable roto instantáneamente."
  },
  {
    id: 93,
    category: "Instrumentación",
    question: "¿Cómo funciona un sensor de flujo de tipo Electromagnético?",
    answer: "Aplica la Ley de Faraday. Genera un campo magnético en la tubería; al pasar un fluido conductor, se induce un voltaje proporcional a la velocidad del flujo."
  },
  {
    id: 94,
    category: "Instrumentación",
    question: "¿Qué es un sensor de temperatura RTD PT100?",
    answer: "Un sensor de resistencia de platino que tiene exactamente 100 ohmios de resistencia a 0°C, variando su resistencia de forma muy lineal y precisa con la temperatura."
  },
  {
    id: 95,
    category: "Instrumentación",
    question: "¿Cómo opera un transmisor de nivel de tipo Ultrasónico?",
    answer: "Emite ondas de sonido de alta frecuencia hacia la superficie del fluido y mide el tiempo que tarda el eco en regresar, calculando la distancia sin contacto físico."
  },
  {
    id: 96,
    category: "Instrumentación",
    question: "¿Qué mide un manómetro de tubo Bourdon?",
    answer: "Mide la presión relativa o manométrica mediante un tubo metálico curvado que tiende a enderezarse a medida que se incrementa la presión interna."
  },
  {
    id: 97,
    category: "Instrumentación",
    question: "¿Para qué sirve un termopozo (Thermowell) en un proceso industrial?",
    answer: "Un tubo protector instalado en la tubería que aloja al sensor de temperatura, permitiendo retirarlo para calibración sin vaciar ni detener la línea de flujo."
  },
  {
    id: 98,
    category: "Instrumentación",
    question: "¿Qué es un flujómetro de área variable (Rotámetro)?",
    answer: "Un medidor visual que consta de un tubo cónico vertical y un flotador interno que asciende de forma proporcional hasta equilibrarse con el caudal del fluido."
  },
  {
    id: 99,
    category: "Instrumentación",
    question: "¿Qué ventajas ofrece la medición de nivel por Radar de Onda Guiada?",
    answer: "Alta precisión inmune a la presencia de espumas, vapores, polvo ambiental o cambios de densidad en la superficie del líquido medido."
  },
  {
    id: 100,
    category: "Instrumentación",
    question: "¿Qué es la calibración de un instrumento según estándares?",
    answer: "El proceso de comparar las lecturas del instrumento contra un patrón de referencia certificado para ajustar desviaciones y garantizar la máxima precisión en planta."
  }
];