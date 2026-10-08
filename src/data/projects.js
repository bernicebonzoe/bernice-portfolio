import heroPhoto from '../assets/hero.jpg'
import mobileCardImg from '../assets/mobile-card.webp'
import webCardImg from '../assets/web-card.webp'
import bernicareCover from '../assets/projects/bernicare_pharma.webp'
import kudilinkCover from '../assets/projects/kudilink.webp'
import novaflixCover from '../assets/projects/novaflix.webp'
import inventoryCover from '../assets/projects/medicine_inventory_manager.webp'
import adherenceCover from '../assets/projects/medical_adherence_app.webp'
import eraAxisCover from '../assets/projects/era_axis.webp'
import lightmeterCover from '../assets/projects/digital_light_meter.webp'
import oscillatorCover from '../assets/projects/timer_555_oscillator.webp'
import esp32Cover from '../assets/projects/esp32_sensor_station.webp'
import bigoCover from '../assets/projects/runtime_and_big_o_lab.webp'

export const HERO_IMAGE = heroPhoto
export const EMAIL = 'bonzoebernice@gmail.com'
export const GITHUB = 'https://github.com/bernicebonzoe'

export const PROJECT_TYPES = ['Software project', 'Web design', 'Mobile app', 'Electronics', 'Something else']

export const CATEGORIES = ['All', 'Mobile', 'Web', 'Electronics', 'Software']

const GRAD = {
  Mobile: 'linear-gradient(135deg,#a8552f,#2a1a12)',
  Web: 'linear-gradient(135deg,#2c5e8f,#0d1f2e)',
  Electronics: 'linear-gradient(135deg,#c9a227,#1c1a0c)',
  Software: 'linear-gradient(135deg,#1f6f63,#0d2429)',
}

const DEFAULTS = {
  stage: 'Completed',
  stack: 'Add your tools here',
  cover: '',
  overview: 'Explain in three or four sentences what this project is, who it helps and why you built it.',
  steps: [
    { title: 'Understand', note: 'The problem' },
    { title: 'Design', note: 'The screens' },
    { title: 'Build', note: 'The features' },
    { title: 'Test', note: 'Make it better' },
  ],
  shots: [
    { src: '', title: 'Main screen', text: 'Describe this screen and what the user can do on it.' },
    { src: '', title: 'Key feature', text: 'Describe the feature you are proudest of.' },
  ],
  highlights: ['What problem it solves', 'What I am proud of', 'What was hard and how I solved it'],
}

const mk = (p) => ({ ...DEFAULTS, tag: p.category, grad: GRAD[p.category], summary: p.short, ...p })

