const TEMPLATES = [
  {
    "category": "ENT",
    "title": "URTI / Viral Illness",
    "keywords": "urti viral cough sore throat fever flu covid influenza runny nose",
    "history": "Patient no past medical illness, no known drug allergies.\n\nPresented to the ED with ___ days history of throat pain, body pain, cough, runny nose and fever.\n\nContact with sick contacts / denied contact with sick contacts.\n\nRecent travel / no recent travel.\n\nDenied chest pain, SOB, vomiting, abdominal pain, or other symptoms.",
    "exam": "Conscious, alert and oriented, not in distress.\nGCS 15/15.\n\nThroat: congested.\nCentral uvula.\n\nEars: intact TM.\nNo signs of mastoiditis.\n\nNo cervical lymphadenopathy.\n\nCVS: S1 + S2, no murmur.\nChest: equal air entry bilaterally, no added sounds.\nPA: soft, lax, non-tender.",
    "mdm": "Presentation most consistent with upper respiratory tract infection / viral illness.\n\nDifferential diagnoses considered including viral URTI, influenza, COVID-19, streptococcal pharyngitis, tonsillitis, pneumonia and other respiratory tract infections as appropriate to presentation.\n\nInvestigations reviewed and explained if performed.\n\nNo evidence of severe infection, respiratory distress or other emergency condition requiring admission at present.",
    "discharge": "Feels better.\n\nSafety ER return instructions explained including shortness of breath, chest pain, persistent fever, difficulty swallowing, persistent vomiting, reduced oral intake or any other concerns.\n\nFollow up with ENT as needed."
  },
  {
    "category": "Trauma",
    "title": "Trauma Assessment (Primary + Secondary Survey)",
    "keywords": "trauma primary survey secondary survey head to toe abcde",
    "history": "",
    "exam": "PRIMARY SURVEY (XABCDE)\n\nX - Exsanguinating Hemorrhage:\nNo massive external hemorrhage identified.\n\nA - Airway:\nPatent, speaking normally.\nNo stridor, no obstruction, no C-spine tenderness.\n\nB - Breathing:\nEqual air entry bilaterally.\nNo wheeze/crackles.\nNo tracheal deviation.\nNo chest wall deformity, no flail segment.\nO2 saturation reviewed.\n\nC - Circulation:\nHR and BP reviewed, hemodynamically stable.\nNo external hemorrhage.\nCapillary refill < 2 seconds.\nPeripheral pulses palpable.\n\nD - Disability:\nGCS 15/15 (E4 V5 M6).\nPERRLA.\nMoving all four limbs.\nBlood glucose reviewed.\n\nE - Exposure:\nFully exposed and log-rolled.\nNo obvious deformities, wounds, or bruising on exposure.\nTemperature reviewed, normothermic.\n\nSECONDARY SURVEY (Head to Toe)\n\nHead/Face:\nNo scalp lacerations, swelling, or step-offs.\nPupils equal and reactive.\nNo periorbital/raccoon eyes, no Battle's sign.\nNo nasal/septal deformity.\nNo midface instability.\nNo dental trauma.\n\nNeck:\nNo midline cervical tenderness.\nNo tracheal deviation.\nNo JVD.\nFull range of motion if cleared clinically.\n\nChest:\nNo chest wall tenderness, no crepitus, no flail segment.\nEqual air entry, no added sounds.\nHeart sounds normal, no muffled sounds.\n\nAbdomen:\nSoft, non-distended.\nNo tenderness, guarding, or rigidity.\nNo seatbelt sign or bruising.\nPelvis stable, non-tender to compression.\n\nBack/Spine:\nNo midline spinal tenderness or step-off on log roll.\nNo flank bruising.\n\nExtremities:\nNo deformity, swelling, or open wounds.\nFull range of motion in all limbs.\nNeurovascularly intact distally - pulses, sensation, motor function all preserved.\n\nNeurological:\nAlert and oriented x3.\nNo focal motor or sensory deficit.\nNormal speech.\nNo signs of head injury deterioration.\n\nPerineum/Rectal (if indicated):\nNo blood at urethral meatus.\nRectal exam deferred / performed - findings documented.",
    "mdm": "",
    "discharge": ""
  },
  {
    "category": "GI",
    "title": "Acute Gastroenteritis",
    "keywords": "gastroenteritis diarrhea vomiting dehydration age watery stools",
    "history": "Patient no past medical illness, no known drug allergies.\n\nPresented to the ED with ___ days history of vomiting and diarrhea.\n\nReports ___ episodes of watery, non-bloody diarrhea and ___ episodes of non-bilious, non-bloody vomiting.\n\nAssociated with generalized abdominal discomfort / cramping.\n\nContact with sick contacts / denied contact with sick contacts.\n\nRecent travel / no recent travel.\n\nRecent dietary indiscretion / no recent dietary change.\n\nDenied fever, blood in stool or vomit, urinary symptoms, chest pain, SOB, or other symptoms.",
    "exam": "Conscious, alert and oriented, not in distress.\nGCS 15/15.\n\nHydration status: mucous membranes moist, no signs of dehydration / mild dehydration as documented.\n\nCVS: S1 + S2, no murmur.\nChest: equal air entry bilaterally, no added sounds.\nPA: soft, lax, generalized mild tenderness / non-tender, no guarding, no rigidity, no rebound tenderness, bowel sounds present.",
    "mdm": "Presentation most consistent with acute gastroenteritis.\n\nDifferential diagnoses considered including appendicitis, bowel obstruction, pancreatitis, biliary pathology, colitis, food poisoning, dehydration and electrolyte disturbance as appropriate.\n\nInvestigations and treatment response reviewed if performed.\n\nNo evidence of acute surgical abdomen or severe dehydration requiring admission at present.",
    "discharge": "Feels better.\n\nOral hydration advised.\n\nSafety ER return instructions explained including worsening abdominal pain, persistent vomiting, inability to tolerate fluids, blood in stool or vomit, reduced urine output, fever, dizziness, or any other concerns.\n\nFollow up with primary care if symptoms persist."
  },
  {
    "category": "Cardio",
    "title": "Chest Pain",
    "keywords": "chest pain acs mi angina troponin ecg pe aortic pneumothorax",
    "history": "Patient no past medical illness, no known drug allergies.\n\nPresented to the ED with ___ hours/days history of chest pain.\n\nPain described as ______, located ______, radiating to ______.\n\nAssociated with SOB / diaphoresis / nausea / vomiting / palpitations as documented.\n\nWorse with exertion / breathing / position / palpation / not related to exertion as documented.\n\nNo prior similar episodes / similar to prior episode in ______, worked up with ______.\n\nDenied syncope, hemoptysis, unilateral leg swelling, fever, recent immobilization, or other symptoms.",
    "exam": "Conscious, alert and oriented, not in distress.\nGCS 15/15.\nHemodynamically stable, vital signs reviewed.\n\nCVS: S1 + S2, no murmur, regular rate and rhythm, no JVD, peripheral pulses palpable, no peripheral edema.\nChest: equal air entry bilaterally, no wheeze, no crackles, no added sounds, no chest wall tenderness reproducing pain.\nPA: soft, lax, non-tender.\nExtremities: no calf tenderness or swelling, no asymmetry.",
    "mdm": "Life-threatening causes considered including ACS, PE, aortic pathology, pneumothorax, pneumonia, pericarditis/myocarditis and other causes as appropriate.\n\nECG, troponin and relevant investigations reviewed and explained.\n\nRisk assessment documented as appropriate.\n\nNo current evidence of acute life-threatening cause requiring admission at present based on current assessment.",
    "discharge": "Feels better, no ongoing chest pain at time of discharge.\n\nSafety ER return instructions explained including recurrent/worsening chest pain, SOB, syncope, palpitations, diaphoresis, vomiting, or any other concerns.\n\nFollow up with primary care/cardiology as appropriate."
  },
  {
    "category": "Trauma",
    "title": "Low Back Pain / Sciatica",
    "keywords": "back pain sciatica radiculopathy cauda equina red flags lumbar",
    "history": "Patient no past medical illness, no known drug allergies.\n\nPresented to the ED with ___ days history of lower back pain.\n\nPain radiates to right / left lower limb / no radiation as documented.\n\nAssociated with numbness / tingling / no numbness as documented.\n\nNo history of trauma / mechanism: ______.\n\nDenied fever, weight loss, IV drug use, steroid use, malignancy history, saddle anesthesia, urinary retention or incontinence, fecal incontinence, or progressive leg weakness.",
    "exam": "Conscious, alert and oriented, not in distress.\nGCS 15/15.\n\nBack: lumbar / paraspinal tenderness over ______, range of movement limited by pain, no deformity, no skin changes.\n\nLower limb neuro: power 5/5 bilaterally, sensation intact bilaterally, reflexes symmetrical, straight leg raise positive / negative as documented, gait assessed - normal.\n\nNo saddle anesthesia, no perianal sensory deficit, no urinary retention on bladder scan if performed.",
    "mdm": "Differential diagnoses considered including mechanical low back pain, sciatica/radiculopathy, renal colic, pyelonephritis, vertebral fracture, spinal infection, malignancy, and cauda equina syndrome.\n\nRed flags reviewed and absent unless otherwise documented.\n\nNo current evidence of cauda equina syndrome, spinal infection, fracture, or other emergency pathology requiring admission at present.",
    "discharge": "Feels better.\n\nAnalgesia, activity advice (early mobilization) and follow-up explained.\n\nSafety ER return instructions explained including new or worsening leg weakness, numbness, saddle anesthesia, urinary retention/incontinence, fecal incontinence, fever, worsening severe pain, inability to mobilize, or any other concerns.\n\nFollow up with primary care/physiotherapy as appropriate."
  },
  {
    "category": "Nephro",
    "title": "Renal Colic",
    "keywords": "renal colic ureteric stone flank loin hematuria kidney stone nephrolithiasis",
    "history": "Patient no past medical illness, no known drug allergies.\n\nPresented to the ED with ___ hours/days history of flank pain / loin-to-groin pain.\n\nPain located on the right / left side, radiating to ______.\n\nAssociated with nausea / vomiting / hematuria / urinary symptoms as documented.\n\nPrior history of kidney stones: yes / no - if yes, prior management ______.\n\nDenied fever, rigors, persistent vomiting, anuria, syncope, or other symptoms.",
    "exam": "Conscious, alert and oriented, not in distress / appears uncomfortable, moving restlessly - typical for renal colic.\nGCS 15/15.\nVital signs reviewed, afebrile / febrile as documented.\n\nPA: soft, lax, no guarding, no rigidity, no rebound tenderness, no peritonism.\n\nRenal angle: right / left renal angle tenderness documented / no renal angle tenderness.\n\nCVS: S1 + S2, no murmur.\nChest: equal air entry bilaterally, no added sounds.",
    "mdm": "Differential diagnoses considered including ureteric stone/renal colic, pyelonephritis, UTI, AAA, appendicitis, diverticulitis, and gynecological/testicular pathology if applicable.\n\nUrine results, renal function, inflammatory markers and imaging reviewed if performed.\n\nNo evidence of infected obstructed system, sepsis, renal failure, solitary kidney obstruction, uncontrolled pain or persistent vomiting requiring admission at present.",
    "discharge": "Feels better.\n\nAnalgesia, hydration, urine straining advice, and urology/primary care follow-up explained.\n\nSafety ER return instructions explained including fever, rigors, worsening pain, uncontrolled vomiting, inability to pass urine, reduced urine output, dizziness/syncope, or any other concerns."
  },
  {
    "category": "Neuro",
    "title": "Dizziness / Vertigo",
    "keywords": "dizziness vertigo bppv stroke cerebellar nystagmus posterior circulation",
    "history": "Patient no past medical illness, no known drug allergies.\n\nPresented to the ED with ___ days history of dizziness / vertigo.\n\nDescribed as room-spinning sensation / lightheadedness / imbalance as documented.\n\nTriggered by head movement / position change / standing / not positional as documented.\n\nAssociated with nausea / vomiting as documented.\n\nDenied headache, hearing loss, tinnitus, ear discharge, weakness, numbness, speech difficulty, visual disturbance, chest pain, palpitations, syncope, or loss of consciousness.",
    "exam": "Conscious, alert and oriented, not in respiratory distress.\nGCS 15/15.\n\nPupils equal and reactive to light.\nNo nystagmus.\nNormal extraocular muscle movements.\n\nNegative cerebellar signs.\nNo dysdiadochokinesia.\nNormal finger-to-nose test.\n\nCVS: S1 + S2, no murmur.\nChest: equal air entry bilaterally, no added sounds.\nPA: soft, lax, non-tender.\n\nCNS:\nPower 5/5 in all four limbs.\nSensation intact bilaterally.\nPlantars downgoing bilaterally.\nGait normal / not assessed due to dizziness as documented.\nReflexes symmetrical.",
    "mdm": "Differential diagnoses considered including BPPV/peripheral vertigo, vestibular neuritis, labyrinthitis, dehydration, arrhythmia, anemia, electrolyte disturbance, posterior circulation stroke, and other central causes as appropriate.\n\nPeripheral and central causes considered, posterior circulation stroke considered.\n\nCurrent neurological examination reassuring with no focal neurological deficit identified.\n\nInvestigations and treatment response reviewed if performed.",
    "discharge": "Feels better.\n\nFollow-up with ENT/physiotherapy/primary care as appropriate explained.\n\nSafety ER return instructions explained including weakness, numbness, speech disturbance, visual loss, severe headache, inability to walk, persistent vomiting, syncope, chest pain, palpitations, worsening symptoms, or any other concerns."
  },
  {
    "category": "GI",
    "title": "Abdominal Pain (General)",
    "keywords": "abdominal pain abdomen pancreatitis appendicitis biliary aaa bowel obstruction acs pe",
    "history": "Patient no past medical illness, no known drug allergies.\n\nPresented to the ED with ___ days history of abdominal pain.\n\nPain located in the ______ region, radiating to ______.\n\nAssociated with nausea / vomiting / diarrhea / constipation as documented.\n\nDenied fever, urinary symptoms, chest pain, SOB, syncope, hematemesis, melena, rectal bleeding, or other symptoms.",
    "exam": "Conscious, alert and oriented, not in distress.\nGCS 15/15.\nVital signs reviewed.\n\nCVS: S1 + S2, no murmur.\nChest: equal air entry bilaterally, no added sounds.\n\nPA: soft, lax, no distension, tenderness over ______, no guarding, no rigidity, no rebound tenderness, Murphy's sign negative, RIF non-tender, bowel sounds present.",
    "mdm": "Differential diagnoses considered and discussed including pancreatitis, biliary pathology, appendicitis, bowel obstruction, diverticulitis, renal colic, AAA, mesenteric ischemia, ACS, PE and other intra-abdominal or extra-abdominal causes as appropriate to presentation and location of pain.\n\nInvestigations reviewed and explained.\n\nNo evidence of acute surgical abdomen or other emergency condition requiring admission at present based on current assessment.",
    "discharge": "Feels better.\n\nSafety ER return instructions explained including worsening abdominal pain, persistent vomiting, fever, inability to tolerate oral intake, chest pain, SOB, syncope, blood in stool or vomit, or any other concerns.\n\nFollow up with primary care as appropriate."
  },
  {
    "category": "GI",
    "title": "Epigastric / Upper Abdominal Pain",
    "keywords": "epigastric pain upper abdominal pain dyspepsia gastritis biliary pancreatitis acs mimic",
    "history": "Patient no past medical illness, no known drug allergies.\n\nPresented to the ED with ___ days history of epigastric / upper abdominal pain.\n\nPain described as ______, burning / cramping / sharp / pressure-like as documented.\n\nRelationship to meals: worse with food / better with food / unrelated as documented.\n\nAssociated with nausea / vomiting / reflux / early satiety as documented.\n\nRadiating to back / chest / shoulder / no radiation as documented.\n\nDenied chest pain, SOB, diaphoresis, palpitations, syncope, hematemesis, melena, weight loss, jaundice, or other symptoms.",
    "exam": "Conscious, alert and oriented, not in distress.\nGCS 15/15.\nHemodynamically stable, vital signs reviewed.\n\nCVS: S1 + S2, no murmur, regular rate and rhythm, no JVD.\nChest: equal air entry bilaterally, no added sounds, no chest wall tenderness.\n\nPA: soft, lax, epigastric tenderness / non-tender as documented, no guarding, no rigidity, no rebound tenderness, Murphy's sign negative, bowel sounds present.",
    "mdm": "Cardiac causes (ACS, ACS mimicking dyspepsia) actively considered and excluded - ECG and troponin reviewed if performed.\n\nDifferential diagnoses considered including gastritis, dyspepsia, peptic ulcer disease, biliary colic/cholecystitis, pancreatitis, ACS, aortic pathology and other causes of epigastric/upper abdominal pain as appropriate.\n\nInvestigations reviewed and explained if performed.\n\nNo evidence of acute abdomen, ACS or other emergency condition requiring admission at present.",
    "discharge": "Feels better.\n\nDietary advice, medication plan and follow-up explained.\n\nSafety ER return instructions explained including worsening pain, chest pain, SOB, diaphoresis, persistent vomiting, hematemesis, melena, syncope, fever, or any other concerns.\n\nFollow up with primary care as appropriate."
  },
  {
    "category": "GI",
    "title": "Lower Abdominal Pain / Female",
    "keywords": "lower abdominal pain pelvic pain female ectopic pregnancy ovarian torsion pid appendicitis",
    "history": "Patient no past medical illness, no known drug allergies.\n\nPresented to the ED with ___ days history of lower abdominal / pelvic pain.\n\nPain located right / left / suprapubic / bilateral, radiating to ______.\n\nLMP: ______. Pregnancy possibility reviewed - beta-hCG pending / negative / positive as documented.\n\nAssociated with nausea / vomiting / vaginal bleeding / discharge / urinary symptoms as documented.\n\nDenied syncope, shoulder tip pain, severe unilateral pain, fever, persistent vomiting, heavy vaginal bleeding, or other symptoms.",
    "exam": "Conscious, alert and oriented, not in distress.\nGCS 15/15.\nVital signs reviewed.\n\nCVS: S1 + S2, no murmur.\nChest: equal air entry bilaterally, no added sounds.\n\nPA: soft, lax, lower abdominal / suprapubic / RIF / LIF tenderness over ______ as documented, no guarding, no rigidity, no rebound tenderness, bowel sounds present.\n\nPelvic examination findings documented if performed.",
    "mdm": "Differential diagnoses considered including ectopic pregnancy, ovarian torsion, ruptured ovarian cyst, PID, appendicitis, UTI, renal colic, diverticulitis, primary dysmenorrhea and other gynecological or abdominal causes as appropriate.\n\nPregnancy status and investigations reviewed if performed.\n\nNo evidence of ectopic pregnancy, ovarian torsion or other acute gynecological/surgical emergency requiring admission at present.",
    "discharge": "Feels better.\n\nAnalgesia and follow-up advice explained.\n\nSafety ER return instructions explained including worsening pain, syncope, heavy vaginal bleeding, positive pregnancy test if not already known, fever, persistent vomiting, shoulder tip pain, dizziness, new discharge, or any other concerns.\n\nFollow up with primary care/OB-Gyn as appropriate."
  },
  {
    "category": "Nephro",
    "title": "UTI / Cystitis",
    "keywords": "uti cystitis dysuria frequency urgency urine",
    "history": "Patient no past medical illness, no known drug allergies.\n\nPresented to the ED with ___ days history of dysuria, urinary frequency and urgency.\n\nAssociated with suprapubic discomfort / hematuria as documented.\n\nLMP / pregnancy possibility reviewed if applicable.\n\nDenied fever, flank pain, vomiting, rigors, confusion, vaginal discharge, or other symptoms.",
    "exam": "Conscious, alert and oriented, not in distress.\nGCS 15/15.\nVital signs reviewed, afebrile.\n\nCVS: S1 + S2, no murmur.\nChest: equal air entry bilaterally, no added sounds.\n\nPA: soft, lax, suprapubic tenderness / non-tender as documented, no guarding, no rigidity, no rebound tenderness.\n\nRenal angle: no renal angle tenderness.",
    "mdm": "Presentation most consistent with urinary tract infection / cystitis.\n\nDifferential diagnoses considered including pyelonephritis, renal colic, STI/urethritis, and pelvic pathology if applicable.\n\nUrine results and investigations reviewed and explained.\n\nAntibiotics prescribed as appropriate according to clinical assessment/local guideline.\n\nNo evidence of pyelonephritis, sepsis, or other complication requiring admission at present.",
    "discharge": "Feels better.\n\nHydration, medication compliance, and follow-up if symptoms persist explained.\n\nSafety ER return instructions explained including fever, flank pain, vomiting, worsening pain, rigors, dizziness/syncope, confusion, reduced urine output, or any other concerns.\n\nFollow up with primary care if symptoms persist."
  }
  //   "category": "ENT" | "Chest" | "Cardio" | "GI" | "Neuro" | "Trauma" | "Nephro",
  //   "title": "Diagnosis name",
  //   "keywords": "search terms",
  //   "history": "...",
  //   "exam": "...",
  //   "mdm": "...",
  //   "discharge": "..."
  // }
];
