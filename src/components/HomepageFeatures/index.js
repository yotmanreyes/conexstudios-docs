import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gestión Integral',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Conexstudios centraliza el control de estudios, reportes oficiales, gestión docente, representantes y administración en una sola plataforma.
      </>
    ),
  },
  {
    title: 'Enlace con el Ministerio',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Genera planillas y reportes exigidos por el Ministerio de Educación de Venezuela de forma automática y segura.
      </>
    ),
  },
  {
    title: 'Conéctate con nosotros',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <a href="https://conexstudios.com" target="_blank" rel="noopener noreferrer">Sitio web oficial</a><br />
        <a href="https://instagram.com/conexstudios" target="_blank" rel="noopener noreferrer">Instagram</a><br />
        <a href="https://facebook.com/conexstudios" target="_blank" rel="noopener noreferrer">Facebook</a><br />
        <a href="mailto:info@conexstudios.com">info@conexstudios.com</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
