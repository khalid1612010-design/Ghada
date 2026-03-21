/**
 * Quran Teacher Landing Page - JavaScript & React Components
 * Using React without JSX for maximum performance.
 */

// 1. Translations Dictionary
const translations = {
    ar: {
        name: "غادة",
        jobTitle: "معلمة قرآن وتجويد",
        aboutTitle: "عن المعلمة",
        aboutMe: "معلمة قرآن كريم متخصصة في تدريس النساء والأطفال. أقدم دروساً أونلاين بأسلوب مبسط ومحبب للقرآن وعلومه.",
        personalInfoTitle: "معلومات شخصية",
        countryLabel: "الدولة:",
        countryValue: "مصر",
        maritalStatusLabel: "الحالة الاجتماعية:",
        maritalStatusValue: "متزوجة",
        educationTitle: "التعليم",
        educationItem: "كلية اللغات والترجمة (قسم اللغة الألمانية)",
        certificatesTitle: "الشهادات",
        cert1: "إجازة في القرآن الكريم (بروايتي حفص وورش)",
        cert2: "إجازة في التجويد والمقدمة الجزرية",
        experienceTitle: "الخبرة المهنية",
        exp1: "١٠ سنوات خبرة في تدريس القرآن الكريم أوفلاين",
        exp2: "٤ سنوات خبرة في التدريس أونلاين للعرب والألمان",
        skillsTitle: "المهارات",
        skill1: "تدريس النساء والأطفال",
        skill2: "الصبر والتبسيط",
        emailText: "إرسال إيميل",
        whatsappText: "واتساب",
        whatsappBtnText: "تواصل عبر واتساب",
        langSwitcher: "English",
        themeDark: "الوضع الليلي",
        themeLight: "الوضع النهاري",
        whatsappMsg: "السلام عليكم، أريد الاستفسار عن دروس القرآن"
    },
    en: {
        name: "Ghada",
        jobTitle: "Quran and Tajweed Teacher",
        aboutTitle: "About",
        aboutMe: "A dedicated Quran teacher specializing in teaching women and children. I offer online lessons using a simplified and engaging method for the Quran and its sciences.",
        personalInfoTitle: "Personal Info",
        countryLabel: "Country:",
        countryValue: "Egypt",
        maritalStatusLabel: "Marital Status:",
        maritalStatusValue: "Married",
        educationTitle: "Education",
        educationItem: "Faculty of Languages and Translation (German Department)",
        certificatesTitle: "Certifications",
        cert1: "Ijazah in the Holy Quran (Hafs and Warsh narrations)",
        cert2: "Ijazah in Tajweed and Al-Muqaddimah Al-Jazariyyah",
        experienceTitle: "Experience",
        exp1: "10 years of experience in offline Quran teaching",
        exp2: "4 years of online teaching experience for Arabs and Germans",
        skillsTitle: "Skills",
        skill1: "Teaching women and children",
        skill2: "Patience and simplification",
        emailText: "Send Email",
        whatsappText: "WhatsApp",
        whatsappBtnText: "Contact via WhatsApp",
        langSwitcher: "Deutsch",
        themeDark: "Dark Mode",
        themeLight: "Light Mode",
        whatsappMsg: "Peace be upon you, I would like to inquire about Quran classes."
    },
    de: {
        name: "Ghada",
        jobTitle: "Koran- und Tadschwid-Lehrerin",
        aboutTitle: "Über mich",
        aboutMe: "Koranlehrerin, spezialisiert auf den Unterricht für Frauen und Kinder. Ich biete Online-Unterricht mit einer einfachen und motivierenden Methode für den Koran und seine Wissenschaften an.",
        personalInfoTitle: "Persönliche Daten",
        countryLabel: "Land:",
        countryValue: "Ägypten",
        maritalStatusLabel: "Familienstand:",
        maritalStatusValue: "Verheiratet",
        educationTitle: "Bildung",
        educationItem: "Fakultät für Sprachen und Übersetzung (Abteilung Deutsch)",
        certificatesTitle: "Zertifikate",
        cert1: "Idschāza (Lehrerlaubnis) für den Heiligen Koran (nach den Lesarten Hafs und Warsch)",
        cert2: "Idschāza in Tadschwid und Al-Muqaddimah Al-Dschazariyyah",
        experienceTitle: "Erfahrung",
        exp1: "10 Jahre Erfahrung im Präsenzunterricht (Koran)",
        exp2: "4 Jahre Erfahrung im Online-Unterricht für Araber und Deutsche",
        skillsTitle: "Fähigkeiten",
        skill1: "Unterrichten von Frauen und Kindern",
        skill2: "Geduld und Vereinfachung",
        emailText: "E-Mail senden",
        whatsappText: "WhatsApp",
        whatsappBtnText: "Kontakt über WhatsApp",
        langSwitcher: "عربي",
        themeDark: "Dunkelmodus",
        themeLight: "Heller Modus",
        whatsappMsg: "As-salamu alaykum, ich möchte mich über den Koranunterricht informieren."
    }
};

