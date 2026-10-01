"use strict";

const V = {
  torre: `
<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false">
  <rect width="320" height="180" fill="#101a33"/>
  <circle cx="262" cy="36" r="15" fill="#f5c518" opacity="0.9"/>
  <polygon points="0,0 130,0 58,180" fill="rgba(120,170,255,0.13)"/>
  <g fill="#060a14">
    <rect x="0" y="132" width="46" height="48"/><rect x="52" y="112" width="34" height="68"/>
    <rect x="92" y="140" width="40" height="40"/><rect x="232" y="122" width="38" height="58"/>
    <rect x="276" y="146" width="44" height="34"/>
  </g>
  <rect x="138" y="46" width="44" height="134" fill="#0b1224" stroke="#4a7fd4" stroke-width="1.5"/>
  <g fill="#f5c518" opacity="0.85">
    <rect x="146" y="58" width="8" height="10"/><rect x="160" y="58" width="8" height="10"/>
    <rect x="146" y="78" width="8" height="10"/><rect x="160" y="96" width="8" height="10"/>
    <rect x="146" y="114" width="8" height="10"/><rect x="160" y="132" width="8" height="10"/>
  </g>
  <rect x="138" y="36" width="44" height="10" fill="#e63946"/>
  <text x="200" y="98" font-family="monospace" font-size="10" fill="#4a7fd4">BASE</text>
</svg>`,
  archivos: `
<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false">
  <rect width="320" height="180" fill="#131c2e"/>
  <g fill="#e7ecf5" opacity="0.9">
    <rect x="24" y="42" width="86" height="104" rx="4"/>
    <rect x="40" y="28" width="86" height="104" rx="4" opacity="0.85"/>
    <rect x="56" y="14" width="86" height="104" rx="4" opacity="0.7"/>
  </g>
  <g fill="#0b1020" opacity="0.65">
    <rect x="70" y="34" width="50" height="6"/><rect x="70" y="50" width="58" height="6"/>
    <rect x="70" y="66" width="42" height="6"/><rect x="70" y="82" width="54" height="6"/>
  </g>
  <rect x="86" y="118" width="76" height="18" rx="9" fill="#e63946"/>
  <text x="124" y="131" text-anchor="middle" font-family="monospace" font-size="10" fill="#ffffff">datos</text>
  <circle cx="212" cy="86" r="34" fill="none" stroke="#f5c518" stroke-width="4"/>
  <line x1="236" y1="110" x2="268" y2="142" stroke="#f5c518" stroke-width="6" stroke-linecap="round"/>
  <text x="212" y="92" text-anchor="middle" font-family="monospace" font-size="12" fill="#f5c518">?</text>
</svg>`,
  conexiones: `
<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false">
  <rect width="320" height="180" fill="#0d1526"/>
  <g stroke="#4a7fd4" stroke-width="1.5" opacity="0.6">
    <line x1="40" y1="140" x2="110" y2="70"/><line x1="40" y1="40" x2="110" y2="70"/>
    <line x1="110" y1="70" x2="190" y2="40"/><line x1="110" y1="70" x2="190" y2="140"/>
    <line x1="190" y1="40" x2="268" y2="90"/><line x1="190" y1="140" x2="268" y2="90"/>
  </g>
  <line x1="110" y1="70" x2="190" y2="140" stroke="#f5c518" stroke-width="5" opacity="0.9"/>
  <g fill="#4a7fd4">
    <circle cx="40" cy="140" r="10"/><circle cx="40" cy="40" r="10"/>
    <circle cx="110" cy="70" r="12"/><circle cx="268" cy="90" r="12"/>
  </g>
  <circle cx="190" cy="40" r="10" fill="#e63946"/>
  <circle cx="190" cy="140" r="10" fill="#f5c518"/>
  <text x="150" y="168" text-anchor="middle" font-family="monospace" font-size="10" fill="#f5c518">pesos</text>
</svg>`,
  tokens: `
<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false">
  <rect width="320" height="180" fill="#0f1930"/>
  <g font-family="monospace" font-size="11" text-anchor="middle">
    <rect x="16" y="60" width="42" height="34" rx="4" fill="#4a7fd4" opacity="0.35" stroke="#4a7fd4"/>
    <text x="37" y="82" fill="#cfe0ff">el</text>
    <rect x="64" y="60" width="42" height="34" rx="4" fill="#4a7fd4" opacity="0.35" stroke="#4a7fd4"/>
    <text x="85" y="82" fill="#cfe0ff">rey</text>
    <rect x="112" y="60" width="42" height="34" rx="4" fill="#4a7fd4" opacity="0.35" stroke="#4a7fd4"/>
    <text x="133" y="82" fill="#cfe0ff">de</text>
    <rect x="160" y="60" width="42" height="34" rx="4" fill="#4a7fd4" opacity="0.35" stroke="#4a7fd4"/>
    <text x="181" y="82" fill="#cfe0ff">hierro</text>
    <rect x="212" y="56" width="52" height="42" rx="4" fill="none" stroke="#e63946" stroke-dasharray="5 4"/>
    <text x="238" y="84" fill="#e63946">?</text>
  </g>
  <text x="160" y="132" text-anchor="middle" font-family="monospace" font-size="12" fill="#f5c518">que sigue?</text>
  <path d="M100 148 q60 22 120 0" fill="none" stroke="#4a7fd4" stroke-width="1.5" opacity="0.6"/>
</svg>`,
  falsa: `
<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false">
  <rect width="320" height="180" fill="#1d1220"/>
  <path d="M40 34 h168 a10 10 0 0 1 10 10 v70 a10 10 0 0 1 -10 10 h-104 l-26 24 v-24 h-38 a10 10 0 0 1 -10 -10 v-70 a10 10 0 0 1 10 -10 z" fill="#f2f4fa"/>
  <g fill="#1d1220" opacity="0.7">
    <rect x="58" y="54" width="150" height="7"/><rect x="58" y="70" width="120" height="7"/>
    <rect x="58" y="86" width="96" height="7"/>
  </g>
  <circle cx="248" cy="118" r="26" fill="#e63946"/>
  <text x="248" y="128" text-anchor="middle" font-family="monospace" font-size="26" fill="#ffffff">!</text>
  <g stroke="#e63946" stroke-width="4" stroke-linecap="round">
    <line x1="222" y1="52" x2="278" y2="108"/>
  </g>
  <text x="160" y="166" text-anchor="middle" font-family="monospace" font-size="10" fill="#e6b3b3">dato inventado con total seguridad</text>
</svg>`,
  instruccion: `
<svg viewBox="0 0 320 180" aria-hidden="true" focusable="false">
  <rect width="320" height="180" fill="#101a33"/>
  <rect x="16" y="34" width="124" height="112" rx="6" fill="#e7ecf5" opacity="0.9"/>
  <g fill="#0b1020" opacity="0.6">
    <rect x="28" y="50" width="96" height="7"/><rect x="28" y="66" width="80" height="7"/>
    <rect x="28" y="82" width="92" height="7"/><rect x="28" y="98" width="64" height="7"/>
    <rect x="28" y="114" width="88" height="7"/>
  </g>
  <rect x="16" y="34" width="124" height="16" rx="6" fill="#e63946"/>
  <text x="78" y="46" text-anchor="middle" font-family="monospace" font-size="10" fill="#ffffff">instruccion</text>
  <path d="M150 90 h34" stroke="#f5c518" stroke-width="3"/>
  <path d="M176 80 l14 10 -14 10" fill="none" stroke="#f5c518" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="196" y="34" width="108" height="112" rx="6" fill="#0b1224" stroke="#4a7fd4" stroke-width="1.5"/>
  <g stroke="#7ed957" stroke-width="3" fill="none" stroke-linecap="round">
    <path d="M210 62 l8 8 14 -16"/><path d="M210 92 l8 8 14 -16"/><path d="M210 122 l8 8 14 -16"/>
  </g>
  <g fill="#9aa6bb" font-family="monospace" font-size="10">
    <text x="240" y="68">rol</text><text x="240" y="98">tarea</text><text x="240" y="128">formato</text>
  </g>
</svg>`
};

