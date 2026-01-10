/****************************************************************************
 * Script for removing the prices after the course starts. This script will
 * also remove other tabs that are not needed after the course finishes.
 * These tabs can be found in the [removablePages] array in the function
 * RemovePageTabs().
 *
 * Instructions:
 * - All that needs to be changed is the [startDate] const variable located
 * - in the MAIN section. This will ensure the elements are disabled on the
 * - proper date.
 ***************************************************************************/

function GetGmtOffset() {
    /**
     * Ensures that the timezone is always set for daylight savings time
     */
    const now = new Date();
    const dstStart = new Date(`${now.getFullYear()}-03-09`);
    const dstEnd = new Date(`${now.getFullYear()}-11-02`);

    return now < dstStart || now > dstEnd ? "-08:00" : "-07:00";
}

function RemovePageTabs() {
    /**
     * Targets the tabs on the left side of the page, and hides the
     * pages that are specified by the array "removablePages"
     */
    // Titles of the pages we want to remove
    const removablePages = ["Register Now!", "What to Expect at the IM Center", "Travel and Lodging"];
    // Get array of each tab's html for the left of the page
    const menuItems = Array.from(document.getElementsByClassName("menu-item-div"));

    // Filter by tabs that are in array "removablePages"
    const tabsToRemove = menuItems.filter((tab) => {
        for (let page of removablePages) {
            if (tab.innerHTML.includes(page)) {
                return page;
            }
        }
    });

    // Hide all tabs we intend to remove
    for (let tab of tabsToRemove) {
        tab.style.display = "none";
    }
}

/**************************
 *          MAIN
 *************************/

document.addEventListener("DOMContentLoaded", () => {
    const headerPrice = document.getElementById("header-price");
    const priceTableSection = document.getElementById("registration-price-section");
    const registerButton = document.getElementById("register-button");

    const now = new Date();
    const startDate = new Date(`2025-12-03T03:00:00${GetGmtOffset()}`); // year, month, day, pacific time, GMT Offset (-08:00 or -07:00)

    if (now > startDate) {
        if (headerPrice) headerPrice.style.display = "none";
        if (priceTableSection) priceTableSection.style.display = "none";
        if (registerButton) registerButton.style.display = "none";

        RemovePageTabs();
    }
});
