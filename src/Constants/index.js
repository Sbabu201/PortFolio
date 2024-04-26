import {
    android,
    facebook, linkdin, mysql,
    nodejs,
    react, youtube, tailwind, mongo, javascript, okcl, insta2, chat
} from "../assets"

export const AppText = {
    hello: 'Hello,',
    Iam: 'I am ',
    Soumya: 'Soumya Sundar Mohapatra',
    aboutMeDescripion: 'I am a diligent and innovative full-stack developer with a passion for crafting robust and user-centric web applications. With a solid foundation in both frontend and backend technologies, I excel in leveraging the latest tools and frameworks to deliver seamless and intuitive user experiences. My expertise lies in designing and implementing scalable architectures, optimizing performance, and ensuring seamless integration across the stack. I thrive in dynamic environments where I can apply my problem-solving skills and collaborate with cross-functional teams to bring creative ideas to life. As a proactive learner, I am committed to staying abreast of emerging technologies and best practices in the ever-evolving field of web development.',
    Skills: 'Skills & ',
    Experties: 'Experties',
    UIUXDesigner: 'UI/UX Designer',
    BackendDeveloper: 'Backend Dev',
    FrontedDeveloper: 'Frontend Dev',
    FullStackDeveloper: 'FullStack Dev',
    Portfolio: 'Portfolio',
    Creative: 'My Creative ',
    CompaniesI: 'Companies I ',
    WorkedFor: 'Worked For',
    Contact: 'Contact ',
    Us: 'Me',
    copywriteText: 'Copyright by Soumya Sundar Mohapatra @2024'

}

export const aboutSection = [

    {
        id: 1,
        image: 'https://media.istockphoto.com/id/1304570729/vector/front-end-development-concept-vector-flat-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=0lpu0j-4FbuoA7xpGzt9apKZeI5F9KlNNe0qRYxjUYs=',
        title: 'Frontend Developer',
        desc: 'Expert in FrontEnd Responsive web designing'
    },
    {
        id: 2,
        image: 'https://img.freepik.com/premium-vector/back-end-developer-working-laptop_701961-1383.jpg?w=2000',
        title: 'Back-end Developer',
        desc: 'Expert in BackEnd Data Handling With Efficient Management'
    }
]

export const skillsList = [

    {
        id: 1,
        icon: react
    },
    {
        id: 2,
        icon: javascript
    },
    {
        id: 3,
        icon: tailwind
    },
    {
        id: 4,
        icon: mongo
    },


    {
        id: 5,
        icon: android
    },

    {
        id: 6,
        icon: mysql
    },
    {
        id: 7,
        icon: react
    },


    {
        id: 8,
        icon: nodejs
    },

]

export const workDetail = [
    {
        id: 1,
        year: '2023',
        compnayName: 'OCAC Tower',
        position: ' Java Developer Intern'
    },
    {
        id: 1,
        year: '2024',
        compnayName: 'OKCL Corporate Limited',
        position: 'Software Developer Intern'
    },

]

