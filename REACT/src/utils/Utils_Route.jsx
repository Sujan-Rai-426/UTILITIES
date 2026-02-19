import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Image_Stack_Usage } from '../Import_Lists'
import Viewport_Reveal_Usage from './Viewport_Reveal/Viewport_Reveal_Usage'
import Scroll_To_SectionID_Usage from './Scroll_To_SectionID/Scroll_To_SectionID_Usage'

const Utils_Route = () => {
    return (
        <Routes>
            <Route exact path="/image-stack" element={ <Image_Stack_Usage /> } />
            <Route exact path="/viewport-reveal" element={ <Viewport_Reveal_Usage /> } />
            <Route exact path="/scroll-to-section-id" element={ <Scroll_To_SectionID_Usage /> } />
        </Routes >
    )
}

export default Utils_Route