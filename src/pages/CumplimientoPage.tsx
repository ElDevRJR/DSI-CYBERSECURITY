
import React from 'react';
import { Scale } from 'lucide-react';
import { LegalPageLayout } from '../components/legal/LegalPageLayout';

const sections = [
  {
    id: 'compromiso',
    title: 'Nuestro enfoque de cumplimiento',
    content: (
      <p>
        En DSI CYBERSECURITY entendemos que la seguridad de la información
        requiere considerar tanto los riesgos tecnológicos como las
        responsabilidades legales y organizativas de cada empresa. Nuestro
        enfoque busca integrar buenas prácticas de seguridad, protección
        de información y gestión responsable de los riesgos en función de
        las necesidades de cada organización.
      </p>
    ),
  },
  {
    id: 'datos-personales',
    title: 'Protección de datos personales',
    content: (
      <>
        <p>
          En el contexto peruano, la protección de datos personales se
          encuentra regulada principalmente por:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Ley N.º 29733, Ley de Protección de Datos Personales.
          </li>
          <li>
            Decreto Supremo N.º 016-2024-JUS, que aprueba su Reglamento.
          </li>
        </ul>
        <p className="mt-4">
          Estas disposiciones establecen criterios y obligaciones para el
          tratamiento adecuado de datos personales. Su aplicación concreta
          depende del rol que desempeñe cada organización y de las
          características del tratamiento que realice.
        </p>
        <a
          href="https://www.gob.pe/institucion/anpd/normas-legales/6554453-n-016-2024-jus"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-semibold text-[#176BFF] hover:underline"
        >
          Consultar el Reglamento oficial
        </a>
      </>
    ),
  },
  {
    id: 'seguridad',
    title: 'Seguridad de la información',
    content: (
      <p>
        La gestión de seguridad de la información comprende la identificación
        de activos, evaluación de riesgos, definición de controles y revisión
        de medidas destinadas a proteger la confidencialidad, integridad y
        disponibilidad de la información. Las medidas apropiadas deben
        determinarse según el contexto, el nivel de exposición y las
        necesidades de cada organización.
      </p>
    ),
  },
  {
    id: 'continuidad',
    title: 'Continuidad del negocio',
    content: (
      <p>
        La continuidad del negocio implica prepararse para responder ante
        interrupciones que puedan afectar procesos, servicios o recursos
        críticos. Su gestión puede incluir análisis de impacto, identificación
        de dependencias, estrategias de recuperación, respaldos y
        procedimientos de respuesta. La implementación dependerá del alcance
        definido con cada cliente.
      </p>
    ),
  },
  {
    id: 'buenas-practicas',
    title: 'Buenas prácticas y marcos de referencia',
    content: (
      <>
        <p>
          Dependiendo del proyecto y de los objetivos del cliente, pueden
          considerarse estándares y marcos de referencia reconocidos en
          seguridad de la información y continuidad, tales como:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>ISO/IEC 27001: sistemas de gestión de seguridad de la información.</li>
          <li>ISO 22301: sistemas de gestión de continuidad del negocio.</li>
          <li>
            NIST Cybersecurity Framework: marco de referencia para gestionar
            riesgos de ciberseguridad.
          </li>
        </ul>
        <p className="mt-4">
          La mención de estos marcos no significa que DSI CYBERSECURITY o sus
          clientes cuenten con una certificación, acreditación o evaluación
          formal bajo ellos. Su adopción debe definirse y verificarse en cada
          caso.
        </p>
      </>
    ),
  },
  {
    id: 'responsabilidades',
    title: 'Responsabilidades de cada organización',
    content: (
      <p>
        El cumplimiento normativo depende de las obligaciones aplicables a
        cada organización, de sus actividades y del tratamiento de
        información que realice. La contratación de servicios tecnológicos
        no transfiere automáticamente las responsabilidades legales del
        cliente ni sustituye la evaluación de sus obligaciones específicas.
      </p>
    ),
  },
  {
    id: 'evaluacion',
    title: 'Evaluación y mejora continua',
    content: (
      <p>
        Las necesidades de seguridad y cumplimiento pueden cambiar con el
        tiempo debido a nuevas amenazas, tecnologías, procesos y disposiciones
        legales. Por ello, las medidas y recomendaciones deben revisarse
        periódicamente y ajustarse al contexto de cada organización.
      </p>
    ),
  },
  {
    id: 'alcance',
    title: 'Alcance de esta información',
    content: (
      <p>
        El contenido de esta página tiene fines informativos y no constituye
        una certificación, declaración de conformidad, auditoría ni asesoría
        legal. La determinación de obligaciones y el cumplimiento efectivo
        deben evaluarse considerando las circunstancias particulares de cada
        organización y, cuando corresponda, con asesoría especializada.
      </p>
    ),
  },
];

export default function CumplimientoPage() {
  return (
    <LegalPageLayout
      eyebrow="Responsabilidad y transparencia"
      title="Cumplimiento Normativo"
      description="La seguridad empresarial también implica responsabilidad. Conoce los principios normativos y marcos de referencia que orientan nuestro enfoque de protección y gestión de riesgos."
      icon={<Scale className="h-4 w-4" />}
      sections={sections}
    />
  );
}
