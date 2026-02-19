// utilis/Scroll_To_SectionID.jsx


export const Scroll_To_SectionID = (e, id, navigate, location, targetPath = '/') => {
    if (e && e.preventDefault) e.preventDefault();

    const element = document.getElementById(id);

    // CASE 1: We are on the target page already (element exists)
    if (element) {
        const offset = 70;
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    } 
    // CASE 2: We need to go to a different URL first
    else {
        navigate(targetPath, { state: { scrollToSection: id } });
    }
};

// Global listener for cross-page scrolling
if (typeof window !== "undefined") {
    const handleCheckScroll = () => {
        setTimeout(() => {
            // React Router stores state in window.history.state.usr
            const state = window.history.state?.usr; 
            if (state && state.scrollToSection) {
                const element = document.getElementById(state.scrollToSection);
                if (element) {
                    const offset = 70;
                    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                    // Clean up state so it doesn't scroll again on refresh
                    window.history.replaceState({ ...window.history.state, usr: {} }, document.title);
                }
            }
        }, 400); // Slight delay to ensure DOM is painted
    };

    window.addEventListener('popstate', handleCheckScroll);
    window.addEventListener('click', (e) => {
        if (e.target.closest('.nav-item') || e.target.closest('button')) {
            handleCheckScroll();
        }
    });
}

/* ========================================================================
                    USAGE EXAMPLE in NAVBAR.JSX
======================================================================== */

// import { useLocation, useNavigate, Link } from 'react-router-dom';
// import { Scroll_To_SectionID } from './utilis/Scroll_To_SectionID';

// const Navbar = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     // Helper to keep JSX clean
//     const handleScroll = (e, id, path) => Scroll_To_SectionID(e, id, navigate, location, path);
    
//     return (
//         <nav>
//             {/* CASE A: Scrolling on the SAME PAGE */}
//             <button onClick={(e) => handleScroll(e, 'FEATURES')}>
//                 Features
//             </button>

//             {/* CASE B: Navigating to HOME and then scrolling */}
//             <Link 
//                 to="/" 
//                 onClick={(e) => handleScroll(e, 'HERO_SECTION', '/')}
//             >
//                 Home
//             </Link>

//             {/* CASE C: Navigating to a DIFFERENT URL and then scrolling */}
//             <button 
//                 onClick={(e) => handleScroll(e, 'SUJAN', '/utils/viewport-reveal')}
//             >
//                 Reveal Sujan
//             </button>
//         </nav>
//     );
// };