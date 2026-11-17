
import React from 'react';
import { FileCheck } from 'lucide-react';
import { LegalPageLayout } from '../components/legal/LegalPageLayout';

const sections = [
  {
    id: 'aceptacion',
    title: 'Aceptación de los términos',
    content: (
      <p>
        El acceso y uso de este sitio web implica la lectura de estos términos.
        Si no estás de acuerdo con sus disposiciones, te recomendamos no
        utilizar las funcionalidades del sitio. La consulta de información
        pública no constituye por sí misma la contratación de un servicio.
      </p>
    ),
  },
  {
    id: 'identificacion',
    title: 'Identificación del proveedor',
    content: (
      <>
        <p>
          DSI CYBERSECURITY es la marca comercial bajo la cual se presentan
          soluciones tecnológicas vinculadas con la seguridad de la
          información y la continuidad del negocio.
        </p>
        <p className="mt-4">
          La identificación de la persona jurídica responsable deberá
          completarse antes de publicar estos términos:
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
    id: 'servicios',
    title: 'Descripción de los servicios',
    content: (
      <>
        <p>
          La información publicada en este sitio tiene carácter informativo
          y presenta las líneas generales de trabajo de DSI CYBERSECURITY,
          que pueden comprender:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Protección y respaldo de información.</li>
          <li>Soluciones de ciberseguridad empresarial.</li>
          <li>Continuidad operativa y recuperación.</li>
          <li>Gestión y gobierno de seguridad de la información.</li>
        </ul>
        <p className="mt-4">
          El alcance, entregables, cronograma, responsabilidades, requisitos
          técnicos y condiciones económicas de cada servicio se establecerán
          en la propuesta, contrato u orden de servicio aceptada por las partes.
        </p>
      </>
    ),
  },
  {
    id: 'solicitudes',
    title: 'Solicitudes y propuestas comerciales',
    content: (
      <p>
        El envío de un formulario, correo o mensaje no garantiza la aceptación
        de una solicitud ni constituye una contratación. Las propuestas
        comerciales estarán sujetas a evaluación, disponibilidad, alcance
        técnico y aceptación expresa de las condiciones acordadas.
      </p>
    ),
  },
  {
    id: 'obligaciones',
    title: 'Responsabilidades del usuario',
    content: (
      <>
        <p>Al utilizar este sitio, el usuario se compromete a:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Proporcionar información veraz y actualizada.</li>
          <li>No utilizar el sitio para actividades ilícitas.</li>
          <li>No intentar acceder sin autorización a sistemas o recursos.</li>
          <li>No introducir código malicioso ni afectar el funcionamiento del sitio.</li>
          <li>Respetar los derechos de propiedad intelectual aplicables.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'propiedad',
    title: 'Propiedad intelectual',
    content: (
      <p>
        Los textos, elementos gráficos, identidad visual, logotipos y demás
        contenidos publicados en este sitio se encuentran protegidos por las
        normas aplicables de propiedad intelectual. Su reproducción,
        distribución o modificación con fines distintos a los permitidos por
        la ley requiere la autorización de sus respectivos titulares.
      </p>
    ),
  },
  {
    id: 'confidencialidad',
    title: 'Información confidencial',
    content: (
      <p>
        El envío de una consulta a través del sitio no sustituye un acuerdo
        específico de confidencialidad. Antes de compartir credenciales,
        información sensible, documentación interna o detalles técnicos
        críticos, las partes deberán coordinar un canal apropiado y, cuando
        corresponda, formalizar los compromisos de confidencialidad necesarios.
      </p>
    ),
  },
  {
    id: 'disponibilidad',
    title: 'Disponibilidad del sitio',
    content: (
      <p>
        Se procura mantener el sitio disponible y actualizado; sin embargo,
        pueden producirse interrupciones por mantenimiento, actualizaciones,
        incidencias técnicas o causas ajenas al control del operador. La
        información publicada puede modificarse para reflejar cambios en
        los servicios o contenidos.
      </p>
    ),
  },
  {
    id: 'limitaciones',
    title: 'Alcance y limitaciones',
    content: (
      <p>
        El contenido del sitio es de carácter general y no constituye por sí
        solo una auditoría, diagnóstico técnico, asesoría legal ni garantía
        de resultados. Las recomendaciones y medidas aplicables a una
        organización dependerán de su contexto, infraestructura, riesgos y
        alcance contratado.
      </p>
    ),
  },
  {
    id: 'terceros',
    title: 'Enlaces a sitios de terceros',
    content: (
      <p>
        El sitio puede incluir enlaces a plataformas o páginas externas.
        Estos recursos son administrados por terceros y se rigen por sus
        propias condiciones y políticas. La inclusión de un enlace no implica
        necesariamente respaldo o responsabilidad sobre sus contenidos.
      </p>
    ),
  },
  {
    id: 'modificaciones',
    title: 'Modificaciones de los términos',
    content: (
      <p>
        DSI CYBERSECURITY podrá actualizar estos términos cuando resulte
        necesario por cambios operativos, comerciales o normativos. Las
        modificaciones se publicarán en esta página e indicarán la fecha
        de actualización. Las condiciones de contratos vigentes se regirán
        por lo que las partes hayan acordado, sin perjuicio de las normas
        imperativas aplicables.
      </p>
    ),
  },
  {
    id: 'legislacion',
    title: 'Legislación aplicable',
    content: (
      <p>
        Estos términos se interpretarán de acuerdo con las leyes de la
        República del Perú, en lo que resulte aplicable. Cualquier controversia
        derivada de una contratación se atenderá conforme a los mecanismos
        y condiciones establecidos en el acuerdo correspondiente y la
        legislación vigente.
      </p>
    ),
  },
];

export default function TerminosPage() {
  return (
    <LegalPageLayout
      eyebrow="Condiciones de uso"
      title="Términos del Servicio"
      description="Conoce las condiciones generales que regulan el acceso a nuestro sitio web, las solicitudes de información y la relación con nuestros servicios tecnológicos."
      icon={<FileCheck className="h-4 w-4" />}
      sections={sections}
    />
  );
}
