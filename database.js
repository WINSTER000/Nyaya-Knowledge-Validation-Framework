const knowledgeBase = [
{
    statement: "Fire is hot",
    pratyaksha: "Fire produces heat that can be directly felt.",
    anumana: "Heat indicates combustion is occurring.",
    upamana: "Similar to other burning substances that generate heat.",
    shabda: "Supported by science textbooks and trusted educational sources.",
    score: 100,
    verdict: "VALID"
},
{
    statement: "Water boils at 100 degrees Celsius at sea level",
    pratyaksha: "Can be verified experimentally at standard atmospheric pressure.",
    anumana: "Heating water continuously leads to boiling at a fixed point.",
    upamana: "Similar behavior is observed in laboratory experiments worldwide.",
    shabda: "Confirmed by physics and chemistry textbooks.",
    score: 100,
    verdict: "VALID"
},
{
    statement: "Earth revolves around the Sun",
    pratyaksha: "Astronomical observations confirm this motion.",
    anumana: "Planetary movement supports heliocentric theory.",
    upamana: "Similar to other planets orbiting their stars.",
    shabda: "Supported by scientific authorities.",
    score: 100,
    verdict: "VALID"
},
{
    statement: "Humans need oxygen to survive",
    pratyaksha: "Medical science confirms this through respiration studies.",
    anumana: "Cells require oxygen for cellular respiration.",
    upamana: "Similar across nearly all aerobic organisms.",
    shabda: "Supported by medical literature.",
    score: 100,
    verdict: "VALID"
},
{
    statement: "Gravity attracts objects toward Earth",
    pratyaksha: "Objects fall downward when released, as seen directly.",
    anumana: "Newton's laws explain the gravitational attraction.",
    upamana: "Similar gravitational effects occur on other planets.",
    shabda: "Supported by physics textbooks.",
    score: 100,
    verdict: "VALID"
},
{
    statement: "The heart pumps blood through the body",
    pratyaksha: "Heartbeat and circulation can be observed and measured directly.",
    anumana: "Blood flow follows from the heart's muscular contractions.",
    upamana: "Similar to a pump moving fluid through a closed system.",
    shabda: "Confirmed by medical and anatomical literature.",
    score: 100,
    verdict: "VALID"
},
{
    statement: "Plants perform photosynthesis",
    pratyaksha: "Observed directly through controlled scientific experiments.",
    anumana: "Plants produce food using sunlight, water, and carbon dioxide.",
    upamana: "Similar to green plants worldwide.",
    shabda: "Supported by biology textbooks.",
    score: 100,
    verdict: "VALID"
},
{
    statement: "Sound requires a medium to travel",
    pratyaksha: "Demonstrated experimentally in vacuum chambers where sound cannot pass.",
    anumana: "Molecular vibration transmission explains sound propagation.",
    upamana: "Similar transmission occurs in air, water, and solids alike.",
    shabda: "Supported by physics references.",
    score: 100,
    verdict: "VALID"
},
{
    statement: "The Sun is a star",
    pratyaksha: "Solar composition has been studied through spectroscopy.",
    anumana: "Nuclear fusion explains the Sun's light and heat production.",
    upamana: "Similar fusion processes occur in other stars.",
    shabda: "Confirmed by astrophysics sources.",
    score: 100,
    verdict: "VALID"
},
{
    statement: "DNA carries genetic information",
    pratyaksha: "DNA structure has been observed through molecular imaging.",
    anumana: "Inheritance patterns are explained by DNA replication and transfer.",
    upamana: "Similar coding function is found across all known living cells.",
    shabda: "Supported by genetics and molecular biology literature.",
    score: 100,
    verdict: "VALID"
},
{
    statement: "Blood is red in all animals",
    pratyaksha: "Human and most vertebrate blood is directly observed to be red.",
    anumana: "Hemoglobin's iron content explains the red coloration in these species.",
    upamana: "Unlike some invertebrates, whose blood is blue or green due to different pigments.",
    shabda: "Biology references confirm iron-based blood as the common but not universal case.",
    score: 75,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Owning a pet can reduce stress levels",
    pratyaksha: "Many pet owners report lower stress in surveys and studies.",
    anumana: "Companionship and routine are shown to lower cortisol levels in some research.",
    upamana: "Similar calming effects are documented with other forms of companionship.",
    shabda: "Supported by multiple studies, though results vary by individual and pet type.",
    score: 75,
    verdict: "PARTIALLY VALID"
},
{
    statement: "The human tongue detects sweet taste more strongly at its tip",
    pratyaksha: "Some taste tests show heightened sweetness sensitivity near the tip.",
    anumana: "Receptor distribution studies show mild concentration differences.",
    upamana: "Similar minor regional sensitivity patterns exist for other tastes.",
    shabda: "Sensory science notes the effect is real but far smaller than once believed.",
    score: 75,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Most volcanoes are located along tectonic plate boundaries",
    pratyaksha: "Global volcano maps show a strong concentration along plate edges.",
    anumana: "Plate movement explains magma rising at boundary zones.",
    upamana: "Similar patterns are seen along the Pacific Ring of Fire.",
    shabda: "Confirmed by geological research, aside from rarer hotspot volcanoes.",
    score: 75,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Penguins are found only in cold climates",
    pratyaksha: "Most penguin species are observed in Antarctic and sub-Antarctic regions.",
    anumana: "Cold-adapted physiology explains their concentration in cooler zones.",
    upamana: "Unlike the Gal\u00e1pagos penguin, which lives near the equator.",
    shabda: "Zoological sources note a few warm-climate exceptions.",
    score: 75,
    verdict: "PARTIALLY VALID"
},
{
    statement: "All venomous snakes are deadly to humans",
    pratyaksha: "Many venomous snakebites are documented as life-threatening.",
    anumana: "Toxin potency in several species explains serious medical outcomes.",
    upamana: "Unlike mildly venomous species, whose bites rarely endanger humans.",
    shabda: "Medical references note venom danger varies significantly by species.",
    score: 75,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Bats primarily rely on echolocation to navigate",
    pratyaksha: "Echolocation use is directly recorded in most bat species studied.",
    anumana: "Sound-based navigation explains flight accuracy in total darkness.",
    upamana: "Unlike fruit bats, which rely more heavily on vision and smell.",
    shabda: "Zoological research confirms echolocation is dominant but not universal among bats.",
    score: 75,
    verdict: "PARTIALLY VALID"
},
{
    statement: "The Sahara is the largest hot desert on Earth",
    pratyaksha: "Its area has been measured through satellite surveys.",
    anumana: "Comparative desert measurements support this specific ranking.",
    upamana: "Unlike Antarctica, which is a larger desert overall but a cold one.",
    shabda: "Geographic references specify the Sahara's ranking among hot deserts.",
    score: 75,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Humans typically have 46 chromosomes",
    pratyaksha: "Standard karyotype tests show 46 chromosomes in most people.",
    anumana: "Cell division patterns confirm this typical chromosome count.",
    upamana: "Unlike rare genetic conditions that alter the usual chromosome number.",
    shabda: "Genetics literature confirms 46 as the typical, not universal, count.",
    score: 75,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Fruits and vegetables generally contain essential vitamins",
    pratyaksha: "Nutritional analysis confirms vitamin content across most produce.",
    anumana: "Plant biochemistry explains the presence of various vitamins and minerals.",
    upamana: "Similar nutrient patterns are found across most plant-based foods.",
    shabda: "Supported by nutritional science, though levels vary by specific food.",
    score: 75,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Sugar consumption causes hyperactivity in children",
    pratyaksha: "Parental reports of hyperactivity after sugar intake are common.",
    anumana: "A direct causal mechanism has not been consistently demonstrated in trials.",
    upamana: "Similar debates exist around other diet-behavior links.",
    shabda: "Scientific studies on this link remain mixed and inconclusive.",
    score: 50,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Organic food is significantly more nutritious than conventional food",
    pratyaksha: "Some studies show marginally higher nutrient levels in organic produce.",
    anumana: "Farming method differences offer a plausible but unproven mechanism.",
    upamana: "Similar inconclusive debates surround other food-quality comparisons.",
    shabda: "Nutritional research findings on this question remain contested.",
    score: 50,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Full moons influence human sleep patterns",
    pratyaksha: "Some sleep studies report minor disruptions during full moons.",
    anumana: "A lunar-biological mechanism has been proposed but not firmly established.",
    upamana: "Similar contested claims exist about other environmental sleep factors.",
    shabda: "Research results on this topic are inconsistent across studies.",
    score: 50,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Multitasking increases overall work productivity",
    pratyaksha: "Some people report feeling more productive while multitasking.",
    anumana: "Divided attention is shown in some studies to reduce task efficiency.",
    upamana: "Similar mixed findings appear in broader productivity research.",
    shabda: "Psychological studies present conflicting conclusions on this claim.",
    score: 50,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Moderate coffee consumption benefits long-term health",
    pratyaksha: "Several studies associate moderate intake with certain health benefits.",
    anumana: "Caffeine's physiological effects offer plausible explanations both ways.",
    upamana: "Similar debates surround other moderate dietary habits.",
    shabda: "Health research findings remain mixed depending on the study population.",
    score: 50,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Video games increase aggressive behavior in young people",
    pratyaksha: "Some studies report short-term increases in aggressive responses.",
    anumana: "A causal behavioral mechanism remains debated among researchers.",
    upamana: "Similar contested links appear in other media-behavior studies.",
    shabda: "The research community remains divided on this question.",
    score: 50,
    verdict: "PARTIALLY VALID"
},
{
    statement: "The Bermuda Triangle has an unusually high number of unexplained disappearances",
    pratyaksha: "Some historical incident reports cite unexplained losses in the area.",
    anumana: "Statistical analyses dispute whether the rate exceeds normal maritime averages.",
    upamana: "Similar contested claims exist about other maritime regions.",
    shabda: "Investigative sources are split between mystery and statistical normalcy.",
    score: 50,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Cold weather directly causes the common cold",
    pratyaksha: "Cold-season illness rates are commonly observed to rise.",
    anumana: "Viral transmission, not temperature itself, is the more established mechanism.",
    upamana: "Similar seasonal correlations exist for other illnesses.",
    shabda: "Medical sources debate the direct role of cold temperature versus indoor crowding.",
    score: 50,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Listening to classical music increases a baby's intelligence",
    pratyaksha: "Some early studies reported small short-term cognitive effects.",
    anumana: "A lasting causal mechanism has not been reliably replicated.",
    upamana: "Similar contested claims surround other early-childhood interventions.",
    shabda: "Follow-up research has produced mixed and inconclusive results.",
    score: 50,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Left-handed people are generally more creative than right-handed people",
    pratyaksha: "Some studies report a slightly higher rate of creative professions among lefties.",
    anumana: "A definitive neurological explanation for this pattern is still debated.",
    upamana: "Similar contested claims exist about other handedness-linked traits.",
    shabda: "Psychological research on this link remains inconsistent.",
    score: 50,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Humans only use 10 percent of their brains",
    pratyaksha: "Brain imaging shows activity across nearly all regions over a day.",
    anumana: "Neuroscience explains that different regions activate for different tasks, not 10 percent total.",
    upamana: "Unlike the popular myth, no dormant 90 percent has ever been found.",
    shabda: "Rejected by neuroscience, though certain regions are quieter at any single moment.",
    score: 25,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Reading in dim light permanently damages eyesight",
    pratyaksha: "Eye strain is observed after reading in poor lighting.",
    anumana: "Temporary strain, not permanent damage, is the established mechanism.",
    upamana: "Unlike claims of lasting harm, effects reported are short-lived discomfort.",
    shabda: "Ophthalmology sources reject permanent damage but confirm temporary strain.",
    score: 25,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Cracking your knuckles causes arthritis",
    pratyaksha: "Long-term studies show no increased arthritis rate among habitual crackers.",
    anumana: "Gas bubble release in joint fluid explains the sound, not tissue damage.",
    upamana: "Unlike genuine joint-damaging habits, this one shows no such correlation.",
    shabda: "Medical research rejects the arthritis link, though the sound mechanism is confirmed.",
    score: 25,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Goldfish only have a memory span of a few seconds",
    pratyaksha: "Behavioral experiments show goldfish recalling feeding cues for weeks.",
    anumana: "Simple associative learning contradicts a mere seconds-long memory.",
    upamana: "Unlike organisms with genuinely minimal memory capacity.",
    shabda: "Rejected by animal cognition research, though goldfish memory is still limited.",
    score: 25,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Bulls are enraged specifically by the color red",
    pratyaksha: "Bulls react similarly to moving objects of various colors in tests.",
    anumana: "Motion detection, not color, explains the charging behavior.",
    upamana: "Unlike a color-specific trigger, cape movement is the more likely cause.",
    shabda: "Rejected by animal behavior studies, though the red-cape image remains culturally strong.",
    score: 25,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Napoleon Bonaparte was unusually short for his era",
    pratyaksha: "Historical records show his height was close to average for the time.",
    anumana: "Unit conversion confusion between French and English measurement explains the myth.",
    upamana: "Unlike genuinely short historical figures, his height was unremarkable.",
    shabda: "Rejected by historical records, though the myth persists in popular memory.",
    score: 25,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Ostriches bury their heads in the sand to hide from danger",
    pratyaksha: "Field observation shows no such burying behavior when threatened.",
    anumana: "Ostriches lower their heads to tend eggs, which likely inspired the myth.",
    upamana: "Unlike genuine hiding behavior seen in some other animals.",
    shabda: "Rejected by zoological research, aside from the egg-tending origin of the myth.",
    score: 25,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Chameleons change color primarily to camouflage with their surroundings",
    pratyaksha: "Some background matching has been observed in limited situations.",
    anumana: "Temperature regulation and communication are the primary drivers, not camouflage.",
    upamana: "Unlike animals that change color mainly to hide, chameleons signal mood and heat.",
    shabda: "Rejected as the primary explanation by zoological research.",
    score: 25,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Different regions of the tongue are responsible for different tastes exclusively",
    pratyaksha: "Modern taste tests show all taste types detectable across most of the tongue.",
    anumana: "Minor sensitivity variation exists, but not exclusive regional zones.",
    upamana: "Unlike the old tongue-map diagram, all areas can generally detect all tastes.",
    shabda: "Rejected by sensory science as an oversimplified, outdated model.",
    score: 25,
    verdict: "PARTIALLY VALID"
},
{
    statement: "Vikings wore horned helmets in battle",
    pratyaksha: "No archaeological battle helmets with horns have been found from the era.",
    anumana: "Ceremonial rather than combat use may explain any horned headgear that did exist.",
    upamana: "Unlike the popular image, horns would have been impractical in combat.",
    shabda: "Rejected by archaeological and historical sources.",
    score: 25,
    verdict: "PARTIALLY VALID"
},
{
    statement: "The Earth is flat",
    pratyaksha: "Direct observations, including satellite imagery, contradict this claim.",
    anumana: "Scientific reasoning based on gravity and planetary formation rejects it.",
    upamana: "No valid comparison to other observed celestial bodies supports it.",
    shabda: "Rejected by scientific authorities worldwide.",
    score: 0,
    verdict: "INVALID"
},
{
    statement: "The Sun revolves around the Earth",
    pratyaksha: "Astronomy disproves this through direct orbital observation.",
    anumana: "Planetary motion data contradicts a geocentric model.",
    upamana: "Unlike the solar system model confirmed for all other planets.",
    shabda: "Rejected by scientific sources.",
    score: 0,
    verdict: "INVALID"
},
{
    statement: "Humans have four lungs",
    pratyaksha: "Anatomical examination shows only two lungs in humans.",
    anumana: "Respiratory function is fully explained by a two-lung system.",
    upamana: "Unlike other mammals, which also have two lungs.",
    shabda: "Rejected by medical science.",
    score: 0,
    verdict: "INVALID"
},
{
    statement: "Fish can live without water",
    pratyaksha: "Fish are observed to die quickly outside of water.",
    anumana: "They require dissolved oxygen extracted through gills, found only in water.",
    upamana: "Similar to other aquatic animals dependent on water for respiration.",
    shabda: "Rejected by biology.",
    score: 0,
    verdict: "INVALID"
},
{
    statement: "Water burns naturally",
    pratyaksha: "Direct observation shows water extinguishing fire, not fueling it.",
    anumana: "Its chemical composition lacks the properties required for combustion.",
    upamana: "Unlike flammable fuels, which ignite and sustain fire.",
    shabda: "Rejected by chemistry.",
    score: 0,
    verdict: "INVALID"
},
{
    statement: "Birds are mammals",
    pratyaksha: "Birds have feathers and lay eggs, unlike mammals.",
    anumana: "Biological classification systems reject this grouping.",
    upamana: "Birds differ significantly from mammals in reproduction and anatomy.",
    shabda: "Rejected by biology.",
    score: 0,
    verdict: "INVALID"
},
{
    statement: "Humans can breathe in space without a suit",
    pratyaksha: "This is physically impossible due to the vacuum of space.",
    anumana: "No oxygen or pressure is available outside a protective suit.",
    upamana: "Unlike Earth's atmosphere, which supports unaided breathing.",
    shabda: "Rejected by space science.",
    score: 0,
    verdict: "INVALID"
},
{
    statement: "Trees walk from one place to another",
    pratyaksha: "Trees are observed remaining rooted in place.",
    anumana: "Plants lack the muscular and skeletal systems required for locomotion.",
    upamana: "Unlike animals, which are built for movement.",
    shabda: "Rejected by biology.",
    score: 0,
    verdict: "INVALID"
},
{
    statement: "Dinosaurs still live in cities today",
    pratyaksha: "No living dinosaur has ever been documented in modern cities.",
    anumana: "Fossil evidence confirms dinosaurs became extinct millions of years ago.",
    upamana: "Unlike modern animals with confirmed present-day populations.",
    shabda: "Rejected by paleontology.",
    score: 0,
    verdict: "INVALID"
},
{
    statement: "The Moon is made of cheese",
    pratyaksha: "Moon rock samples analyzed directly disprove this claim.",
    anumana: "Geological studies explain lunar composition as rock and dust.",
    upamana: "Unlike cheese, which has an entirely different chemical makeup.",
    shabda: "Rejected by astronomy.",
    score: 0,
    verdict: "INVALID"
}
];
