import React from 'react'
import { motion } from 'framer-motion';
import "./Progress.scss"
import { textVariant } from '../../Utils/motion';

export default function Progress() {
    return (
        <motion.div
            initial="hidden"
            whileInView="show">
            <motion.div variants={textVariant()}
                className="container-progressbars">
                <div className='container-progressbars-completed'>
                    <div className="progressbar">
                        <svg className="progressbar-svg">
                            <circle cx="80" cy="80" r="70" className="progressbar-svg-circle circle-react shadow-react"> </circle>
                        </svg>
                        <span className="progressbar-text shadow-react">React.js</span>
                    </div>

                    <div className="progressbar">
                        <svg className="progressbar-svg">
                            <circle cx="80" cy="80" r="70" className="progressbar-svg-circle circle-html shadow-html"> </circle>
                        </svg>
                        <span className="progressbar-text shadow-html">HTML</span>
                    </div>

                    <div className="progressbar">
                        <svg className="progressbar-svg">
                            <circle cx="80" cy="80" r="70" className="progressbar-svg-circle circle-css shadow-css"> </circle>
                        </svg>
                        <span className="progressbar-text shadow-css">CSS</span>
                    </div>

                    <div className="progressbar">
                        <svg className="progressbar-svg">
                            <circle cx="80" cy="80" r="70" className="progressbar-svg-circle circle-scss shadow-scss"> </circle>
                        </svg>
                        <span className="progressbar-text shadow-scss">SCSS</span>
                    </div>

                    <div className="progressbar">
                        <svg className="progressbar-svg">
                            <circle cx="80" cy="80" r="70" className="progressbar-svg-circle circle-js shadow-js"> </circle>
                        </svg>
                        <span className="progressbar-text shadow-js">JavaScript</span>
                    </div>
                </div>
                <div className="progressbar">
                    <svg className="progressbar-svg">
                        <circle cx="80" cy="80" r="70" className="progressbar-svg-circle circle-vue shadow-vue"> </circle>
                    </svg>
                    <span className="progressbar-text shadow-vue">Vue.js</span>
                </div>
                <div className="progressbar">
                    <svg className="progressbar-svg">
                        <circle cx="80" cy="80" r="70" className="progressbar-svg-circle circle-python shadow-python"> </circle>
                    </svg>
                    <span className="progressbar-text shadow-python">Python</span>
                </div>
                <div className="progressbar">
                    <svg className="progressbar-svg">
                        <circle cx="80" cy="80" r="70" className="progressbar-svg-circle circle-angular shadow-angular"> </circle>
                    </svg>
                    <span className="progressbar-text shadow-angular">Angular.js</span>
                </div>


                <div className="progressbar">
                    <svg className="progressbar-svg">
                        <circle cx="80" cy="80" r="70" className="progressbar-svg-circle circle-node shadow-node"> </circle>
                    </svg>
                    <span className="progressbar-text shadow-node">Node.js</span>
                </div>



            </motion.div>
        </motion.div>
    )
}
