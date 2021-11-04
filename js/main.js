gsap.registerPlugin(ScrollTrigger);

// HERO HOMEPAGE TIMELINE
const heroTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.homepage',
    start: 'top top', 
    pin: true,
    scrub: true,
    // markers: true,
  }
})

heroTl.to('.tagline-container', {
  y: -100,
  duration: 25
})

heroTl.to('.controllers-img', {
  y: -200,
  duration: 25
}, '-=25')

heroTl.to('.headset-img', {
  y: -30,
  duration: 25
}, '-=25')

heroTl.to('.headset-img', {
  scale: 4,
  duration: 15,
  x: '-8%',
  y: '55%'
})

heroTl.to('.tagline-container', {
  opacity: 0,
  duration: 4,
  x: -300
}, '-=15')

heroTl.to('.controllers-img', {
  opacity: 0,
  duration: 4,
  y: 200
}, '-=15')

heroTl.to('.black-overlay', {
  opacity: 1,
  duration: 5,
}, '-=4')

heroTl.to('.headset-img', {
  opacity: 0,
  scale: 1,
  duration: 5,
}, '-=0')

heroTl.to('.playstation-icon', {
  opacity: 0,
  duration: 4,
}, '-=22')

// HEADSET FEATURES TIMELINE
const headsetFeatTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.headset-features',
    start: 'top top',
    pin: true,
    scrub: 1,
    // markers: true,
  }
})

// pano image opacity
headsetFeatTl.from('.pano-image', {opacity: 0, duration: 1})

// overlay opacity
headsetFeatTl.from('.pano-overlay', {opacity: 0, duration: 1}, '-=1')

// extend scroll length
headsetFeatTl.to('.pano-overlay', {duration: 5})


// headset features variables

const panoEnterBtn = document.querySelector('.pano-enter')

const panoOverlay = document.querySelector('.pano-overlay')

const foveatedRenderingBtn = document.querySelector('.headset-features-button')

const foveatedRendering = document.querySelector('.foveated-rendering')

const visualsBtn = document.querySelector('.visuals-button')

const visuals = document.querySelector('.visuals')

const streamlinedBtn = document.querySelector('.streamlined-button')

const streamlined = document.querySelector('.streamlined-dialog')

const panoExitBtn = document.querySelector('.pano-exit')


// enter pano

panoEnterBtn.addEventListener('click', () => {
  // pano fade transition
  gsap.to(panoOverlay, {opacity: 0, onComplete: () => {
    panoOverlay.style.display = 'none'
  }})

  // show button
  foveatedRenderingBtn.classList.toggle('show')

  // show button
  visualsBtn.classList.toggle('show')

  // show button
  streamlinedBtn.classList.toggle('show')

  // show exit button
  panoExitBtn.classList.toggle('show')
})

// exit pano

panoExitBtn.addEventListener('click', () => {
  // pano fade transition
  panoOverlay.style.display = 'flex'
  gsap.to(panoOverlay, {opacity: 1})

  // hide button
  foveatedRenderingBtn.classList.toggle('show')

  // hide button
  visualsBtn.classList.toggle('show')

  // hide button
  streamlinedBtn.classList.toggle('show')

  // hide exit button
  panoExitBtn.classList.toggle('show')


  // hide info on exit
  foveatedRendering.classList.remove('show')

  visuals.classList.remove('show')

  streamlined.classList.remove('show')


  // reset rotation of buttons
  foveatedRenderingBtn.classList.remove('rotate-45deg')

  visualsBtn.classList.remove('rotate-45deg')

  streamlinedBtn.classList.remove('rotate-45deg')
})


// headset features info

foveatedRenderingBtn.addEventListener('click', () => {
  // show info
  foveatedRendering.classList.toggle('show')

  // rotate button 45 degrees
  foveatedRenderingBtn.classList.toggle('rotate-45deg') 
})

visualsBtn.addEventListener('click', () => {
  // show info
  visuals.classList.toggle('show')

  // rotate button 45 degrees
  visualsBtn.classList.toggle('rotate-45deg')
})

streamlinedBtn.addEventListener('click', () => {
  // show info
  streamlined.classList.toggle('show')

  // rotate button 45 degrees
  streamlinedBtn.classList.toggle('rotate-45deg')
})




