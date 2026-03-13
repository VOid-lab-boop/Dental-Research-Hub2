export const lectures = [
  {
    id: 1,
    title: "Introduction to Scientific Research",
    summary: "Covers the difference between search and research, what scientific research is, and the steps of the research process.",
    keyPoints: [
      "Search finds things; research discovers new knowledge.",
      "Scientific research is systematic, objective, empirical, and analytical.",
      "There are 11 steps from getting a research idea to publication."
    ],
    terms: [
      { term: "Search", def: "Finding existing info" },
      { term: "Research", def: "Systematic investigation for new knowledge" },
      { term: "Search Engine", def: "Software finding info via keywords" },
      { term: "Academic Database", def: "Organized scholarly database" }
    ],
    example: "A dental student searching Google for 'tooth decay' is searching. A dentist conducting a study to find which toothpaste reduces cavities most is researching.",
    remember: "Research = Claim + Evidence + Reasoning. It fills knowledge gaps and solves problems."
  },
  {
    id: 2,
    title: "Types of Scientific Research",
    summary: "Explores basic vs applied research, quantitative vs qualitative research, mixed methods, and other types including cross-sectional, cohort, and exploratory studies.",
    keyPoints: [
      "Basic research fills knowledge gaps with no immediate practical use. Applied solves real problems.",
      "Quantitative uses numbers/statistics. Qualitative explores meaning and experience.",
      "Mixed methods combines both numerical and experiential data."
    ],
    terms: [
      { term: "Quantitative", def: "Numerical data, measures patterns" },
      { term: "Qualitative", def: "Non-numerical, text/interviews" },
      { term: "Basic Research", def: "Fills knowledge gaps" },
      { term: "Applied Research", def: "Practical solutions" }
    ],
    example: "Counting how many patients have gum disease = quantitative. Interviewing patients about their dental anxiety = qualitative.",
    remember: "Choose your research type based on your question. 'How many?' = quantitative. 'Why?' = qualitative."
  },
  {
    id: 3,
    title: "Phases of Research & Journal Articles",
    summary: "The research process has 10 sequential steps. Journal articles have specific elements: title, authors, affiliations, keywords, abstract, introduction, methods, results, discussion.",
    keyPoints: [
      "Research must follow a strict sequence.",
      "An original article presents new unpublished findings.",
      "Title must be clear, concise, informative. Keywords help index and find articles."
    ],
    terms: [
      { term: "Original Article", def: "New unpublished research" },
      { term: "ORCID ID", def: "Unique persistent researcher identifier" },
      { term: "Keyword", def: "Words capturing key aspects of manuscript" }
    ],
    example: "Title: 'Effect of Fluoride Varnish on Caries Prevention in Children: A Randomized Controlled Trial' - This is a declarative title that tells exactly what was studied.",
    remember: "Titles can be descriptive, declarative, interrogative, or comparative. Keywords categorize and index your paper."
  },
  {
    id: 4,
    title: "Planning for Research",
    summary: "Covers research problems, questions, hypotheses, and the core sections of a journal article: abstract, introduction, materials & methods, and results.",
    keyPoints: [
      "Research question = specific query to answer. Hypothesis = predicted relationship.",
      "Null hypothesis assumes no relationship.",
      "Introduction follows a funnel (broad → narrow). Methods must be replicable."
    ],
    terms: [
      { term: "Hypothesis", def: "Predicted relationship between variables" },
      { term: "Null Hypothesis", def: "H0 - predicts no relationship" },
      { term: "Independent Variable", def: "The cause/treatment" },
      { term: "Dependent Variable", def: "The measured outcome" }
    ],
    example: "Problem: Many children get cavities. Question: Does fluoride reduce cavities? Hypothesis: Children using fluoride have fewer cavities. Null Hypothesis: There is no difference.",
    remember: "The hypothesis guides everything - it determines your design, analysis, and conclusions. Null hypothesis = 'no effect.'"
  },
  {
    id: 5,
    title: "Research Design",
    summary: "Covers experimental, observational, quasi-experimental, qualitative, and mixed-methods study designs.",
    keyPoints: [
      "Research design is the strategy for answering your research question with empirical data.",
      "Experimental designs test cause-and-effect (RCT is gold standard).",
      "Observational designs watch without intervening."
    ],
    terms: [
      { term: "RCT", def: "Randomized Controlled Trial - gold standard" },
      { term: "Cohort Study", def: "Follows group over time" },
      { term: "IRB", def: "Institutional Review Board - approves human research" }
    ],
    example: "RCT: Randomly assign 100 patients to a new mouthwash or placebo. Cross-sectional: Survey 500 patients today about brushing habits.",
    remember: "RCT = strongest evidence. Always get ethical approval (IRB) before studying humans."
  },
  {
    id: 6,
    title: "Study Design - Observational Studies",
    summary: "Deep dive into observational studies: descriptive vs analytical, cross-sectional, case-control, and cohort studies, plus experimental/RCT design.",
    keyPoints: [
      "Descriptive studies describe disease occurrence. Analytical studies explore relationships.",
      "Cross-sectional = snapshot. Case-control = looks backward. Cohort = follows forward.",
      "RCT = randomly assigns intervention (strongest evidence)."
    ],
    terms: [
      { term: "Cross-sectional", def: "Snapshot at one time point" },
      { term: "Case-control", def: "Retrospective, compares disease vs no disease" },
      { term: "Cohort", def: "Prospective, follows over time" }
    ],
    example: "Cross-sectional: % of students with anxiety? Case-control: Compare smoking in oral cancer vs healthy. Cohort: Follow patients for 10 years.",
    remember: "Cross-sectional = snapshot (fast, cheap). Case-control = look back (rare diseases). Cohort = follow forward (best observational). RCT = experiment."
  }
];

