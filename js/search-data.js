/* ============================================================
   Kestrel Hill College — search index
   Each entry is one searchable unit of content. Multiple entries
   can point at the same page (e.g. one per program or step) so
   results can deep-link to the right section on that page.
   ============================================================ */

const SITE_INDEX = [
  {
    id: "home",
    url: "index.html",
    section: "Home",
    title: "Kestrel Hill College",
    content:
      "Kestrel Hill College is a small liberal arts college set on a forested hillside above the Aldergate River. Founded in 1889, the college is known for close mentorship, fieldwork-based learning, and a campus built into the hill's contour lines. Undergraduate programs in the sciences, humanities, and arts. Student to faculty ratio nine to one.",
  },
  {
    id: "about-history",
    url: "about.html#history",
    section: "About",
    title: "Our History",
    content:
      "Kestrel Hill College was founded in 1889 by a small group of naturalists and teachers who wanted a school built around fieldwork rather than lecture halls alone. The original campus was a single stone hall, Aldergate Hall, still in use today. Over the past century the college added the Observatory Library, the Founders Quad, and the Hollis Science Building while keeping its wooded hillside setting intact.",
  },
  {
    id: "about-mission",
    url: "about.html#mission",
    section: "About",
    title: "Mission and Values",
    content:
      "The mission of Kestrel Hill College is to teach students to observe carefully, argue rigorously, and work with their hands as well as their minds. Core values include close mentorship, small seminar classes, interdisciplinary study, and stewardship of the surrounding forest and river watershed.",
  },
  {
    id: "about-leadership",
    url: "about.html#leadership",
    section: "About",
    title: "Leadership and Governance",
    content:
      "Kestrel Hill College is led by President Marguerite Okafor, with a provost, dean of faculty, and dean of students overseeing academic and campus life. A board of trustees made up of alumni, faculty, and community members meets quarterly to guide long-term planning.",
  },
  {
    id: "about-campus",
    url: "about.html#campus",
    section: "About",
    title: "The Hillside Campus",
    content:
      "The Kestrel Hill campus climbs the east face of Aldergate Hill in a series of terraces connected by stone stairways and switchback paths. Buildings are arranged along the hill's natural contour lines rather than a flat grid, so nearly every classroom and dorm room has a view of the river valley below.",
  },
  {
    id: "academics-overview",
    url: "academics.html",
    section: "Academics",
    title: "Academic Programs",
    content:
      "Kestrel Hill College offers eighteen undergraduate majors across the sciences, humanities, arts, and social sciences, along with a required first-year fieldwork seminar and a senior capstone project. Class sizes average fourteen students, and every student is assigned a faculty advisor in their first week.",
  },
  {
    id: "program-envs",
    url: "academics.html#envs",
    section: "Academics",
    title: "Environmental Science, B.S.",
    content:
      "The Environmental Science program at Kestrel Hill College uses the Aldergate River watershed as a living laboratory. Students study hydrology, forest ecology, and environmental policy, and complete a required field season at the college's river station. Graduates go on to careers in conservation, environmental law, and public land management.",
  },
  {
    id: "program-lit",
    url: "academics.html#lit",
    section: "Academics",
    title: "Literature and Writing, B.A.",
    content:
      "The Literature and Writing program combines close reading of poetry and prose with a workshop-based writing sequence. Seniors complete a capstone manuscript, whether a collection of poems, a novella, or a portfolio of essays, under the guidance of a faculty mentor.",
  },
  {
    id: "program-cs",
    url: "academics.html#cs",
    section: "Academics",
    title: "Computer Science, B.S.",
    content:
      "The Computer Science program covers algorithms, systems, and software design, with an emphasis on building real tools for the campus and surrounding community. Students can pursue a concentration in data science for environmental research, connecting the program to the college's fieldwork tradition.",
  },
  {
    id: "program-art",
    url: "academics.html#art",
    section: "Academics",
    title: "Studio Art, B.A.",
    content:
      "The Studio Art program is based in the Hollis Science Building's converted top floor, with north-facing light for painting and drawing studios. Students work across painting, printmaking, and sculpture, and mount a public senior thesis exhibition each spring in the Founders Quad gallery.",
  },
  {
    id: "program-econ",
    url: "academics.html#econ",
    section: "Academics",
    title: "Economics, B.A.",
    content:
      "The Economics program pairs core theory courses with applied research on regional land use, watershed management, and rural economic development, drawing on the college's location in the Aldergate valley. Many students complete internships with regional planning offices.",
  },
  {
    id: "program-bio",
    url: "academics.html#bio",
    section: "Academics",
    title: "Biology, B.S.",
    content:
      "The Biology program emphasizes field observation alongside laboratory work, using the surrounding forest as an extension of the classroom. Students can specialize in ecology, molecular biology, or pre-health tracks, and many co-author research with faculty by their junior year.",
  },
  {
    id: "academics-calendar",
    url: "academics.html#calendar",
    section: "Academics",
    title: "Academic Calendar",
    content:
      "Kestrel Hill College runs on a fall and spring semester calendar with a short January field term used for intensive single-topic courses, off-campus study, and research. Fall semester begins in late August and spring semester ends in mid-May.",
  },
  {
    id: "admissions-overview",
    url: "admissions.html",
    section: "Admissions",
    title: "Undergraduate Admissions",
    content:
      "Kestrel Hill College admits a first-year class of about two hundred and twenty students each fall. Admissions decisions are need-blind and every admitted student who qualifies for aid receives a financial aid package meeting full demonstrated need.",
  },
  {
    id: "admissions-apply",
    url: "admissions.html#apply",
    section: "Admissions",
    title: "How to Apply",
    content:
      "Applicants to Kestrel Hill College submit the Common Application along with a graded writing sample, a school report, and two teacher recommendations. Standardized test scores are optional. The application asks for a short response describing a place you have observed closely.",
  },
  {
    id: "admissions-dates",
    url: "admissions.html#dates",
    section: "Admissions",
    title: "Application Deadlines",
    content:
      "Early decision applications to Kestrel Hill College are due November 15 with decisions released by December 15. Regular decision applications are due January 15 with decisions released by late March. Transfer applications are due March 1 for fall entry.",
  },
  {
    id: "admissions-cost",
    url: "admissions.html#cost",
    section: "Admissions",
    title: "Tuition and Financial Aid",
    content:
      "Kestrel Hill College meets full demonstrated financial need for every admitted student, and roughly sixty percent of students receive some form of need-based grant aid. The college also offers work-study positions in the river station, library, and dining hall.",
  },
  {
    id: "admissions-visit",
    url: "admissions.html#visit",
    section: "Admissions",
    title: "Visit Campus",
    content:
      "Prospective students can visit Kestrel Hill College for a guided hillside campus tour, an information session with an admissions counselor, or an overnight stay in a first-year dorm during the academic year. Fall and spring open house weekends include a sample seminar class.",
  },
  {
    id: "campus-housing",
    url: "campus-life.html#housing",
    section: "Campus Life",
    title: "Housing on the Hill",
    content:
      "Nearly all students at Kestrel Hill College live on campus in one of six residence halls terraced up the hillside, from the first-year Aldergate Hall to the upper-hill Observatory House for juniors and seniors. Each hall has a shared common room with a wood stove and a view of the river valley.",
  },
  {
    id: "campus-dining",
    url: "campus-life.html#dining",
    section: "Campus Life",
    title: "Dining and Food",
    content:
      "The Founders Dining Hall sources produce from the college's own hillside garden and from farms in the Aldergate valley. A smaller cafe in the Observatory Library serves coffee and pastries and stays open late during exam weeks.",
  },
  {
    id: "campus-clubs",
    url: "campus-life.html#clubs",
    section: "Campus Life",
    title: "Clubs and Organizations",
    content:
      "Kestrel Hill College has more than sixty student clubs, including the Aldergate Trail Crew, the campus radio station WKHC, a student-run literary magazine called The Contour, a rock climbing club, and a river conservation group that monitors water quality along the watershed.",
  },
  {
    id: "campus-athletics",
    url: "campus-life.html#athletics",
    section: "Campus Life",
    title: "Athletics: The Kestrels",
    content:
      "Kestrel Hill College fields eleven varsity teams, the Kestrels, competing in the Hillside Athletic Conference, along with a strong intramural program. The cross country teams train on the hill's switchback trails, and the boathouse on the Aldergate River supports rowing and kayaking.",
  },
  {
    id: "campus-traditions",
    url: "campus-life.html#traditions",
    section: "Campus Life",
    title: "Traditions",
    content:
      "Each October, Kestrel Hill College holds Lantern Night, when first-year students carry lanterns up the hillside path to Aldergate Hall. In spring, the whole campus turns out for River Day, a day of races, food, and music along the Aldergate River.",
  },
  {
    id: "contact-overview",
    url: "contact.html",
    section: "Contact",
    title: "Contact Kestrel Hill College",
    content:
      "Reach Kestrel Hill College by phone, email, or mail, or send a message using the contact form. The campus is located at 14 Aldergate Hill Road. Offices are generally open Monday through Friday during the academic year.",
  },
  {
    id: "contact-offices",
    url: "contact.html#offices",
    section: "Contact",
    title: "Office Directory",
    content:
      "Key offices at Kestrel Hill College include Admissions in Founders Hall, the Registrar in Aldergate Hall, Financial Aid in Founders Hall, and the Dean of Students office in the Observatory Library. Each office lists direct phone and email contacts.",
  },
  {
    id: "contact-directions",
    url: "contact.html#directions",
    section: "Contact",
    title: "Directions and Parking",
    content:
      "Kestrel Hill College is a two hour drive from the nearest regional airport, with a shuttle available by reservation. Visitor parking is available at the base of the hill near the Founders Hall gatehouse, with a short walk or shuttle up to the main campus.",
  },
];