const NIVELES = [
  {
    numero: 1,
    codigo: "AV-01",
    titulo: "La torre",
    lugar: "Sala de control",
    vineta: V.torre,
    alt: "Ilustración de la torre de la base de los Avengers de noche, con un foco iluminando el cielo y ventanas encendidas.",
    situacion:
      "La pantalla de la torre muestra un asistente que responde todo lo que le piden: <strong>«encender las luces»</strong>, " +
      "<strong>«activar los generadores»</strong>. Nadie le escribió un guion para cada frase: entiende lo que le piden " +
      "con palabras comunes. La pregunta de la base es: <strong>¿qué es la Inteligencia Artificial?</strong> Decilo con tus palabras.",
    pista:
      "Es la forma de hacer que una computadora aprenda a hacer tareas que hacemos los humanos: entender una voz, " +
      "reconocer una imagen, elegir qué hacer o escribir un texto. Fijate en que el nombre de la disciplina " +
      "tiene dos palabras: la primera es la palabra que usamos para lo que hacemos nosotros.",
    claves: [["inteligencia", "artificial"]],
    respuestas: ["ia", "inteligencia artificial", "la inteligencia artificial", "la ia"],
    exito:
      "Pantalla en verde. <strong>Inteligencia Artificial</strong>: hacer que una computadora aprenda tareas " +
      "que hacemos los humanos, en vez de seguir reglas escritas a mano. Se abre la puerta del sector 1.",
    fallo:
      "La pantalla sigue en rojo. El nombre de la disciplina tiene dos palabras: <strong>Inteligencia</strong> y " +
      "<strong>Artificial</strong>. Volvé a intentarlo.",
    ejemplo:
      "El asistente de la Torre es el ejemplo más claro: entiende pedidos con palabras y los cumple sin que nadie le escriba un guion.",
    teoria:
      "La Inteligencia Artificial es la disciplina que construye máquinas capaces de hacer tareas que asociamos " +
      "con la inteligencia humana. No adivina: aprende de ejemplos que le damos.",
    puntos: [
      "La programación clásica sigue reglas escritas por una persona; la IA aprende de ejemplos.",
      "La IA que usamos todos los días es «estrecha»: hace muy bien una tarea y nada más.",
      "Traducir, escribir un mensaje o corregir una foto también son tareas de IA."
    ]
  },
  {
    numero: 2,
    codigo: "AV-02",
    titulo: "Los archivos",
    lugar: "Sala de datos",
    vineta: V.archivos,
    alt: "Ilustración de fichas apiladas con la palabra datos y una lupa buscando información.",
    situacion:
      "En la sala de datos hay cuatro archivadores con miles de fichas. Cada ficha tiene un ejemplo anotado: " +
      "«este mensaje es un aviso de peligro», «este mensaje no lo es», «este archivo está roto», «este está bien». " +
      "La base pregunta: <strong>¿qué necesita una computadora para aprender a hacer algo?</strong>",
    pista:
      "Necesita muchos ejemplos. Si nunca vio un caso, no puede resolverlo. Y hay una frase famosa de la informática: " +
      "si los ejemplos están equivocados, la computadora aprende el error y lo repite muy segura.",
    claves: [["datos"], ["ejemplo"]],
    respuestas: ["datos", "los datos", "de datos", "necesita datos", "ejemplos", "de ejemplos"],
    exito:
      "Los archivadores se encienden. <strong>Datos</strong>: sin ejemplos, una computadora no tiene nada que aprender.",
    fallo:
      "Los archivadores siguen apagados. Sin <strong>datos</strong> (muchos ejemplos anotados) no hay aprendizaje. Probá otra vez.",
    ejemplo:
      "Para distinguir una amenaza en el cielo, el sistema necesita miles de fotos ya marcadas por personas expertas.",
    teoria:
      "Un modelo aprende de un conjunto de datos: los ejemplos que usamos para entrenarlo. Si esos ejemplos " +
      "están sesgados o mal anotados, la máquina aprende ese error con total seguridad.",
    puntos: [
      "Ejemplo de entrenamiento: la ficha que usa la máquina mientras aprende.",
      "Ejemplos de prueba: los que se reservan para ver si aprendió de verdad o solo memorizó.",
      "Importa la calidad y la variedad de los ejemplos, tanto como la cantidad."
    ]
  },
  {
    numero: 3,
    codigo: "AV-03",
    titulo: "Las conexiones",
    lugar: "Sala de cálculos",
    vineta: V.conexiones,
    alt: "Ilustración de nodos conectados entre sí con una conexión resaltada y la palabra pesos.",
    situacion:
      "Detrás de la pared hay miles de nodos unidos por cables. Cada cable tiene un número, como una perilla. " +
      "Cuando el asistente se equivoca, esos números se mueven apenas un poco, siempre en dirección contraria al error. " +
      "La base pregunta: <strong>¿qué se mueve una y otra vez mientras la máquina aprende?</strong>",
    pista:
      "Imaginá que cada cable tiene una perilla: en 0 el cable no pasa nada, en 10 pasa muchísimo. " +
      "El nombre de esos números es la respuesta. Cada vez que la máquina falla, se giran un poquito, miles de veces.",
    claves: [["peso"], ["pesos"], ["parametro"], ["gradiente"], ["entrenamiento"]],
    respuestas: [
      "los pesos",
      "pesos",
      "los pesos de las conexiones",
      "los parametros",
      "parametros"
    ],
    exito:
      "Las perillas se calibran. <strong>Los pesos</strong> son esos números: se ajustan cada vez que la máquina " +
      "se equivoca, para que se equivoque menos. Se abre el sector 3.",
    fallo:
      "Las perillas siguen en cualquier lado. La respuesta es <strong>los pesos</strong>: los números que " +
      "miden cuánto pasa por cada conexión. Probá de nuevo.",
    ejemplo:
      "El asistente de la Torre no tenía sus respuestas escritas: se construyeron ajustando millones de estos números.",
    teoria:
      "Una red neuronal es un conjunto de nodos conectados por capas. Cada conexión tiene un peso, un número " +
      "que dice cuánto influye. Aprender es mover esos números hasta que la máquina falle menos.",
    puntos: [
      "Peso: número que indica cuánto influye una conexión sobre el nodo siguiente.",
      "Gradiente: cuánto hay que mover cada peso para reducir el error; se mueve en dirección contraria.",
      "Época: una vuelta completa de entrenamiento sobre todos los ejemplos."
    ]
  },
  {
    numero: 4,
    codigo: "AV-04",
    titulo: "Los pedacitos",
    lugar: "Sala de lenguaje",
    vineta: V.tokens,
    alt: "Ilustración de una frase dividida en pedacitos con un casillero vacío marcado con un signo de pregunta.",
    situacion:
      "El asistente de la Torre no guarda frases enteras en la memoria: guarda pedacitos de palabras. " +
      "Cuando le escribís algo, corta el texto en pedacitos y trata de adivinar el que sigue. " +
      "La base pregunta: <strong>si escribe como una persona, ¿qué está adivinando?</strong>",
    pista:
      "Lee millones de textos cortados así: «el | rey | de | hierro | ?». Y lo que le sale más probable, " +
      "no lo que es verdad. El nombre de cada pedacito se llama token.",
    claves: [
      ["siguiente", "token"],
      ["siguiente", "palabra"],
      ["siguiente", "caracter"],
      ["proxim", "token"],
      ["proxim", "palabra"],
      ["token"]
    ],
    respuestas: [
      "la siguiente palabra",
      "el siguiente token",
      "la proxima palabra",
      "el proximo token",
      "la palabra siguiente"
    ],
    exito:
      "La frase se completa sola: <strong>«el rey de hierro»</strong>. El asistente <strong>predice el " +
      "siguiente token</strong> una y otra vez, y por eso puede escribir. La niebla se despeja.",
    fallo:
      "La frase quedó incompleta. Repasá: el modelo entrena <strong>adivinando el siguiente token</strong> " +
      "(la palabra o pedacito de palabra que sigue).",
    ejemplo:
      "Cuando completás una frase en el chat, el asistente la está escribiendo token por token, adivinando lo que sigue.",
    teoria:
      "Un modelo de lenguaje aprende con un objetivo muy simple: adivinar el token siguiente. Como lo hace " +
      "millones de veces, termina siendo capaz de escribir, resumir o programar.",
    puntos: [
      "Token: un pedacito de texto, puede ser una palabra entera o una parte.",
      "Aprendizaje supervisado: aprende de ejemplos que ya traen la respuesta.",
      "Aprendizaje no supervisado: busca patrones y agrupa lo parecido, sin respuestas previas.",
      "Aprendizaje por refuerzo: aprende probando, con premio o castigo."
    ]
  },
  {
    numero: 5,
    codigo: "AV-05",
    titulo: "El dato falso",
    lugar: "Sala de archivos públicos",
    vineta: V.falsa,
    alt: "Ilustración de un mensaje que afirma un dato con una cruz roja y un signo de advertencia.",
    situacion:
      "El asistente informa con toda seguridad: <em>«el informe lo firmó la licenciada Ada en 2019»</em>. " +
      "Nadie conoce a Ada y ese informe no existe. La base pregunta: " +
      "<strong>¿por qué una IA puede inventar datos y responder igual de tranquila?</strong>",
    pista:
      "Cuando responde, no está mirando una base de datos: está calculando lo que le parece más probable. " +
      "Si lo más probable es falso, lo entrega como si fuera verdad. Por eso siempre hay que verificar.",
    claves: [
      ["predice"],
      ["prediccion"],
      ["adivina"],
      ["probable"],
      ["no", "verifica"],
      ["no", "comprueba"],
      ["alucina"],
      ["confianza"]
    ],
    respuestas: [
      "no verifica nada",
      "predice la respuesta mas probable y no verifica si es verdadera",
      "adivina en vez de saber",
      "alucina",
      "porque inventa datos"
    ],
    exito:
      "La pantalla se corrige. Eso se llama <strong>alucinación</strong>: una respuesta que suena verdadera " +
      "pero es falsa. Uso responsable: verificar los datos importantes.",
    fallo:
      "El asistente sigue inventando. La causa es una: <strong>predice lo más probable y no verifica si es verdad</strong>.",
    ejemplo:
      "En las películas el asistente responde rapidísimo y sin dudar; por eso el equipo chequea los datos antes de salir a pelear.",
    teoria:
      "Una alucinación es una respuesta verosímil pero falsa. Ocurre porque el modelo adivina texto plausible, " +
      "no porque consulte una fuente. También puede repetir ideas desiguales que aprendió de sus datos.",
    puntos: [
      "Verificar: contrastar cifras, nombres y citas con una fuente confiable.",
      "Sesgo: si los ejemplos con los que aprendió eran desiguales, va a repetir esa desigualdad.",
      "Privacidad: no pegar datos personales o confidenciales en un chat de IA sin permiso."
    ]
  },
  {
    numero: 6,
    codigo: "AV-06",
    titulo: "La instrucción",
    lugar: "Sala del planificador · misión extra",
    vineta: V.instruccion,
    alt: "Ilustración de una instrucción que se convierte en un plan con tres pasos marcados.",
    situacion:
      "Misión extra. El planificador pide: <strong>«ayudame con el informe»</strong> y recibe algo genérico. " +
      "La base pregunta: <strong>¿qué le falta a un pedido para que la IA lo entienda bien?</strong> Mencioná al menos una cosa.",
    pista:
      "Un buen pedido no es un deseo, es un encargo: dice quién sos, para quién es, qué tiene que lograr, " +
      "en qué formato y con qué tono. Si le das un ejemplo de lo que querés, sale todavía mejor.",
    claves: [
      ["contexto"],
      ["rol"],
      ["formato"],
      ["ejemplo"],
      ["claro"],
      ["claridad"],
      ["detall"],
      ["paso", "a", "paso"],
      ["objetivo"],
      ["tarea"]
    ],
    respuestas: [
      "dar contexto",
      "darle un rol",
      "un ejemplo",
      "que sea clara",
      "un formato claro"
    ],
    exito:
      "El planificador acierta a la primera. Un buen pedido define <strong>rol, contexto, tarea, formato y detalles</strong>. " +
      "El núcleo de la base vuelve a estar en línea.",
    fallo:
      "El informe sigue genérico. Releé la pista: un pedido necesita <strong>contexto, rol, objetivo, formato o ejemplos</strong>.",
    ejemplo:
      "«Actuá como profesor y explicame esto en tres pasos» funciona mucho mejor que un «ayudame» sin más.",
    teoria:
      "Escribir buenas instrucciones (prompt) es parte del trabajo: decir qué rol debe tomar la máquina, " +
      "sobre qué contexto trabaja, qué tarea concreta debe cumplir y en qué formato entregar el resultado.",
    puntos: [
      "Rol: «actuá como profesor de secundaria que explica con ejemplos».",
      "Contexto y objetivo: para quién es, qué tiene que lograr, con qué límites.",
      "Formato y ejemplo: cuántas partes, qué secciones y un ejemplo del resultado esperado."
    ]
  }
];

