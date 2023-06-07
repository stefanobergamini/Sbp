import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../Utils/techs';
import SectionWrapper from '../../Utils/SectionWrapper';
import download from '../../Assets/imgs/download.png';
import downloadHover from '../../Assets/imgs/downloadHover.png';
import resume from '../../Assets/imgs/resume.png';
import { textVariant } from '../../Utils/motion';
import pdf from '../../Assets/Stefano_Bergamini_Poletto.pdf'
import './Timeline.scss'

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: `#333`, color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
        iconStyle={{ background: `${experience.iconBg}`, color: '#fff' }}
        icon={
            <div className="img-icon">
                <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="icon"
                />
            </div>
        }
    >
        <h3 className="vertical-timeline-element-title">{experience.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{experience.company_name}</h4>
        <p>{experience.about}</p>
        <p className='vertical-timeline-date'>{experience.date}</p>
    </VerticalTimelineElement>
);

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className='subtitle'>
                    Histórico até aqui
                </p>
                <h2 className='title'>
                    EXPERIÊNCIA PROFISSIONAL
                </h2>
            </motion.div>

            <div className="vertical-timeline-block">
                <VerticalTimeline className="vertical-timeline-custom-line">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: `#333`, color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                        iconStyle={{ background: `#222222`, color: '#fff' }}
                        icon={
                            <div className="img-icon">
                                <img
                                    src={resume}
                                    alt="resume"
                                    className="icon"
                                />
                            </div>
                        }
                    >
                        <button
                            className="button-download"
                            onClick={() =>
                                window.open(
                                    pdf, //paste the link to your resume here
                                    '_blank'
                                )
                            }
                            onMouseOver={() => {
                                document
                                    .querySelector('.download-img')
                                    .setAttribute('src', downloadHover);
                            }}
                            onMouseOut={() => {
                                document
                                    .querySelector('.download-img')
                                    .setAttribute('src', download);
                            }}>
                            Meu Currículo
                            <img
                                src={download}
                                alt="download"
                                className="download-img"
                            />
                        </button>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, 'work');