export const portfolio = [
    {
        id: 1,
        title: 'Blog AppLication',
        type: 'website',
        desc: "App Build using React and Node js with MongoDB database with proper data handling",
        imageUrl: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380",
        website: "https://github.com/Sbabu201/Blog-app",
        detailedDescription: "I developed a feature-rich chat application using the MERN stack, Socket.IO, Redux Toolkit, and Tailwind CSS. This Instagram-like chat app supports real-time messaging, group chats, and user presence indicators. With MongoDB for data storage and Node.js with Express.js for the backend, the app ensures scalability and robust performance. On the frontend, React with Redux Toolkit manages state efficiently, providing a seamless user experience. Tailwind CSS enables rapid UI development, ensuring a modern and responsive design. The app's intuitive interface, coupled with Socket.IO for real-time communication, delivers an engaging user experience akin to popular social media platforms."

    },
    {
        id: 2,
        title: 'E-Commerce PlatForm ',
        type: 'website',
        desc: "App Build using React and Node js With Proper Shopping management where you can buy and view all products ",
        imageUrl: "https://img.freepik.com/free-photo/photocomposition-horizontal-online-shopping-banner_23-2151201763.jpg?t=st=1708668576~exp=1708672176~hmac=82e0aac294e6451c15ea5877cffb4d511cb10c2b4bdc5259573d786cf5688a26&w=1380",
        website: "https://e-commerce-pi-two.vercel.app/",
        detailedDescription: "I developed a modern e-commerce platform using the MERN stack, with Redux Toolkit for efficient state management and Tailwind CSS for responsive design. The backend, built with Node.js and Express.js, provided secure RESTful APIs for product catalogs, user authentication, and order processing. MongoDB was used to store product details, user information, and order data. The frontend, built with React, featured a clean interface and dynamic product displays. Socket.IO was integrated for real-time order tracking and customer support, creating a seamless shopping experience."
    },
    {
        id: 3,
        title: 'Chatting-App ',
        type: 'website',
        desc: "Social media App Build using React and Nodejs and socket.io  where you can chat in realtime and explore the app  ",
        imageUrl: chat,
        website: "https://chat-app-client-ebon.vercel.app/",
        detailedDescription: "I developed a feature-rich chat application using the MERN stack, Socket.IO, Redux Toolkit, and Tailwind CSS. This Instagram-like chat app supports real-time messaging, group chats, and user presence indicators. With MongoDB for data storage and Node.js with Express.js for the backend, the app ensures scalability and robust performance. On the frontend, React with Redux Toolkit manages state efficiently, providing a seamless user experience. Tailwind CSS enables rapid UI development, ensuring a modern and responsive design. The app's intuitive interface, coupled with Socket.IO for real-time communication, delivers an engaging user experience akin to popular social media platforms."
    },



]

export const CompanyImage = [

    {
        id: 1,
        imageUrl: okcl
    },

]

export const socialNetwork = [
    {
        id: 1,
        logo: insta2,
        url: 'https://www.instagram.com/_babu.55_/'
    },
    {
        id: 2,
        logo: youtube,
        url: 'https://github.com/Sbabu201',
    },
    {
        id: 3,
        logo: linkdin,
        url: 'https://www.linkedin.com/in/soumya-sundar-mohapatra-a59053265/'
    },
    {
        id: 4,
        logo: facebook,
        url: 'https://www.facebook.com/soumya.babu.9634'
    },
]

