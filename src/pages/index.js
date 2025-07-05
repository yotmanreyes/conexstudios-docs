import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Conexstudios - Plataforma de Gestión Escolar
        </Heading>
        <p className="hero__subtitle">
          <strong>Solución integral</strong> para la administración educativa en Venezuela.<br />
          Control de estudios, planillas oficiales, gestión docente, representantes y más en una sola plataforma.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/estructura">
            Explorar Documentación 📚
          </Link>
          <Link
            className="button button--outline button--lg margin-left--md"
            href="https://conexstudios.com/demo">
            Solicitar Demo Gratis 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  // Structured data for rich results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Conexstudios",
    "operatingSystem": "Web, Windows, Linux, macOS",
    "applicationCategory": "EducationalApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Sistema de Gestión Escolar completo para instituciones educativas en Venezuela",
    "provider": {
      "@type": "Organization",
      "name": "Conexstudios",
      "sameAs": "https://conexstudios.com"
    }
  };

  return (
    <Layout
      title="Inicio | Conexstudops - Plataforma de Gestión Escolar"
      description="Sistema de Gestión Escolar completo con control de estudios, planillas oficiales, gestión docente y más para instituciones educativas en Venezuela">
      
      {/* Add structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className="padding-vert--xl">
          <div className="container text--center">
            <h2>¿Por qué elegir Conexstudios?</h2>
            <div className="row">
              <div className="col col--4 padding-horiz--md">
                <h3>✅ Planillas Oficiales</h3>
                <p>Genera reportes y planillas oficiales exigidas por el MPPE de manera rápida y sencilla.</p>
              </div>
              <div className="col col--4 padding-horiz--md">
                <h3>📊 Control de Estudios</h3>
                <p>Gestiona calificaciones, inasistencias y rendimiento estudiantil de forma eficiente.</p>
              </div>
              <div className="col col--4 padding-horiz--md">
                <h3>👨‍🏫 Gestión Docente</h3>
                <p>Administra el personal docente, sus horarios, asignaturas y carga académica.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
