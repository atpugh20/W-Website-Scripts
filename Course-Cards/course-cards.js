/**
 * This file is located in the siteground files, and imported to the page
 * using a script tag.
 *
 * This data is pulled from the XCD API and cleaned using python.
 * The python project is: https://github.com/atpugh20/course-data-cleanup
 *
 * Make sure to delete any events that are not to be displayed.
 *
 */

/***** DATA FOR CARDS *****/
const courseData = [
    {
        event_name: "Tips and Hints in Surgical Pathology",
        date_string: "November 13 - 15, 2025",
        start_date: "11/13/2025",
        event_location: "Palm Springs, CA",
        conference_website_url: "https://my.uscap.org/app/program/CvvexHs/index.cfm",
        image_url: "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/11-13-2025.png",
    },
    {
        event_name: "Unusual But Non-Esoteric Tumors of the Genitourinary Tract From Which You Cannot Hide",
        date_string: "December 3 - 5, 2025",
        start_date: "12/03/2025",
        event_location: "Palm Springs, CA",
        conference_website_url: "https://my.uscap.org/app/program/7oODLsr/index.cfm",
        image_url: "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/12-03-2025.png",
    },
    {
        event_name: "Practical Neoplastic and Non-Neoplastic Bone Pathology for the Surgical Pathologist",
        date_string: "December 8 - 9, 2025",
        start_date: "12/08/2025",
        event_location: "Palm Springs, CA",
        conference_website_url: "https://my.uscap.org/app/program/2u37LZ8/index.cfm",
        image_url: "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/12-08-2025.png",
    },
    {
        event_name: "Gynecological Pathology â€“ Essential Knowledge for Diagnostic Practice (Presidential Edition) ",
        date_string: "January 21 - 24, 2026",
        start_date: "01/21/2026",
        event_location: "Palm Springs, CA",
        conference_website_url: "https://my.uscap.org/app/program/5Jvvj1h/index.cfm",
        image_url: "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/01-21-2026.png",
    },
    {
        event_name: "Modern Surgical Pathology Through the Expert Eyes of APSS-USCAP: Seventh Edition",
        date_string: "January 27 - 30, 2026",
        start_date: "01/27/2026",
        event_location: "Palm Springs, CA",
        conference_website_url: "https://my.uscap.org/app/program/MFmt73a/index.cfm",
        image_url: "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/01-27-2026.png",
    },
    {
        event_name:
            "Modern Breast Pathology: Practical Updates from the International Society of Breast Pathology (ISBP)",
        date_string: "February 9 - 11, 2026",
        start_date: "02/09/2026",
        event_location: "Palm Springs, CA",
        conference_website_url: "https://my.uscap.org/app/program/fV4irMX/index.cfm",
        image_url: "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/02-09-2026.png",
    },
    {
        event_name:
            "Confronting the Unfamiliar and Unnerving in Dermpath: Practical Tips to Curb Hair Pulling and Nail Biting at the Microscope",
        date_string: "April 14 - 16, 2026",
        start_date: "04/14/2026",
        event_location: "Palm Springs, CA",
        conference_website_url: "https://my.uscap.org/app/program/YzL6xLF/index.cfm",
        image_url: "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/04-14-2026.png",
    },
    {
        event_name:
            "Gynecologic Pathology Masterclass: Contemporary Issues in Light of Shifting Nomenclature, Criteria, and Ancillary Testing",
        date_string: "April 28 - May 1, 2026",
        start_date: "04/28/2026",
        event_location: "Palm Springs, CA",
        conference_website_url: "https://my.uscap.org/app/program/mq9zNVD/index.cfm",
        image_url: "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/04-28-2026.png",
    },
    {
        event_name: "Cytopathology: Paradigms, Pearls and Pitfalls in Practice",
        date_string: "May 6 - 8, 2026",
        start_date: "05/06/2026",
        event_location: "Palm Springs, CA",
        conference_website_url: "https://my.uscap.org/app/program/m7wZFQq/index.cfm",
        image_url: "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/05-06-2026.png",
    },
    {
        event_name:
            "Practical Approaches to Everyday Head and Neck/Endocrine Pathology: Recognizing the Common and Not So Common",
        date_string: "May 14 - 15, 2026",
        start_date: "05/14/2026",
        event_location: "Palm Springs, CA",
        conference_website_url: "https://my.uscap.org/app/program/hOzc8be/index.cfm",
        image_url: "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/05-14-2026.png",
    },
    {
        event_name: "An Inside Peek Into the GU Consult Vault: Problematic Consultation Cases and How We Approach Them",
        date_string: "September 30 - October 2, 2026",
        start_date: "09/30/2026",
        event_location: "Palm Springs, CA",
        conference_website_url: "https://my.uscap.org/app/program/849DjWR/index.cfm",
        image_url: "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/09-30-2026.png",
    },
    {
        event_name:
            "Placental and Gestational Trophoblastic Pathology for General Pathologists: How to Keep Calm and Carry On",
        date_string: "November 2 - 4, 2026",
        start_date: "11/02/2026",
        event_location: "Palm Springs, CA",
        conference_website_url: "https://my.uscap.org/app/program/6HfXxsq/index.cfm",
        image_url: "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/11-02-2026.png",
    },
    {
        event_name:
            "Inside Thyroid Pathology in Three Days: All You Need to Know and Discover from the New Bethesda System to the WHO 5th Edition",
        date_string: "November 16 - 18, 2026",
        start_date: "11/16/2026",
        event_location: "Palm Springs, CA",
        conference_website_url: "https://my.uscap.org/app/program/TxMSiPR/index.cfm",
        image_url: "https://s3.amazonaws.com/xcdshared/uscap/MyUSCAPDashboard/home_page_marketing/11-16-2026.png",
    },
];

