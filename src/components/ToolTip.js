import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const ToolTip = ({ content, position = `top`, wait = 0, children }) => (
    <Tippy
        content={content}
        placement={position}
        theme={`dark`}
        delay={[wait, 0]}
    >
        <span className={`w-max cursor-help`}>{children}</span>
    </Tippy>
)

export default ToolTip
