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
import './Timeline.scss'

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
    </VerticalTimelineElement>
);

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className='title'>
                    What I've done so far
                </p>
                <h2 className='subtitle'>
                    Work Experience.
                </h2>
            </motion.div>

            <div className="vertical-timeline-block">
                <VerticalTimeline className="vertical-timeline-custom-line">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={
                            <div className="flex justify-center items-center w-full h-full">
                                <img
                                    src={resume}
                                    alt="resume"
                                    className="w-[45%] h-[45%] object-contain"
                                />
                            </div>
                        }
                    >
                        <button
                            className="button-download"
                            onClick={() =>
                                window.open(
                                    'resume link', //paste the link to your resume here
                                    '_blank'
                                )
                            }
                            onMouseOver={() => {
                                document
                                    .querySelector('.download-btn')
                                    .setAttribute('src', downloadHover);
                            }}
                            onMouseOut={() => {
                                document
                                    .querySelector('.download-btn')
                                    .setAttribute('src', download);
                            }}>
                            MY RESUME
                            <img
                                src={download}
                                alt="download"
                                className="download-btn"
                            />
                        </button>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, 'work');