/**
 * The purpose of this code is to automatically generate and update the
 * upcoming courses cards on the home page of uscap.org.
 *
 * When using divi, this code will need to be pasted into a code section using
 * the <script> tag. You will also need to grab data.js and put it at the top
 * of the element (above everything here).
 */

/***** FRONTEND ELEMENT CREATION *****/

const upcomingCoursesSection = document.getElementById("upcoming-courses-section");

function getCard(courseObject) {
    /**
     * Takes in a single course, generates the HTML for it
     * as a single card, then returns it as a string.
     */
    return `
        <div class="course-card" id="course-card" onclick="location.href='${courseObject.conference_website_url}'">
            <div class="course-image-frame" id="course-image-frame">
                <img class="course-image" id="course-image" src="${courseObject.image_url}" alt="">
            </div>
            <div class="course-lower" id="course-lower">
                <h3 class="course-title et_pb_module_header" id="course-title">${courseObject.event_name}</h3>
                <strong>
                    <p class="course-location" id="course-location">${courseObject.event_location}</p>
                    <p class="course-date" id="course-date">${courseObject.date_string}</p>
                </strong>
                <a class="learn-more-button et_pb_button et_pb_promo_button" href="${courseObject.conference_website_url}" target="_blank" data-feathr-click-track="true" data-feathr-link-aids="5ba2ae703ef109532f9c7513">Learn More</a>
            </div>
        </div>
    `;
}

function createCards(allCardData, targetElement) {
    /**
     * Uses the course data [allCardData] to generate all cards, then places
     * the cards in the upcoming courses section [targetElement].
     */

    let counter = 0;
    let today = Date.now();
    // let today = new Date("2025", 11, "07"); // Month is 0 indexed (Jan = 0, Dec = 11)
    let divStart = '<div class="card-duo" id="card-duo">';

    let elementHTML = "";

    for (let i = 0; i < allCardData.length; i++) {
        let splitDate = allCardData[i].start_date.split("/");
        let courseDate = new Date(splitDate[2], splitDate[0] - 1, splitDate[1]);

        // If the course has not passed, create a card. Do not create a card if today or in the past
        if (courseDate > today) {
            if (counter % 2 == 0) elementHTML += divStart;
            elementHTML += getCard(allCardData[i]);
            if (counter % 2 != 0) elementHTML += "</div>";
            counter++;
        }

        if (counter === 4) {
            targetElement.innerHTML += elementHTML;
            return;
        }
    }
}

/***** MAIN *****/

window.addEventListener("DOMContentLoaded", () => {
    createCards(courseData, upcomingCoursesSection);
});