// Global State
let currentLang = localStorage.getItem('lang') || 'ar';
let isDarkMode = localStorage.getItem('theme') === 'dark';

const WA_NUMBER = "201091317870";

const e = React.createElement;

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.title = translations[lang]['name'] + " | " + translations[lang]['jobTitle'];

    const heroWaBtn = document.getElementById('hero-wa-btn');
    if (heroWaBtn) {
        const msg = translations[lang].whatsappMsg;
        heroWaBtn.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    }
}

function applyTheme(dark) {
    if (dark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

// 3. React Components matching Glassmorphism Controls
function HeaderActions() {
    const [lang, setLang] = React.useState(currentLang);
    const [theme, setTheme] = React.useState(isDarkMode);

    const toggleLang = () => {
        const nextLang = lang === 'ar' ? 'en' : (lang === 'en' ? 'de' : 'ar');
        setLang(nextLang);
        currentLang = nextLang;
        applyLanguage(nextLang);
    };

    const toggleTheme = () => {
        const nextTheme = !theme;
        setTheme(nextTheme);
        isDarkMode = nextTheme;
        applyTheme(nextTheme);
    };

    const currentLangLabel = translations[lang].langSwitcher;
    const themeLabel = theme ? translations[lang].themeLight : translations[lang].themeDark;
    const themeIcon = theme ? "fas fa-sun" : "fas fa-moon";

    return e('div', { className: 'controls' },
        e('div', { className: 'left-controls' },
            e('button', { className: 'glass-btn', onClick: toggleLang, title: "Change Language" },
                e('i', { className: 'fas fa-globe' }),
                e('span', null, currentLangLabel)
            ),
            e('button', { className: 'glass-btn', onClick: toggleTheme, title: "Change Theme" },
                e('i', { className: themeIcon }),
                e('span', null, themeLabel)
            )
        )
    );
}

function FloatingWhatsApp() {
    const handleClick = (ev) => {
        ev.preventDefault();
        const msg = translations[currentLang].whatsappMsg;
        const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
    };

    return e('a', { 
        className: 'floating-wa-btn', 
        href: '#', 
        onClick: handleClick,
        title: "WhatsApp" 
    },
        e('i', { className: 'fab fa-whatsapp' })
    );
}

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    applyTheme(isDarkMode);

    const headerRootNode = document.getElementById('react-header-root');
    const waRootNode = document.getElementById('react-whatsapp-root');
    
    if (headerRootNode) {
        const root = ReactDOM.createRoot(headerRootNode);
        root.render(e(HeaderActions));
    }
    
    if (waRootNode) {
        const waRoot = ReactDOM.createRoot(waRootNode);
        waRoot.render(e(FloatingWhatsApp));
    }

    const scrollTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.remove('hidden');
        } else {
            scrollTopBtn.classList.add('hidden');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Intersection Observer for Scroll Animations matching Shaimaa's Vercel site
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));

    // Initial populate animations for things already in viewport
    setTimeout(() => {
        document.querySelectorAll('.section-reveal').forEach(el => {
            const rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 100);
});