const TARJETAS = [
  {
    sector: "Sector 1",
    concepto: "Inteligencia Artificial",
    definicion: "Hacer que una computadora aprenda a hacer tareas que hacemos los humanos, en lugar de seguir reglas escritas a mano.",
    ejemplo: "El asistente de la Torre entiende pedidos con palabras y los cumple sin guion escrito para cada frase."
  },
  {
    sector: "Sector 1",
    concepto: "IA estrecha",
    definicion: "La IA que existe hoy: muy buena en una sola tarea y completamente inútil para las demás.",
    ejemplo: "El traductor del dispositivo traduce bien, pero no sabe responder una emergencia."
  },
  {
    sector: "Sector 2",
    concepto: "Dato de entrenamiento",
    definicion: "Cada ejemplo que la máquina usa mientras aprende, con su respuesta correcta anotada.",
    ejemplo: "Para reconocer una amenaza en el cielo hacen falta miles de fotos ya marcadas por personas expertas."
  },
  {
    sector: "Sector 2",
    concepto: "Sesgo de los datos",
    definicion: "Si los ejemplos que usamos para aprender son desiguales, la máquina repite esa desigualdad.",
    ejemplo: "Un sistema entrenado solo con datos de un mismo grupo puede no reconocer a los demás."
  },
  {
    sector: "Sector 3",
    concepto: "Red neuronal",
    definicion: "Muchas capas de nodos conectados, parecidos a un cerebro, que aprenden moviendo números.",
    ejemplo: "El asistente de la Torre ordena información con redes de este tipo."
  },
  {
    sector: "Sector 3",
    concepto: "Peso",
    definicion: "El número que dice cuánto pasa por cada conexión entre nodos. Es como una perilla.",
    ejemplo: "Cada vez que la máquina se equivoca, esas perillas se giran apenas un poco."
  },
  {
    sector: "Sector 3",
    concepto: "Entrenamiento",
    definicion: "El proceso de aprender: se muestran ejemplos, se mide el error y se corrigen los pesos.",
    ejemplo: "La base necesitó años de entrenamiento antes de entender una orden de voz."
  },
  {
    sector: "Sector 4",
    concepto: "Token",
    definicion: "Un pedacito de texto: puede ser una palabra entera o solo una parte de ella.",
    ejemplo: "El asistente corta lo que escuchás en tokens para poder adivinar el siguiente."
  },
  {
    sector: "Sector 4",
    concepto: "Predicción",
    definicion: "Lo que hace un modelo de lenguaje: adivinar qué pedacito de texto viene después.",
    ejemplo: "Cuando completás una frase en el chat, se escribe token por token."
  },
  {
    sector: "Sector 4",
    concepto: "Tres formas de aprender",
    definicion: "Supervisado (con respuestas), no supervisado (busca patrones) y por refuerzo (prueba con premio o castigo).",
    ejemplo: "Como un alumno con fichas ya corregidas, otro que busca solo los patrones, o como un perro que recibe premios."
  },
  {
    sector: "Sector 5",
    concepto: "Alucinación",
    definicion: "Una respuesta que suena verdadera pero es falsa, porque la máquina adivina y no verifica.",
    ejemplo: "Puede inventar un informe o una cita: por eso hay que revisar lo que dice."
  },
  {
    sector: "Sector 6",
    concepto: "Buen pedido",
    definicion: "Una instrucción que dice qué hacer, para quién, con qué tono y en qué formato. También se llama prompt.",
    ejemplo: "«Actuá como profesor y explicame esto en tres pasos» funciona mejor que un «ayudame»."
  },
  {
    sector: "Todos",
    concepto: "Verificar",
    definicion: "Antes de usar un dato importante, contrastarlo con una fuente confiable.",
    ejemplo: "En las películas el equipo nunca sale con la primera respuesta: chequea los datos antes de actuar."
  },
  {
    sector: "Todos",
    concepto: "Pensamiento crítico",
    definicion: "Usar la IA como ayuda, pero decidir con criterio propio quién tiene razón.",
    ejemplo: "El mejor plan no es el más rápido: es el que se puede explicar con datos reales."
  }
];

