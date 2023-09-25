/** ***************************************************************************************************************** */
/** START */
/** ***************************************************************************************************************** */



/** ***************************************************************************************************************** */
/** SERVER */
/** ***************************************************************************************************************** */

var current_url = window.myURL

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var data;

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', current_url + '/create_course_my_academies_webflow', true)
request.onload = function () {
    // Begin accessing JSON data here
    data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        populate_academies()

    }

    else { console.log('error') }
}


// Send request
request.send()





/** ***************************************************************************************************************** */
/** FUNCTION */
/** ***************************************************************************************************************** */


function academy_on_selected() {
     /* ~~ PAGE NAVIGATION ~~ */
    window.location.assign(`creator-my-courses`);
}

/** TEMPLATE */ /* --------------------------------------------------------------------------------------------- */

/* CREATE */
function populate_academies() {

    // TEMPLATE
    var template = `
      <div class="tile_full_img">
        <img src="https://uploads-ssl.webflow.com/64f9c1c078b052489c3a64c7/65046b68ccf2bf578edb1cc3_img_school.png" loading="lazy" alt="">
      </div>
      <div class="tile_content_bottom">
        <h3 class="para_text_medium">{{ school_name }}</h3>
        <div class="sub_info_wrap">
          <div class="icon-info-3 w-embed">
            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- SVG path data goes here -->
              <path d="M4.81006 3.5C4.81006 3.42633 4.83873 3.35568 4.88976 3.30358C4.94079 3.25149 5.01 3.22223 5.08217 3.22223H7.25904C7.33121 3.22223 7.40042 3.25149 7.45145 3.30358C7.50248 3.35568 7.53115 3.42633 7.53115 3.5C7.53115 3.57367 7.50248 3.64433 7.45145 3.69642C7.40042 3.74851 7.33121 3.77778 7.25904 3.77778H5.08217C5.01 3.77778 4.94079 3.74851 4.88976 3.69642C4.83873 3.64433 4.81006 3.57367 4.81006 3.5ZM5.08217 4.33334C5.01 4.33334 4.94079 4.3626 4.88976 4.4147C4.83873 4.46679 4.81006 4.53744 4.81006 4.61111C4.81006 4.68479 4.83873 4.75544 4.88976 4.80753C4.94079 4.85963 5.01 4.88889 5.08217 4.88889H7.25904C7.33121 4.88889 7.40042 4.85963 7.45145 4.80753C7.50248 4.75544 7.53115 4.68479 7.53115 4.61111C7.53115 4.53744 7.50248 4.46679 7.45145 4.4147C7.40042 4.3626 7.33121 4.33334 7.25904 4.33334H5.08217ZM4.81006 7.11111C4.81006 7.03744 4.83873 6.96679 4.88976 6.9147C4.94079 6.8626 5.01 6.83334 5.08217 6.83334H7.25904C7.33121 6.83334 7.40042 6.8626 7.45145 6.9147C7.50248 6.96679 7.53115 7.03744 7.53115 7.11111C7.53115 7.18479 7.50248 7.25544 7.45145 7.30753C7.40042 7.35963 7.33121 7.38889 7.25904 7.38889H5.08217C5.01 7.38889 4.94079 7.35963 4.88976 7.30753C4.83873 7.25544 4.81006 7.18479 4.81006 7.11111ZM5.08217 7.94445C5.01 7.94445 4.94079 7.97371 4.88976 8.02581C4.83873 8.0779 4.81006 8.14855 4.81006 8.22223C4.81006 8.2959 4.83873 8.36655 4.88976 8.41864C4.94079 8.47074 5.01 8.5 5.08217 8.5H7.25904C7.33121 8.5 7.40042 8.47074 7.45145 8.41864C7.50248 8.36655 7.53115 8.2959 7.53115 8.22223C7.53115 8.14855 7.50248 8.0779 7.45145 8.02581C7.40042 7.97371 7.33121 7.94445 7.25904 7.94445H5.08217Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08838 6.83333C2.08838 6.75966 2.11705 6.68901 2.16808 6.63691C2.21911 6.58482 2.28832 6.55556 2.36049 6.55556H3.72103C3.7932 6.55556 3.86241 6.58482 3.91344 6.63691C3.96447 6.68901 3.99314 6.75966 3.99314 6.83333V8.22222C3.99314 8.29589 3.96447 8.36655 3.91344 8.41864C3.86241 8.47073 3.7932 8.5 3.72103 8.5H2.36049C2.28832 8.5 2.21911 8.47073 2.16808 8.41864C2.11705 8.36655 2.08838 8.29589 2.08838 8.22222V6.83333ZM2.6326 7.11111V7.94444H3.44892V7.11111H2.6326Z" fill="currentColor"></path> <path d="M4.18511 3.69639C4.23467 3.644 4.2621 3.57383 4.26148 3.501C4.26086 3.42817 4.23224 3.3585 4.18179 3.30699C4.13134 3.25549 4.06309 3.22628 3.99175 3.22565C3.9204 3.22501 3.85167 3.25301 3.80035 3.30361L2.90429 4.21833L2.55245 3.85917C2.50113 3.80857 2.4324 3.78057 2.36105 3.7812C2.28971 3.78183 2.22146 3.81105 2.17101 3.86255C2.12056 3.91405 2.09194 3.98372 2.09132 4.05656C2.0907 4.12939 2.11813 4.19956 2.16769 4.25194L2.90429 5.00389L4.18511 3.69639Z" fill="currentColor"></path> 
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08844 1C1.79976 1 1.52292 1.11706 1.3188 1.32544C1.11467 1.53381 1 1.81643 1 2.11111V9.88889C1 10.1836 1.11467 10.4662 1.3188 10.6746C1.52292 10.8829 1.79976 11 2.08844 11H7.53061C7.81928 11 8.09613 10.8829 8.30025 10.6746C8.50437 10.4662 8.61905 10.1836 8.61905 9.88889V2.11111C8.61905 1.81643 8.50437 1.53381 8.30025 1.32544C8.09613 1.11706 7.81928 1 7.53061 1H2.08844ZM1.54422 2.11111C1.54422 1.96377 1.60155 1.82246 1.70362 1.71827C1.80568 1.61409 1.9441 1.55556 2.08844 1.55556H7.53061C7.67495 1.55556 7.81337 1.61409 7.91543 1.71827C8.01749 1.82246 8.07483 1.96377 8.07483 2.11111V9.88889C8.07483 10.0362 8.01749 10.1775 7.91543 10.2817C7.81337 10.3859 7.67495 10.4444 7.53061 10.4444H2.08844C1.9441 10.4444 1.80568 10.3859 1.70362 10.2817C1.60155 10.1775 1.54422 10.0362 1.54422 9.88889V2.11111ZM9.16327 3.77778C9.16327 3.55676 9.24927 3.3448 9.40236 3.18852C9.55545 3.03224 9.76309 2.94444 9.97959 2.94444C10.1961 2.94444 10.4037 3.03224 10.5568 3.18852C10.7099 3.3448 10.7959 3.55676 10.7959 3.77778V9.4175L9.97959 10.6675L9.16327 9.4175V3.77778ZM9.97959 3.5C9.90742 3.5 9.83821 3.52927 9.78718 3.58136C9.73615 3.63345 9.70748 3.70411 9.70748 3.77778V4.33333H10.2517V3.77778C10.2517 3.70411 10.223 3.63345 10.172 3.58136C10.121 3.52927 10.0518 3.5 9.97959 3.5ZM9.97959 9.66583L9.70748 9.24917V4.88889H10.2517V9.24917L9.97959 9.66583Z" fill="currentColor"></path>
             </svg>
          </div>
          <div class="para_text_xsmall white_60">{{ students_count }}</div>
        </div>
        <div class="edit_courses_btn">
          <div class="link_text_course-3">EDIT</div>
          <div class="fn-link-arrow-4 w-embed">
              <!-- SVG path data goes here -->
              <svg width="100%" height="100%" viewbox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"> 
              <path d="M1 11.5L6 6.5L1 1.5" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round"></path> </svg>
            </svg>
          </div>
        </div>
      </div>
    `;


    // RENDER
    for (const [index, entryData] of data["school_info"].entries()) {
        let containerDiv;

        // Create Div
        containerDiv = document.createElement('a');
        containerDiv.setAttribute('id', ("school_div" + index));
        containerDiv.setAttribute('class', 'tile_design_btn w-inline-block');
        document.getElementById("academies_flex").appendChild(containerDiv);

        // Get Info
        const info = {
            "school_name": entryData.school_name,
            "students_count": entryData.students_count,
        };

        // Add Class (Add index as first class)
        $("#school_div"+index).attr("class", index + " " + $("#school_div"+index).attr("class"));

        // Add click listener
        containerDiv.addEventListener("click", function () {
            academy_on_selected(this);
        });

        // Set Info
        const renderedHTML = Mustache.render(template, info);
        containerDiv.innerHTML = renderedHTML;
    }

}

// This is a test comment