export const PROJECTS = [
  mk({
    id: 'bernicare',
    category: 'Mobile',
    title: 'BerniCare Pharma',
    type: 'Mobile app',
    stage: 'Learning project',
    stack: 'Flutter, Dart',
    cover: bernicareCover,
    short: 'A pharmacy app that makes finding and managing medicines simple.',
  }),
  mk({
    id: 'kudilink',
    category: 'Mobile',
    title: 'KudiLink',
    type: 'Mobile app',
    stage: 'Learning project',
    stack: 'Flutter, Dart',
    cover: kudilinkCover,
    short: 'A mobile app I built with Flutter while learning.',
  }),
  mk({
    id: 'novaflix',
    category: 'Mobile',
    title: 'NovaFlix',
    type: 'Mobile app',
    stack: 'Flutter, Dart',
    cover: novaflixCover,
    short: 'A streaming app with a gold and green design and several screens.',
  }),
  mk({
    id: 'inventory',
    category: 'Mobile',
    title: 'Medicine Inventory Manager',
    type: 'Mobile app',
    stack: 'Flutter, SQLite',
    cover: inventoryCover,
    short: 'An app for keeping track of medicine stock, saved on the device with SQLite.',
  }),
  mk({
    id: 'adherence',
    category: 'Mobile',
    title: 'Medication Adherence App',
    type: 'Mobile app',
    stage: 'Learning project',
    stack: 'Flutter, Firebase',
    cover: adherenceCover,
    short: 'Helps people take their medicines on time and alerts a caregiver by SMS when doses are missed.',
  }),
  mk({
    id: 'eraaxis',
    category: 'Web',
    title: 'ERA Axis Portfolio',
    type: 'Web project',
    stack: 'React, React Router',
    cover: eraAxisCover,
    short: 'My first React portfolio, built during the ERA Axis web development bootcamp.',
  }),
  mk({
    id: 'lightmeter',
    category: 'Electronics',
    title: 'Digital Light Meter',
    type: 'Electronics project',
    stack: 'LDR, 555 timer, ADC, 7-segment display',
    cover: lightmeterCover,
    short: 'A circuit that measures light and shows the reading on a digital display.',
    summary: 'A light-measuring circuit that senses brightness with an LDR and shows the reading on a 7-segment display.',
    overview: 'Explain what the circuit measures, how someone would use it and why you built it.',
    steps: [
      { title: 'Sense', note: 'LDR reads light' },
      { title: 'Convert', note: 'ADC makes numbers' },
      { title: 'Time', note: '555 timer' },
      { title: 'Display', note: '7-segment reading' },
    ],
    shots: [
      { src: '', title: 'Circuit diagram', text: 'Explain how light changes the signal at each stage.' },
      { src: '', title: 'Built prototype', text: 'Describe the finished board and what each part does.' },
      { src: '', title: 'Display in action', text: 'Show the reading in bright and dim light.' },
    ],
  }),
  mk({
    id: 'oscillator',
    category: 'Electronics',
    title: '555 Timer Oscillator',
    type: 'Electronics project',
    stack: '555 timer, Tinkercad',
    cover: oscillatorCover,
    short: 'A 555 timer circuit that makes a steady blinking signal, built and tested in Tinkercad.',
  }),
  mk({
    id: 'esp32',
    category: 'Electronics',
    title: 'ESP32 Sensor Station',
    type: 'Electronics project',
    stage: 'Explored',
    stack: 'ESP32',
    cover: esp32Cover,
    short: 'An environmental sensor station that reads real-world data with an ESP32.',
  }),
  mk({
    id: 'bigo',
    category: 'Software',
    title: 'Runtime and Big-O Lab',
    type: 'Software project',
    stack: 'C++',
    cover: bigoCover,
    short: 'A C++ lab that measures how long code takes to run and compares it with Big-O analysis.',
  }),
]

export const SKILLS = [
  { icon: '</>', title: 'Software', text: 'Clean code that turns real problems into working tools.', grad: 'linear-gradient(135deg,#1f6f63,#0d2429)' },
  { icon: '◧', title: 'Web', text: 'Fast, responsive sites that look sharp on any screen.', img: webCardImg, grad: 'linear-gradient(135deg,#2c5e8f,#0d1f2e)' },
  { icon: '▯', title: 'Mobile', text: 'Flutter apps designed to fit right in your pocket.', img: mobileCardImg, grad: 'linear-gradient(135deg,#a8552f,#2a1a12)' },
  { icon: '⚡', title: 'Electronics', text: 'Circuits that sense, measure and show the real world.', grad: 'linear-gradient(135deg,#c9a227,#1c1a0c)' },
]

export const TOOLS = [
  { icon: '◆', name: 'Flutter' },
  { icon: '⚛', name: 'React' },
  { icon: '{ }', name: 'JavaScript' },
  { icon: '☁', name: 'Firebase' },
  { icon: '⚡', name: 'Circuit design' },
  { icon: '⌥', name: 'Git & GitHub' },
  { icon: '🐍', name: 'Python' },
  { icon: '⚙', name: 'C++' },
  { icon: '🛢', name: 'MySQL' },
]