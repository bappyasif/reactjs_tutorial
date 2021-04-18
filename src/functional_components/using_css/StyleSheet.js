import React from 'react';
import { InLineStylingCss } from './InLineStylingCss';
// importing stylesheet
import './someStyle.css';
// CSS modules importing stylesheets
import './appStyles.css';
import moduleStyle from './appStyles.module.css';

export function StyleSheet(props) {
    let styleCheck = props.primary ? 'primary' : '';
    return (
        <div>
           <h2>StyleSheet, CSS</h2>
           {/* direct use of stylesheet, Regular Styling */}
           <h4 className='primary'>Using Styling</h4>
           {/* we can also use conditional styling as well with element variable */}
           <h4 className={styleCheck}>Conditional Styling</h4>
           {/* we can also use multiple css class styling with template literals syntax */}
           <h4 className={`${styleCheck} font-xl`}>Multiple Styling</h4>

           {/* Inline Styling */}
           <InLineStylingCss />

           {/* styling with CSS modules */}
           {/* regular class name by importing from css file is available for all children components and thus locally scoped */}
           <h4 className='errorStyle'>Error Styled</h4>
           {/* module styling is not locally scoped likes of inline styling, thus it can not mistakenly used in other child componenets */}
           <h4 className={moduleStyle.successStyle}>Success Styled</h4>
        </div>
    )
}
