import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Performance',
    img: "/img/performance.png",
    imgTitle: 'Performance',
    imgSubTitle: 'Framerates up and latency down',
    description: (
      <>
        Windows is notoriously known for its less-than-ideal performance, especially when compared to its predecessors.
        <br/>
        ReviOS attempts to speed up the system, by eliminating redundant tasks and services running in the background, without sacrificing on stability.
        <br/>
        <br/>
        Better yet, framerate stability is greatly improved, meaning your FPS is less prone to fluctuation.
        <br/>
        Benchmarks comparing stock Windows 10 and ReviOS can be found <a href='https://imgur.com/a/v72g8vA'>here</a>.
      </>
    ),
  },
  {
    title: 'Privacy',
    img: "/img/unintrusive.png",
    imgTitle: 'Unintrusive',
    imgSubTitle: 'Elimination of surveillance',
    description: (
      <>
        Microsoft's Windows operating system is infamous for its privacy-intrusive behaviour towards consumers, which is why ReviOS takes the privacy aspect into serious account.
        <br/>
        A plethora of telemetry backdoors have been terminated including, but is not limited to: UWP/AppX Apps, Windows Update and Cortana.
        <br/>
        Data collection and reporting increase the system load, and as a bonus, that too is severely reduced, hereby promoting performance.
      </>
    ),
  },
  {
    title: 'Stability',
    img: "/img/dependable.png",
    imgTitle: 'Dependable',
    imgSubTitle: 'Stable, compatible and reliable',
    description: (
      <>
        Based on a multi-layered approach, securing retained and comprehensive stability.
        <br/>
        Reinforcing performance and privacy by stripping out bloatware that halts the system, and cutting down on the amount of components - resulting in reduced OS size.
        <br/>
        ReviOS attempts to enhance what can be enhanced, leaving the subjective things to the user. A reliable, yet flexible baseline to build upon.
        <br/>
        Add, modify and extend to your heart's content.
      </>
    ),
  },
  {
    title: 'Collective',
    img: "/img/community.png",
    imgTitle: 'Community',
    imgSubTitle: 'Apes Together Strong',
    description: (
      <>
        Revision isn't only about ReviOS, it's about the thriving community behind it. A community that help push the boundaries of optimization and aid the vision of a more inspiring digital experience.
        <br/>
        <br/>
        <a href='https://discord.gg/962y4pU'>Join our Discord</a> for exclusive ReviOS support and much more.
      </>
    ),
  },
];

function Feature({img, imgTitle, title, imgSubTitle, description}) {
  return (
    <section className='margin-vert--lg'>
			<div className="container">
				<div className="row">
          <div className={clsx("col col--3")}>
					  <div className="text--center" style={{alignItems: 'center'}}>
              <img className={styles.featureImg} src={img}/>
              <h2 className={styles.imgTitle}>{imgTitle}</h2>
              <h4 className={styles.imgSubTitle}>{imgSubTitle}</h4>
            </div>
					</div>
					<div className={clsx("col col--9")}>
						<div className="text--left">
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
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