export const MyCreations = [
    {
        id: 1,
        title: 'Image Slider',
        type: 'card',
        desc: "image Slider to make a card beautiful",
        imageUrl: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380",
        website: "https://github.com/Sbabu201/Blog-app",
        items: [
            {
                id: 1,
                name: "circle Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 2,
                name: "animated Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 3,
                name: "skeleton Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 4,
                name: "card Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 5,
                name: "homepage Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 6,
                name: "bublle Loader",
                code: "hello coders",
                demo: "demo"
            },

        ]
    },
    {
        id: 2,
        title: ' Loders',
        type: 'card',
        desc: "Loaders For your Website to Look More Professinal ",
        imageUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDNzbDU0czVsd2R1eWtzN3IyOGlqcGswaTFmZGFkaGUwc2EzcjRnbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTk9ZvMnbIiIew7IpW/giphy.gif",
        website: "https://github.com/Sbabu201/Blog-app",
        items: [
            {
                id: 1,
                name: "circle Loader",
                code: `<div className="flex justify-center items-center w-20 h-20">
                <div className=" border-t-4 border-yellow-600 w-16 h-16 duration-300 ease-in-out  rounded-full animate-spin"></div>
              </div>`,
                demo: "demo"
            },
            {
                id: 2,
                name: "animated Loader",
                code: ` <div className='w-40 h-40 flex  gap-4 justify-center items-center '>
                <span className='w-2 h-2 animate-ping rounded-full duration-300 ease-in-out bg-gradient-to-r from-red-400 to-red-900'>
                </span>
                <span className='w-3 h-3 animate-ping rounded-full duration-300 ease-in-out bg-gradient-to-r from-red-400 to-red-900'>
                </span>
                <span className='w-4 h-4 animate-ping rounded-full duration-300 ease-in-out bg-gradient-to-r from-red-400 to-red-900'>
                </span>
              </div>`,
                demo: "demo"
            },
            {
                id: 3,
                name: "skeleton Loader",
                code: `<div class="flex items-center justify-center h-16">
                <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              </div>
              `,
                demo: "demo"
            },
            {
                id: 4,
                name: "card Loader",
                code: `<div class="flex items-center justify-center h-16">
                <div class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
              `,
                demo: "demo"
            },
            {
                id: 5,
                name: "homepage Loader",
                code: `<div class="flex items-center justify-center h-16">
                <div class="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              `,
                demo: "demo"
            },
            {
                id: 6,
                name: "bublle Loader",
                code: `<div class="flex items-center justify-center space-x-2 h-16">
                <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
                <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-400"></div>
              </div>
              `,
                demo: "demo"
            },
            {
                id: 6,
                name: "bublle Loader",
                code: `<div class="flex items-center justify-center h-16">
                <div class="animate-spin h-8 w-8 border-4 border-blue-500 border-opacity-50 rounded-full border-t-transparent"></div>
              </div>
              `,
                demo: "demo"
            },

        ]
    },
    {
        id: 3,
        title: 'Sidebars',
        type: 'card',
        desc: "image Slider to make a card beautiful",
        imageUrl: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380",
        website: "https://github.com/Sbabu201/Blog-app",
        items: [
            {
                id: 1,
                name: "circle Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 2,
                name: "animated Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 3,
                name: "skeleton Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 4,
                name: "card Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 5,
                name: "homepage Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 6,
                name: "bublle Loader",
                code: "hello coders",
                demo: "demo"
            },

        ]
    },
    {
        id: 4,
        title: 'Navbars',
        type: 'card',
        desc: "image Slider to make a card beautiful",
        imageUrl: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380",
        website: "https://github.com/Sbabu201/Blog-app",
        items: [
            {
                id: 1,
                name: "circle Loader",
                code: `<nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                  <span class="font-semibold text-xl tracking-tight">Your Logo</span>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                  <div class="text-sm lg:flex-grow">
                    <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                      Home
                    </a>
                    <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                      About
                    </a>
                    <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
                      Services
                    </a>
                  </div>
                </div>
              </nav>`,
                demo: "demo"
            },
            {
                id: 2,
                name: "animated Loader",
                code: ``,
                demo: "demo"
            },

            {
                id: 4,
                name: "card Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 5,
                name: "homepage Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 6,
                name: "bublle Loader",
                code: "hello coders",
                demo: "demo"
            },

        ]
    },
    {
        id: 5,
        title: 'Drawers',
        type: 'card',
        desc: "image Slider to make a card beautiful",
        imageUrl: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380",
        website: "https://github.com/Sbabu201/Blog-app",
        items: [
            {
                id: 1,
                name: "circle Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 2,
                name: "animated Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 3,
                name: "skeleton Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 4,
                name: "card Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 5,
                name: "homepage Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 6,
                name: "bublle Loader",
                code: "hello coders",
                demo: "demo"
            },

        ]
    },
    {
        id: 6,
        title: 'Card Components',
        type: 'card',
        desc: "image Slider to make a card beautiful",
        imageUrl: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380",
        website: "https://github.com/Sbabu201/Blog-app",
        items: [
            {
                id: 1,
                name: "circle Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 2,
                name: "animated Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 3,
                name: "skeleton Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 4,
                name: "card Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 5,
                name: "homepage Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 6,
                name: "bublle Loader",
                code: "hello coders",
                demo: "demo"
            },

        ]
    },
    {
        id: 6,
        title: 'Card Components',
        type: 'card',
        desc: "image Slider to make a card beautiful",
        imageUrl: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380",
        website: "https://github.com/Sbabu201/Blog-app",
        items: [
            {
                id: 1,
                name: "circle Loader",
                code: `< div class="max-w-sm rounded overflow-hidden hover:scale-105 duration-300 hover:-translate-y-1 ease-in-out shadow-2xl bg-white" >
    <img class="w-full" src="https://via.placeholder.com/400x200" alt="Card Image">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Card Title</div>
            <p class="text-gray-700 text-base">Some card content goes here. This could be a description or some text.</p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </div>
    </>
`,
                demo: "demo"
            },
            {
                id: 2,
                name: "animated Loader",
                code: `< div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white" >
                <div class="px-6 py-4 flex items-center">
                  <div class="text-blue-500 text-3xl">
                    <i class="fas fa-cog"></i> <!-- Replace with your preferred icon library -->
                  </div>
                  <div class="ml-4">
                    <div class="font-bold text-xl">Settings</div>
                    <p class="text-gray-600 text-sm">Manage your settings and preferences.</p>
                  </div>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to Settings</button>
                </div>
              </ >
    `,
                demo: "demo"
            },
            {
                id: 3,
                name: "skeleton Loader",
                code: `< div class="max-w-md rounded-lg overflow-hidden shadow-lg bg-white" >
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Card Title</div>
                  <p class="text-gray-700 text-base">Main content area for this card. This could be text, a description, or a brief summary.</p>
                </div>
                <div class="px-6 py-4">
                  <div class="text-gray-600 text-sm">Additional section for more details.</div>
                </div>
                <div class="px-6 py-4 border-t border-gray-200">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Action 1</button>
                  <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">Action 2</button>
                </div>
              </ >
    `,
                demo: "demo"
            },
            {
                id: 4,
                name: "card Loader",
                code: `< div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white" >
    <img class="w-full" src="https://via.placeholder.com/400x200" alt="Profile Background">
        <div class="px-6 py-4">
            <div class="flex items-center">
                <img class="w-12 h-12 rounded-full mr-4" src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380" alt="Profile Image">
                    <div class="text-xl font-bold">John Doe</div>
            </div>
            <p class="text-gray-700 text-base">Short bio or description of the profile.</p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <a href="#" class="text-blue-500 hover:text-blue-700 mr-4"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-blue-500 hover:text-blue-700 mr-4"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="text-blue-500 hover:text-blue-700"><i class="fab fa-github"></i></a>
        </div>
    </>
`,
                demo: "demo"
            },
            {
                id: 5,
                name: "homepage Loader",
                code: `< div class="max-w-sm rounded overflow-hidden shadow-lg" >
    <img class="w-full" src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380" alt="Card Image">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Card Title</div>
            <p class="text-gray-700 text-base">
                Card description goes here...
            </p>
        </div>
    </>`,
                demo: "demo"
            },
            {
                id: 6,
                name: "bublle Loader",
                code: `< div class="max-w-sm rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" >
    <img class="w-full" src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380" alt="Card Image">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Card Title</div>
            <p class="text-gray-700 text-base">
                Card description goes here...
            </p>
        </div>
    </>`,
                demo: "demo"
            },
            {
                id: 7,
                name: "bublle Loader",
                code: `< div class="max-w-sm rounded overflow-hidden shadow-lg" >
    <img class="w-full" src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380" alt="Card Image">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Card Title</div>
            <p class="text-gray-700 text-base">
                Card description goes here...
            </p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Button Text
            </button>
        </div>
    </>`,
                demo: "demo"
            },
            {
                id: 7,
                name: "bublle Loader",
                code: `< div class="max-w-sm rounded overflow-hidden shadow-lg" >
    <img class="w-full" src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380" alt="Card Image">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
                Card Title
                <span class="bg-red-500 text-white text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                    Badge
                </span>
            </div>
            <p class="text-gray-700 text-base">
                Card description goes here...
            </p>
        </div>
    </>`,
                demo: "demo"
            },
            {
                id: 7,
                name: "bublle Loader",
                code: `< div class="max-w-sm rounded overflow-hidden shadow-lg relative" >
    <img class="w-full" src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380" alt="Card Image">
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="text-white font-bold text-xl">Overlay Text</div>
        </div>
    </>`,
                demo: "demo"
            },

        ]
    },
    {
        id: 7,
        title: 'FORM COMPONENT',
        type: 'card',
        desc: "image Slider to make a card beautiful",
        imageUrl: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380",
        website: "https://github.com/Sbabu201/Blog-app",
        items: [
            {
                id: 1,
                name: "circle Loader",
                code: `<form class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="flex mb-4">
                  <div class="w-1/2 mr-2">
                    <label class="block text-gray-700 font-bold mb-2" for="firstName">
                      First Name
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="w-1/2 ml-2">
                    <label class="block text-gray-700 font-bold mb-2" for="lastName">
                      Last Name
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2" for="email">
                    Email
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div class="mb-4">
                  <button
                    class="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              `,
                demo: "demo"
            },
            {
                id: 2,
                name: "animated Loader",
                code: `<form class="max-w-md mx-auto p-8 rounded-lg shadow-lg bg-white relative">
                <div class="absolute inset-0 rounded-lg shadow-inner"></div>
                <div class="relative z-10 mb-6">
                  <label class="block text-gray-700 font-bold mb-2" for="name">
                    Name
                  </label>
                  <input
                    class="w-full px-3 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="relative z-10 mb-6">
                  <label class="block text-gray-700 font-bold mb-2" for="email">
                    Email
                  </label>
                  <input
                    class="w-full px-3 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="relative z-10">
                  <button
                    class="w-full px-4 py-2 rounded-md bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition duration-300 shadow"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              `,
                demo: "demo"
            },
            {
                id: 3,
                name: "skeleton Loader",
                code: `<form class="max-w-md mx-auto p-8 rounded-lg shadow-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                <div class="mb-6">
                  <label class="block text-white font-bold mb-2" for="name">
                    Name
                  </label>
                  <input
                    class="w-full px-3 py-2 rounded-md bg-white bg-opacity-25 text-white placeholder-white focus:outline-none focus:bg-opacity-50"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-white font-bold mb-2" for="email">
                    Email
                  </label>
                  <input
                    class="w-full px-3 py-2 rounded-md bg-white bg-opacity-25 text-white placeholder-white focus:outline-none focus:bg-opacity-50"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="mb-6">
                  <button
                    class="w-full px-4 py-2 rounded-md bg-white text-purple-600 font-bold hover:bg-opacity-90 transition duration-300"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              `,
                demo: "demo"
            },
            {
                id: 4,
                name: "card Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 5,
                name: "homepage Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 6,
                name: "bublle Loader",
                code: "hello coders",
                demo: "demo"
            },

        ]
    },
    {
        id: 6,
        title: 'Card Components',
        type: 'card',
        desc: "image Slider to make a card beautiful",
        imageUrl: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380",
        website: "https://github.com/Sbabu201/Blog-app",
        items: [
            {
                id: 1,
                name: "circle Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 2,
                name: "animated Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 3,
                name: "skeleton Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 4,
                name: "card Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 5,
                name: "homepage Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 6,
                name: "bublle Loader",
                code: "hello coders",
                demo: "demo"
            },

        ]
    },
    {
        id: 6,
        title: 'Card Components',
        type: 'card',
        desc: "image Slider to make a card beautiful",
        imageUrl: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380",
        website: "https://github.com/Sbabu201/Blog-app",
        items: [
            {
                id: 1,
                name: "circle Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 2,
                name: "animated Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 3,
                name: "skeleton Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 4,
                name: "card Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 5,
                name: "homepage Loader",
                code: "hello coders",
                demo: "demo"
            },
            {
                id: 6,
                name: "bublle Loader",
                code: "hello coders",
                demo: "demo"
            },

        ]
    },




]