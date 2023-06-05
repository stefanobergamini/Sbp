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
                className="container__progressbars">

                <div className="progressbar">
                    <svg className="progressbar__svg">
                        <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-react shadow-react"> </circle>
                    </svg>
                    <span className="progressbar__text shadow-react">React.js</span>
                </div>

                <div className="progressbar">
                    <svg className="progressbar__svg">
                        <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-html shadow-html"> </circle>
                    </svg>
                    <span className="progressbar__text shadow-html">HTML</span>
                </div>

                <div className="progressbar">
                    <svg className="progressbar__svg">
                        <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-css shadow-css"> </circle>
                    </svg>
                    <span className="progressbar__text shadow-css">CSS</span>
                </div>

                <div className="progressbar">
                    <svg className="progressbar__svg">
                        <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-scss shadow-scss"> </circle>
                    </svg>
                    <span className="progressbar__text shadow-scss">SCSS</span>
                </div>

                <div className="progressbar">
                    <svg className="progressbar__svg">
                        <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-js shadow-js"> </circle>
                    </svg>
                    <span className="progressbar__text shadow-js">JavaScript</span>
                </div>
                <div className="progressbar">
                    <svg className="progressbar__svg">
                        <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-vue shadow-vue"> </circle>
                    </svg>
                    <span className="progressbar__text shadow-vue">Vue.js</span>
                </div>
                <div className="progressbar">
                    <svg className="progressbar__svg">
                        <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-angular shadow-angular"> </circle>
                    </svg>
                    <span className="progressbar__text shadow-angular">Angular.js</span>
                </div>


                <div className="progressbar">
                    <svg className="progressbar__svg">
                        <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-node shadow-node"> </circle>
                    </svg>
                    <span className="progressbar__text shadow-node">Node.js</span>
                </div>


                <div className="progressbar">
                    <svg className="progressbar__svg">
                        <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-python shadow-python"> </circle>
                    </svg>
                    <span className="progressbar__text shadow-python">Python</span>
                </div>
            </motion.div>
        </motion.div>
    )
}
