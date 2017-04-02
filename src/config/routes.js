// Pages
import About from '../components/About/About.jsx'
import WebDev from '../components/WebDev/WebDev.jsx'
    // Portfolio projects
    import TestProject from '../components/TestProject/TestProject.jsx'
import DigitalArt from '../components/DigitalArt/DigitalArt.jsx'

const Routes = [
    // Route - index (use About)
    {
        path: '/',
        exact: true,
        name: 'About',
        // name: 'Lorem',
        components: {
            content: About
        }
    },
    // Route - Web Development
    {
        path: '/webdev',
        name: 'Web Development',
        // name: 'Asperiores eius',
        components: {
            content: WebDev
        },
        routes: [
            {
                path: '/test-project',
                name: 'Test Project',
                components: {
                    content: TestProject
                }
            }
        ]
    },
    // Route - Digital Art
    {
        path: '/digital-art',
        name: 'Digital Art',
        // name: 'Totam eligendi',
        components: {
            content: DigitalArt
        }
    }
] // /export default const Routes

export default Routes
