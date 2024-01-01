const translationsUk = {
	myProfession: `Full-Stack Розробник`,
	myName: `Євгеній Довгуй`,
	greeting: `Енергійний та самодисциплінований full-stack developer з досвідом
              у GoIT, виявив свою ефективність у співпраці з професіоналами та
              приймаючи участь в командниму проєкті як Scrum-Master. Маю
              впевнене володіння HTML та CSS, активно вивчаю JavaScript та
              планую глибше вивчати React та Node для подальшого розвитку.`,
	maimContentTitle: `Проєкти`,
	education: `Освіта розробника`,
	courses: `Курси GoIT`,
	management: 'Full-Stack Розробник',
	period: 'Липень 2023 - Квітень 2024 | Україна',
	aboutMe: `Про мене`,
	aboutMeText: `Зважаючи на моє навчання та робочий досвід, я можу поділитися
декількома етапами свого професійного розвитку. Моє прагнення до
саморозвитку і здобуття нових навичок почалося ще у часи мого
навчання на електромонтера, коли я розпочав працювати у віці 15
років.`,
	aboutMeText1: `Моя кар'єра почалася з виконання різноманітних завдань як робітник
загального профілю. Після досягнення повноліття я займався
виробництвом мішків на заводі, а потім перейшов на підприємство, де
проводив ремонт міжміських автобусів. Впродовж цього періоду я також
розпочав власний бізнес у сфері ремонту автомобілів, який успішно
вів до вересня 2021 року.`,
	aboutMeText2: `Проте, моя кар'єрна траєкторія зазнала змін: вирішивши розширити
свої горизонти і спробував себе в сфері продажів. Я отримав роботу в
магазині автотоварів та паралельно з цим навчався на продавця
непродовольчих товарів. Цей етап тривав до кінця грудня 2022 року`,
	aboutMeText3: `З об'єктивних причин у квітні мені довелося змінити місце проживання
та розпочати волонтерську діяльність в новому місті. Це дало мені
можливість поглибити свої знання та вміння у різних сферах.`,
	aboutMeText4: `Моя впевненість і бажання розвиватися привели мене до IT-індустрії,
де я зареєструвався на курси full-stack developer. Я успішно пройшов
цей курс і зараз бажаю випробувати свої сили у реальному
професійному середовищі. Це новий виклик, в якому я прагну
реалізувати свій потенціал і досягти нових висот у своїй кар'єрі.`,
	// Sidebar
	contacts: `Контактна інформація`,
	technicalSkills: `Технічні навички`,
	softSkills: `Особисті навички`,
}

const translationsEn = {
	myProfession: `Full-Stack Developer`,
	myName: `Evhenii Dovhui`,
	greeting: `An energetic and self-disciplined full-stack developer with
              experience at GoIT, demonstrating effectiveness in collaboration
              with professionals and contributing as a Scrum-Master in team
              projects. Proficient in HTML and CSS, actively learning
              JavaScript, and planning to further advance skills in React and
              Node for continuous development.`,
	maimContentTitle: `Projects`,
	education: `Education of the developer`,
	courses: `Courses GoIT`,
	management: 'Full-Stack Developer',
	period: 'July 2023 - April 2024 | Ukraine',
	aboutMe: `About me`,
	aboutMeText: `Given my education and work experience, I can share several stages of my professional development. My aspiration for self-improvement and acquiring new skills began during my training as an electrician when I started working at the age of 15.`,
	aboutMeText1: `My career began with performing various tasks as a general laborer. After reaching adulthood, I worked in bag manufacturing at a factory and later transitioned to a company where I conducted repairs on intercity buses. During this time, I also initiated my own business in the automotive repair sector, which I successfully managed until September 2021.`,
	aboutMeText2: `However, my career trajectory underwent a change: deciding to broaden my horizons, I ventured into the field of sales. I secured a position at an automotive supplies store while concurrently pursuing studies to become a non-food salesperson. This phase lasted until the end of December 2022.`,
	aboutMeText3: `Due to objective reasons in April, I had to change my place of residence and commence volunteer work in a new city. This provided me with an opportunity to deepen my knowledge and skills in various areas.`,
	aboutMeText4: `My confidence and desire for development led me to the IT industry, where I enrolled in full-stack developer courses. I have successfully completed half of this course and now wish to test my skills in a real professional environment. This is a new challenge where I aspire to realize my potential and reach new heights in my career.`,
	// Sidebar
	contacts: `Contacts`,
	technicalSkills: `Technical Skills`,
	softSkills: `Soft Skills`,
}

// Функція для знаходження елементів за їх класом
function getElementsByClassName(className) {
	return document.getElementsByClassName(className)
}

const elements = {
	greeting: getElementsByClassName('my-descr')[0],
	myProfession: getElementsByClassName('my-profession')[0],
	myName: getElementsByClassName('my-name')[0],
	maimContentTitle: getElementsByClassName('maim-content-title')[0],
	education: getElementsByClassName('education')[0],
	courses: getElementsByClassName('work-experience-company')[0],
	management: getElementsByClassName('education-management')[0],
	period: getElementsByClassName('work-period')[0],
	aboutMe: getElementsByClassName('about-me')[0],
	aboutMeText: getElementsByClassName('about-me-text')[0],
	aboutMeText1: getElementsByClassName('about-me-text1')[0],
	aboutMeText2: getElementsByClassName('about-me-text2')[0],
	aboutMeText3: getElementsByClassName('about-me-text3')[0],
	aboutMeText4: getElementsByClassName('about-me-text4')[0],
	// Sidebar
	contacts: getElementsByClassName('sidebar-title')[0],
	technicalSkills: getElementsByClassName('tech-skills')[0],
	softSkills: getElementsByClassName('soft-skills')[0],
}

let currentLanguage = 'en' // Початкова мова - англійська

function translatePage(language) {
	const translations = language === 'uk' ? translationsUk : translationsEn

	for (const key in elements) {
		if (Object.hasOwnProperty.call(elements, key) && translations[key]) {
			elements[key].innerText = translations[key]
		}
	}

	currentLanguage = language
}

function switchToUkrainian() {
	translatePage('uk')
}

function switchToEnglish() {
	translatePage('en')
}

// Отримання елементів з класами та додавання обробників подій для кнопок
const ukrainianButton = getElementsByClassName('switchToUkrainian')[0]
const englishButton = getElementsByClassName('switchToEnglish')[0]

ukrainianButton.addEventListener('click', switchToUkrainian)
englishButton.addEventListener('click', switchToEnglish)

// Початкове відображення сторінки з використанням поточної мови
translatePage(currentLanguage)
