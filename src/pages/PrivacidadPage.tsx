
import React from 'react';
import { Mail, ShieldCheck } from 'lucide-react';
import { LegalPageLayout } from '../components/legal/LegalPageLayout';

const sections = [
  {
    id: 'responsable',
    title: 'Responsable del tratamiento',
    content: (
      <>
        <p>
          DSI CYBERSECURITY es una marca orientada a brindar soluciones
          tecnológicas relacionadas con la protección de información,
          ciberseguridad, continuidad operativa y gestión de seguridad.
        </p>
        <p className="mt-4">
          Para efectos de esta política, el responsable legal del tratamiento
          deberá identificarse con su razón social, RUC y domicilio:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Razón social: [COMPLETAR RAZÓN SOCIAL].</li>
          <li>RUC: [COMPLETAR RUC].</li>
          <li>Domicilio: [COMPLETAR DOMICILIO FISCAL].</li>
        </ul>
      </>
    ),
  },
  {
    id: 'datos',
    title: 'Información que podemos recopilar',
    content: (
      <>
        <p>
          Podemos recibir información que una persona nos proporcione
          voluntariamente al comunicarse con nosotros, solicitar una
          evaluación o consultar por nuestros servicios.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Datos de identificación, como nombres y apellidos.</li>
          <li>Datos de contacto, como correo electrónico y teléfono.</li>
          <li>Información profesional o empresarial, como empresa y cargo.</li>
          <li>Contenido de consultas, solicitudes y mensajes enviados.</li>
          <li>
            Información técnica básica de navegación, cuando el sitio utilice
            herramientas que la recopilen.
          </li>
        </ul>
        <p className="mt-4">
          No solicitamos que se envíen contraseñas, credenciales, claves de
          acceso ni información sensible a través de los formularios públicos
          del sitio.
        </p>
      </>
    ),
  },
  {
    id: 'finalidad',
    title: 'Finalidad del tratamiento',
    content: (
      <>
        <p>La información recibida podrá utilizarse para:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Atender consultas y solicitudes de información.</li>
          <li>Coordinar reuniones, evaluaciones o demostraciones.</li>
          <li>Preparar propuestas comerciales solicitadas.</li>
          <li>Dar seguimiento a comunicaciones relacionadas con los servicios.</li>
          <li>Gestionar la relación comercial o contractual, cuando corresponda.</li>
          <li>Cumplir obligaciones legales aplicables.</li>
        </ul>
        <p className="mt-4">
          Cualquier finalidad adicional que requiera consentimiento será
          informada previamente y se solicitará la autorización correspondiente
          cuando la normativa lo exija.
        </p>
      </>
    ),
  },
  {
    id: 'base-legal',
    title: 'Base legal y consentimiento',
    content: (
      <p>
        El tratamiento de datos personales se realizará conforme a la
        legislación peruana aplicable, incluyendo la Ley N.º 29733, Ley de
        Protección de Datos Personales, y su Reglamento aprobado por el
        Decreto Supremo N.º 016-2024-JUS. Cuando corresponda, se solicitará
        el consentimiento libre, previo, expreso, informado e inequívoco del
        titular, sin perjuicio de los demás supuestos legalmente permitidos.
      </p>
    ),
  },
  {
    id: 'conservacion',
    title: 'Conservación de la información',
    content: (
      <p>
        Los datos personales se conservarán durante el tiempo necesario para
        cumplir las finalidades para las que fueron recopilados, atender
        solicitudes, mantener relaciones comerciales o contractuales y
        cumplir obligaciones legales. Una vez que ya no sean necesarios,
        serán eliminados, anonimizados o bloqueados según corresponda y de
        acuerdo con la normativa aplicable.
      </p>
    ),
  },
  {
    id: 'seguridad',
    title: 'Seguridad de la información',
    content: (
      <p>
        DSI CYBERSECURITY reconoce la importancia de proteger la información
        frente a accesos no autorizados, pérdida, alteración o divulgación
        indebida. Las medidas técnicas y organizativas aplicables deberán
        definirse según la naturaleza de los datos, los riesgos del tratamiento
        y las características de cada sistema. Ningún medio de transmisión o
        almacenamiento puede considerarse absolutamente infalible.
      </p>
    ),
  },
  {
    id: 'terceros',
    title: 'Proveedores y terceros',
    content: (
      <p>
        Para operar los canales de comunicación o prestar determinados
        servicios, podría ser necesario utilizar proveedores tecnológicos
        que procesen información por cuenta del responsable. En esos casos,
        su participación deberá limitarse a las finalidades autorizadas y
        sujetarse a las obligaciones de confidencialidad y protección de
        datos que correspondan. La información no deberá comercializarse
        ni compartirse para fines ajenos a los informados.
      </p>
    ),
  },
  {
    id: 'derechos',
    title: 'Derechos del titular de los datos',
    content: (
      <>
        <p>
          Los titulares pueden ejercer los derechos reconocidos por la
          legislación aplicable, entre ellos los derechos de acceso,
          rectificación, cancelación y oposición (ARCO), así como los demás
          derechos que correspondan.
        </p>
        <p className="mt-4">
          Para presentar una solicitud, puedes comunicarte a través del
          siguiente canal:
        </p>
        <a
          href="mailto:contacto@dsicybersecurity.com"
          className="mt-3 inline-flex items-center gap-2 font-semibold text-[#176BFF] hover:underline"
        >
          <Mail className="h-4 w-4" />
          contacto@dsicybersecurity.com
        </a>
        <p className="mt-4">
          La solicitud deberá permitir identificar al titular y precisar el
          derecho que desea ejercer. Su atención se realizará dentro de los
          plazos y condiciones establecidos por la normativa.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies y tecnologías similares',
    content: (
      <p>
        Este sitio podría utilizar cookies o tecnologías similares para
        permitir su funcionamiento, recordar preferencias o comprender el
        uso de sus páginas. Las cookies no esenciales deberán gestionarse
        conforme a la normativa aplicable y a las opciones de consentimiento
        que correspondan. Esta sección deberá ajustarse a las herramientas
        que efectivamente se encuentren instaladas en el sitio.
      </p>
    ),
  },
  {
    id: 'actualizaciones',
    title: 'Actualizaciones de esta política',
    content: (
      <p>
        Esta política podrá actualizarse cuando existan cambios en los
        servicios, canales de atención, prácticas de tratamiento o normativa
        aplicable. La versión vigente estará disponible en esta página,
        indicando su fecha de actualización.
      </p>
    ),
  },
];

export default function PrivacidadPage() {
  return (
    <LegalPageLayout
      eyebrow="Protección de datos"
      title="Privacidad de la Información"
      description="La información es un activo esencial. Conoce los criterios que orientan el tratamiento y la protección de los datos personales compartidos con DSI CYBERSECURITY."
      icon={<ShieldCheck className="h-4 w-4" />}
      sections={sections}
    />
  );
}