export const glossary = [
  { term: "Research", def: "A systematic, scientific process of investigating questions to discover new knowledge or verify existing knowledge." },
  { term: "Hypothesis", def: "A testable prediction about the relationship between two or more variables." },
  { term: "Variable", def: "Any factor that can be measured or changed in a research study (e.g., age, treatment type, outcome)." },
  { term: "Sample", def: "A selected subset of a larger population used in research when studying everyone is not feasible." },
  { term: "Population", def: "The entire group of individuals that a researcher wants to study and draw conclusions about." },
  { term: "Bias", def: "Any systematic error in a study that leads to incorrect or skewed results, affecting validity." },
  { term: "Validity", def: "The degree to which a study measures what it claims to measure." },
  { term: "Reliability", def: "The consistency of a measurement — getting the same result under the same conditions." },
  { term: "Database", def: "An organized online collection of scholarly articles, journals, and research papers." },
  { term: "PubMed", def: "A free database of biomedical and life science literature maintained by the US National Library of Medicine." },
  { term: "Scopus", def: "A large abstract and citation database of peer-reviewed literature from Elsevier." },
  { term: "Google Scholar", def: "A free search engine that indexes scholarly articles, theses, books, and conference papers." },
  { term: "Cross-sectional study", def: "A study that collects data from a population at a single point in time — a 'snapshot'." },
  { term: "Cohort study", def: "A study that follows a group of people over time to observe how exposures affect outcomes." },
  { term: "Case-control study", def: "A study comparing people with a disease (cases) to those without (controls) to identify risk factors." },
  { term: "Qualitative research", def: "Research that collects non-numerical data (interviews, observations) to understand experiences and meanings." },
  { term: "Quantitative research", def: "Research that collects numerical data to measure and analyze patterns and relationships." },
  { term: "Mean", def: "The average of a set of numbers (sum divided by count)." },
  { term: "Median", def: "The middle value when data is sorted in order." },
  { term: "Mode", def: "The value that appears most frequently in a dataset." },
  { term: "Standard deviation", def: "A measure of how spread out values are from the mean." },
  { term: "P-value", def: "The probability that results occurred by chance; p < 0.05 is typically considered statistically significant." },
  { term: "Statistical significance", def: "A result unlikely to have occurred by chance, typically when p < 0.05." },
  { term: "Correlation", def: "A statistical relationship between two variables — they change together, but this does not prove causation." }
];

