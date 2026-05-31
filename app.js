const scholarships = [

{
    name: "Bharti Airtel Scholarship Program 2026-27",
    category: "Engineering",
    deadline: "2026-06-30",
    apply: "https://www.buddy4study.com/page/bharti-airtel-scholarship",

    eligibility: `
• First-year UG or 5-year integrated program (2026-27)
• Top 50 NIRF-ranked engineering institutes
• Electronics, CS, IT, Data Science, AI, ML, Robotics, IoT, AR/VR, Aerospace etc.
• Indian citizen
• Family income ≤ ₹8.5 lakh
• Preference to girls, PwD, orphan, single-parent and transgender students
`,

    benefits: `
• 100% tuition fees
• Full course support up to 5 years
• Hostel & mess support
• PG accommodation support
• Laptop in first year
• Scholar development opportunities
`,

    documents: `
• Government ID
• Admission proof
• Class 12 marksheet
• JEE/Entrance scorecard
• Income proof
• Bank statements
• Passport photo
• SOP
• Achievement certificates
`,

    howToApply: `
1. Visit Buddy4Study
2. Click Show Interest
3. Login/Register
4. Fill form
5. Upload documents
6. Submit application
`
},

{
    name: "Reliance Foundation Undergraduate Scholarship",
    category: "Undergraduate",
    deadline: "TBA",
    apply: "https://www.scholarships.reliancefoundation.org/UG_Scholarship.aspx",

    eligibility: `
• Indian citizen
• Minimum 60% in Class 12
• First-year UG student
• Family income below ₹15 lakh
• Preference below ₹2.5 lakh income
`,

    benefits: `
• Merit-cum-means scholarship
• Up to 5000 scholars selected
`,

    documents: `
• Personal details
• Academic details
• Achievement records
• Supporting documents
`,

    howToApply: `
1. Apply online
2. Complete application
3. Take aptitude test
4. Selection based on merit and need
`
},

{
    name: "Foundation For Excellence (FFE) Scholarship",
    category: "Engineering / Medical / Law",
    deadline: "TBA",
    apply: "https://ffe.org/scholarships/",

    eligibility: `
• First-year students only
• BE, BTech, Dual Degree MTech
• MBBS
• LLB
• Passed Class 12 after 2022
• Merit-based admission
`,

    benefits: `
• Financial support for professional degree programs
`,

    documents: `
• Class 12 marksheet
• Entrance rank certificate
• Counselling letter
• Income proof
• Aadhaar
• Fee receipts
• Bank details
• Bonafide certificate
`,

    howToApply: `
1. Register on FFE portal
2. Fill application
3. Upload documents
4. Verification process
`
},

{
    name: "Buddy4Study India Foundation Scholarship for Class 11 & 12 Students",
    category: "School",
    deadline: "2026-06-30",
    apply: "https://www.buddy4study.com/page/buddy4study-india-foundation-scholarship",

    eligibility: `
• Class 11 students
• Class 12 students
• Recent Class 12 pass students
• Minimum 60% marks
• Family income ≤ ₹8 lakh
`,

    benefits: `
• ₹6,000 to ₹24,000
• Auto consideration for matching scholarships
`,

    documents: `
• Photograph
• Aadhaar/APAAR
• School ID
• Marksheet
• Income certificate
• Bank details
`,

    howToApply: `
1. Login to Buddy4Study
2. Start application
3. Upload documents
4. Submit
`
},
  {
    name: "Buddy4Study India Foundation Scholarship for Engineering Courses",
    category: "Engineering",
    deadline: "2026-06-30",
    apply: "https://www.buddy4study.com/page/buddy4study-india-foundation-scholarship",

    eligibility: `
• Indian students pursuing B.E. or B.Tech
• First-year or second-year students
• Minimum 60% in Class 12
• Second year students need 60% aggregate in previous year
• Family income ≤ ₹8 lakh
• Recognized institution
`,

    benefits: `
• ₹35,000 to ₹75,000 scholarship
• Auto consideration for matching Buddy4Study scholarships
`,

    documents: `
• Photograph
• Aadhaar/PAN/Voter ID
• Income certificate
• Class 12 marksheet
• First-year result (for second-year students)
• Entrance scorecard
• Bank details
• Admission letter
• Fee receipt
• College ID
`,

    howToApply: `
1. Login/Register on Buddy4Study
2. Open application form
3. Fill details
4. Upload documents
5. Preview
6. Submit
`
},

{
    name: "IDFC FIRST Bank Engineering Scholarship 2025-29",
    category: "Engineering",
    deadline: "2025-09-30",
    apply: "https://www.idfcfirst.bank.in/csr-activities/educational-initiatives/engineering-scholarship-program",

    eligibility: `
• Indian citizen
• First-year B.E./B.Tech student
• Eligible college admission
• Family income ≤ ₹6 lakh
• No other scholarship or fee waiver
`,

    benefits: `
• ₹1,00,000 per year
• Up to 4 years
• Covers actual annual fee or ₹1 lakh
`,

    documents: `
• Birth certificate
• Admission proof
• Fee receipt
• Disability certificate (if applicable)
• Income proof
• Income tax documents
`,

    howToApply: `
1. Apply via Buddy4Study
2. Verify Aadhaar & mobile
3. Receive credentials
4. Complete application
5. Upload documents
6. Submit
`
},

{
    name: "HDFC Bank Parivartan ECSS Programme",
    category: "Undergraduate",
    deadline: "TBA",
    apply: "https://www.parivartanecss.com/",

    eligibility: `
• Indian nationals
• Undergraduate students
• Minimum 55% marks
• Family income ≤ ₹2.5 lakh
• Preference to students facing family/personal crisis
`,

    benefits: `
• General Courses: ₹30,000
• Professional Courses: ₹50,000
`,

    documents: `
• Photograph
• Previous year marksheet
• Identity proof
• Admission proof
• Bank passbook
• Income proof
• Crisis proof (if applicable)
`,

    howToApply: `
1. Login/Register
2. Open ECSS form
3. Fill details
4. Upload documents
5. Submit application
`
},

{
    name: "IET India Scholarship Award 2026",
    category: "Engineering",
    deadline: "2026-06-15",
    apply: "https://scholarships.theietevents.com/#!",

    eligibility: `
• Any year engineering student
• AICTE/UGC approved institution
• No backlogs
• Minimum 60% or CGPA 6.0
• No age limit
• Lateral entry students eligible
`,

    benefits: `
National Winner: ₹6,00,000
1st Runner Up: ₹3,00,000
2nd Runner Up: ₹2,00,000

Regional Winner: ₹1,00,000
Regional Runner Up: ₹75,000

Goodie bag worth ₹2,000
IET Membership
`,

    documents: `
• No documents required during initial application
`,

    howToApply: `
1. Register
2. Login
3. Fill academic details
4. Fill achievements
5. Review
6. Submit
`
}

];
const container = document.getElementById("scholarshipContainer");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const searchInput = document.getElementById("searchInput");
const themeToggle = document.getElementById("themeToggle");

