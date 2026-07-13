/**
 * IS-ANAS Website Features Script
 * Minimalist vanilla JavaScript dictionary translation execution.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Elements Selection
    const languageSelect = document.getElementById('lang');
    const contactForm = document.getElementById('contactForm');
    
    // Mobile Drawer Elements
    const menuToggle = document.getElementById('menuToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebar = document.getElementById('sidebar');
    const mobileLinks = document.querySelectorAll('.sidebar-links a');

    // Forms Form-groups nodes to switch placeholders
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    /**
     * Complete Translation Profiles Object Data Matrix
     */
    const translations = {
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_services: "Services",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_welcome: "Hello I'am <br><span>Anas Abdeldayem</span>",
            hero_desc: "Hello, I’m Anas. I’m a teacher and web developer passionate about building inspiring educational experiences and innovative digital projects.",
            hero_btn: "About More",
            about_title_1: "About",
            about_title_2: "Me",
            about_subtitle: "This Is My Skills & Languages",
            about_text: "I am a passionate Front-End Developer and a second-year student in the Business Information Systems (BIS) department at Higher Institute for Computers and Information and Management Technology – Tanta. I enjoy transforming ideas into interactive and seamless digital experiences that combine strong performance with modern visual design.",
            skills_title_1: "Skills &",
            skills_title_2: "Languages",
            skills_subtitle: "These Are My Skills & Languages",
            services_title_1: "My",
            services_title_2: "Services",
            services_subtitle: "These Are My Services",
            service_1_title: "Custom Website Development",
            service_1_desc: "Building professional websites from scratch using HTML, CSS, and JavaScript with clean, scalable, and well-structured code.",
            service_2_title: "Responsive Web Design",
            service_2_desc: "Creating fully responsive websites that work seamlessly across all devices (mobile, tablet, and desktop) to ensure the best user experience.",
            service_3_title: "UI Implementation",
            service_3_desc: "Converting Figma or Adobe XD designs into pixel-perfect, fully functional websites with attention to detail.",
            service_4_title: "Performance Optimization",
            service_4_desc: "Improving website speed and performance to deliver a smooth and fast browsing experience.",
            service_5_title: "Landing Page Development",
            service_5_desc: "Designing and developing high-converting landing pages focused on achieving business goals.",
            service_6_title: "Website Redesign",
            service_6_desc: "Modernizing and redesigning outdated websites to enhance usability, and overall performance.",
            stat_1: "Programming Languages",
            stat_2: "Projects Completed",
            stat_3: "Courses Completed",
            projects_title_1: "My",
            projects_title_2: "Projects",
            projects_subtitle: "These Are My Projects",
            project_prefix: "Project:",
            project_view: "View Project",
            project_1_desc: "This Is Eslamic Portfolio For Elsheikh Ahmed Magdy",
            project_2_desc: "This Is IS-ANAS Programming Platform For Students",
            project_3_desc: "This Is E-Commerce Website For BMW",
            contact_title_1: "Contact",
            contact_title_2: "Me",
            contact_subtitle: "This Is My Contact Information",
            contact_phone: "Phone",
            contact_email: "Email",
            contact_address: "Address",
            contact_address_val: "Basyoun City - Elgarbia | Egypt",
            form_submit: "Send Message",
            placeholder_name: "Your Name",
            placeholder_email: "Your Email",
            placeholder_subject: "Subject",
            placeholder_message: "Your Message",
            alert_success: "Thank you, your message has been sent successfully!"
        },
        ar: {
            nav_home: "الرئيسية",
            nav_about: "من أنا",
            nav_services: "خدماتي",
            nav_projects: "مشاريعي",
            nav_contact: "اتصل بي",
            hero_welcome: "مرحباً، أنا <br><span>أنس عبد الدايم</span>",
            hero_desc: "مرحباً، أنا أنس. أنا معلم ومطور ويب شغوف ببناء تجارب تعليمية ملهمة ومشاريع رقمية مبتكرة.",
            hero_btn: "المزيد عني",
            about_title_1: "من",
            about_title_2: "أنا",
            about_subtitle: "هذه هي مهاراتي ولغاتي البرمجية",
            about_text: "أنا مطور واجهات مستخدم (Front-End) شغوف وطالب في الفرقة الثالثة بقسم نظم معلومات الأعمال (BIS) في المعهد العالي للحاسبات وتكنولوجيا المعلومات وإدارة الأعمال بطنطا. أستمتع بتحويل الأفكار إلى تجارب رقمية تفاعلية وسلسة تجمع بين الأداء القوي والتصميم البصري الحديث.",
            skills_title_1: "المهارات و",
            skills_title_2: "اللغات",
            skills_subtitle: "هذه هي الأدوات والتقنيات التي أتقنها",
            services_title_1: "خدماتي",
            services_title_2: "المهنية",
            services_subtitle: "إليك الحلول الرقمية التي يمكنني تقديمها لك",
            service_1_title: "تطوير مواقع مخصصة",
            service_1_desc: "بناء مواقع ويب احترافية من الصفر باستخدام تقنيات HTML و CSS و JavaScript برمجية نظيفة، قابلة للتطوير، ومنظمة بدقة.",
            service_2_title: "تصميم مواقع متجاوبة",
            service_2_desc: "إنشاء مواقع متوافقة بالكامل وتعمل بسلاسة تامة على جميع الشاشات (الهواتف، التابلت، الشاشات المكتبية) لضمان أفضل تجربة مستخدم.",
            service_3_title: "تحويل التصاميم بواجهات حقيقية",
            service_3_desc: "تحويل تصاميم Figma أو Adobe XD البرمجية إلى مواقع حية دقيقة ومطابقة تماماً للتصميم الأصلي مع الاهتمام بأصغر التفاصيل.",
            service_4_title: "تحسين سرعة الأداء",
            service_4_desc: "رفع كفاءة المواقع وتحسين سرعتها لتقديم تجربة تصفح سريعة وخفيفة وخالية من أي مشاكل في الاستجابة.",
            service_5_title: "تطوير صفحات الهبوط",
            service_5_desc: "تصميم وبناء صفحات هبوط (Landing Pages) ذات معدلات تحويل عالية تركز بشكل أساسي على تحقيق أهداف عملك.",
            service_6_title: "إعادة تصميم المواقع",
            service_6_desc: "تحديث وتجديد المواقع القديمة وغير المتوافقة وتطوير أدائها العام لتلائم المعايير العصرية للمستخدم.",
            stat_1: "لغات برمجية",
            stat_2: "مشاريع منجزة",
            stat_3: "دورات مكتملة",
            projects_title_1: "أبرز",
            projects_title_2: "مشاريعي",
            projects_subtitle: "إليك بعض الأعمال والمنصات التي قمت بتطويرها",
            project_prefix: "مشروع:",
            project_view: "عرض المشروع",
            project_1_desc: "هذا موقع إلكتروني تابع للمعهد العالي لعلوم الحاسوب، وهو مجرد نموذج وليس الموقع الرسمي.",
            project_2_desc: "منصة BIS-ACADEMY لتعلم البرمجة وتطوير الويب",
            project_3_desc: "منصة مو فايد لتعليم طب الأسنان للطلاب",
            project_4_desc: "Articodex هي منصة لتطوير مواقع الويب والتصميم الجرافيكي.",
            contact_title_1: "تواصل",
            contact_title_2: "معي",
            contact_subtitle: "إليك كافة معلومات قنوات الاتصال الخاصة بي",
            contact_phone: "الهاتف",
            contact_email: "البريد الإلكتروني",
            contact_address: "العنوان",
            contact_address_val: "مدينة بسيون - الغربية | جمهورية مصر العربية",
            form_submit: "إرسال الرسالة",
            placeholder_name: "اسمك الكريم",
            placeholder_email: "بريدك الإلكتروني",
            placeholder_subject: "موضوع الرسالة",
            placeholder_message: "نص رسالتك هنا...",
            alert_success: "شكرًا لك، تم إرسال رسالتك بنجاح!"
        }
    };

    /**
     * Language Update Routine Execution Function
     */
    const setLanguageProfile = (lang) => {
        // Toggle the global system HTML tags directions configuration markers
        const htmlTag = document.documentElement;
        if (lang === 'ar') {
            htmlTag.setAttribute('dir', 'rtl');
            htmlTag.setAttribute('lang', 'ar');
        } else {
            htmlTag.setAttribute('dir', 'ltr');
            htmlTag.setAttribute('lang', 'en');
        }

        // Translate all nodes having data-i18n target tags profiles
        const translateElements = document.querySelectorAll('[data-i18n]');
        translateElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Update form placeholders dynamically 
        if (nameInput && emailInput && subjectInput && messageInput) {
            nameInput.placeholder = translations[lang].placeholder_name;
            emailInput.placeholder = translations[lang].placeholder_email;
            subjectInput.placeholder = translations[lang].placeholder_subject;
            messageInput.placeholder = translations[lang].placeholder_message;
        }
    };

    // Watcher monitor trigger event active on selects
    if (languageSelect) {
        languageSelect.addEventListener('change', (event) => {
            setLanguageProfile(event.target.value);
        });
    }

    /**
     * 2. Mobile Sidebar Open/Close Logic Controllers
     */
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }

    if (sidebarClose && sidebar) {
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sidebar) {
                sidebar.classList.remove('open');
            }
        });
    });

    /**
     * 3. Contact Form Submission Logic Handler
     */
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
            const currentLang = languageSelect ? languageSelect.value : 'en';
            
            const clientName = document.getElementById('name').value;
            const clientEmail = document.getElementById('email').value;
            const emailSubject = document.getElementById('subject').value;
            const messageBody = document.getElementById('message').value;

            console.log('Form deployment initiated:', { clientName, clientEmail, emailSubject, messageBody });
            
            alert(translations[currentLang].alert_success);
            contactForm.reset();
        });
    }
});