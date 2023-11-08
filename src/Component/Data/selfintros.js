import SelfIntro from '../AboutMe/SelfIntro';
import About from '../AboutMe/About';
import Skills from '../AboutMe/Skills/Skills';
import React from 'react';

const selfintros = [
    {
        tab: "<Intro />",
        content: <SelfIntro/>
    },
    {
        tab: "<About />",
        content: <About/>
    },
    {
        tab: "<Skills />",
        content: <Skills/>
    }
];

export default selfintros;