const PUNTOS_BASE = 100;
const BONO_PRIMER_INTENTO = 50;
const FOTOS = {
  1: { src: "", pie: "Foto opcional del sector 1" },
  2: { src: "", pie: "Foto opcional del sector 2" },
  3: { src: "", pie: "Foto opcional del sector 3" },
  4: { src: "", pie: "Foto opcional del sector 4" },
  5: { src: "", pie: "Foto opcional del sector 5" },
  6: { src: "", pie: "Foto opcional del sector 6" }
};
const CLAVE_ALMACEN = {
  record: "avengers.record",
  partidas: "avengers.partidas",
  sonido: "avengers.sonido",
  serenidad: "avengers.serenidad",
  descanso: "avengers.descanso"
};
const CLAVE_COOKIE = "avengers_sector";

const audio = {
  contexto: null,
  maestro: null,
  activo: true,

  iniciar() {
    if (this.contexto) {
      if (this.contexto.state === "suspended") this.contexto.resume();
      return;
    }
    const Contexto = window.AudioContext || window.webkitAudioContext;
    if (!Contexto) {
      this.activo = false;
      return;
    }
    try {
      this.contexto = new Contexto();
    } catch (error) {
      this.activo = false;
      return;
    }
    this.maestro = this.contexto.createGain();
    this.maestro.gain.value = 0.45;
    this.maestro.connect(this.contexto.destination);
    this.ambiente();
  },

  ambiente() {
    const filtro = this.contexto.createBiquadFilter();
    filtro.type = "lowpass";
    filtro.frequency.value = 240;

    const gain = this.contexto.createGain();
    gain.gain.value = 0.06;

    [55, 82.5, 110.3].forEach((frecuencia, indice) => {
      const osc = this.contexto.createOscillator();
      osc.type = "sine";
      osc.frequency.value = frecuencia;
      osc.detune.value = indice * 8 - 8;
      osc.connect(filtro);
      osc.start();
    });

    const lfo = this.contexto.createOscillator();
    const lfoGain = this.contexto.createGain();
    lfo.frequency.value = 0.06;
    lfoGain.gain.value = 0.02;
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);
    lfo.start();

    filtro.connect(gain);
    gain.connect(this.maestro);
    this.ambienteGanancia = gain;
  },

  atenuar() {
    if (this.maestro) this.maestro.gain.value = this.activo ? 0.45 : 0;
  },

  tono(frecuencia, duracion, tipo, volumen, retraso) {
    if (!this.activo || !this.contexto) return;
    const inicio = this.contexto.currentTime + (retraso || 0);
    const osc = this.contexto.createOscillator();
    const gain = this.contexto.createGain();
    osc.type = tipo || "sine";
    osc.frequency.setValueAtTime(frecuencia, inicio);
    gain.gain.setValueAtTime(0.0001, inicio);
    gain.gain.exponentialRampToValueAtTime(volumen || 0.12, inicio + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, inicio + duracion);
    osc.connect(gain);
    gain.connect(this.maestro);
    osc.start(inicio);
    osc.stop(inicio + duracion + 0.05);
  },

  clic() {
    this.tono(340, 0.06, "triangle", 0.05);
  },

  exito() {
    [523.25, 659.25, 783.99].forEach((f, i) => this.tono(f, 0.28, "sine", 0.1, i * 0.09));
  },

  error() {
    const suave = document.documentElement.dataset.serenidad === "on";
    this.tono(180, 0.34, suave ? "sine" : "sawtooth", 0.07);
    this.tono(120, 0.4, "sine", 0.06, 0.05);
  },

  sector() {
    this.tono(392, 0.5, "sine", 0.08);
    this.tono(587.33, 0.6, "sine", 0.07, 0.12);
  },

  victoria() {
    [392, 523.25, 659.25, 783.99, 1046.5].forEach((f, i) => this.tono(f, 0.5, "sine", 0.1, i * 0.13));
  }
};

