import About from '../components/About/About.jsx'
import WebDev from '../components/WebDev/WebDev.jsx'
import DigitalArt from '../components/DigitalArt/DigitalArt.jsx'

const Routes = [
    // Route - index (use About)
    {
        path: '/',
        exact: true,
        name: 'About',
        components: {
            content: About
        }
    },
    // Route - Web Development
    {
        path: '/webdev',
        name: 'Web Development',
        components: {
            content: WebDev
        }
    },
    // Route - Digital Art
    {
        path: '/digital-art',
        name: 'Digital Art',
        components: {
            content: DigitalArt
        }
    }
] // /export default const Routes

export default Routes