function formatDeadline(deadline) {
    if (deadline === "TBA") return "TBA";

    const date = new Date(deadline);

    return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}

function openModal(title, content) {
    modalTitle.textContent = title;
    modalBody.textContent = content;
    modal.classList.add("show");
}

function renderScholarships(list) {

    container.innerHTML = "";

    list.forEach(scholarship => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="card-header">
                <div class="card-title">
                    ${scholarship.name}
                </div>

                <div class="badges">
                    <span class="badge">
                        ${scholarship.category}
                    </span>

                    <span class="badge deadline">
                        ${formatDeadline(scholarship.deadline)}
                    </span>
                </div>
            </div>

            <div class="card-buttons">

                <button class="info-btn eligibility-btn">
                    Eligibility
                </button>

                <button class="info-btn documents-btn">
                    Documents
                </button>

                <button class="info-btn benefits-btn">
                    Benefits
                </button>

                <button class="info-btn apply-process-btn">
                    How To Apply
                </button>

                <button class="apply-btn">
                    Apply Now ↗
                </button>

            </div>
        `;

        card.querySelector(".eligibility-btn")
            .addEventListener("click", () => {
                openModal(
                    `${scholarship.name} - Eligibility`,
                    scholarship.eligibility
                );
            });

        card.querySelector(".documents-btn")
            .addEventListener("click", () => {
                openModal(
                    `${scholarship.name} - Documents`,
                    scholarship.documents
                );
            });

        card.querySelector(".benefits-btn")
            .addEventListener("click", () => {
                openModal(
                    `${scholarship.name} - Benefits`,
                    scholarship.benefits
                );
            });

        card.querySelector(".apply-process-btn")
            .addEventListener("click", () => {
                openModal(
                    `${scholarship.name} - How To Apply`,
                    scholarship.howToApply
                );
            });

        card.querySelector(".apply-btn")
            .addEventListener("click", () => {
                window.open(
                    scholarship.apply,
                    "_blank"
                );
            });

        container.appendChild(card);
    });
}

renderScholarships(scholarships);

/* SEARCH */

searchInput.addEventListener("input", () => {

    const searchTerm =
        searchInput.value.toLowerCase();

    const filtered =
        scholarships.filter(item =>
            item.name
                .toLowerCase()
                .includes(searchTerm)
        );

    renderScholarships(filtered);
});

/* MODAL */

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

/* DARK MODE */

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    if (isDark) {

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';

    } else {

        localStorage.setItem(
            "theme",
            "light"
        );

        themeToggle.innerHTML =
            '<i class="fas fa-moon"></i>';
    }
});