// CONTROLLERS TIMELINE
const controllersTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.controllers',
    start: 'top top',
    pin: true,
    scrub: 1,
    // markers: true,
  }
})

controllersTl.to('.controllers-header', {
  y: -150,
  duration: 10
})

controllersTl.to('.controller-left-img', {
  y: -150,
  duration: 10
}, '-=10')

controllersTl.to('.controller-right-img', {
  y: -50,
  duration: 10
}, '-=10')

controllersTl.to('.controller-left-button', {
  y: -50,
  duration: 10
}, '-=10')

controllersTl.to('.controller-right-button', {
  y: -40,
  duration: 10
}, '-=10')

controllersTl.to('.elastic-position', {
  y: -350,
  duration: 10
}, '-=10')

// haptic feedback hover event listener

const hapticFeedbackInfoHide = document.querySelector('.haptic-feedback')

const hapticFeedbackBtn = document.querySelector('.controller-left-button')

const hapticFeedbackImg = document.querySelector('.controller-left-img')


hapticFeedbackBtn.addEventListener('mouseover', () => {
  // controller and button disappears
  hapticFeedbackTl.play()

  // info is shown  
  hapticFeedbackInfoHide.classList.toggle('haptic-feedback-show')

  // pulsing animation is disabled
  hapticFeedbackBtn.style.animation = 'none' 

  // haptic shaking animation plays
  shakeTl.restart()
})

hapticFeedbackBtn.addEventListener('mouseleave', () => {
  // controller and button reappears
  hapticFeedbackTl.reverse()

  // info is hidden
  hapticFeedbackInfoHide.classList.toggle('haptic-feedback-show')

  // pulsing animtion is enabled
  hapticFeedbackBtn.style.animation = 'controller-button-pulse 2s infinite'
  
  // haptic shaking animation plays
  shakeTl.pause(0)
})

// haptic feedback animation

const hapticFeedbackTl = gsap.timeline()

hapticFeedbackTl.pause()

hapticFeedbackTl.to(".controller-left-img", {
  ease: "power2.in",
  scale: 0.95,
  duration: 0.2
})

hapticFeedbackTl.to(".controller-right-img", {
  ease: "power2.in",
  duration: 0.4,
  opacity: 0,
},'-=0.4')

hapticFeedbackTl.to(".controller-right-button", {
  opacity: 0,
  scale: 0,
  duration: 0.2,
},'-=0.4')

// haptic feedback shake animation

const shakeTl = gsap.timeline({
  repeat: -1,
})

shakeTl.pause()

shakeTl.to('.controller-left-img',0.1,{rotation:5})
shakeTl.to('.controller-left-img',3,{
  rotation:0,
  ease:Elastic.easeOut.config(0.9,0.1)
});

// adaptive triggers hover event listener

const svg = document.querySelector('#elastic')

const adaptiveTriggersInfoHide = document.querySelector('.adaptive-triggers')

const adaptiveTriggersBtn = document.querySelector('.controller-right-button')


adaptiveTriggersBtn.addEventListener('mouseover', () => {
    // controller animation
    adaptiveTriggersTl.play()

    // show info
    adaptiveTriggersInfoHide.classList.toggle('adaptive-triggers-show')
    
    // svg animation appears
    svg.classList.toggle('active')

    // button pulse stop
    adaptiveTriggersBtn.style.animation = 'none'
})

adaptiveTriggersBtn.addEventListener('mouseleave', () => {
    // controller animation
    adaptiveTriggersTl.reverse()

    // show info
    adaptiveTriggersInfoHide.classList.toggle('adaptive-triggers-show')
    
    // svg animation appears
    svg.classList.toggle('active')

    // button pulse starts
    adaptiveTriggersBtn.style.animation = 'controller-button-pulse 2s infinite'
})


// adaptive triggers svg animation timeline

const adaptiveTriggersTl = gsap.timeline()

adaptiveTriggersTl.pause()

adaptiveTriggersTl.to(".controller-right-img", {
  ease: "power2.in",
  scale: 0.95,
  duration: 0.2
})

adaptiveTriggersTl.to(".controller-left-img", {
  ease: "power2.in",
  duration: 0.4,
  scale: 1,
  opacity: 0,
}, '-=0.4')

adaptiveTriggersTl.to(".controller-left-button", {
  opacity: 0,
  scale: 0,
  duration: 0.2,
},'-=0.4')