const estado = {
  indice: 0,
  puntos: 0,
  intentos: 0,
  intentosSector: 0
};

const el = {};

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function contieneGrupo(texto, grupo) {
  return grupo.every((palabra) => {
    const escape = palabra.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const borde = palabra.length >= 5 ? "" : "(?:\\s|$)";
    return new RegExp(`(?:^|\\s)${escape}${borde}`, "i").test(texto);
  });
}

function esCorrecta(texto, nivel) {
  if (nivel.respuestas.includes(texto)) return true;
  return nivel.claves.some((grupo) => contieneGrupo(texto, grupo));
}

function leerAlmacen(clave, valorPorDefecto) {
  try {
    const valor = localStorage.getItem(clave);
    return valor === null ? valorPorDefecto : valor;
  } catch (error) {
    return valorPorDefecto;
  }
}

function guardarAlmacen(clave, valor) {
  try {
    localStorage.setItem(clave, String(valor));
  } catch (error) {
    return;
  }
}

function esActivo(valor) {
  return valor === "1" || valor === "true" || valor === true;
}

function guardarCookie(sector) {
  try {
    document.cookie = `${CLAVE_COOKIE}=${sector}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
  } catch (error) {
    return;
  }
}

function leerCookie() {
  const parte = document.cookie.split("; ").find((item) => item.startsWith(`${CLAVE_COOKIE}=`));
  return parte ? parseInt(parte.split("=")[1], 10) || 0 : 0;
}

function mostrar(pantalla) {
  document.querySelectorAll(".pantalla").forEach((nodo) => {
    nodo.hidden = nodo !== pantalla;
    nodo.classList.toggle("pantalla-activa", nodo === pantalla);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function mostrarFeedback(texto, tipo) {
  el.feedback.textContent = texto;
  el.feedback.className = `feedback ${tipo ? `es-${tipo}` : ""}`;
}

function arteNivel(nivel) {
  const foto = FOTOS[nivel.numero];
  if (foto && foto.src) {
    return `<img class="foto" src="${foto.src}" alt="${nivel.alt}">`;
  }
  return nivel.vineta;
}

function pintarMapa() {
  el.mapa.innerHTML = "";
  NIVELES.forEach((nivel, indice) => {
    const item = document.createElement("li");
    item.textContent = indice + 1;
    if (indice < estado.indice) item.classList.add("mapa-hecho");
    if (indice === estado.indice) {
      item.classList.add("mapa-actual");
      item.setAttribute("aria-current", "step");
    }
    el.mapa.appendChild(item);
  });
}

function pintarMarcador() {
  el.marcadorPuntos.textContent = estado.puntos;
  el.marcadorIntentos.textContent = estado.intentos;
}

function cargarSector(indice) {
  const nivel = NIVELES[indice];
  estado.indice = indice;
  estado.intentosSector = 0;

  el.sectorActual.textContent = nivel.numero;
  el.tituloSector.textContent = nivel.titulo;
  el.sectorLugar.textContent = nivel.lugar;
  el.consolaCodigo.textContent = nivel.codigo;
  el.consolaTexto.innerHTML = nivel.situacion;
  el.pistaTexto.textContent = nivel.pista;
  el.vinetaSector.innerHTML = arteNivel(nivel);
  el.vinetaSector.setAttribute("aria-label", nivel.alt);
  const foto = FOTOS[nivel.numero];
  el.vinetaPie.innerHTML =
    `<b>En las películas:</b> ${nivel.ejemplo}` + (foto && foto.src && foto.pie ? ` · ${foto.pie}` : "");
  el.campoRespuesta.value = "";
  el.campoRespuesta.removeAttribute("aria-invalid");
  mostrarFeedback("", null);
  guardarCookie(nivel.numero);

  pintarMapa();
  pintarMarcador();
  el.campoRespuesta.focus({ preventScroll: true });
}

function resolver() {
  const nivel = NIVELES[estado.indice];
  const respuesta = normalizar(el.campoRespuesta.value);

  if (!respuesta) {
    mostrarFeedback("El canal espera una respuesta. Escribí algo para continuar.", "error");
    el.campoRespuesta.setAttribute("aria-invalid", "true");
    audio.error();
    return;
  }

  estado.intentos += 1;
  estado.intentosSector += 1;
  pintarMarcador();

  if (!esCorrecta(respuesta, nivel)) {
    mostrarFeedback(nivel.fallo, "error");
    el.campoRespuesta.setAttribute("aria-invalid", "true");
    el.campoRespuesta.select();
    audio.error();
    return;
  }

  el.campoRespuesta.removeAttribute("aria-invalid");
  const sinFallos = estado.intentosSector === 1;
  estado.puntos += PUNTOS_BASE + (sinFallos ? BONO_PRIMER_INTENTO : 0);
  mostrarFeedback(nivel.exito, "exito");
  pintarMarcador();
  guardarAlmacen(CLAVE_ALMACEN.record, Math.max(Number(leerAlmacen(CLAVE_ALMACEN.record, 0)) || 0, estado.puntos));
  audio.exito();

  const btn = el.formulario.querySelector("button[type='submit']");
  btn.disabled = true;
  el.campoRespuesta.disabled = true;

  setTimeout(() => {
    btn.disabled = false;
    el.campoRespuesta.disabled = false;
    if (estado.indice + 1 < NIVELES.length) {
      audio.sector();
      cargarSector(estado.indice + 1);
    } else {
      finalizar();
    }
  }, 2200);
}

function veredicto() {
  const maximo = NIVELES.length * (PUNTOS_BASE + BONO_PRIMER_INTENTO);
  const proporcion = estado.puntos / maximo;
  if (proporcion >= 1) {
    return {
      titulo: "NÚCLEO EN LÍNEA",
      texto:
        "El asistente de la Torre volvió a responder y esta vez lo hizo con fundamento. La base recupera la " +
        "luz y el archivo queda disponible para el aula. Dominás los conceptos básicos: qué es la IA, qué " +
        "necesita para aprender, cómo se ajusta y por qué hay que verificar."
    };
  }
  if (proporcion >= 0.66) {
    return {
      titulo: "SEÑAL ESTABLE",
      texto:
        "El asistente se encendió, aunque con zonas oscuras. Repasá las tarjetas sobre alucinaciones y buenos " +
        "pedidos, y volvé a intentarlo: la próxima noche sale mejor."
    };
  }
  if (proporcion >= 0.33) {
    return {
      titulo: "SEÑAL PARCIAL",
      texto:
        "El asistente chisporrotea: entiende lo básico pero todavía le falta estructura. Recorré de nuevo los " +
        "sectores con el manual al lado; cada puerta que abras de nuevo suma puntos."
    };
  }
  return {
    titulo: "SIN SEÑAL",
    texto:
      "El núcleo se apagó esta vez. Leé el manual y las tarjetas de aprendizaje, y después " +
      "enfrentá la noche otra vez: no hace falta memorizar, hace falta entender."
  };
}

function finalizar() {
  const resultado = veredicto();
  const recordAnterior = Number(leerAlmacen(CLAVE_ALMACEN.record, 0)) || 0;
  const partidas = (Number(leerAlmacen(CLAVE_ALMACEN.partidas, 0)) || 0) + 1;
  guardarAlmacen(CLAVE_ALMACEN.partidas, partidas);
  guardarAlmacen(CLAVE_ALMACEN.record, Math.max(recordAnterior, estado.puntos));
  guardarCookie(NIVELES.length);

  el.tituloFinal.textContent = resultado.titulo;
  el.finalTexto.textContent = resultado.texto;
  el.finalPuntos.textContent = estado.puntos;
  el.finalRecord.textContent =
    estado.puntos >= recordAnterior && estado.puntos > 0
      ? "¡Nuevo récord de la base!"
      : `Récord de la base: ${Math.max(recordAnterior, estado.puntos)} puntos`;

  audio.victoria();
  mostrar(el.pantallaFinal);
  actualizarInicio();
}

function actualizarInicio() {
  const record = Number(leerAlmacen(CLAVE_ALMACEN.record, 0)) || 0;
  const partidas = Number(leerAlmacen(CLAVE_ALMACEN.partidas, 0)) || 0;
  const sector = Math.min(leerCookie(), NIVELES.length);
  el.datoRecord.textContent = record || "—";
  el.datoPartidas.textContent = partidas;
  el.datoTarjetas.textContent = TARJETAS.length;

  if (sector > 1 && sector < NIVELES.length) {
    el.btnContinuar.textContent = `Continuar · sector ${sector}`;
    el.btnContinuar.hidden = false;
  } else {
    el.btnContinuar.hidden = true;
  }
}

function nuevaPartida(indiceInicial) {
  estado.puntos = 0;
  estado.intentos = 0;
  estado.intentosSector = 0;
  mostrar(el.pantallaJuego);
  cargarSector(indiceInicial || 0);
}

function pintarGaleria() {
  el.galeriaRejilla.innerHTML = "";
  NIVELES.forEach((nivel, indice) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "escena";
    boton.innerHTML = `${arteNivel(nivel)}<span class="escena-pie"><b>${nivel.numero}.</b>${nivel.titulo}</span>`;
    boton.setAttribute("aria-label", `Comenzar por el sector ${nivel.numero}: ${nivel.titulo}`);
    boton.addEventListener("click", () => {
      audio.iniciar();
      nuevaPartida(indice);
    });
    el.galeriaRejilla.appendChild(boton);
  });
}

function pintarTarjetas() {
  el.tarjetasRejilla.innerHTML = "";
  TARJETAS.forEach((tarjeta, indice) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "tarjeta-aprender";
    boton.setAttribute("aria-pressed", "false");
    boton.setAttribute("aria-label", `Tarjeta: ${tarjeta.concepto}. Activar para ver la definición.`);
    boton.dataset.tarjeta = String(indice);
    boton.dataset.sector = tarjeta.sector;

    const frente = document.createElement("span");
    frente.className = "cara cara-frente";
    frente.innerHTML =
      `<span class="cara-numero">Tarjeta ${indice + 1}</span>` +
      `<span class="cara-concepto">${tarjeta.concepto}</span>` +
      `<span class="cara-pie">Tocá para girar</span>`;

    const fondo = document.createElement("span");
    fondo.className = "cara cara-fondo";
    fondo.innerHTML =
      `<span class="cara-texto"><strong class="cara-titulo">${tarjeta.concepto}</strong>` +
      `<span class="cara-definicion">${tarjeta.definicion}</span></span>` +
      `<span class="cara-ejemplo"><b>En las películas:</b> ${tarjeta.ejemplo}</span>` +
      `<span class="cara-sector">${tarjeta.sector}</span>`;

    boton.append(frente, fondo);
    boton.addEventListener("click", () => {
      const girada = boton.classList.toggle("girada");
      boton.setAttribute("aria-pressed", String(girada));
      audio.clic();
    });

    el.tarjetasRejilla.appendChild(boton);
  });
}

function mostrarTarjetaDe(sector) {
  el.tarjetas.hidden = false;
  el.btnTarjetas.setAttribute("aria-expanded", "true");
  const tarjetas = [...el.tarjetasRejilla.querySelectorAll(".tarjeta-aprender")];
  tarjetas.forEach((boton) => {
    boton.classList.remove("girada");
    boton.setAttribute("aria-pressed", "false");
  });
  const objetivo = tarjetas.find((boton) => boton.dataset.sector === `Sector ${sector}`) || tarjetas[0];
  if (objetivo) {
    objetivo.classList.add("girada");
    objetivo.setAttribute("aria-pressed", "true");
    objetivo.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function pintarManual() {
  el.manualRejilla.innerHTML = "";
  NIVELES.forEach((nivel) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";

    const cabecera = document.createElement("div");
    cabecera.className = "tarjeta-cabecera";

    const titulo = document.createElement("h3");
    titulo.className = "tarjeta-titulo";
    titulo.textContent = nivel.titulo;

    const sector = document.createElement("span");
    sector.className = "tarjeta-sector";
    sector.textContent = `Sector ${nivel.numero}`;

    cabecera.append(titulo, sector);

    const teoria = document.createElement("p");
    teoria.textContent = nivel.teoria;

    const ejemplo = document.createElement("p");
    ejemplo.className = "tarjeta-ejemplo";
    ejemplo.innerHTML = `<b>En las películas:</b> ${nivel.ejemplo}`;

    const lista = document.createElement("ul");
    nivel.puntos.forEach((punto) => {
      const item = document.createElement("li");
      item.textContent = punto;
      lista.appendChild(item);
    });

    tarjeta.append(cabecera, teoria, ejemplo, lista);
    el.manualRejilla.appendChild(tarjeta);
  });
}

function alternarPanel(boton, panel) {
  const abrir = panel.hidden;
  panel.hidden = !abrir;
  boton.setAttribute("aria-expanded", String(abrir));
  if (abrir) audio.clic();
}

function abrirZona(zona, boton) {
  const abrir = zona.hidden;
  [el.tarjetas, el.manual].forEach((otra) => {
    otra.hidden = true;
  });
  el.btnTarjetas.setAttribute("aria-expanded", "false");
  el.btnManual.setAttribute("aria-expanded", "false");
  zona.hidden = !abrir;
  boton.setAttribute("aria-expanded", String(abrir));
  if (abrir) {
    audio.clic();
    zona.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function aplicarModo(clave, checkbox) {
  const activo = checkbox.checked;
  if (activo) {
    document.documentElement.dataset[clave] = "on";
  } else {
    delete document.documentElement.dataset[clave];
  }
  guardarAlmacen(CLAVE_ALMACEN[clave], activo ? 1 : 0);
}

function iniciarPreferencias() {
  audio.activo = esActivo(leerAlmacen(CLAVE_ALMACEN.sonido, "1"));
  el.btnSonido.setAttribute("aria-pressed", String(audio.activo));
  el.iconoSonido.textContent = audio.activo ? "♪" : "✕";

  el.modoSerenidad.checked = esActivo(leerAlmacen(CLAVE_ALMACEN.serenidad, "0"));
  el.modoDescanso.checked = esActivo(leerAlmacen(CLAVE_ALMACEN.descanso, "0"));
  if (el.modoSerenidad.checked) document.documentElement.dataset.serenidad = "on";
  if (el.modoDescanso.checked) document.documentElement.dataset.descanso = "on";
}

function cachear() {
  el.inicio = document.getElementById("pantalla-inicio");
  el.juego = document.getElementById("pantalla-juego");
  el.final = document.getElementById("pantalla-final");
  el.pantallaJuego = el.juego;
  el.pantallaFinal = el.final;

  el.sectorActual = document.getElementById("sector-actual");
  el.tituloSector = document.getElementById("titulo-sector");
  el.sectorLugar = document.getElementById("sector-lugar");
  el.consolaCodigo = document.getElementById("consola-codigo");
  el.consolaTexto = document.getElementById("consola-texto");
  el.pistaTexto = document.getElementById("pista-texto");
  el.vinetaSector = document.getElementById("vineta-sector");
  el.vinetaPie = document.getElementById("vineta-pie");
  el.mapa = document.getElementById("mapa-sectores");
  el.marcadorPuntos = document.getElementById("marcador-puntos");
  el.marcadorIntentos = document.getElementById("marcador-intentos");
  el.campoRespuesta = document.getElementById("campo-respuesta");
  el.formulario = document.getElementById("form-respuesta");
  el.feedback = document.getElementById("feedback");

  el.tituloFinal = document.getElementById("titulo-final");
  el.finalTexto = document.getElementById("final-texto");
  el.finalPuntos = document.getElementById("final-puntos");
  el.finalRecord = document.getElementById("final-record");

  el.datoRecord = document.getElementById("dato-record");
  el.datoPartidas = document.getElementById("dato-partidas");
  el.datoTarjetas = document.getElementById("dato-tarjetas");
  el.galeriaRejilla = document.getElementById("galeria-rejilla");
  el.btnEmpezar = document.getElementById("btn-empezar");
  el.btnContinuar = document.getElementById("btn-continuar");
  el.btnReiniciar = document.getElementById("btn-reiniciar");
  el.btnAbandonar = document.getElementById("btn-abandonar");
  el.btnTarjetaSector = document.getElementById("btn-tarjeta-sector");

  el.tarjetas = document.getElementById("tarjetas");
  el.tarjetasRejilla = document.getElementById("tarjetas-rejilla");
  el.manual = document.getElementById("manual");
  el.manualRejilla = document.getElementById("manual-rejilla");

  el.btnTarjetas = document.getElementById("btn-tarjetas");
  el.btnManual = document.getElementById("btn-manual");
  el.btnAccesibilidad = document.getElementById("btn-accesibilidad");
  el.accesibilidad = document.getElementById("accesibilidad");

  el.btnSonido = document.getElementById("btn-sonido");
  el.iconoSonido = document.getElementById("icono-sonido");
  el.modoSerenidad = document.getElementById("modo-serenidad");
  el.modoDescanso = document.getElementById("modo-descanso");
}

function iniciarEventos() {
  el.btnEmpezar.addEventListener("click", () => {
    audio.iniciar();
    nuevaPartida(0);
  });

  el.btnContinuar.addEventListener("click", () => {
    audio.iniciar();
    nuevaPartida(Math.min(leerCookie() - 1, NIVELES.length - 1));
  });

  el.btnReiniciar.addEventListener("click", () => nuevaPartida(0));

  el.btnAbandonar.addEventListener("click", () => {
    guardarCookie(estado.indice);
    mostrar(el.inicio);
    actualizarInicio();
  });

  el.formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    audio.iniciar();
    resolver();
  });

  el.campoRespuesta.addEventListener("input", () => {
    el.campoRespuesta.removeAttribute("aria-invalid");
  });

  el.btnSonido.addEventListener("click", () => {
    audio.activo = !audio.activo;
    audio.iniciar();
    audio.atenuar();
    guardarAlmacen(CLAVE_ALMACEN.sonido, audio.activo ? 1 : 0);
    el.btnSonido.setAttribute("aria-pressed", String(audio.activo));
    el.iconoSonido.textContent = audio.activo ? "♪" : "✕";
    if (audio.activo) audio.clic();
  });

  el.btnTarjetas.addEventListener("click", () => abrirZona(el.tarjetas, el.btnTarjetas));
  el.btnManual.addEventListener("click", () => abrirZona(el.manual, el.btnManual));
  el.btnAccesibilidad.addEventListener("click", () => alternarPanel(el.btnAccesibilidad, el.accesibilidad));
  document.getElementById("btn-cerrar-accesibilidad").addEventListener("click", () =>
    alternarPanel(el.btnAccesibilidad, el.accesibilidad)
  );

  document.getElementById("btn-cerrar-manual").addEventListener("click", () => abrirZona(el.manual, el.btnManual));
  document.getElementById("btn-cerrar-tarjetas").addEventListener("click", () => abrirZona(el.tarjetas, el.btnTarjetas));
  document.getElementById("btn-ir-tarjetas").addEventListener("click", () => abrirZona(el.tarjetas, el.btnTarjetas));
  document.getElementById("btn-revision").addEventListener("click", () => abrirZona(el.manual, el.btnManual));
  document.getElementById("btn-revision-tarjetas").addEventListener("click", () => abrirZona(el.tarjetas, el.btnTarjetas));

  el.btnTarjetaSector.addEventListener("click", () => mostrarTarjetaDe(estado.indice + 1));

  document.getElementById("btn-voltar-tarjetas").addEventListener("click", (evento) => {
    const tarjetas = [...el.tarjetasRejilla.querySelectorAll(".tarjeta-aprender")];
    const todasGiradas = tarjetas.every((boton) => boton.classList.contains("girada"));
    tarjetas.forEach((boton) => {
      boton.classList.toggle("girada", !todasGiradas);
      boton.setAttribute("aria-pressed", String(!todasGiradas));
    });
    evento.currentTarget.textContent = todasGiradas ? "Ver todas" : "Ocultar todas";
  });

  el.modoSerenidad.addEventListener("change", () => {
    aplicarModo("serenidad", el.modoSerenidad);
    audio.clic();
  });

  el.modoDescanso.addEventListener("change", () => aplicarModo("descanso", el.modoDescanso));

  document.getElementById("btn-reiniciar-ajustes").addEventListener("click", () => {
    el.modoSerenidad.checked = false;
    el.modoDescanso.checked = false;
    delete document.documentElement.dataset.serenidad;
    delete document.documentElement.dataset.descanso;
    guardarAlmacen(CLAVE_ALMACEN.serenidad, 0);
    guardarAlmacen(CLAVE_ALMACEN.descanso, 0);
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key !== "Escape") return;
    if (!el.accesibilidad.hidden) {
      alternarPanel(el.btnAccesibilidad, el.accesibilidad);
    } else if (!el.manual.hidden) {
      abrirZona(el.manual, el.btnManual);
    } else if (!el.tarjetas.hidden) {
      abrirZona(el.tarjetas, el.btnTarjetas);
    }
  });
}

function iniciar() {
  cachear();
  iniciarPreferencias();
  pintarGaleria();
  pintarTarjetas();
  pintarManual();
  iniciarEventos();
  actualizarInicio();
  mostrar(el.inicio);
}

document.addEventListener("DOMContentLoaded", iniciar);