export const databases = [
  {
    name: "PubMed",
    desc: "Free biomedical database by US National Library of Medicine.",
    usedFor: "Finding peer-reviewed clinical studies and systematic reviews.",
    sources: "Medical journals, clinical trials, review articles.",
    bestFor: "Clinical dentistry questions, treatment efficacy, drug studies."
  },
  {
    name: "Scopus",
    desc: "Largest abstract/citation database by Elsevier.",
    usedFor: "Comprehensive literature searches and citation tracking.",
    sources: "Peer-reviewed journals across all disciplines.",
    bestFor: "Tracking who cited a paper, broad interdisciplinary searches."
  },
  {
    name: "Web of Science",
    desc: "Premium multidisciplinary database with deep citation analysis.",
    usedFor: "Journal impact factors, citation analysis, h-index.",
    sources: "Top-tier journals with rigorous selection.",
    bestFor: "Evaluating journal quality, finding highly cited dental research."
  },
  {
    name: "Google Scholar",
    desc: "Free search engine for scholarly literature.",
    usedFor: "Quick initial searches, finding free full texts.",
    sources: "Journals, theses, books, conference papers.",
    bestFor: "Starting a literature review, finding PDFs, broad topic overview."
  },
  {
    name: "Cochrane Library",
    desc: "Gold standard for systematic reviews and evidence-based medicine.",
    usedFor: "Finding the highest-level evidence (systematic reviews).",
    sources: "Cochrane Reviews, clinical trials.",
    bestFor: "Evidence-based clinical decisions in dentistry."
  }
];

export const quizQuestions = [
  {
    question: "What is the main difference between 'search' and 'research'?",
    options: [
      "Search is longer; research is shorter",
      "Research is systematic and aims to discover new knowledge, while search is a non-systematic process of finding existing information",
      "They are the same thing",
      "Search uses databases; research uses Google"
    ],
    correctAnswer: 1,
    explanation: "Research is a systematic process aimed at creating new knowledge, while searching is simply finding what is already known."
  },
  {
    question: "Which study design is considered the 'gold standard' for clinical research?",
    options: [
      "Cross-sectional study",
      "Case-control study",
      "Cohort study",
      "Randomized Controlled Trial (RCT)"
    ],
    correctAnswer: 3,
    explanation: "RCTs are the gold standard because randomization minimizes bias and allows for establishing true cause-and-effect relationships."
  },
  {
    question: "A dental researcher surveys 300 students about their current brushing habits and gum health. What type of study is this?",
    options: [
      "Cohort study",
      "Cross-sectional study",
      "Case-control study",
      "Randomized Controlled Trial"
    ],
    correctAnswer: 1,
    explanation: "This is a cross-sectional study because it collects data at a single point in time, acting like a 'snapshot' of the population."
  },
  {
    question: "What does a p-value less than 0.05 indicate?",
    options: [
      "The study had more than 5% of participants drop out",
      "The result is not meaningful",
      "The result is statistically significant (less than 5% chance it occurred by chance)",
      "The sample size was too small"
    ],
    correctAnswer: 2,
    explanation: "A p-value < 0.05 is the standard threshold for statistical significance, meaning we are 95% confident the result is not due to random chance."
  },
  {
    question: "What is a null hypothesis (H0)?",
    options: [
      "A hypothesis that always turns out to be true",
      "A prediction that there IS a relationship between variables",
      "A prediction that there is NO relationship or difference between variables",
      "The main hypothesis of the study"
    ],
    correctAnswer: 2,
    explanation: "The null hypothesis always predicts the absence of an effect, relationship, or difference."
  },
  {
    question: "Which database is best known as the 'gold standard' for systematic reviews and evidence-based medicine?",
    options: [
      "PubMed",
      "Scopus",
      "Cochrane Library",
      "Google Scholar"
    ],
    correctAnswer: 2,
    explanation: "The Cochrane Library specializes in highly rigorous systematic reviews and meta-analyses, representing the highest level of clinical evidence."
  },
  {
    question: "Pain scores for 5 patients are: 2, 4, 4, 6, 9. What is the mean?",
    options: ["4", "4.5", "5", "6"],
    correctAnswer: 2,
    explanation: "The mean is the average: (2+4+4+6+9) / 5 = 25 / 5 = 5."
  },
  {
    question: "A researcher studies whether smokers are more likely to develop oral cancer by looking backward at the histories of cancer patients vs. healthy controls. What is this study design?",
    options: [
      "Cohort study",
      "Cross-sectional study",
      "Case-control study",
      "Experimental study"
    ],
    correctAnswer: 2,
    explanation: "This is a retrospective case-control study. It starts with the outcome (cancer vs no cancer) and looks backward to assess exposure (smoking)."
  }
];
