const app = new Vue (
  {
    el: '#root',
    data: {
      // Header
      //submenu
      listHome: false,
      listAbout: false,
      //submenu

      logoAcademy: 'img/Logo.jpg',
      messageh1: 'Professional Development For Coaches And Leaders',
      textBtn: 'Learn More',
      // Header

      // Main
      // Main - description
      servicesCard: [
        {
          title: 'Online Coaching',
          img: 'img/svg-0.svg',
          text: 'Lorem ipsum is simply dummy text of he print ing and typesetting has been the industrys.',
        },
        {
          title: 'Consultation',
          img: 'img/svg-1.svg',
          text: 'Lorem ipsum is simply dummy text of he print ing and typesetting has been the industrys.',
        },
        {
          title: 'Life Programs',
          img: 'img/svg-2.svg',
          text: 'Lorem ipsum is simply dummy text of he print ing and typesetting has been the industrys.',
        },
      ], //servicesCard
      ourNumbers: [
        {
          value: 6500,
          img: 'img/counter-shape-1-1-1.png',
          entity: '+',
          valueOf: 'Students',
          textcolor: '#f28202',
        },
        {
          value: 200,
          img: 'img/counter-shape-2-1-1.png',
          entity: '+',
          valueOf: 'Online Courses',
          textcolor: '#D74D52',
        },
        {
          value: 100,
          img: 'img/counter-shape-3-1-1.png',
          entity: '%',
          valueOf: 'Happy Clients',
          textcolor: '#3adc79',
        }
      ], // ourNumbers
      // Main - description

      // Main - Recent Courses
      titleRecCours: 'Recent Courses',
      messageRecCours: "Whether you're considering a foundation course or an undergraduate degree master's or a PhD, academics is a place where students thrive.",
      cardsRecCours: [
        {
          img: 'img/bruce-mars-FWVMhUa_wbY-unsplash.jpg',
          mode: 'Free',
          whatInclude: 'UI Animation using Sketch 3, Principle App, and Flinto',
          willLearn: 'This online photography course will teach you how to take amazing images and even sell...',
          madeBy: {
            name: 'University',
            color: '#D74D52'
          }
        },
        {
          img: 'img/course-1-2.jpg',
          mode: 'Free',
          whatInclude: 'The Ultimate Drawing Course - Beginner to Advanced',
          willLearn: 'This online photography course will teach you how to take amazing images and even sell...',
          madeBy: {
            name: 'University',
            color: '#D74D52'
          }
        },
        {
          img: 'img/william-thomas-ny6tO4ItOEY-unsplash.jpg',
          mode: 'Free',
          whatInclude: 'Your Complete Guide to Photography',
          willLearn: 'This online photography course will teach you how to take amazing images and even sell...',
          madeBy: {
            name: 'University',
            color: '#D74D52'
          }
        }
      ], // card Recent Courses
      // Main - Recent Courses

      // Main Our blogs
      titleOurBlogs: 'Latest From Our Blogs',
      textOurBlogs: "Whether you’re considering a foundation course or an undergraduate degree master's or a PhD, academics is a place where students thrive.",
      cardsOurBlogs: [
        {
          img: 'img/news-3-2.jpg',
          iconLinks: {
            text: {
              admin: 'Admin',
              university: 'University',
            },
            icon: {
              iconAdmin: 'far fa-user',
              iconUniversity: 'far fa-folder-open'
            }

          },
          titleBlog: 'Peer pressure changes how teens tackle inequality',
          readMore: {
            text: 'Read more',
            icon: 'fas fa-chevron-right'
          }
        },
        {
          img: 'img/news-2-2.jpg',
          iconLinks: {
            text: {
              admin: 'Admin',
              university: 'Education',
            },
            icon: {
              iconAdmin: 'far fa-user',
              iconUniversity: 'far fa-folder-open'
            }

          },
          titleBlog: 'Lewisham Live Mixtape celebrates borough’s',
          readMore: {
            text: 'Read more',
            icon: 'fas fa-chevron-right'
          }
        },
        {
          img: 'img/news-1-2.jpg',
          iconLinks: {
            text: {
              admin: 'Admin',
              university: 'Education',
            },
            icon: {
              iconAdmin: 'far fa-user',
              iconUniversity: 'far fa-folder-open'
            }

          },
          titleBlog: 'Turner Prize winner’s work to open Gold on Film festival',
          readMore: {
            text: 'Read more',
            icon: 'fas fa-chevron-right'
          }
        },

      ], // cards our blogs
      // Main Our blogs

      //Main slider
      imgSlider: [
        {
          img: "img/gallery-3-3.jpg",
          textHover: "Driving nnovation",
          iconHover: "far fa-eye",
        },
        {
          img: "img/news-3-2.jpg",
          textHover: "Driving nnovation",
          iconHover: "far fa-eye",
        },
        {
          img: "img/gallery-1-3.jpg",
          textHover: "Driving nnovation",
          iconHover: "far fa-eye",
        },
        {
          img: "img/gallery-2-3.jpg",
          textHover: "Driving nnovation",
          iconHover: "far fa-eye",
        },
      ],
      //Main slider

      // Main

      // Footer
      //Footer - top
      linksContactUs: [
        {
          text: '900 Wood Street, MI New York 48607',
          icon: 'fas fa-map-marker-alt',
        },
        {
          text: '+56 345 678 000-09',
          icon: 'fas fa-phone-square-alt',
        },
        {
          text: 'info@example.com',
          icon: 'fas fa-envelope',
        },
      ], // links Contact us
      linksSupportUs: [
        "Privacy",
        "Terms",
        "Cookie Policy",
        "Sitemap",
      ], //Links Support us
      linksExplore: [
        "Accomodation",
        "Arts Academics",
        "Central Services",
        "Conferences and Events",
        "Food and Drink"
      ], // links Explore
      linksVisit: [
        "Admission",
        "Contact Us",
        "FAQs",
        "Request Information",
        "Privacy Notice"
      ], // Links Visit
      //Footer - top

      //Footer - bottom
      linksFooterBottom: [
        'Privacy',
        'Terms',
        'Cookie Policy',
        'Sitemap'
      ],
      //Footer - bottom
      // Footer

    }, // Data

    methods: {


    },

    mounted: function() {

    },
  }
);
